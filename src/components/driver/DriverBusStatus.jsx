import {
  Fuel,
  Gauge,
  Users,
  CircleCheck,
} from "lucide-react";

export default function DriverBusStatus() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">

      <h2 className="text-xl font-bold mb-6">
        Bus Status
      </h2>

      <div className="space-y-6">

        {/* Engine */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CircleCheck className="text-green-600" />
            <span>Engine</span>
          </div>

          <span className="font-semibold text-green-600">
            Healthy
          </span>
        </div>

        {/* Fuel */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Fuel className="text-orange-500" />
            <span>Fuel</span>
          </div>

          <span className="font-semibold">
            72%
          </span>
        </div>

        {/* Speed */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Gauge className="text-blue-600" />
            <span>Speed</span>
          </div>

          <span className="font-semibold">
            42 km/h
          </span>
        </div>

        {/* Students Onboard */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Users className="text-purple-600" />
            <span>Students Onboard</span>
          </div>

          <span className="font-semibold text-purple-600">
            32 / 45
          </span>
        </div>

      </div>

    </div>
  );
}