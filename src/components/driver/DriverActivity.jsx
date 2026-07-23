import {
  Bus,
  MapPin,
  Users,
  Clock,
} from "lucide-react";

const activities = [
  {
    icon: Bus,
    title: "Trip Started",
    time: "08:30 AM",
    color: "text-blue-600",
  },
  {
    icon: MapPin,
    title: "Reached MG Road",
    time: "08:45 AM",
    color: "text-red-500",
  },
  {
    icon: Users,
    title: "3 Students Boarded",
    time: "08:47 AM",
    color: "text-green-600",
  },
  {
    icon: Clock,
    title: "ETA Updated",
    time: "08:50 AM",
    color: "text-orange-500",
  },
];

export default function DriverActivity() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 h-full">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Recent Activity
        </h2>

        <span className="rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 text-xs font-semibold">
          LIVE
        </span>
      </div>

      <div className="space-y-5">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-3">
                <Icon
                  size={20}
                  className={activity.color}
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">
                  {activity.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}