import { motion } from "framer-motion";
import {
  LogIn,
  MapPinned,
  Bus,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: LogIn,
    title: "Login",
    description:
      "Sign in securely as a Student, Driver or Administrator using your NovaTransit account.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Select Route",
    description:
      "Choose your bus route and instantly view nearby buses and estimated arrival times.",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "03",
    icon: Bus,
    title: "Track Your Bus",
    description:
      "Watch your bus move in real time with live GPS tracking and smart notifications.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Reach Destination",
    description:
      "Arrive at college on time without waiting unnecessarily at the bus stop.",
    color: "from-purple-500 to-indigo-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-slate-900/40" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-5 py-2 font-semibold text-blue-600">

            HOW IT WORKS

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Getting Started Is

            <span className="block text-blue-600">

              Easier Than Ever

            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-500">

            NovaTransit helps students track buses in just four simple
            steps. Fast, accurate and built for everyday college travel.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-20 hidden lg:block h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full" />

          <div className="grid gap-12 lg:grid-cols-4">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >

                  {/* Number */}

                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg shadow-xl">

                    {step.number}

                  </div>

                  {/* Card */}

                  <div className="group rounded-3xl border bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl p-8 shadow-xl pt-16">

                    <div
                      className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} shadow-xl`}
                    >

                      <Icon className="h-10 w-10 text-white" />

                    </div>

                    <h3 className="mt-8 text-center text-2xl font-bold">

                      {step.title}

                    </h3>

                    <p className="mt-5 text-center leading-7 text-slate-500">

                      {step.description}

                    </p>

                    <div className="mt-8 h-1 w-0 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-full" />

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}