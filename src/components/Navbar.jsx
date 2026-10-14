import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hammer } from "lucide-react";
import { NAV_LINKS } from "../lib/site";
import { useCopy } from "../lib/i18n";
import LanguageToggle from "./LanguageToggle";

const COPY = {
  en: { cta: "Get a Free Demo", open: "Open menu", close: "Close menu", nav: "Main" },
  he: { cta: "קבלו דמו חינם", open: "פתיחת התפריט", close: "סגירת התפריט", nav: "ראשי" },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const c = useCopy(COPY);
  const links = useCopy(NAV_LINKS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open; Escape closes it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return () => (document.body.style.overflow = "");
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label={c.nav}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5" aria-label="prowebbuilder — home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-white shadow-[0_6px_20px_-6px_rgba(29,78,216,0.7)]">
            <Hammer className="h-5 w-5" strokeWidth={2.4} aria-hidden />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-cloud" dir="ltr">
            pro<span className="text-accent">web</span>builder
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ash transition-colors hover:text-cloud"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />

          {/* Desktop CTA */}
          <a
            href="/#contact"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-gold-soft md:inline-block"
          >
            {c.cta}
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg text-cloud ring-line md:hidden"
            aria-label={open ? c.close : c.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-ink-2/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ash transition-colors hover:bg-ink-3 hover:text-cloud"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-base font-bold text-white"
              >
                {c.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
