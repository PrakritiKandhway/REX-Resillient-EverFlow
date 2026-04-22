const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//  Middleware
app.use(express.json());
app.use(cors());

//  Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const supplierRoutes=require("./routes/supplierRoutes");
app.use("/api/suppliers",supplierRoutes);

const inventoryRoutes=require("./routes/inventoryRoutes");
app.use("/api/inventory",inventoryRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);
// Default route
app.get("/", (req, res) => {
    res.send("API is running...");
});

//  DB connection
const connectDB = require("./config/db");


const startServer = async () => {
    try {
        await connectDB();

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on port ${process.env.PORT || 5000}`);
        });

    } catch (error) {
        console.log("Error starting server:", error);
    }
};


startServer();