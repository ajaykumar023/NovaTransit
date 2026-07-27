import { useState } from "react";
import { Play, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import DriverSidebar from "@/components/driver/DriverSidebar";
import DriverTopbar from "@/components/driver/DriverTopbar";

export default function StartTrip() {
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
              Start Trip
            </h1>

            <p className="text-gray-500 mt-2">
              Begin today's assigned bus route.
            </p>
          </div>

          <button
            onClick={() => navigate("/driver/dashboard")}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 w-fit"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>

        </div>

        {/* Card */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-8 sm:p-10 text-center">

          <Play
            className="mx-auto text-green-600"
            size={70}
          />

          <h2 className="text-2xl sm:text-3xl font-bold mt-6">
            Ready to Start Trip
          </h2>

          <p className="text-gray-500 mt-3">
            Press the button below when all students have boarded.
          </p>

          <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition">
            Start Journey
          </button>

        </div>

      </main>

    </div>
  );
}