import { motion } from "framer-motion";
import { BriefcaseBusiness, Cpu, Landmark } from "lucide-react";

const points = [
  {
    icon: Cpu,
    title: "Technology-first execution",
    description:
      "From custom web platforms to mobile-ready experiences, we build practical digital solutions that align with business goals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business growth mindset",
    description:
      "Every engagement is shaped around operational efficiency, stronger customer experiences, and scalable digital capability.",
  },
  {
    icon: Landmark,
    title: "Built for evolving markets",
    description:
      "We serve organizations that need dependable software, advisory support, and modern technology services suited to ambitious markets like Nigeria.",
  },
];

export function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-600">
            About Us
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-navy sm:text-4xl">
            A modern technology partner for businesses ready to move forward.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-brand-slate">
          <p>
            CEK TOP VENTURES LTD helps businesses unlock growth through
            thoughtful software development, dependable IT services, and
            practical digital transformation support.
          </p>
          <p>
            We focus on building the systems, products, and technical
            foundations that make organizations more efficient, more visible,
            and more prepared for scale.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {points.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="rounded-[1.75rem] border border-sky-100 bg-white p-7 shadow-panel"
          >
            <div className="inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
              <Icon size={24} />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-brand-navy">
              {title}
            </h3>
            <p className="mt-3 text-base leading-7 text-brand-slate">
              {description}
            </p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
