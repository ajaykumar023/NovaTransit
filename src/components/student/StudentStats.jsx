import {
  BusFront,
  Clock3,
  MapPin,
  CircleCheckBig,
} from "lucide-react";

const cards = [
  {
    title: "Assigned Bus",
    value: "KA-01-AB-1234",
    icon: BusFront,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "ETA",
    value: "8 Minutes",
    icon: Clock3,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Next Stop",
    value: "MG Road",
    icon: MapPin,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Status",
    value: "On Time",
    icon: CircleCheckBig,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function StudentStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <p className="text-sm text-gray-500">
                {card.title}
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {card.value}
              </h2>
            </div>

            <div className={`p-4 rounded-xl ${card.color}`}>
              <Icon size={30} />
            </div>
          </div>
        );
      })}
    </div>
  );
}