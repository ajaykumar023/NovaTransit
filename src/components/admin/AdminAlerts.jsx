import { TriangleAlert } from "lucide-react";

const alerts = [
  "Driver Rahul checked in",
  "Bus KA01AB1234 delayed",
  "Route 7 under maintenance",
  "Bus 12 completed trip",
];

export default function AdminAlerts() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <div className="flex items-center gap-3 mb-6">
        <TriangleAlert className="text-red-500" />
        <h2 className="text-xl font-bold">
          Alerts
        </h2>
      </div>

      <div className="space-y-4">

        {alerts.map((alert) => (
          <div
            key={alert}
            className="p-4 rounded-xl bg-slate-100"
          >
            {alert}
          </div>
        ))}

      </div>

    </div>
  );
}