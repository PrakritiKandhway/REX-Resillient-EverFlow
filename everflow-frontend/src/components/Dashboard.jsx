import { useState , useEffect } from "react";
import Sidebar from "./dashboard_components/Sidebar";
import Topbar from "./dashboard_components/Topbar";
import RightPanel from "./dashboard_components/RightPanel";
import StatCard from "./dashboard_components/StatCard";
import InsightsPanel from "./dashboard_components/InsightsPanel";
import SupplierTable from "./dashboard_components/SupplierTable";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());

    useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
    }, []);

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block ">
        <Sidebar />
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-6">
          <Sidebar closeMenu={() => setMenuOpen(false)} />
        </div>
      )}

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col md:ml-64">

        {/* TOPBAR */}
        <Topbar setMenuOpen={setMenuOpen} />

        {/* CONTENT AREA */}
        <div className="flex flex-1">

          {/* CENTER CONTENT */}
          <div className="flex-1 p-6 md:p-8 pt-12 md:pt-20">

            
            {/* MOBILE WELCOME */}
            <div className="md:hidden -mx-6 mb-6 px-6 py-4 bg-white/5 border-b border-white/10 text-center">
            
            <h2 className="text-base text-gray-300">
                Welcome back, <span className="text-white font-semibold">User</span>
            </h2>

            <p className="text-sm mt-1 font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {time.toLocaleTimeString()} • {time.toLocaleDateString()}
            </p>

            </div>

            {/* HEADER */}
            <h1 className="text-2xl font-semibold mb-2">Overview</h1>

            {/* <h2 className="text-sm text-gray-400 mb-6">
              Welcome back, <span className="text-white font-medium">User</span>
            </h2> */}

            {/* 🔥 STAT CARDS */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

              <StatCard
                title="High Risk Suppliers"
                value="12"
                change="+2 this week"
                color="text-red-400"
              />

              <StatCard
                title="Medium Risk"
                value="26"
                change="+5 updated"
                color="text-yellow-400"
              />

              <StatCard
                title="Safe Suppliers"
                value="48"
                change="Stable"
                color="text-green-400"
              />

              <StatCard
                title="Estimated Loss Risk"
                value="₹1.2L"
                change="+18% increase"
                color="text-purple-400"
              />

            </div>

            {/* 🧠 AI INSIGHTS */}
            <InsightsPanel />

            {/* 📦 SUPPLIER TABLE */}
            <SupplierTable />

          </div>

          {/* RIGHT PANEL */}
          <div className="hidden xl:block">
            <RightPanel />
          </div>

        </div>

        {/* MOBILE RIGHT PANEL */}
        <div className="block xl:hidden px-6 pb-6">
          <RightPanel />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;