import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Route,
  Users,
  PlayCircle,
  StopCircle,
  User,
  Bus,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/driver/dashboard",
  },
  {
    name: "Route",
    icon: Route,
    path: "/driver/route",
  },
  {
    name: "Students",
    icon: Users,
    path: "/driver/students",
  },
  {
    name: "Start Trip",
    icon: PlayCircle,
    path: "/driver/start-trip",
  },
  {
    name: "End Trip",
    icon: StopCircle,
    path: "/driver/end-trip",
  },
  {
    name: "Profile",
    icon: User,
    path: "/driver/profile",
  },
];

export default function DriverSidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col border-r border-slate-800">
      {/* Logo */}

      <div className="flex items-center gap-3 px-6 py-8 border-b border-slate-800">
        <div className="bg-blue-600 p-3 rounded-xl">
          <Bus size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold">NovaTransit</h1>
          <p className="text-sm text-slate-400">Driver Panel</p>
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">
        <p className="text-sm text-slate-400">
          Logged in as
        </p>

        <h3 className="font-semibold">
          Driver
        </h3>
      </div>
    </aside>
  );
}