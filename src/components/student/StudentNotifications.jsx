import {
  Bell,
  Clock3,
  TriangleAlert,
} from "lucide-react";

const notifications = [
  {
    title: "Bus has started",
    time: "7:35 AM",
    icon: Bell,
    color: "text-blue-600",
  },
  {
    title: "ETA Updated (8 mins)",
    time: "7:42 AM",
    icon: Clock3,
    color: "text-green-600",
  },
  {
    title: "Heavy Traffic Ahead",
    time: "7:45 AM",
    icon: TriangleAlert,
    color: "text-orange-500",
  },
];

export default function StudentNotifications() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

      <h2 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">
        Notifications
      </h2>

      <div className="space-y-4 sm:space-y-5">

        {notifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition"
            >

              <div className="flex-shrink-0 p-2 sm:p-3 rounded-full bg-slate-200">

                <Icon
                  className={item.color}
                  size={18}
                />

              </div>

              <div className="min-w-0">

                <h3 className="font-semibold text-sm sm:text-base break-words">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  {item.time}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}