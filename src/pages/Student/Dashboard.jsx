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
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Navigation */}
        <StudentTopbar />

        {/* Hero Section */}
        <StudentHero />

        {/* Statistics Cards */}
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

        {/* Schedule */}
        <div className="mt-8">
          <StudentSchedule />
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <StudentQuickActions />
        </div>

        {/* Journey Progress */}
        <div className="mt-8">
          <StudentJourney />
        </div>

        {/* Driver Details */}
        <div className="mt-8">
          <StudentDriverCard />
        </div>
      </main>
    </div>
  );
}