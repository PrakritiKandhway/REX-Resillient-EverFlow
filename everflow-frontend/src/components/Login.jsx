import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Everflow_logo.png";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: identifier,
          password: password,
        }),
      });

      const data = await res.json();
      console.log(data);

    if (data.success) {
        localStorage.setItem("token", data.token); // save token
        alert("Login successful");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05070a] text-white font-sans">
      
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-md p-8 space-y-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl">

        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Login
          </h2>
          <p className="text-gray-400 text-sm">
            Access your Everflow account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email or Phone */}
          <div>
            <label className="text-xs text-gray-400">Email or Phone</label>
            <input
              type="text"
              placeholder="Enter email or phone"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90"
          >
            Login
          </button>
        </form>

        {/* Redirect */}
        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-purple-400">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;