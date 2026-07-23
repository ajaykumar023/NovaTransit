import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

export default function AdminTopbar() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center">

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search buses, drivers..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell size={24} />

          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle
            size={42}
            className="text-blue-600"
          />

          <div>
            <h3 className="font-bold">
              Admin
            </h3>

            <p className="text-gray-500 text-sm">
              Fleet Manager
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}