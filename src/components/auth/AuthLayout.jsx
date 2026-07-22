import { motion } from "framer-motion";
import {
  Bus,
  ShieldCheck,
  Bell,
  MapPinned,
  ArrowRight,
} from "lucide-react";

export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="relative z-10 flex min-h-screen">

        {/* Left Section */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex w-1/2 flex-col justify-center px-20"
        >

          {/* Logo */}

          <div className="flex items-center gap-4">

            <div className="rounded-3xl bg-blue-600 p-5 shadow-xl">

              <Bus className="h-10 w-10 text-white" />

            </div>

            <div>

              <h1 className="text-4xl font-black">

                NovaTransit

              </h1>

              <p className="text-slate-500">

                Smart Bus Management System

              </p>

            </div>

          </div>

          {/* Heading */}

          <h2 className="mt-12 text-6xl font-black leading-tight">

            Welcome

            <span className="block text-blue-600">

              Back

            </span>

          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">

            Experience seamless transportation with
            real-time bus tracking, instant notifications,
            and secure access for Students, Drivers,
            and Administrators.

          </p>

          {/* Features */}

          <div className="mt-14 space-y-6">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-3">

                <MapPinned className="text-blue-600" />

              </div>

              <div>

                <h3 className="font-bold">

                  Live GPS Tracking

                </h3>

                <p className="text-slate-500">

                  Track buses in real time.

                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-3">

                <Bell className="text-blue-600" />

              </div>

              <div>

                <h3 className="font-bold">

                  Instant Notifications

                </h3>

                <p className="text-slate-500">

                  Never miss important updates.

                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-3">

                <ShieldCheck className="text-blue-600" />

              </div>

              <div>

                <h3 className="font-bold">

                  Secure Authentication

                </h3>

                <p className="text-slate-500">

                  Protected access for every role.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Right Section */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full items-center justify-center px-6 py-10 lg:w-1/2"
        >

          <div className="w-full max-w-md">

            {/* Mobile Logo */}

            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">

              <div className="rounded-2xl bg-blue-600 p-4 shadow-lg">

                <Bus className="h-8 w-8 text-white" />

              </div>

              <div>

                <h2 className="text-2xl font-black">

                  NovaTransit

                </h2>

                <p className="text-sm text-slate-500">

                  Smart Bus Management

                </p>

              </div>

            </div>

            {/* Authentication Card */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="rounded-[32px] border border-white/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl"
            >

              {/* Top */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">

                    Authentication

                  </p>

                  <h2 className="mt-2 text-3xl font-black">

                    Welcome Back

                  </h2>

                  <p className="mt-2 text-slate-500">

                    Login to continue using NovaTransit.

                  </p>

                </div>

                <div className="rounded-2xl bg-blue-600 p-4 shadow-lg">

                  <ArrowRight className="h-6 w-6 text-white" />

                </div>

              </div>

              {/* Divider */}

              <div className="my-8 h-px bg-slate-200 dark:bg-slate-700" />

              {/* Form */}

              {children}
                            {/* Bottom */}

              <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6 text-center">

                <p className="text-sm text-slate-500">

                  © {new Date().getFullYear()} NovaTransit

                </p>

                <p className="mt-2 text-xs text-slate-400">

                  Smart Bus Management System

                </p>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* Decorative Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#3b82f6 1px,transparent 1px),linear-gradient(to bottom,#3b82f6 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

    </div>
  );
}