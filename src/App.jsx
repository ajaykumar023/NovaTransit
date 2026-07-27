import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./routes/ProtectedRoute";

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
import DriverProfile from "./pages/Driver/Profile";

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
      <ScrollToTop />

      <Routes>
        {/* Landing */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= DRIVER ================= */}

        <Route
          path="/driver/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/route"
          element={
            <ProtectedRoute>
              <RoutePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/students"
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/start-trip"
          element={
            <ProtectedRoute>
              <StartTrip />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/end-trip"
          element={
            <ProtectedRoute>
              <EndTrip />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/profile"
          element={
            <ProtectedRoute>
              <DriverProfile />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/buses"
          element={
            <ProtectedRoute>
              <ManageBuses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/drivers"
          element={
            <ProtectedRoute>
              <ManageDrivers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/students"
          element={
            <ProtectedRoute>
              <ManageStudents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/routes"
          element={
            <ProtectedRoute>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* ================= STUDENT ================= */}

        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/track"
          element={
            <ProtectedRoute>
              <TrackBus />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/schedule"
          element={
            <ProtectedRoute>
              <StudentSchedule />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/notifications"
          element={
            <ProtectedRoute>
              <StudentNotifications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/profile"
          element={
            <ProtectedRoute>
              <StudentProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;