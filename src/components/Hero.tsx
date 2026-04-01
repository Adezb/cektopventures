import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Workflow } from "lucide-react";

const heroHighlights = [
  "Custom software delivery for growth-focused businesses",
  "Reliable IT advisory and systems support",
  "Digital products tailored for Nigerian and global markets",
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-brand-navy text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.32),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.22),_transparent_28%)]" />
      <div className="absolute inset-0 bg-tech-grid bg-[size:48px_48px] opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-cloud to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky/30 bg-brand-sky/10 px-4 py-2 text-sm font-semibold text-brand-mist">
            <BadgeCheck size={16} className="text-brand-sky" />
            Innovative IT Services & Software Development
          </div>

          <h1 className="mt-8 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Empowering Businesses through Innovative Tech Solutions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Delivering cutting-edge technology services that empower businesses
            to innovate, scale, and succeed in the digital age.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sky px-6 py-4 text-base font-bold text-brand-navy transition hover:bg-sky-300"
            >
              Explore Our Tech Services
              <ArrowRight size={18} />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-base font-semibold text-white transition hover:border-brand-sky hover:text-brand-sky"
            >
              Discover ROT8
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 32 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="grid gap-5 self-end"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur">
            <div className="flex items-center gap-3 text-brand-sky">
              <Workflow />
              <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                Delivery Focus
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-brand-sky/20 bg-slate-950/60 p-6 shadow-panel">
            <div className="flex items-center gap-3 text-brand-sky">
              <ShieldCheck />
              <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                Trusted Capability
              </span>
            </div>
            <p className="mt-4 text-base leading-7 text-slate-300">
              We combine product thinking, robust engineering, and hands-on
              support to help organizations modernize operations with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
