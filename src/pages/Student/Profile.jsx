import {
  Mail,
  Phone,
  MapPin,
  BusFront,
  GraduationCap,
  ArrowLeft,
  UserCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import StudentSidebar from "@/components/student/StudentSidebar";
import StudentTopbar from "@/components/student/StudentTopbar";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <StudentTopbar />

        {/* Header */}
        <div className="flex justify-between items-center mt-8">
          <div>
            <h1 className="text-4xl font-bold">
              Student Profile
            </h1>

            <p className="text-gray-500 mt-2">
              Your personal information.
            </p>
          </div>

          <button
            onClick={() => navigate("/student/dashboard")}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mt-8">

          <div className="flex items-center gap-6">

            <div className="w-28 h-28 rounded-full bg-blue-100 border-4 border-blue-200 flex items-center justify-center">
              <UserCircle className="w-20 h-20 text-blue-600" />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Krithika
              </h1>

              <p className="text-gray-500">
                Artificial Intelligence and Machine Learning
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="space-y-6">

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span>krithika@bgs.edu</span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-600" />
                <span>3rd Semester</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                <span>MG Road Pickup Point</span>
              </div>

            </div>

            <div className="space-y-6">

              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3">
                <BusFront className="text-blue-600" />
                <span>KA-01-AB-1234</span>
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}