import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Moon, Menu, X } from "lucide-react";
import logo from "../assets/Everflow_logo.png";

const HeroSection = ({ theme, setTheme }) => {
  const [menu, setMenu] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // Cursor glow
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen hero-bg overflow-hidden">

      {/* CURSOR GLOW */}
      <div
        className="fixed w-[400px] h-[400px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          left: cursor.x - 200,
          top: cursor.y - 200,
          background: "radial-gradient(circle, #2563eb, #7c3aed)",
        }}
      />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5">

        {/* Just for testing Tailwind */}
        {/* <div className="bg-red-500 text-white p-5">
        Tailwind Test
        </div> */}

        <div className="flex items-center gap-3">
          <img src={logo} className="w-10" />
          <span className="font-bold text-lg">EVERFLOW AI</span>
        </div>

        <div className="flex items-center gap-4">

          {/* THEME */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full glass"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="md:hidden"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 pt-20 gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Predict. Prevent.
            </span>
            <br />
            Power Supply Chains
          </h1>

          <p className="text-gray-400 mb-8">
            REX leverages AI to predict disruptions before they occur,
            enabling resilient and uninterrupted supply chain operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 glass">
              See Demo
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30 rounded-full"></div>

          <div className="glass p-8 rounded-2xl shadow-2xl">
            <img src={logo} className="w-64 float" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;