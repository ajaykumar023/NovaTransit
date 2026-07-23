import {
  LayoutDashboard,
  Bus,
  Users,
  UserCog,
  Route,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  ["Dashboard", LayoutDashboard, "/admin/dashboard"],
  ["Manage Buses", Bus, "/admin/buses"],
  ["Manage Drivers", UserCog, "/admin/drivers"],
  ["Manage Students", Users, "/admin/students"],
  ["Routes", Route, "/admin/routes"],
  ["Analytics", BarChart3, "/admin/analytics"],
  ["Settings", Settings, "/admin/settings"],
];

export default function AdminSidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen flex flex-col">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">NovaTransit</h1>
        <p className="text-slate-400 text-sm">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 p-4">

        {menu.map(([title, Icon, path]) => (
          <NavLink
            key={title}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 ${
                isActive
                  ? "bg-blue-600"
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