import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { value: 4000 },
  { value: 3000 },
  { value: 5000 },
  { value: 4780 },
  { value: 5890 },
  { value: 6390 },
  { value: 7490 },
];

const SalesCard = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl h-full min-h-[320px] flex flex-col justify-between">

      <div>
        <p className="text-sm text-gray-400 mb-2">
          Total Sales
        </p>

        <h2 className="text-4xl font-bold text-white">
          ₹12.4L
        </h2>

        <p className="text-green-400 text-sm mt-2">
          +18% this month
        </p>
      </div>

      <div className="h-40 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default SalesCard;