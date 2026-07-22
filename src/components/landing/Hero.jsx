import DashboardPreview from "@/components/landing/DashboardPreview";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  MapPin,
  Bus,
  Bell,
  Sparkles,
  ShieldCheck,
  Clock3,
  ChevronDown,
} from "lucide-react";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-16 lg:grid-cols-2"
        >

          {/* ================= LEFT ================= */}

          <motion.div variants={fadeLeft}>

            {/* Badge */}

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-medium shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70"
            >
              <Sparkles className="h-4 w-4 text-blue-600" />

              Smart College Transportation
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="mt-8 text-5xl font-black leading-tight md:text-6xl lg:text-7xl"
            >
              Smart Bus Tracking

              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">

                for Every Student

              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300"
            >
              Experience a smarter way to travel around campus with
              NovaTransit.

              Track buses live, receive instant arrival notifications,
              monitor routes in real time, and never miss your college
              bus again.

            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-5"
            >
              <Button
                size="lg"
                className="rounded-xl px-8 py-6 text-base shadow-xl"
              >
                Get Started

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8 py-6 text-base"
              >
                <Play className="mr-2 h-5 w-5" />

                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Badges */}

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-8"
            >

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">

                  <MapPin className="h-5 w-5 text-blue-600" />

                </div>

                <div>

                  <h3 className="font-semibold">

                    Live GPS

                  </h3>

                  <p className="text-sm text-slate-500">

                    Accurate Tracking

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-green-100 p-3 dark:bg-green-900/30">

                  <Clock3 className="h-5 w-5 text-green-600" />

                </div>

                <div>

                  <h3 className="font-semibold">

                    ETA Prediction

                  </h3>

                  <p className="text-sm text-slate-500">

                    Real-time Arrival

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-purple-100 p-3 dark:bg-purple-900/30">

                  <ShieldCheck className="h-5 w-5 text-purple-600" />

                </div>

                <div>

                  <h3 className="font-semibold">

                    Smart Alerts

                  </h3>

                  <p className="text-sm text-slate-500">

                    Instant Notifications

                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            variants={fadeRight}
            className="relative flex justify-center items-center"
          >
                        {/* Main Hero Circle */}

            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-[470px] w-[470px] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 shadow-[0_0_80px_rgba(59,130,246,0.35)]"
            >
              {/* Glow Ring */}

              <div className="absolute h-[520px] w-[520px] rounded-full border border-blue-300/20" />

              <div className="absolute h-[560px] w-[560px] rounded-full border border-cyan-300/10" />

              {/* Center Circle */}

              <div className="flex h-[260px] w-[260px] items-center justify-center rounded-full bg-white shadow-2xl dark:bg-slate-900">

                <Bus className="h-32 w-32 text-blue-600" />

              </div>

            </motion.div>

            {/* ================= CARD 1 ================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-0 top-10 w-64 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/90"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-red-100 p-3">

                  <MapPin className="text-red-500" />

                </div>

                <div>

                  <h3 className="font-semibold">

                    Live GPS

                  </h3>

                  <p className="text-sm text-slate-500">

                    Bus is 2 mins away

                  </p>

                </div>

              </div>

            </motion.div>

            {/* ================= CARD 2 ================= */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute bottom-8 right-0 w-64 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/90"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-green-100 p-3">

                  <Bell className="text-green-600" />

                </div>

                <div>

                  <h3 className="font-semibold">

                    Smart Alert

                  </h3>

                  <p className="text-sm text-slate-500">

                    Bus arriving soon

                  </p>

                </div>

              </div>

            </motion.div>

            {/* ================= CARD 3 ================= */}

            <motion.div
              animate={{
                x: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-10 top-24 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/90"
            >
              <p className="text-sm text-slate-500">

                Current Route

              </p>

              <h2 className="mt-1 text-2xl font-bold text-blue-600">

                Route 07

              </h2>

              <div className="mt-3 h-2 rounded-full bg-slate-200">

                <div className="h-2 w-3/4 rounded-full bg-blue-600" />

              </div>

            </motion.div>

            {/* ================= CARD 4 ================= */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute bottom-32 left-6 rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/90"
            >
              <h3 className="text-sm text-slate-500">

                Estimated Arrival

              </h3>

              <h1 className="text-3xl font-bold text-green-600">

                03 Min

              </h1>

            </motion.div>

            {/* Floating Dots */}

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-8 right-28 h-5 w-5 rounded-full bg-cyan-400 shadow-xl"
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-10 left-20 h-4 w-4 rounded-full bg-blue-500 shadow-xl"
            />

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute right-24 bottom-28 h-3 w-3 rounded-full bg-indigo-500 shadow-lg"
            />

          </motion.div>

        </motion.div>
                {/* ================= BOTTOM STATS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 gap-6 rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 md:grid-cols-4"
        >
          <div className="text-center">
            <h2 className="text-4xl font-black text-blue-600">3000+</h2>
            <p className="mt-2 text-slate-500">Students</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-black text-cyan-600">50+</h2>
            <p className="mt-2 text-slate-500">Routes</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-black text-indigo-600">99.9%</h2>
            <p className="mt-2 text-slate-500">Tracking Accuracy</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-black text-green-600">24/7</h2>
            <p className="mt-2 text-slate-500">Availability</p>
          </div>
        </motion.div>

        {/* ================= SCROLL INDICATOR ================= */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-16 flex flex-col items-center justify-center"
        >
          <p className="mb-2 text-sm tracking-widest text-slate-500 uppercase">
            Scroll Down
          </p>

          <ChevronDown className="h-7 w-7 text-blue-600" />
        </motion.div>
      </div>

      {/* ================= DECORATIVE BOTTOM GLOW ================= */}

      <div className="absolute bottom-0 left-1/2 h-56 w-[650px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* ================= GRID OVERLAY ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </section>
  );
}
