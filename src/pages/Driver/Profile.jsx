import { useState } from "react";
import {
  User,
  BusFront,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import DriverSidebar from "@/components/driver/DriverSidebar";
import DriverTopbar from "@/components/driver/DriverTopbar";

export default function Profile() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <DriverSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 lg:ml-72 p-4 sm:p-6 lg:p-8 overflow-y-auto">

        <DriverTopbar
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mt-8">

          <h1 className="text-3xl sm:text-4xl font-bold">
            Driver Profile
          </h1>

          <button
            onClick={() => navigate("/driver/dashboard")}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 w-fit"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mt-8">

          <div className="flex flex-col sm:flex-row items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
              <User
                size={48}
                className="text-blue-600"
              />
            </div>

            <div className="text-center sm:text-left">

              <h2 className="text-3xl font-bold">
                Rahul Kumar
              </h2>

              <p className="text-gray-500">
                Bus Driver
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            <div className="flex gap-3">
              <Phone className="text-blue-600" />
              <span>+91 9876543210</span>
            </div>

            <div className="flex gap-3">
              <Mail className="text-blue-600" />
              <span>rahul@novatransit.com</span>
            </div>

            <div className="flex gap-3">
              <BusFront className="text-blue-600" />
              <span>KA-01-AB-1234</span>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}