import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does live bus tracking work?",
    answer:
      "NovaTransit uses GPS data from the assigned bus to provide students with real-time location updates and estimated arrival times.",
  },
  {
    question: "Can I track multiple buses?",
    answer:
      "Yes. Students can view all available buses on their assigned routes and monitor their live locations.",
  },
  {
    question: "Will I receive delay notifications?",
    answer:
      "Absolutely. NovaTransit instantly notifies users about delays, route changes, and important announcements.",
  },
  {
    question: "Is NovaTransit available on mobile?",
    answer:
      "Yes. NovaTransit is fully responsive and works smoothly on desktops, tablets, and mobile devices.",
  },
  {
    question: "Who can access the admin dashboard?",
    answer:
      "Only authorized administrators can access the admin dashboard to manage buses, routes, drivers, and students.",
  },
  {
    question: "Is student data secure?",
    answer:
      "Yes. Authentication, role-based access, and secure cloud services help protect student information.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-5 py-2 font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Frequently Asked
            <span className="block text-blue-600">
              Questions
            </span>
          </h2>

          <p className="mt-5 text-slate-500">
            Everything you need to know about NovaTransit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Accordion type="single" collapsible className="space-y-5">

            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-slate-500 leading-7">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}

          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}