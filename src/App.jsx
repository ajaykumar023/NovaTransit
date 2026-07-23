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
      </Routes>
    </BrowserRouter>
  );
}

export default App;