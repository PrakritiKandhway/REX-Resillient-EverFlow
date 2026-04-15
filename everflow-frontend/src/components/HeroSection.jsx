import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Moon, Menu, X } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import logo from "../assets/Everflow_logo.png";
import Particles from "./Particles";

const HeroSection = ({ theme, setTheme }) => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState("features");

  useEffect(() => {
  const handleScroll = () => {
    // Navbar background
    setScrolled(window.scrollY > 20);

    // Active section highlight
    const sections = ["features", "workflow", "blog"];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 80;
        if (window.scrollY >= top) {
          setActive(id);
        }
      }
    });
  };

  const move = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("mousemove", move);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("mousemove", move);
  };
}, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* PARTICLES */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

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
      <nav className={`fixed w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between 
      ${scrolled ? "bg-white/5 backdrop-blur-xl border-b border-white/10" : ""}`}>

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-12 md:w-14" />
          <span className="font-semibold text-lg">EVERFLOW AI</span>
        </div>

        {/* CENTER MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className={`nav-link ${active === "features" ? "active" : ""}`}>Features</a>
          <a href="#workflow" className={`nav-link ${active === "workflow" ? "active" : ""}`}>Workflow</a>
          <a href="#blog" className={`nav-link ${active === "blog" ? "active" : ""}`}>Blog</a>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-4">

        {/* DESKTOP ONLY */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-300 hover:text-white">Login</button>

          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
            Sign Up
          </button>
        </div>


          {/* MOBILE MENU */}
          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menu && (
      <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-xl p-6 z-40 animate-fadeInUp">

        <div className="flex flex-col gap-5 text-center text-gray-300">

          {/* NAV LINKS */}
          <a href="#features" className="hover:text-blue-400 transition">Features</a>
          <a href="#workflow" className="hover:text-blue-400 transition">Workflow</a>
          <a href="#blog" className="hover:text-blue-400 transition">Blog</a>

          {/* DIVIDER */}
          <div className="border-t border-white/10 my-2"></div>

          {/* AUTH BUTTONS */}
          <button className="w-full text-center">Login</button>

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded text-white">
            Sign Up
          </button>

        </div>

      </div>
    )}

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 pt-32 gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl text-center md:text-left"
        >

          {/* TYPE ANIMATION */}
          <div className="relative mb-6">

          {/* glow */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-purple-400/10 to-blue-500/20 blur-3xl opacity-60"></div>

          <h1 className="relative text-4xl md:text-6xl font-extrabold leading-tight min-h-[80px] md:min-h-[120px]">

            <TypeAnimation
              sequence={[
                "Predict → Detect → Alert → Act",
                2000,
                "Prevent Loss Before It Happens",
                2000,
                "AI That Keeps Supply Chains Flowing",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
              wrapper="span"
              className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            />

          </h1>
        </div>

          <p className="text-gray-400 mb-8">
            REX enables businesses to build resilient supply chains by predicting risks,
            automating responses, and preventing operational losses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20">
              Request Demo
            </button>
          </div>

      
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 md:mt-0"
          >
            <div className="glass p-8 rounded-2xl flex justify-center">
              <img src={logo} className="w-56 md:w-64" />
            </div>
          </motion.div>
        
        </div>
    </section>
  );
};

export default HeroSection;