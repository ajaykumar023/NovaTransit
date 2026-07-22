import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  LayoutDashboard,
  Bus,
  Users,
  Bell,
  Route,
  Settings,
  GraduationCap,
  UserCog,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const tabs = [
  {
    id: "student",
    title: "Student",
    icon: GraduationCap,
  },
  {
    id: "driver",
    title: "Driver",
    icon: Bus,
  },
  {
    id: "admin",
    title: "Admin",
    icon: UserCog,
  },
];

export default function DashboardPreview() {

  const [activeTab, setActiveTab] = useState("student");

  return (

    <section className="relative overflow-hidden py-28 px-6">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"/>

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-5 py-2 font-semibold text-blue-600">

            PRODUCT PREVIEW

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Explore

            <span className="block text-blue-600">

              NovaTransit

            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-500">

            Experience every dashboard before logging in.
            Switch between Student, Driver and Admin.

          </p>

        </motion.div>

        {/* Tabs */}

        <div className="mt-14 flex justify-center">

          <div className="rounded-full border bg-white/80 dark:bg-slate-900/80 p-2 shadow-xl backdrop-blur">

            {tabs.map((tab)=>{

              const Icon = tab.icon;

              return(

                <button
                  key={tab.id}
                  onClick={()=>setActiveTab(tab.id)}
                  className={`relative rounded-full px-6 py-3 mx-1 font-semibold transition-all duration-300 ${
                    activeTab===tab.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >

                  <span className="flex items-center gap-2">

                    <Icon className="w-5 h-5"/>

                    {tab.title}

                  </span>

                </button>

              )

            })}

          </div>

        </div>

        {/* Browser Window */}

        <motion.div
          layout
          className="mt-16 overflow-hidden rounded-[36px] border bg-white dark:bg-slate-900 shadow-2xl"
        >

          {/* Browser Header */}

          <div className="flex items-center justify-between border-b px-6 py-4">

            <div className="flex gap-2">

              <div className="h-3 w-3 rounded-full bg-red-500"/>

              <div className="h-3 w-3 rounded-full bg-yellow-500"/>

              <div className="h-3 w-3 rounded-full bg-green-500"/>

            </div>

            <div className="font-semibold">

              NovaTransit Dashboard

            </div>

            <div/>

          </div>

          {/* Browser Body */}

          <div className="grid lg:grid-cols-[260px_1fr]">

            {/* Sidebar */}

            <div className="border-r bg-slate-50 dark:bg-slate-950 p-6">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-600 p-3">

                  <Bus className="text-white"/>

                </div>

                <div>

                  <h3 className="font-bold">

                    NovaTransit

                  </h3>

                  <p className="text-sm text-slate-500">

                    Smart Mobility

                  </p>

                </div>

              </div>

              <div className="mt-10 space-y-3">

                <div className="flex items-center gap-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 p-3">

                  <LayoutDashboard className="text-blue-600"/>

                  Dashboard

                </div>

                <div className="flex items-center gap-3 rounded-xl p-3">

                  <Route/>

                  Routes

                </div>

                <div className="flex items-center gap-3 rounded-xl p-3">

                  <Bell/>

                  Notifications

                </div>

                <div className="flex items-center gap-3 rounded-xl p-3">

                  <Settings/>

                  Settings

                </div>

              </div>

            </div>

            {/* Dashboard Content */}

            <AnimatePresence mode="wait">
                              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="p-8"
              >
                {/* Top Header */}

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div>
                    <h3 className="text-3xl font-bold">

                      {activeTab === "student" && "Welcome Back 👋"}

                      {activeTab === "driver" && "Driver Dashboard 🚌"}

                      {activeTab === "admin" && "Admin Control Center 🛠️"}

                    </h3>

                    <p className="mt-2 text-slate-500">
                      {activeTab === "student" &&
                        "Track your bus in real-time and never miss your ride."}

                      {activeTab === "driver" &&
                        "Manage today's trips and monitor passengers."}

                      {activeTab === "admin" &&
                        "Monitor your entire transportation network."}
                    </p>
                  </div>

                  <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                    Open Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </button>

                </div>

                {/* Statistics */}

                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                  {activeTab === "student" && (
                    <>
                      <StatCard
                        title="Current Bus"
                        value="KA-01-AA-2345"
                        icon={<Bus />}
                      />

                      <StatCard
                        title="ETA"
                        value="5 min"
                        icon={<Route />}
                      />

                      <StatCard
                        title="Notifications"
                        value="3"
                        icon={<Bell />}
                      />

                      <StatCard
                        title="Attendance"
                        value="96%"
                        icon={<ShieldCheck />}
                      />
                    </>
                  )}

                  {activeTab === "driver" && (
                    <>
                      <StatCard
                        title="Trips Today"
                        value="8"
                        icon={<Bus />}
                      />

                      <StatCard
                        title="Students"
                        value="142"
                        icon={<Users />}
                      />

                      <StatCard
                        title="Fuel"
                        value="72%"
                        icon={<Route />}
                      />

                      <StatCard
                        title="Alerts"
                        value="2"
                        icon={<Bell />}
                      />
                    </>
                  )}

                  {activeTab === "admin" && (
                    <>
                      <StatCard
                        title="Students"
                        value="3,240"
                        icon={<GraduationCap />}
                      />

                      <StatCard
                        title="Drivers"
                        value="78"
                        icon={<Users />}
                      />

                      <StatCard
                        title="Buses"
                        value="54"
                        icon={<Bus />}
                      />

                      <StatCard
                        title="System Health"
                        value="99.9%"
                        icon={<ShieldCheck />}
                      />
                    </>
                  )}

                </div>

                {/* Bottom Cards */}

                <div className="mt-8 grid gap-6 lg:grid-cols-3">

                  {/* Large Card */}

                  <div className="lg:col-span-2 rounded-2xl border bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-xl">

                    <div className="flex items-center justify-between">

                      <div>

                        <h4 className="text-2xl font-bold">

                          {activeTab === "student" && "Live Bus Tracking"}

                          {activeTab === "driver" && "Today's Route"}

                          {activeTab === "admin" && "Fleet Overview"}

                        </h4>

                        <p className="mt-2 text-blue-100">

                          Real-time updates with smart analytics.

                        </p>

                      </div>

                      <Bus className="h-14 w-14 opacity-80" />

                    </div>

                    <div className="mt-10 h-3 rounded-full bg-white/20">

                      <div className="h-full w-3/4 rounded-full bg-white" />

                    </div>

                  </div>

                  {/* Activity */}

                  <div className="rounded-2xl border bg-slate-50 dark:bg-slate-900 p-6">

                    <h4 className="font-bold text-lg">

                      Recent Activity

                    </h4>

                    <div className="mt-5 space-y-4">

                      <Activity
                        text="Bus reached Campus Gate"
                      />

                      <Activity
                        text="ETA updated to 5 mins"
                      />

                      <Activity
                        text="New notification received"
                      />

                      <Activity
                        text="Route synced successfully"
                      />

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

                </motion.div>

      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function StatCard({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-sm hover:shadow-xl"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>

        </div>

        <div className="rounded-2xl bg-blue-100 dark:bg-blue-900/30 p-4 text-blue-600">

          {icon}

        </div>

      </div>
    </motion.div>
  );
}

function Activity({ text }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3"
    >
      <div className="h-3 w-3 rounded-full bg-blue-600" />

      <span className="text-slate-600 dark:text-slate-300">

        {text}

      </span>
    </motion.div>
  );
}