import {
  Phone,
  BusFront,
  TriangleAlert,
  Building2,
} from "lucide-react";

const actions = [
  {
    title: "Call Driver",
    icon: Phone,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Track Bus",
    icon: BusFront,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Emergency",
    icon: TriangleAlert,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Transport Office",
    icon: Building2,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function StudentQuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

      <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex flex-col items-center justify-center rounded-2xl border p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`p-3 sm:p-4 rounded-full ${action.color}`}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              <span className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-center">
                {action.title}
              </span>
            </button>
          );
        })}

      </div>

    </div>
  );
}