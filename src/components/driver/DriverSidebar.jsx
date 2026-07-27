import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Route,
  Users,
  PlayCircle,
  StopCircle,
  User,
  Bus,
  X,
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

export default function DriverSidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-72 bg-slate-900 text-white flex flex-col border-r border-slate-800 transform transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-8 border-b border-slate-800">

          <div className="flex items-center gap-3">

            <div className="bg-blue-600 p-3 rounded-xl">
              <Bus size={24} />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                NovaTransit
              </h1>

              <p className="text-sm text-slate-400">
                Driver Panel
              </p>
            </div>

          </div>

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
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
    </>
  );
}