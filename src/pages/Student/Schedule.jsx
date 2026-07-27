import { useState } from "react";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import StudentSidebar from "@/components/student/StudentSidebar";
import StudentTopbar from "@/components/student/StudentTopbar";

const schedule = [
  {
    stop: "🏠 Home Pickup",
    time: "7:45 AM",
    status: "Completed",
  },
  {
    stop: "📍 MG Road",
    time: "7:55 AM",
    status: "Current Stop",
  },
  {
    stop: "🎓 BGS College",
    time: "8:10 AM",
    status: "Upcoming",
  },
  {
    stop: "🚌 Return Bus",
    time: "4:30 PM",
    status: "Upcoming",
  },
];

export default function Schedule() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <StudentSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-4 sm:p-6 lg:p-8 overflow-y-auto">

        {/* Topbar */}
        <StudentTopbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mt-8">

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Today's Schedule
            </h1>

            <p className="text-gray-500 mt-2">
              Bus timings for today.
            </p>
          </div>

          <button
            onClick={() => navigate("/student/dashboard")}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition w-fit"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>

        </div>

        {/* Schedule Card */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">

          {schedule.map((item) => (
            <div
              key={item.stop}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-5 border-b last:border-0"
            >

              <div className="flex items-center gap-4">

                <CalendarDays className="text-blue-600" />

                <div>
                  <h2 className="font-bold text-lg">
                    {item.stop}
                  </h2>

                  <p className="text-gray-500">
                    {item.status}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2 font-bold text-blue-600">
                <Clock size={18} />
                {item.time}
              </div>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
}