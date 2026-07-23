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
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-xl font-bold mb-6">
        Notifications
      </h2>

      <div className="space-y-5">

        {notifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex gap-4 items-center p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition"
            >
              <div className="p-3 rounded-full bg-slate-200">
                <Icon
                  size={20}
                  className={item.color}
                />
              </div>

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
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