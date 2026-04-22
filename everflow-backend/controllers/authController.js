const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!email && !phone) {
            return res.status(400).json({
                message: "Email or Phone is required"
            });
        }

        let query = [];

        if (email) query.push({ email });
        if (phone) query.push({ phone });

        const userExist = await User.findOne({ $or: query });

        if (userExist) {
            return res.status(400).json({
                message: "User already exists!"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            phone,
            password: hashedPassword,

        });

        await user.save();

        res.status(201).json({
            message: "User created successfully",
            user
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { identifier, password } = req.body;

        // identifier = email OR phone
        const user = await User.findOne({
            $or: [
                { email: identifier },
                { phone: identifier }
            ]
        });

        if (!user) {
            return res.status(400).json({
            success: false,
            message: "User not found"
        });
}

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
    return res.status(400).json({
        success: false,
        message: "Invalid credentials"
    });
}

        const token = jwt.sign(
            { id: user._id, name: user.name, },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            success: true,
            message: "Login successful",
            token,
            name: user.name,
        });

    } catch (error) {
    res.status(500).json({
        success: false,
        message: error.message
    });
}
};
module.exports = { signup, login };