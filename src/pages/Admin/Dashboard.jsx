import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import AdminStats from "@/components/admin/AdminStats";
import AdminAnalytics from "@/components/admin/AdminAnalytics";
import AdminAlerts from "@/components/admin/AdminAlerts";
import AdminRecentTrips from "@/components/admin/AdminRecentTrips";
import AdminBusTable from "@/components/admin/AdminBusTable";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <AdminTopbar />
        <AdminStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

            <div className="lg:col-span-2">
                <AdminAnalytics />
            </div>

            <AdminAlerts />

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <AdminRecentTrips />
            <AdminBusTable />
        </div>
      </main>
    </div>
  );
}