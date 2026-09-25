import { motion } from "framer-motion";
import { CheckCircle2, Cpu, CreditCard, Database, Layers, ShieldCheck, Zap } from "lucide-react";

const metrics = [
  {
    value: "20+",
    label: "Enterprise Deployments",
    description: "Custom software modules & digital utilities shipped",
    icon: Layers,
  },
  {
    value: "99.9%",
    label: "System Reliability",
    description: "Production-grade uptime & secure data architectures",
    icon: Zap,
  },
  {
    value: "3x",
    label: "Delivery Acceleration",
    description: "From scoped blueprint to rapid production rollout",
    icon: Cpu,
  },
  {
    value: "100%",
    label: "Corporate Integrity",
    description: "Verified Nigerian entity (CAC RC: 1928419)",
    icon: ShieldCheck,
  },
];

const technologies = [
  { name: "React", category: "Frontend", icon: Cpu },
  { name: "Next.js", category: "Fullstack", icon: Layers },
  { name: "TypeScript", category: "Language", icon: CheckCircle2 },
  { name: "Tailwind CSS", category: "Styling", icon: Zap },
  { name: "Supabase", category: "Backend & Auth", icon: Database },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "Node.js", category: "Runtime", icon: Cpu },
  { name: "Paystack", category: "Fintech Gateway", icon: CreditCard },
  { name: "Vite", category: "Tooling", icon: Zap },
  { name: "Wordpress", category: "CMS", icon: Layers },
];

export function AuthorityProofBar() {
  return (
    <section className="relative z-10 -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Metrics Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-[2.25rem] border border-white/15 bg-brand-navy/95 p-6 shadow-panel backdrop-blur-xl sm:p-8 lg:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-brand-sky/40 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-brand-sky sm:text-4xl">
                    {metric.value}
                  </span>
                  <div className="rounded-xl bg-brand-sky/15 p-2.5 text-brand-sky">
                    <Icon size={20} />
                  </div>
                </div>
                <p className="mt-3 font-heading text-base font-bold text-white">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Strip */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-sky">
                Core Engineering Stack
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold text-white sm:text-xl">
                Battle-Tested Technologies We Build With
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              Modern frontend, scalable cloud backends, and robust payment integrations
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-brand-sky/50 hover:bg-brand-sky/10 hover:text-white"
                >
                  <Icon size={14} className="text-brand-sky group-hover:scale-110 transition-transform" />
                  <span>{tech.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-brand-mist">
                    • {tech.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
