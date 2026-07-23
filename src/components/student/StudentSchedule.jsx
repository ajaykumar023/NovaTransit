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
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <div className="flex items-center gap-3 mb-6">
        <CalendarDays className="text-blue-600" />

        <h2 className="text-xl font-bold">
          Today's Schedule
        </h2>
      </div>

      <div className="space-y-4">

        {schedule.map((item) => (
          <div
            key={item.stop}
            className="flex justify-between items-center border-b pb-3"
          >
            <span className="font-medium">
              {item.stop}
            </span>

            <span className="text-blue-600 font-semibold">
              {item.time}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}