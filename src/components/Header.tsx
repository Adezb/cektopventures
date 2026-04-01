import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "IT Services", href: "#services" },
  { label: "Our Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex max-w-[16rem] items-center gap-3 text-white sm:max-w-none"
        >
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 font-heading text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-sky sm:h-[70px] sm:w-[70px]"
            aria-hidden="true"
          >
            <img className="bg-white rounded-xl" src="/public/ctv-logo.png" alt="Logo" />
          </span>
          <span className="font-heading text-lg font-bold uppercase tracking-[0.2em]">
            CEK TOP VENTURES LTD
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-brand-sky"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand-sky px-5 py-3 text-sm font-bold text-brand-navy transition hover:bg-sky-300"
          >
            Start a Conversation
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/15 p-3 text-white lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen ? (
        <nav className="border-t border-white/10 bg-brand-navy px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/5 hover:text-brand-sky"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-2xl bg-brand-sky px-4 py-3 text-center text-sm font-bold text-brand-navy"
              onClick={() => setMenuOpen(false)}
            >
              Start a Conversation
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
