import { Play, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import DriverSidebar from "@/components/driver/DriverSidebar";
import DriverTopbar from "@/components/driver/DriverTopbar";

export default function StartTrip() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-100">
      <DriverSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <DriverTopbar />

        <div className="flex justify-between items-center mt-8">
          <div>
            <h1 className="text-4xl font-bold">Start Trip</h1>
            <p className="text-gray-500 mt-2">
              Begin today's assigned bus route.
            </p>
          </div>

          <button
            onClick={() => navigate("/driver/dashboard")}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-sm p-10 text-center">
          <Play className="mx-auto text-green-600" size={70} />

          <h2 className="text-3xl font-bold mt-6">
            Ready to Start Trip
          </h2>

          <p className="text-gray-500 mt-3">
            Press the button below when all students have boarded.
          </p>

          <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700">
            Start Journey
          </button>
        </div>
      </main>
    </div>
  );
}