import { useState } from "react";

import DriverSidebar from "@/components/driver/DriverSidebar";
import DriverTopbar from "@/components/driver/DriverTopbar";
import DriverStats from "@/components/driver/DriverStats";
import DriverMap from "@/components/driver/DriverMap";
import DriverSchedule from "@/components/driver/DriverSchedule";
import DriverStudents from "@/components/driver/DriverStudents";
import DriverActivity from "@/components/driver/DriverActivity";
import DriverTripProgress from "@/components/driver/DriverTripProgress";
import DriverBusStatus from "@/components/driver/DriverBusStatus";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">

      {/* Sidebar */}
      <DriverSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 overflow-y-auto p-4 sm:p-6 lg:p-8">

        {/* Topbar */}
        <DriverTopbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Stats */}
        <DriverStats />

        {/* Map + Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 mt-8">

          <div className="xl:col-span-2">
            <DriverMap />
          </div>

          <DriverActivity />

        </div>

        {/* Schedule + Students */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8">

          <DriverSchedule />

          <DriverStudents />

        </div>

        {/* Trip Progress + Bus Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8">

          <DriverTripProgress />

          <DriverBusStatus />

        </div>

      </main>

    </div>
  );
}