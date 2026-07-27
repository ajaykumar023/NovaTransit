import {
  Bell,
  Search,
  UserCircle,
  Menu,
} from "lucide-react";

export default function AdminTopbar({ setSidebarOpen }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Left */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg border hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>

          <div className="relative flex-1 sm:w-96">

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

        </div>

        {/* Right */}
        <div className="flex items-center justify-between sm:justify-end gap-5">

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

            <div className="hidden sm:block">

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

    </div>
  );
}