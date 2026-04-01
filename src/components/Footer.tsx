import { Mail, MapPin, MessageCircleMore, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <p className="font-heading text-2xl font-bold text-brand-navy">
            CEK TOP VENTURES LTD
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-brand-slate">
            Building modern software, dependable IT services, and digital
            solutions that help businesses move with clarity and confidence.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-brand-slate">
            CEK TOP VENTURES LTD is a registered technology firm (RC: 1928419).
            We are a Software-as-a-Service (SaaS) provider and do not offer
            banking, investment, or regulated financial services.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-sky-200 hover:text-sky-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.75rem] bg-brand-cloud p-6">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 text-sky-600" size={20} />
            <div>
              <p className="font-semibold text-brand-navy">Office Address</p>
              <p className="text-brand-slate">19, Lateef Ali Crescent, Soluyi, Gbagada, Lagos, Nigeria</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-1 text-sky-600" size={20} />
            <div>
              <p className="font-semibold text-brand-navy">Support Email</p>
              <a
                href="mailto:support@cektopventures.com"
                className="text-brand-slate transition hover:text-sky-700"
              >
                cektopventures@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageCircleMore className="mt-1 text-sky-600" size={20} />
            <div>
              <p className="font-semibold text-brand-navy">WhatsApp</p>
              <a
                href="https://wa.me/2348022485204"
                className="text-brand-slate transition hover:text-sky-700"
              >
                +234 802 248 5204
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Shield className="mt-1 text-sky-600" size={20} />
            <div>
              <p className="font-semibold text-brand-navy">CAC RC Number</p>
              <p className="text-brand-slate">RC-1928419</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
