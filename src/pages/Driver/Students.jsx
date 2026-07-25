import { Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import DriverSidebar from "@/components/driver/DriverSidebar";
import DriverTopbar from "@/components/driver/DriverTopbar";

const students = [
  "Ajay",
  "Krithika",
  "Sanjay",
  "Ganesh",
  "Disha",
  "Harshitha",
];

export default function Students() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-100">
      <DriverSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <DriverTopbar />

        <div className="flex justify-between items-center mt-8">
          <h1 className="text-4xl font-bold">
            Students
          </h1>

          <button
            onClick={() => navigate("/driver/dashboard")}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mt-8">
          {students.map((student) => (
            <div
              key={student}
              className="flex items-center gap-4 border-b py-4"
            >
              <Users className="text-blue-600" />
              <span className="font-medium">{student}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}