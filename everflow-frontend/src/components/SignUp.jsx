import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Everflow_logo.png";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            console.log("Sending request...");

            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const text = await response.text();

            let data = {};
            if (text) {
                data = JSON.parse(text);
            }

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            alert("Success!");
            navigate("/");

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#05070a] text-white font-sans selection:bg-purple-500/30">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="w-full max-w-md p-8 space-y-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl">
                <div className="text-center space-y-2">
                    {/* Logo Replacement */}
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                            <span className="text-2xl font-bold">
                                <img src={logo}></img>
                            </span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Create Account
                    </h2>
                    <p className="text-gray-400 text-sm">Join Everflow AI to automate your workflow</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-400 ml-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@company.com"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-400 ml-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+91 00000 00000"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-400 ml-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20 active:scale-[0.98]"
                    >
                        Get Started
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="/login" className="text-purple-400 hover:text-purple-300 font-medium">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );

};
export default SignUp;