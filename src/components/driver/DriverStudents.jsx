import { CheckCircle2, Clock3, XCircle } from "lucide-react";

const students = [
  {
    name: "Rahul",
    status: "boarded",
  },
  {
    name: "Priya",
    status: "boarded",
  },
  {
    name: "Ajay",
    status: "waiting",
  },
  {
    name: "Sneha",
    status: "boarded",
  },
  {
    name: "Arjun",
    status: "absent",
  },
];

export default function DriverStudents() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Student Boarding
      </h2>

      <div className="space-y-4">

        {students.map((student) => (
          <div
            key={student.name}
            className="flex items-center justify-between"
          >
            <span className="font-medium">
              {student.name}
            </span>

            {student.status === "boarded" && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 size={18} />
                Boarded
              </div>
            )}

            {student.status === "waiting" && (
              <div className="flex items-center gap-2 text-yellow-600">
                <Clock3 size={18} />
                Waiting
              </div>
            )}

            {student.status === "absent" && (
              <div className="flex items-center gap-2 text-red-600">
                <XCircle size={18} />
                Absent
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}