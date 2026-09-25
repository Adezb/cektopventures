import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";

interface FormState {
  fullName: string;
  email: string;
  organization: string;
  service: string;
  timeline: string;
  message: string;
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  organization: "",
  service: "Custom Software Development",
  timeline: "1-3 months",
  message: "",
};

const serviceOptions = [
  "Custom Software Development",
  "Web Development & Design",
  "Mobile App Development",
  "Web Content Management & SEO",
  "Graphics Design & Branding",
  "Systems Troubleshooting & Support",
  "IT Consultancy & Advisory",
];

const timelineOptions = [
  "Immediate (< 1 month)",
  "1-3 months",
  "3-6 months",
  "Advisory / Scoping Phase",
];

export function LeadCapture() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedBrief, setSubmittedBrief] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please share a brief summary of your project goals";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please provide at least 15 characters of detail";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORM_ACCESS_KEY,
      subject: `New B2B Project Inquiry from ${formData.fullName}`,
      from_name: formData.fullName,
      email: formData.email,
      organization: formData.organization || "N/A",
      service: formData.service,
      timeline: formData.timeline,
      message: formData.message,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (response.ok) {
        // Retain the WhatsApp fallback summary formatting
        const briefSummary =
          `*New B2B Project Inquiry - CEK TOP VENTURES LTD*\n` +
          `• Name: ${formData.fullName}\n` +
          `• Email: ${formData.email}\n` +
          `• Organization: ${formData.organization || "N/A"}\n` +
          `• Service: ${formData.service}\n` +
          `• Timeline: ${formData.timeline}\n` +
          `• Project Brief: ${formData.message}`;

        setSubmittedBrief(briefSummary);
        setStatus("success");
      } else {
        setStatus("error"); // Assuming you have an error state handled in the UI
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setStatus("idle");
    setSubmittedBrief("");
  };

  const getWhatsAppHandoffUrl = () => {
    const hasFormData = Boolean(
      formData.fullName.trim() ||
      formData.email.trim() ||
      formData.organization.trim() ||
      formData.message.trim()
    );

    const structuredSummary = hasFormData
      ? `*New B2B Project Inquiry - CEK TOP VENTURES LTD*\n` +
      `• Name: ${formData.fullName || "N/A"}\n` +
      `• Email: ${formData.email || "N/A"}\n` +
      `• Organization: ${formData.organization || "N/A"}\n` +
      `• Service: ${formData.service}\n` +
      `• Timeline: ${formData.timeline}\n` +
      `• Project Brief: ${formData.message || "N/A"}`
      : "";

    const encoded = encodeURIComponent(
      submittedBrief ||
      structuredSummary ||
      "Hello CEK TOP VENTURES, I would like to enquire about your tech services."
    );
    return `https://wa.me/2348022485204?text=${encoded}`;
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-gradient-to-b from-brand-cloud via-white to-white py-20 sm:py-28"
    >
      <div id="contact-form" className="scroll-mt-24" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-brand-navy text-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.1fr_1.3fr]">
            {/* Left Column: Value Prop & Trust Elements */}
            <div className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-tech-grid bg-[size:36px_36px] opacity-15" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky/30 bg-brand-sky/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-sky">
                  <Sparkles size={14} />
                  Initiate an Engagement
                </div>

                <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to build or scale your digital solution?
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Share your technical roadmap, product concept, or enterprise
                  systems need. Our senior engineering team will review and respond
                  with an architectural scope within 24 business hours.
                </p>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-sky/15 text-brand-sky">
                      <Clock size={16} />
                    </div>
                    <span>Rapid 24-hour scoping & feasibility review</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-sky/15 text-brand-sky">
                      <ShieldCheck size={16} />
                    </div>
                    <span>Non-Disclosure & IP protection guaranteed</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-sky/15 text-brand-sky">
                      <Mail size={16} />
                    </div>
                    <span>Direct executive desk: <strong className="text-white">hello@cektopventures.com</strong></span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-400">
                <p>
                  Prefer direct executive messaging? You can also reach our engineering
                  lead directly on WhatsApp at{" "}
                  <a
                    href="https://wa.me/2348022485204"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-brand-sky underline hover:text-white"
                  >
                    +234 802 248 5204
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right Column: Form State Container */}
            <div className="border-t border-white/10 bg-slate-900/60 p-8 sm:p-12 lg:border-t-0 lg:border-l lg:p-16">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col justify-center text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-white sm:text-3xl">
                    Inquiry Received Successfully
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>.
                    Our technical lead has received your project parameters and will
                    contact you at <strong className="text-brand-sky">{formData.email}</strong>.
                  </p>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-xs text-slate-300">
                    <p className="font-bold uppercase tracking-wider text-brand-sky">
                      Inquiry Summary
                    </p>
                    <p className="mt-1"><strong>Service:</strong> {formData.service}</p>
                    <p><strong>Timeline:</strong> {formData.timeline}</p>
                    <p className="mt-1 italic text-slate-400">"{formData.message}"</p>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                      href={getWhatsAppHandoffUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-500 shadow-lg"
                    >
                      <MessageSquare size={16} />
                      Transmit via WhatsApp Instantly
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-brand-sky hover:text-brand-sky"
                    >
                      Submit Another Project
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                      Project Parameters
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out the fields below for an immediate technical assessment.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Adebayo Adeleke"
                        aria-invalid={Boolean(errors.fullName)}
                        className={`mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:outline-none focus:ring-2 ${errors.fullName
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-white/15 focus:border-brand-sky focus:ring-brand-sky"
                          }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                          <AlertCircle size={12} />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                      >
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. adebayo@company.com"
                        aria-invalid={Boolean(errors.email)}
                        className={`mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:outline-none focus:ring-2 ${errors.email
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-white/15 focus:border-brand-sky focus:ring-brand-sky"
                          }`}
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                          <AlertCircle size={12} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Organization Name */}
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                      >
                        Organization / Firm
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Apex Ventures Ltd"
                        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-sky"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                      >
                        Primary Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900 px-4 py-3 text-sm text-white transition focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-sky"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Timeline */}
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Desired Deployment Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900 px-4 py-3 text-sm text-white transition focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-sky"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Brief */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Project Brief / Specifications *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your application goals, target audience, preferred integrations (e.g. Paystack, Supabase), and key deliverables..."
                      aria-invalid={Boolean(errors.message)}
                      className={`mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:outline-none focus:ring-2 ${errors.message
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-white/15 focus:border-brand-sky focus:ring-brand-sky"
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                        <AlertCircle size={12} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-300">
                      <p className="flex items-center gap-1.5 font-bold text-rose-300">
                        <AlertCircle size={14} />
                        Transmission encountered an issue.
                      </p>
                      <p className="mt-1">
                        Please try submitting again, or transfer your brief directly to our engineering desk via{" "}
                        <a
                          href={getWhatsAppHandoffUrl()}
                          target="_blank"
                          rel="noreferrer"
                          className="font-bold text-white underline hover:text-brand-sky"
                        >
                          WhatsApp
                        </a>{" "}
                        or email us at{" "}
                        <a
                          href="mailto:hello@cektopventures.com"
                          className="font-bold text-white underline hover:text-brand-sky"
                        >
                          hello@cektopventures.com
                        </a>.
                      </p>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-sky px-6 py-4 text-base font-bold text-brand-navy shadow-lg transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Project Parameters</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
