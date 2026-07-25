import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StudentSidebar from "@/components/student/StudentSidebar";
import StudentTopbar from "@/components/student/StudentTopbar";
import StudentMap from "@/components/student/StudentMap";

export default function TrackBus() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main */}
      <main className="flex-1 p-8 overflow-y-auto">
        <StudentTopbar />

        {/* Header */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Live Bus Tracking
            </h1>

            <p className="text-slate-500 mt-2">
              Track your bus in real-time.
            </p>
          </div>

          <button
            onClick={() => navigate("/student/dashboard")}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>
        </div>

        {/* Map */}
        <div className="mt-8">
          <StudentMap />
        </div>

        {/* Live Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-gray-500">Current Status</h3>
            <h2 className="text-2xl font-bold mt-2 text-green-600">
              🟢 On Route
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-gray-500">ETA</h3>
            <h2 className="text-2xl font-bold mt-2">
              8 Minutes
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-gray-500">Next Stop</h3>
            <h2 className="text-2xl font-bold mt-2">
              MG Road
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}