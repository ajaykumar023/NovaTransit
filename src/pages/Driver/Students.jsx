import { useState } from "react";
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

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <DriverSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-4 sm:p-6 lg:p-8 overflow-y-auto">

        {/* Topbar */}
        <DriverTopbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mt-8">

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Students
            </h1>

            <p className="text-gray-500 mt-2">
              Students assigned to today's route.
            </p>
          </div>

          <button
            onClick={() => navigate("/driver/dashboard")}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition w-fit"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>

        </div>

        {/* Students List */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mt-8">

          {students.map((student) => (
            <div
              key={student}
              className="flex items-center gap-4 border-b py-4 last:border-0"
            >
              <Users className="text-blue-600" />

              <span className="font-medium text-base sm:text-lg">
                {student}
              </span>
            </div>
          ))}

        </div>

      </main>

    </div>
  );
}