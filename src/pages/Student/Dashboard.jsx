import StudentSidebar from "@/components/student/StudentSidebar";
import StudentTopbar from "@/components/student/StudentTopbar";
import StudentHero from "@/components/student/StudentHero";
import StudentMap from "@/components/student/StudentMap";
import StudentNotifications from "@/components/student/StudentNotifications";
import StudentSchedule from "@/components/student/StudentSchedule";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Navigation */}
        <StudentTopbar />

        {/* Hero Cards */}
        <StudentHero />

        {/* Map + Notifications */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          <div className="xl:col-span-2">
            <StudentMap />
          </div>

          <div>
            <StudentNotifications />
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-8">
          <StudentSchedule />
        </div>
      </main>
    </div>
  );
}