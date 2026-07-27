import {
  Bell,
  Search,
  UserCircle,
  Menu,
} from "lucide-react";

export default function DriverTopbar({ setSidebarOpen }) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-4 sm:p-5">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Left */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg border hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Welcome Back, Driver 👋
            </h1>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {today}
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="relative hidden md:block">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Bell */}
          <button className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800">

            <Bell
              className="text-slate-600 dark:text-slate-300"
              size={22}
            />

          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">

            <UserCircle
              className="text-blue-600"
              size={40}
            />

            <div className="hidden md:block">

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Rahul Kumar
              </h3>

              <p className="text-sm text-slate-500">
                Bus Driver
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}