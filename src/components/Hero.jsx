import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Star, Globe, MapPin } from "lucide-react";
import SitePreview from "./SitePreview";
import { useCopy } from "../lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const COPY = {
  en: {
    badge: "Built just for your business · English & Hebrew",
    h1a: "Websites that turn",
    h1b: "visitors into customers —",
    h1c: "for every business",
    leadA: "Get a free, custom demo of your new website",
    leadB: "before you pay a dime.",
    leadC: "No risk, no commitment.",
    cta: "Get a Free Demo",
    secondary: "What You Get",
    trust: ["No upfront payment", "English & Hebrew websites", "Serving clients across the US", "Demo in days"],
    chip: "English + עברית",
  },
  he: {
    badge: "נבנה במיוחד לעסק שלכם · עברית ואנגלית",
    h1a: "אתרי אינטרנט שממירים",
    h1b: "גולשים ללקוחות —",
    h1c: "לכל עסק",
    leadA: "קבלו דמו מותאם אישית של האתר החדש שלכם",
    leadB: "עוד לפני שתשלמו שקל.",
    leadC: "בעברית או באנגלית — בלי סיכון, בלי התחייבות.",
    cta: "קבלו דמו חינם",
    secondary: "מה תקבלו",
    trust: ["ללא תשלום מראש", "אתרים בעברית ובאנגלית", "עובדים גם עם לקוחות בארה״ב", "דמו תוך ימים"],
    chip: "עברית + English",
  },
};

const TRUST_ICONS = [ShieldCheck, Globe, MapPin, Zap];

export default function Hero() {
  const reduce = useReducedMotion();
  const c = useCopy(COPY);
  const anim = (i) =>
    reduce
      ? {}
      : { variants: fadeUp, initial: "hidden", animate: "show", custom: i };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Backgrounds */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-grid" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(29,78,216,0.16),transparent_70%)]"
      />

      {/* Floating decorative objects (CSS-animated → respect reduced-motion) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-drift absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
        <div className="animate-float absolute right-[12%] top-[30%] h-24 w-24 rounded-full bg-gold/15 blur-2xl" />
        <div className="animate-pulse-glow absolute bottom-[12%] left-[20%] h-56 w-56 rounded-full bg-gold-2/10 blur-3xl" />
        {/* rotating dashed ring */}
        <div className="animate-spin-slow absolute -right-16 top-[8%] h-64 w-64 rounded-full border border-dashed border-gold/15" />
        <div className="animate-float absolute left-[4%] bottom-[22%] h-3 w-3 rounded-full bg-gold/60" />
        <div className="animate-float-slow absolute right-[28%] top-[16%] h-2 w-2 rounded-full bg-gold/50" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.div
            {...anim(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2 px-3.5 py-1.5 text-xs font-medium text-ash"
          >
            <span className="flex items-center gap-1 text-accent" aria-hidden>
              <Star className="h-3.5 w-3.5 fill-accent" />
            </span>
            {c.badge}
          </motion.div>

          <motion.h1
            {...anim(1)}
            className="mt-5 font-display text-4xl font-bold leading-[1.15] tracking-tight text-cloud sm:text-5xl lg:text-6xl"
          >
            {c.h1a}
            <br className="hidden sm:block" /> {c.h1b}{" "}
            <span className="text-gold-gradient">{c.h1c}</span>
          </motion.h1>

          <motion.p
            {...anim(2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ash"
          >
            {c.leadA}{" "}
            <span className="font-semibold text-cloud">{c.leadB}</span>{" "}
            {c.leadC}
          </motion.p>

          <motion.div {...anim(3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gold-soft glow-gold"
            >
              {c.cta}
              <ArrowRight
                aria-hidden
                className="h-5 w-5 transition-transform duration-200 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
              />
            </a>
            <a
              href="#what-you-get"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ink-2 px-7 py-3.5 text-base font-semibold text-cloud transition-colors duration-200 hover:border-gold/50"
            >
              {c.secondary}
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.ul
            {...anim(4)}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ash"
          >
            {c.trust.map((t, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <li key={t} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-accent" aria-hidden /> {t}
                </li>
              );
            })}
          </motion.ul>
        </div>

        {/* Visual */}
        <div className="relative">
          {/* Floating chip — bilingual */}
          <div
            aria-hidden
            className="animate-float-slow absolute -top-4 -end-2 z-10 hidden items-center gap-1.5 rounded-full border border-line bg-ink-2/90 px-3 py-1.5 text-[11px] font-semibold text-cloud shadow-xl backdrop-blur-sm sm:inline-flex"
          >
            <Globe className="h-3.5 w-3.5 text-accent" />
            {c.chip}
          </div>

          <div className="animate-float-slow">
            <SitePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
