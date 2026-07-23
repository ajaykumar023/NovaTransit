import { Search, Bell, UserCircle } from "lucide-react";

export default function StudentTopbar() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center">

      <div className="relative w-96">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          placeholder="Search routes..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="flex items-center gap-6">

        <button className="relative">
          <Bell size={24} />

          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            2
          </span>
        </button>

        <div className="flex items-center gap-3">
          <UserCircle className="text-blue-600" size={42} />

          <div>
            <h3 className="font-bold">Student</h3>
            <p className="text-gray-500 text-sm">
              BGS College
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}