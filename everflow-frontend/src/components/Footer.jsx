import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-24 text-gray-300">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-purple-900/20 blur-3xl opacity-60"></div>

      {/* GLASS CONTAINER */}
      <div className="relative backdrop-blur-xl bg-white/5 border-t border-white/10">

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Everflow AI
            </h3>

            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Predict, detect, and respond to supply chain disruptions
              before they impact your business. Everflow AI helps you
              make smarter operational decisions with real-time insights.
            </p>

            <p className="text-sm text-gray-500">
              Built for businesses that rely on resilient, data-driven
              supply chain operations.
            </p>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-white font-semibold text-xl tracking-wide mb-6">
              Platform
            </h3>

            <ul className="space-y-4 text-base">

              <li>
                <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  Risk Engine
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  Developer Docs
                </a>
              </li>

            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-white font-semibold text-xl tracking-wide mb-6">
              Connect
            </h3>

            <p className="text-gray-400 mb-6 text-base">
              Follow Everflow AI and stay updated on new features,
              insights, and improvements.
            </p>

            <div className="flex flex-wrap gap-4">

                <a href="#" className="px-4 py-2 rounded-full bg-white/10 border border-white/10 
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
                transition-all duration-300">
                    LinkedIn
                </a>

                <a href="#" className="px-4 py-2 rounded-full bg-white/10 border border-white/10 
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
                transition-all duration-300">
                    Twitter
                </a>

                <a href="#" className="px-4 py-2 rounded-full bg-white/10 border border-white/10 
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
                transition-all duration-300">
                    GitHub
                </a>


              <a
                href="#"
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
                hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Globe size={22} />
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10"></div>

        <div className="bg-black/60 backdrop-blur-md text-gray-400 text-sm py-4 text-center">
          © {new Date().getFullYear()} Everflow AI • All Rights Reserved • Terms • Privacy
        </div>

      </div>
    </footer>
  );
};

export default Footer;