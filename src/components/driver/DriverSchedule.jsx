import { Clock, MapPin } from "lucide-react";

const schedule = [
  {
    time: "8:30 AM",
    stop: "College Gate",
  },
  {
    time: "8:45 AM",
    stop: "MG Road",
  },
  {
    time: "9:00 AM",
    stop: "Indiranagar",
  },
  {
    time: "9:20 AM",
    stop: "Electronic City",
  },
];

export default function DriverSchedule() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Today's Schedule
      </h2>

      <div className="space-y-5">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 last:border-none"
          >
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Clock size={18} />
                {item.time}
              </div>

              <div className="mt-2 flex items-center gap-2 text-slate-500">
                <MapPin size={16} />
                {item.stop}
              </div>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Scheduled
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}