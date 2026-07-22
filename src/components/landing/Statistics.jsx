import { motion } from "framer-motion";
import { Bus, Users, MapPinned, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "3000+",
    label: "Students",
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: Bus,
    value: "50+",
    label: "Buses",
    color: "text-cyan-600",
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
  },
  {
    icon: MapPinned,
    value: "99.9%",
    label: "Tracking Accuracy",
    color: "text-indigo-600",
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    label: "Monitoring",
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
];

export default function Statistics() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">
            Trusted by Thousands
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            NovaTransit helps students reach college on time
            with accurate tracking, smart notifications and
            reliable transportation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl p-8"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center`}
                >
                  <Icon className={`w-8 h-8 ${item.color}`} />
                </div>

                <h3 className="mt-8 text-4xl font-black">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-500">
                  {item.label}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}