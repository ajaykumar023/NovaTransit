import { Bus, Users, MapPin, Clock } from "lucide-react";

const stats = [
  {
    title: "Bus Number",
    value: "KA-01-AB-1234",
    icon: Bus,
  },
  {
    title: "Students Onboard",
    value: "38",
    icon: Users,
  },
  {
    title: "Current Stop",
    value: "MG Road",
    icon: MapPin,
  },
  {
    title: "Next Stop ETA",
    value: "8 mins",
    icon: Clock,
  },
];

export default function DriverStats() {
  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{stat.title}</p>
                <h2 className="mt-2 text-2xl font-bold">{stat.value}</h2>
              </div>

              <div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-3">
                <Icon className="text-blue-600" size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}