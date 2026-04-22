import { Menu, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/Everflow_logo.png";

const Topbar = ({ setMenuOpen }) => {
  const [time, setTime] = useState(new Date());
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 py-4 md:py-5 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Menu />
        </button>

        {/* LEFT */}
        <div className="flex items-center gap-2">

        {/* MOBILE ONLY LOGO */}
        <div className="flex items-center gap-2 md:hidden">
            <img src={logo} className="w-8 object-contain" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            EVERFLOW AI
            </span>
        </div>

        </div>
      </div>

      {/* CENTER (WELCOME + TIME) */}
      <div className="hidden md:flex flex-col items-center leading-tight">
        <p className="text-sm text-gray-400">
            Welcome back, <span className="text-white font-medium">User</span>
        </p>

        <p className="text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {time.toLocaleTimeString()} • {time.toLocaleDateString()}
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        {/* LOGOUT (DESKTOP) */}
        <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-red-500/20 transition">
            <LogOut size={18} />
            <span className="text-sm">Logout</span>
        </button>

        {/* PROFILE */}
        <div className="relative">
          <div
            onClick={() => setOpenProfile(!openProfile)}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition"
          >
            A
          </div>

          {/* DROPDOWN */}
          {openProfile && (
            <div className="absolute right-0 mt-2 w-40 bg-black border border-white/10 rounded-lg p-2 text-sm z-50">
              <p className="px-3 py-2 hover:bg-white/10 rounded cursor-pointer">
                Profile
              </p>
              <p className="px-3 py-2 hover:bg-white/10 rounded cursor-pointer">
                Logout
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Topbar;