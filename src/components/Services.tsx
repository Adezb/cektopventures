import { motion } from "framer-motion";
import {
  AppWindow,
  Brush,
  Globe,
  MonitorSmartphone,
  SearchCheck,
  Settings,
  ShoppingBag,
} from "lucide-react";

const services = [
  {
    title: "Web Development & Design",
    description:
      "Responsive websites and web applications built for credibility, performance, and conversion.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile-ready product experiences that bring your services closer to customers and teams.",
    icon: MonitorSmartphone,
  },
  {
    title: "Web Content Management & SEO",
    description:
      "Content structuring and search optimization that improve discoverability and digital reach.",
    icon: SearchCheck,
  },
  {
    title: "Graphics Design & Branding",
    description:
      "Visual systems, campaign assets, and brand presentation that make your business feel credible and current.",
    icon: Brush,
  },
  {
    title: "Systems Troubleshooting",
    description:
      "Hands-on diagnostics and support to restore reliability, reduce downtime, and improve operational continuity.",
    icon: Settings,
  },
  {
    title: "Gadgets & Accessories Supply",
    description:
      "Access to the hardware and accessories teams need to stay productive in modern work environments.",
    icon: ShoppingBag,
  },
  {
    title: "IT Consultancy",
    description:
      "Strategic guidance for technology decisions, implementation planning, and digital business growth.",
    icon: AppWindow,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-600">
            IT Services
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-navy sm:text-4xl">
            Seven service pillars designed to help businesses operate smarter.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-slate">
            Our service portfolio combines engineering, design, support, and
            strategic advisory so organizations can build, improve, and maintain
            the technology they depend on.
          </p>
        </div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={itemVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="group rounded-[1.75rem] border border-slate-200 bg-brand-cloud p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-panel"
            >
              <div className="inline-flex rounded-2xl bg-brand-navy p-3 text-brand-sky transition group-hover:bg-sky-100 group-hover:text-sky-700">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-brand-navy">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-slate">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
