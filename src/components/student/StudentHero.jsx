import { useNavigate } from "react-router-dom";
import {
  BusFront,
  Clock3,
  MapPinned,
  User,
  ArrowRight,
} from "lucide-react";

export default function StudentHero() {
  const navigate = useNavigate();

  return (
    <div className="mt-6 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-xl p-5 sm:p-6 lg:p-8">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Left */}
        <div className="flex-1 w-full">

          <p className="text-blue-100 text-base sm:text-lg">
            👋 Good Morning, Krithika
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Your bus is arriving in
          </h1>

          <div className="flex items-center gap-2 sm:gap-3 mt-6">

            <Clock3 className="w-7 h-7 sm:w-8 sm:h-8" />

            <span className="text-5xl sm:text-6xl font-extrabold">
              8
            </span>

            <span className="text-2xl sm:text-3xl font-semibold">
              Minutes
            </span>

          </div>

          <button
            onClick={() => navigate("/student/track")}
            className="mt-8 w-full sm:w-auto bg-white text-blue-700 font-bold px-6 py-3 rounded-xl flex justify-center items-center gap-2 hover:scale-105 transition"
          >
            Track Live Bus
            <ArrowRight size={18} />
          </button>

        </div>

        {/* Right */}

        <div className="w-full lg:w-96 bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6">

          <div className="flex items-center gap-3 mb-5">
            <BusFront />
            <span className="font-semibold">
              Bus Number
            </span>

            <span className="ml-auto font-bold text-sm sm:text-base">
              KA01AB1234
            </span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <User />
            <span>Driver</span>

            <span className="ml-auto font-bold text-sm sm:text-base">
              Rahul Kumar
            </span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <MapPinned />
            <span>Next Stop</span>

            <span className="ml-auto font-bold text-sm sm:text-base">
              MG Road
            </span>
          </div>

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

            <span>Bus Status</span>

            <span className="ml-auto font-bold text-green-300">
              On Time
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}