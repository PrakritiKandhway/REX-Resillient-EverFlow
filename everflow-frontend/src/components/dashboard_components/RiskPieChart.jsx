import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "High Risk", value: 12 },
  { name: "Medium Risk", value: 26 },
  { name: "Safe", value: 48 },
];

const COLORS = ["#ef4444", "#eab308", "#22c55e"];

const RiskPieChart = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl min-h-[350px]">

      <h2 className="text-xl font-semibold mb-6">
        Supplier Risk Distribution
      </h2>

      <div className="h-[280px]">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={35}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-white text-lg font-bold"
            >
            86
            </text>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>
      {/* LEGENDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <p className="text-sm text-gray-300">High Risk</p>
            </div>

            <h3 className="text-2xl font-bold text-white">
            12
            </h3>

            <p className="text-xs text-red-400 mt-1">
            Critical suppliers
            </p>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <p className="text-sm text-gray-300">Medium Risk</p>
            </div>

            <h3 className="text-2xl font-bold text-white">
            26
            </h3>

            <p className="text-xs text-yellow-400 mt-1">
            Needs monitoring
            </p>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-sm text-gray-300">Safe Suppliers</p>
            </div>

            <h3 className="text-2xl font-bold text-white">
            48
            </h3>

            <p className="text-xs text-green-400 mt-1">
            Stable supply chain
            </p>
        </div>

        </div>

    </div>
  );
};

export default RiskPieChart;