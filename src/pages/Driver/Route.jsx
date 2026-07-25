import { Route as RouteIcon, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import DriverSidebar from "@/components/driver/DriverSidebar";
import DriverTopbar from "@/components/driver/DriverTopbar";

export default function RoutePage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-100">
      <DriverSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <DriverTopbar />

        <div className="flex justify-between items-center mt-8">
          <div>
            <h1 className="text-4xl font-bold">Today's Route</h1>
            <p className="text-gray-500 mt-2">
              View your assigned bus route.
            </p>
          </div>

          <button
            onClick={() => navigate("/driver/dashboard")}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mt-8">
          <RouteIcon size={60} className="text-blue-600 mb-6" />

          <h2 className="text-2xl font-bold mb-6">
            Assigned Stops
          </h2>

          <ul className="space-y-4 text-lg">
            <li>🏠 Home Pickup</li>
            <li>📍 MG Road</li>
            <li>📍 Whitefield</li>
            <li>🎓 BGS College</li>
          </ul>
        </div>
      </main>
    </div>
  );
}