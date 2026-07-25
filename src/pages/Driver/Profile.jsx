import { User, BusFront, Phone, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import DriverSidebar from "@/components/driver/DriverSidebar";
import DriverTopbar from "@/components/driver/DriverTopbar";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-100">
      <DriverSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <DriverTopbar />

        <div className="flex justify-between items-center mt-8">
          <h1 className="text-4xl font-bold">
            Driver Profile
          </h1>

          <button
            onClick={() => navigate("/driver/dashboard")}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mt-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
              <User size={48} className="text-blue-600" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Rahul Kumar
              </h2>

              <p className="text-gray-500">
                Bus Driver
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

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