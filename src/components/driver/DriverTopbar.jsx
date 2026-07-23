import { Bell, Search, UserCircle } from "lucide-react";

export default function DriverTopbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex items-center justify-between rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-sm border border-slate-200 dark:border-slate-800">
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Welcome Back, Driver 👋
        </h1>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {today}
        </p>
      </div>

      {/* Right Section */}
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

        {/* Notification */}
        <button className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <Bell className="text-slate-600 dark:text-slate-300" size={22} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <UserCircle
            className="text-blue-600"
            size={40}
          />

          <div className="hidden md:block">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              John Driver
            </h3>

            <p className="text-sm text-slate-500">
              Bus Driver
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
