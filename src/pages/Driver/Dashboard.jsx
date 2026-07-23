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
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <DriverSidebar />

      <main className="flex-1 p-8">
        <DriverTopbar />

        <DriverStats />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">

        <div className="xl:col-span-2">
            <DriverMap />
        </div>

        <DriverActivity />

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <DriverSchedule />
            <DriverStudents />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <DriverTripProgress />
            <DriverBusStatus />
        </div>
      </main>   
    </div>
  );
}   