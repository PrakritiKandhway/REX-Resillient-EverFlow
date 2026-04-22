const insights = [
  {
    alert: "High flood risk detected in Mumbai",
    action: "Switch supplier or increase stock",
  },
  {
    alert: "Logistics delay expected (2–3 days)",
    action: "Pre-stock inventory",
  },
  {
    alert: "Supplier reliability dropping",
    action: "Diversify sourcing",
  },
];

const InsightsPanel = () => {
  return (
    <div className="mt-8 p-[1px] rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30">

      <div className="bg-black/80 backdrop-blur-xl rounded-xl p-6">

        <h3 className="text-lg font-semibold mb-4">
          AI Insights
        </h3>

        <div className="space-y-4">

          {insights.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              <p className="text-sm text-red-400 mb-1">
                ⚠️ {item.alert}
              </p>

              <p className="text-xs text-green-400">
                💡 {item.action}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default InsightsPanel;