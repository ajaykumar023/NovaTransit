import {
  LayoutDashboard,
  MapPinned,
  CalendarDays,
  Bell,
  User,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  ["Dashboard", LayoutDashboard, "/student/dashboard"],
  ["Track Bus", MapPinned, "/student/track"],
  ["Schedule", CalendarDays, "/student/schedule"],
  ["Notifications", Bell, "/student/notifications"],
  ["Profile", User, "/student/profile"],
];

export default function StudentSidebar() {
  return (
    <aside className="w-20 lg:w-72 min-h-screen bg-slate-900 text-white flex flex-col transition-all duration-300">

      {/* Logo */}
      <div className="p-4 lg:p-6 border-b border-slate-700 flex flex-col items-center lg:items-start">

        <h1 className="text-xl lg:text-2xl font-bold">
          🚌 <span className="hidden lg:inline">NovaTransit</span>
        </h1>

        <p className="hidden lg:block text-slate-400 text-sm">
          Student Panel
        </p>

      </div>

      {/* Menu */}
      <nav className="flex-1 p-2 lg:p-4">

        {menu.map(([title, Icon, path]) => (
          <NavLink
            key={title}
            to={path}
            className={({ isActive }) =>
              `flex items-center justify-center lg:justify-start gap-3 px-3 lg:px-4 py-3 rounded-xl mb-2 transition ${
                isActive
                  ? "bg-blue-600 shadow-lg shadow-blue-500/20"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <Icon size={20} />

            <span className="hidden lg:inline">
              {title}
            </span>

          </NavLink>
        ))}

      </nav>

      {/* Logout */}
      <button className="m-2 lg:m-4 flex items-center justify-center lg:justify-start gap-3 px-3 lg:px-4 py-3 rounded-xl hover:bg-red-600 transition">

        <LogOut size={20} />

        <span className="hidden lg:inline">
          Logout
        </span>

      </button>

    </aside>
  );
}