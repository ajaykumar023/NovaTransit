import { BarChart3 } from "lucide-react";

export default function AdminAnalytics() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">

      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="text-blue-600" />
        <h2 className="text-xl font-bold">
          Fleet Analytics
        </h2>
      </div>

      <div className="space-y-6">

        <div>
          <div className="flex justify-between">
            <span>Bus Utilization</span>
            <span>85%</span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full mt-2">
            <div className="h-3 bg-blue-600 rounded-full w-[85%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>Trips Completed</span>
            <span>72%</span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full mt-2">
            <div className="h-3 bg-green-500 rounded-full w-[72%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>Student Attendance</span>
            <span>91%</span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full mt-2">
            <div className="h-3 bg-purple-500 rounded-full w-[91%]" />
          </div>
        </div>

      </div>

    </div>
  );
}