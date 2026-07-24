import { Mail, Phone, MapPin, BusFront, GraduationCap } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-8">
      <div className="bg-white rounded-2xl shadow-sm p-8">

        <div className="flex items-center gap-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Student"
            className="w-28 h-28 rounded-full border-4 border-blue-100"
          />

          <div>
            <h1 className="text-3xl font-bold">Krithika</h1>
            <p className="text-gray-500">Computer Science Engineering</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="flex gap-3">
            <Mail className="text-blue-600"/>
            <span>krithika@bgs.edu</span>
          </div>

          <div className="flex gap-3">
            <Phone className="text-blue-600"/>
            <span>+91 9876543210</span>
          </div>

          <div className="flex gap-3">
            <GraduationCap className="text-blue-600"/>
            <span>3rd Semester</span>
          </div>

          <div className="flex gap-3">
            <BusFront className="text-blue-600"/>
            <span>KA-01-AB-1234</span>
          </div>

          <div className="flex gap-3">
            <MapPin className="text-blue-600"/>
            <span>MG Road Pickup Point</span>
          </div>

        </div>

      </div>
    </div>
  );
}