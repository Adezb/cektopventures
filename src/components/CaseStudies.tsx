import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";

export interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  projectUrl: string;
}

export const caseStudiesData: CaseStudyProps[] = [
  {
    title: "ROT8",
    category: "Social Commerce & Asset Financing",
    description:
      "A digital social commerce utility engineered for automated group contribution tracking, collaborative purchasing, and community ledger management.",
    techStack: ["React + Vite", "TypeScript", "TailwindCSS", "Supabase", "Paystack"],
    imageSrc: "/rot8-mockup.png",
    projectUrl: "https://www.rot8.com.ng/",
  },
  {
    title: "FHR Practice Guide",
    category: "Legal Tech Progressive Web App (PWA)",
    description:
      "A dedicated legal practice guide application deployed as a PWA, ensuring fast, cross-device access to critical legal frameworks and practice documentation.",
    techStack: ["Web App", "UI/UX Design", "PWA"],
    imageSrc: "/fhr-mockup.png",
    projectUrl: "https://www.fhrnigeria.app/",
  },
  {
    title: "Judge Web Archive & Portfolio",
    category: "Judicial Document Management",
    description:
      "A secure, custom-built web archive and document library designed for a judicial officer to upload, manage, and display legal rulings, judgments, and publications.",
    techStack: ["CMS", "Document UI", "Web Architecture"],
    imageSrc: "/judicial-mockup.png",
    projectUrl: "https://tosinajosepopoola.com/",
  },
  {
    title: "CEKPay",
    category: "VTU & Utility Payment Solution",
    description:
      "A streamlined Virtual Top-Up (VTU) and utility bills payment platform designed for secure, high-speed digital transactions and automated funding workflows.",
    techStack: ["React + Vite", "TypeScript", "TailwindCSS", "Supabase", "Paystack"],
    imageSrc: "/cekpay-mockup.png",
    projectUrl: "https://www.cekpay.com.ng/",
  },
];

export function CaseStudyCard({
  title,
  category,
  description,
  techStack,
  imageSrc,
  projectUrl,
}: CaseStudyProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-sky/60 hover:shadow-panel sm:p-8"
    >
      {/* Top Banner & Visual Showcase */}
      <div>
        <div className="relative mb-6 flex h-60 sm:h-72 w-full items-center justify-center overflow-hidden rounded-2xl bg-brand-navy/95 border border-white/10 p-2 sm:p-4">
          <div className="absolute inset-0 bg-tech-grid bg-[size:24px_24px] opacity-20 pointer-events-none" />
          <div className="absolute top-3 left-3 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-sky/30 bg-brand-sky/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-sky backdrop-blur-md">
              <CheckCircle2 size={12} />
              Verified Case Study
            </span>
          </div>

          <img
            src={imageSrc}
            alt={`${title} preview`}
            className="relative z-10 h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105 drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        {/* Category Pill */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
          {category}
        </p>

        {/* Title */}
        <h3 className="mt-2 font-heading text-2xl font-bold text-brand-navy transition group-hover:text-sky-700 sm:text-3xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-base leading-relaxed text-brand-slate">
          {description}
        </p>
      </div>

      {/* Footer: Tech Stack & CTA */}
      <div className="mt-6 border-t border-slate-100 pt-6">
        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 transition group-hover:border-sky-200 group-hover:bg-sky-50/50 group-hover:text-sky-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy py-3 px-5 text-sm font-bold text-white transition duration-200 hover:bg-brand-sky hover:text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2"
        >
          <span>Visit Live Site</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-24 bg-brand-cloud py-20 sm:py-28"
      aria-label="Case Studies and Featured Work"
    >
      {/* Anchor alias to support legacy #products hash */}
      <div id="products" className="scroll-mt-24" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-600">
              Featured Work
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
              Proven digital solutions engineered for impact.
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-slate">
              Explore how CEK TOP VENTURES LTD designs, architects, and deploys
              high-performance digital platforms across fintech, legal technology,
              and public sector operations.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Track Record
            </p>
            <p className="text-xl font-extrabold text-brand-navy">
              4 Flagship Deployments
            </p>
          </div>
        </div>

        {/* Responsive CSS Grid: 1-column (mobile), 2-column (tablet/desktop) */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudiesData.map((project) => (
            <CaseStudyCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
