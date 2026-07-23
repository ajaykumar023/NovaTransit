import { Bus, MapPin, Flag } from "lucide-react";

export default function DriverTripProgress() {
  const progress = 68;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Trip Progress
        </h2>

        <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 text-sm font-semibold">
          {progress}%
        </span>
      </div>

      <div className="mt-6">
        <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">
          <Bus className="text-blue-600" />
          <div>
            <p className="text-sm text-slate-500">Current Stop</p>
            <h3 className="font-semibold">MG Road</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-orange-500" />
          <div>
            <p className="text-sm text-slate-500">Next Stop</p>
            <h3 className="font-semibold">Indiranagar</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Flag className="text-green-600" />
          <div>
            <p className="text-sm text-slate-500">Destination</p>
            <h3 className="font-semibold">
              BGS College
            </h3>
          </div>
        </div>

      </div>

    </div>
  );
}