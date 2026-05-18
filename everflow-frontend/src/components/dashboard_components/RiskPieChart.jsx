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
              outerRadius={100}
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

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default RiskPieChart;