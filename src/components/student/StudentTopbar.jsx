import {
  Search,
  Bell,
  UserCircle,
  Menu,
} from "lucide-react";

export default function StudentTopbar({ setSidebarOpen }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Mobile Top */}
        <div className="flex items-center gap-3">

          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg border hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>

          {/* Search */}
          <div className="relative flex-1 sm:max-w-md">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              placeholder="Search routes..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center justify-between sm:justify-end gap-5">

          {/* Notification */}
          <button className="relative">

            <Bell className="w-6 h-6" />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              2
            </span>

          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">

            <UserCircle className="text-blue-600 w-10 h-10 sm:w-11 sm:h-11" />

            <div>

              <h3 className="font-bold text-sm sm:text-base">
                Student
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm">
                BGS College
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}