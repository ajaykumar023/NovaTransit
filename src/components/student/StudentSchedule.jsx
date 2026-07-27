import { CalendarDays } from "lucide-react";

const schedule = [
  {
    stop: "Home Pickup",
    time: "7:45 AM",
  },
  {
    stop: "MG Road",
    time: "7:55 AM",
  },
  {
    stop: "College Arrival",
    time: "8:10 AM",
  },
  {
    stop: "Return Bus",
    time: "4:30 PM",
  },
];

export default function StudentSchedule() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

      <div className="flex items-center gap-3 mb-5 sm:mb-6">
        <CalendarDays className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />

        <h2 className="text-lg sm:text-xl font-bold">
          Today's Schedule
        </h2>
      </div>

      <div className="space-y-3 sm:space-y-4">

        {schedule.map((item) => (
          <div
            key={item.stop}
            className="flex items-center justify-between border-b pb-3 gap-4"
          >
            <span className="font-medium text-sm sm:text-base break-words">
              {item.stop}
            </span>

            <span className="text-blue-600 font-semibold text-sm sm:text-base whitespace-nowrap">
              {item.time}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}