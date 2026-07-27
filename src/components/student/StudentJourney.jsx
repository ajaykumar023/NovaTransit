import { BusFront } from "lucide-react";

export default function StudentJourney() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

      <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
        Journey Progress
      </h2>

      <div className="flex items-center justify-between text-sm sm:text-lg font-semibold gap-2">

        <span>🏠 Home</span>

        <BusFront
          className="text-blue-600 w-7 h-7 sm:w-8 sm:h-8"
        />

        <span>🎓 College</span>

      </div>

      <div className="w-full h-3 sm:h-4 bg-gray-200 rounded-full mt-6">

        <div
          className="bg-blue-600 h-3 sm:h-4 rounded-full"
          style={{ width: "45%" }}
        />

      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-4 text-sm sm:text-base text-gray-600 gap-2">

        <span>45% Completed</span>

        <span>ETA: 8 Minutes</span>

      </div>

    </div>
  );
}