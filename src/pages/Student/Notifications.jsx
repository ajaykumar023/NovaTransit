import { useState } from "react";
import {
  Bell,
  Clock3,
  TriangleAlert,
  BusFront,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import StudentSidebar from "@/components/student/StudentSidebar";
import StudentTopbar from "@/components/student/StudentTopbar";

const notifications = [
  {
    title: "Bus has started",
    time: "7:35 AM",
    icon: Bell,
    color: "text-blue-600 bg-blue-100",
  },
  {
    title: "ETA Updated (8 mins)",
    time: "7:42 AM",
    icon: Clock3,
    color: "text-green-600 bg-green-100",
  },
  {
    title: "Heavy Traffic Ahead",
    time: "7:45 AM",
    icon: TriangleAlert,
    color: "text-orange-600 bg-orange-100",
  },
  {
    title: "Bus reached MG Road",
    time: "7:55 AM",
    icon: BusFront,
    color: "text-purple-600 bg-purple-100",
  },
];

export default function Notifications() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <StudentSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 lg:ml-72 p-4 sm:p-6 lg:p-8 overflow-y-auto">

        <StudentTopbar
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mt-8">

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Notifications
            </h1>

            <p className="text-gray-500 mt-2">
              Stay updated with your bus journey.
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

        <div className="mt-8 space-y-5">

          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between hover:shadow-lg transition"
              >

                <div className="flex items-center gap-5">

                  <div className={`p-4 rounded-full ${item.color}`}>
                    <Icon size={24} />
                  </div>

                  <div>
                    <h2 className="font-bold text-lg">
                      {item.title}
                    </h2>

                    <p className="text-gray-500">
                      {item.time}
                    </p>
                  </div>

                </div>

                <span className="text-sm text-green-600 font-semibold">
                  New
                </span>

              </div>
            );
          })}

        </div>

      </main>

    </div>
  );
}