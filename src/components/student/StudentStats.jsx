import {
  BusFront,
  Clock3,
  MapPin,
  CircleCheckBig,
} from "lucide-react";

const cards = [
  {
    title: "Assigned Bus",
    value: "KA01AB1234",
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center hover:shadow-lg transition"
          >
            <div>
              <p className="text-gray-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-2xl font-bold mt-2">
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