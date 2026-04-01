import { Link } from "react-router-dom";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  summary: string;
  sections: LegalSection[];
};

export function LegalPage({ title, summary, sections }: LegalPageProps) {
  return (
    <section className="bg-brand-cloud py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel sm:p-10">
          <Link
            to="/"
            className="text-sm font-bold uppercase tracking-[0.24em] text-sky-700 transition hover:text-brand-navy"
          >
            Back to Home
          </Link>

          <h1 className="mt-6 font-heading text-4xl font-bold text-brand-navy sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-brand-slate">{summary}</p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Effective Date:January 1, 2026
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <article key={section.heading} className="border-t border-slate-100 pt-8">
                <h2 className="font-heading text-2xl font-bold text-brand-navy">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-brand-slate">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
