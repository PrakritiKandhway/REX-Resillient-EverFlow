const RightPanel = () => {
  return (
    <div className="w-full xl:w-80 xl:sticky xl:top-24 h-fit border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl">

      {/* ALERTS */}
      <h3 className="text-lg font-semibold mb-4">Alerts</h3>

      <div className="space-y-4 mb-8 text-sm text-gray-400">
        <p>⚠️ High disruption risk detected</p>
        <p>⚠️ Supplier delay expected</p>
        <p>⚠️ Logistics issues identified</p>
      </div>

      {/* ACTIVITY */}
      <h3 className="text-lg font-semibold mb-4">Activity</h3>

      <div className="space-y-3 text-sm text-gray-400">
        <p>Supplier added</p>
        <p>Risk updated</p>
        <p>New alert triggered</p>
      </div>

    </div>
  );
};

export default RightPanel;