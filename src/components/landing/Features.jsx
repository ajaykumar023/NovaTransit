import { motion } from "framer-motion";
import {
  MapPinned,
  Bell,
  Route,
  ShieldCheck,
  Clock3,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: MapPinned,
    title: "Real-Time GPS Tracking",
    description:
      "Track your college bus live with accurate GPS location and never wonder where your bus is.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Receive instant alerts when your bus is arriving, delayed, or reaches your stop.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Route,
    title: "Route Management",
    description:
      "View all available routes, stops, and estimated arrival times from one dashboard.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Clock3,
    title: "Live ETA",
    description:
      "Predict arrival times using live GPS updates so students can plan better.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description:
      "Role-based login for students, drivers, and administrators with secure authentication.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Access NovaTransit seamlessly from desktops, tablets, and smartphones.",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-slate-900/40" />

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-5 py-2 text-blue-600 font-semibold">

            FEATURES

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Everything You Need

            <span className="block text-blue-600">

              In One Platform

            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500 text-lg">

            NovaTransit combines live tracking, notifications,
            ETA prediction and route management into one
            modern platform built for students and colleges.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl p-7 shadow-xl"
              >

                <div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                >

                  <Icon className="text-white w-8 h-8" />

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-7 text-slate-500">

                  {feature.description}

                </p>

                <div className="mt-8 h-1 w-0 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-full" />

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}