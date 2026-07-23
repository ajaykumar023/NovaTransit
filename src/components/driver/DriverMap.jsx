import { MapPin, Navigation, Bus } from "lucide-react";

export default function DriverMap() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Live Bus Tracking
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Current bus location and route
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          Live
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-[420px] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">

        <div className="rounded-full bg-blue-600 p-6 shadow-xl">
          <Bus className="text-white" size={40} />
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Google Maps
        </h3>

        <p className="mt-2 text-slate-500">
          Live GPS Tracking Coming Soon
        </p>

        <div className="mt-8 flex gap-10">

          <div className="flex items-center gap-2">
            <Navigation className="text-blue-600" />
            <span>12.9716° N</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="text-red-500" />
            <span>MG Road</span>
          </div>

        </div>

      </div>
    </div>
  );
}