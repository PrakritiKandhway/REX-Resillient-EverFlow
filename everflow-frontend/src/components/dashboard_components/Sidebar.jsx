import {
  LayoutDashboard,
  Boxes,
  Brain,
  AlertTriangle,
  LineChart,
  Settings,
  X
} from "lucide-react";
import logo from "../../assets/Everflow_logo.png";

const Sidebar = ({ closeMenu }) => {
  const menu = [
    { name: "Overview", icon: LayoutDashboard },
    { name: "Suppliers", icon: Boxes },
    { name: "Risk Insights", icon: Brain },
    { name: "Alerts", icon: AlertTriangle },
    { name: "Analytics", icon: LineChart },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">

      {/* MOBILE CLOSE */}
      {closeMenu && (
        <button onClick={closeMenu} className="mb-6 md:hidden">
          <X />
        </button>
      )}

    
        {/* LOGO */}
        <div className="flex items-center gap-2 mb-10">
        <img src={logo} className="w-10" />
        <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            EVERFLOW AI
        </span>
        </div>

      {/* MENU */}
      <div className="space-y-4">
        {menu.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
            //   className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition cursor-pointer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg 
                hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 
                hover:text-white transition cursor-pointer"
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;