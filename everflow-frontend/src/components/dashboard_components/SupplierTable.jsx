const suppliers = [
  { name: "ABC Pvt Ltd", location: "Mumbai", reliability: "82%", risk: "High" },
  { name: "XYZ Corp", location: "Delhi", reliability: "91%", risk: "Safe" },
  { name: "FastSupply", location: "Chennai", reliability: "76%", risk: "Medium" },
];

const SupplierTable = () => {
  return (
    <div className="mt-8 p-[1px] rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30">

      <div className="bg-black/80 backdrop-blur-xl rounded-xl p-6">

        <h3 className="text-lg font-semibold mb-4">
          Supplier Overview
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">

            <thead className="text-gray-400 border-b border-white/10">
              <tr>
                <th className="pb-3">Supplier</th>
                <th className="pb-3">Location</th>
                <th className="pb-3">Reliability</th>
                <th className="pb-3">Risk</th>
              </tr>
            </thead>

            <tbody className="text-gray-300">

              {suppliers.map((s, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">

                  <td className="py-3">{s.name}</td>
                  <td>{s.location}</td>
                  <td>{s.reliability}</td>

                  <td>
                    <span
                      className={
                        s.risk === "High"
                          ? "text-red-400"
                          : s.risk === "Medium"
                          ? "text-yellow-400"
                          : "text-green-400"
                      }
                    >
                      {s.risk}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default SupplierTable;