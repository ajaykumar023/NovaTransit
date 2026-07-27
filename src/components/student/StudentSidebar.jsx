import {
  LayoutDashboard,
  MapPinned,
  CalendarDays,
  Bell,
  User,
  LogOut,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  ["Dashboard", LayoutDashboard, "/student/dashboard"],
  ["Track Bus", MapPinned, "/student/track"],
  ["Schedule", CalendarDays, "/student/schedule"],
  ["Notifications", Bell, "/student/notifications"],
  ["Profile", User, "/student/profile"],
];

export default function StudentSidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-[1000]
          h-screen w-72
          bg-slate-900 text-white
          flex flex-col
          transform transition-transform duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold">
              🚌 NovaTransit
            </h1>

            <p className="text-slate-400 text-sm">
              Student Panel
            </p>
          </div>

          {/* Close Button (Mobile Only) */}
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>

        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">

          {menu.map(([title, Icon, path]) => (
            <NavLink
              key={title}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition ${
                  isActive
                    ? "bg-blue-600 shadow-lg shadow-blue-500/20"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{title}</span>
            </NavLink>
          ))}

        </nav>

        {/* Logout */}
        <button className="m-4 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-600 transition">
          <LogOut size={20} />
          <span>Logout</span>
        </button>

      </aside>
    </>
  );
}