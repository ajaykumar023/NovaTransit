import { BusFront } from "lucide-react";

export default function StudentJourney() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Journey Progress
      </h2>

      <div className="flex items-center justify-between text-lg font-semibold">
        <span>🏠 Home</span>
        <BusFront className="text-blue-600" size={32} />
        <span>🎓 College</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>

      <div className="flex justify-between mt-3 text-gray-600">
        <span>45% Completed</span>
        <span>ETA: 8 Minutes</span>
      </div>

    </div>
  );
}