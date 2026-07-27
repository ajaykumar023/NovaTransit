import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ManageDrivers() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 lg:ml-72 p-4 sm:p-6 lg:p-8 overflow-y-auto">

        <AdminTopbar
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mt-8">

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Manage Drivers
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all registered drivers
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 w-fit"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>

        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-sm p-8">

          <h2 className="text-2xl font-bold mb-4">
            Manage Drivers
          </h2>

          <p className="text-gray-600">
            This section allows the administrator to manage all registered drivers.
          </p>

        </div>

      </main>

    </div>
  );
}