import {
  BusFront,
  Clock3,
  MapPinned,
  User,
  ArrowRight,
} from "lucide-react";

export default function StudentHero() {
  return (
    <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-xl p-8">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Left */}
        <div className="flex-1">

          <p className="text-blue-100 text-lg">
            👋 Good Morning, Krithika
          </p>

          <h1 className="text-4xl font-bold mt-3">
            Your bus is arriving in
          </h1>

          <div className="flex items-center gap-3 mt-6">
            <Clock3 size={32} />

            <span className="text-6xl font-extrabold">
              8
            </span>

            <span className="text-3xl font-semibold">
              Minutes
            </span>
          </div>

          <button className="mt-8 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition">
            Track Live Bus
            <ArrowRight size={18} />
          </button>

        </div>

        {/* Right */}

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full lg:w-96">

          <div className="flex items-center gap-3 mb-5">
            <BusFront />
            <span className="font-semibold">
              Bus Number
            </span>

            <span className="ml-auto font-bold">
              KA01AB1234
            </span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <User />
            <span>Driver</span>

            <span className="ml-auto font-bold">
              Rahul Kumar
            </span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <MapPinned />
            <span>Next Stop</span>

            <span className="ml-auto font-bold">
              MG Road
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></span>

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