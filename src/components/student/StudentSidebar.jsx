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
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">🚌 NovaTransit</h1>
        <p className="text-slate-400 text-sm">Student Panel</p>
      </div>

      <nav className="flex-1 p-4">
        {menu.map(([title, Icon, path]) => (
          <NavLink
            key={title}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 ${
                isActive
                  ? "bg-blue-600 shadow-lg shadow-blue-500/20"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <Icon size={20} />
            {title}
          </NavLink>
        ))}
      </nav>

      <button className="m-4 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-600">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}