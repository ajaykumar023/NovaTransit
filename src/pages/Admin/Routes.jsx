import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Routes() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <AdminTopbar />

        <div className="flex justify-between items-center mt-8">
          <div>
            <h1 className="text-4xl font-bold">Manage Routes</h1>

            <p className="text-gray-500 mt-2">
              Manage all available routes
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-sm p-10">
          <h2 className="text-2xl font-bold mb-4">
            Manage Routes
          </h2>

          <p className="text-gray-600">
            This section allows the administrator to manage route information.
          </p>
        </div>
      </main>
    </div>
  );
}