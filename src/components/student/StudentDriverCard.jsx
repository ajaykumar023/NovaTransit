import { User, Phone, Bus } from "lucide-react";

export default function StudentDriverCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Driver Details</h2>

      <div className="flex items-center gap-5">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Driver"
          className="w-20 h-20 rounded-full border-4 border-blue-100"
        />

        <div>
          <h3 className="text-xl font-semibold">Rahul Kumar</h3>
          <p className="text-gray-500">Bus Driver</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="text-blue-600" />
          <span>+91 98765 43210</span>
        </div>

        <div className="flex items-center gap-3">
          <Bus className="text-blue-600" />
          <span>Bus No: KA-01-AB-1234</span>
        </div>

        <div className="flex items-center gap-3">
          <User className="text-blue-600" />
          <span>Experience: 8 Years</span>
        </div>
      </div>
    </div>
  );
}