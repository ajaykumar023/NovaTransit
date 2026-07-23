import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing
import Home from "./pages/Landing/Home";

// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Driver
import Dashboard from "./pages/Driver/Dashboard";
import RoutePage from "./pages/Driver/Route";
import Students from "./pages/Driver/Students";
import StartTrip from "./pages/Driver/StartTrip";
import EndTrip from "./pages/Driver/EndTrip";
import Profile from "./pages/Driver/Profile";

// Admin
import AdminDashboard from "./pages/Admin/Dashboard";
import Analytics from "./pages/Admin/Analytics";
import ManageBuses from "./pages/Admin/ManageBuses";
import ManageDrivers from "./pages/Admin/ManageDrivers";
import ManageStudents from "./pages/Admin/ManageStudents";
import AdminRoutes from "./pages/Admin/Routes";
import Settings from "./pages/Admin/Settings";

// Student
import StudentDashboard from "./pages/Student/Dashboard";
import TrackBus from "./pages/Student/TrackBus";
import StudentSchedule from "./pages/Student/Schedule";
import StudentNotifications from "./pages/Student/Notifications";
import StudentProfile from "./pages/Student/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Driver */}
        <Route path="/driver/dashboard" element={<Dashboard />} />
        <Route path="/driver/route" element={<RoutePage />} />
        <Route path="/driver/students" element={<Students />} />
        <Route path="/driver/start-trip" element={<StartTrip />} />
        <Route path="/driver/end-trip" element={<EndTrip />} />
        <Route path="/driver/profile" element={<Profile />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/buses" element={<ManageBuses />} />
        <Route path="/admin/drivers" element={<ManageDrivers />} />
        <Route path="/admin/students" element={<ManageStudents />} />
        <Route path="/admin/routes" element={<AdminRoutes />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/settings" element={<Settings />} />

        {/* Student */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/track" element={<TrackBus />} />
        <Route path="/student/schedule" element={<StudentSchedule />} />
        <Route path="/student/notifications" element={<StudentNotifications />} />
        <Route path="/student/profile" element={<StudentProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;