import { useState } from "react";

import StudentSidebar from "@/components/student/StudentSidebar";
import StudentTopbar from "@/components/student/StudentTopbar";
import StudentHero from "@/components/student/StudentHero";
import StudentStats from "@/components/student/StudentStats";
import StudentMap from "@/components/student/StudentMap";
import StudentNotifications from "@/components/student/StudentNotifications";
import StudentSchedule from "@/components/student/StudentSchedule";
import StudentQuickActions from "@/components/student/StudentQuickActions";
import StudentJourney from "@/components/student/StudentJourney";
import StudentDriverCard from "@/components/student/StudentDriverCard";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <StudentSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 overflow-y-auto p-4 sm:p-6 lg:p-8">

        {/* Top Navigation */}
        <StudentTopbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Hero */}
        <StudentHero />

        {/* Statistics */}
        <StudentStats />

        {/* Map + Notifications */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

          <div className="xl:col-span-2">
            <StudentMap />
          </div>

          <div>
            <StudentNotifications />
          </div>

        </div>

        {/* Schedule + Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <StudentSchedule />

          <StudentQuickActions />

        </div>

        {/* Journey + Driver */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <StudentJourney />

          <StudentDriverCard />

        </div>

      </main>

    </div>
  );
}