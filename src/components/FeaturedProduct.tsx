import { motion } from "framer-motion";
import { ArrowUpRight, Database, Network } from "lucide-react";

export function FeaturedProduct() {
  return (
    <motion.section
      id="products"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="overflow-hidden rounded-[2rem] bg-brand-navy text-white shadow-panel">
        <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-sky">
              Featured Product
            </p>
            <div className="mt-5 flex items-center gap-4">
              <img
                src="/rot8-192x192.png"
                alt="ROT8 logo"
                className="h-16 w-16 rounded-2xl border border-white/10 bg-white/95 object-contain p-2 shadow-lg sm:h-20 sm:w-20"
              />
              <div>
                <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  ROT8
                </p>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Digital Social Commerce Utility
                </p>
              </div>
            </div>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              ROT8 is a digital social commerce utility for automated contribution tracking.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              ROT8 is our flagship SaaS product for the Nigerian market,
              designed to help associations, teams, and member-based
              communities coordinate digital contributions, maintain a
              community contribution ledger, and support collaborative
              purchasing workflows with clarity and convenience.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.rot8.com.ng/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sky px-6 py-4 text-base font-bold text-brand-navy transition hover:bg-sky-300"
              >
                Visit ROT8 Web App
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-base font-semibold text-white transition hover:border-brand-sky hover:text-brand-sky"
              >
                View Related Services
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="inline-flex rounded-2xl bg-brand-sky/15 p-3 text-brand-sky">
                <Database size={24} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold">
                Automated contribution tracking
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Built to support clear records, controlled access, and reliable
                digital contribution workflows for coordinators and participants.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="inline-flex rounded-2xl bg-brand-sky/15 p-3 text-brand-sky">
                <Network size={24} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold">
                Built for group coordination
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                ROT8 supports digital experiences that make member coordination,
                participation tracking, service visibility, and collaborative
                purchasing more seamless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
