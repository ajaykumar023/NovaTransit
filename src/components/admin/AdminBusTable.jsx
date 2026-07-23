const buses = [
  {
    bus: "KA01AB1234",
    driver: "Rahul",
    route: "Route 1",
    status: "Active",
  },
  {
    bus: "KA02CD5678",
    driver: "Priya",
    route: "Route 2",
    status: "Idle",
  },
];

export default function AdminBusTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">
        Bus Status
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-3">Bus</th>
            <th>Driver</th>
            <th>Route</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {buses.map((bus) => (
            <tr key={bus.bus} className="border-b h-14">
              <td>{bus.bus}</td>
              <td>{bus.driver}</td>
              <td>{bus.route}</td>
              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {bus.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}