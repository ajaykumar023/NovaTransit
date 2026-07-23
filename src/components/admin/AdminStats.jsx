import { Bus, Users, UserCog, Route } from "lucide-react";

const stats = [
  {
    title: "Total Buses",
    value: "24",
    icon: Bus,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Students",
    value: "1,268",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Drivers",
    value: "42",
    icon: UserCog,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Routes",
    value: "18",
    icon: Route,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
            </div>

            <div className={`p-4 rounded-xl ${item.color}`}>
              <Icon size={28} />
            </div>
          </div>
        );
      })}
    </div>
  );
}