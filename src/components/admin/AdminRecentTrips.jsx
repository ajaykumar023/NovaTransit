import { Bus } from "lucide-react";

const trips = [
  {
    bus: "KA01AB1234",
    driver: "Rahul",
    status: "Completed",
  },
  {
    bus: "KA02CD5678",
    driver: "Priya",
    status: "Running",
  },
  {
    bus: "KA03EF9012",
    driver: "Aman",
    status: "Scheduled",
  },
];

export default function AdminRecentTrips() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">
        Recent Trips
      </h2>

      <div className="space-y-5">
        {trips.map((trip) => (
          <div
            key={trip.bus}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <Bus className="text-blue-600" />

              <div>
                <h3 className="font-semibold">{trip.bus}</h3>
                <p className="text-gray-500 text-sm">
                  {trip.driver}
                </p>
              </div>
            </div>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {trip.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}