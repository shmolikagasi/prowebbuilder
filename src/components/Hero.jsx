import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Zap, Star, Globe, MapPin } from "lucide-react";
import SitePreview from "./SitePreview";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
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

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.div
            {...anim(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2 px-3.5 py-1.5 text-xs font-medium text-ash"
          >
            <span className="flex items-center gap-1 text-gold">
              <Star className="h-3.5 w-3.5 fill-gold" />
            </span>
            נבנה במיוחד לעסק שלכם · עברית ואנגלית
          </motion.div>

          <motion.h1
            {...anim(1)}
            className="mt-5 font-display text-4xl font-bold leading-[1.15] tracking-tight text-cloud sm:text-5xl lg:text-6xl"
          >
            אתרי אינטרנט שממירים
            <br className="hidden sm:block" /> גולשים ללקוחות —{" "}
            <span className="text-gold-gradient">לכל עסק</span>
          </motion.h1>

          <motion.p
            {...anim(2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ash"
          >
            קבלו דמו מותאם אישית של האתר החדש שלכם{" "}
            <span className="font-semibold text-cloud">עוד לפני שתשלמו שקל.</span>{" "}
            בעברית או באנגלית — בלי סיכון, בלי התחייבות.
          </motion.p>

          <motion.div {...anim(3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gold-soft glow-gold"
            >
              קבלו דמו חינם
              <ArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" />
            </a>
            <a
              href="#what-you-get"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ink-2 px-7 py-3.5 text-base font-semibold text-cloud transition-colors duration-200 hover:border-gold/50"
            >
              מה תקבלו
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            {...anim(4)}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ash"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> ללא תשלום מראש
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe className="h-4 w-4 text-gold" /> אתרים בעברית ובאנגלית
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> עובדים גם עם לקוחות בארה״ב
            </span>
            <span className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-gold" /> דמו תוך ימים
            </span>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative">
          {/* Floating chip — bilingual */}
          <div className="animate-float-slow absolute -top-4 -left-2 z-10 hidden items-center gap-1.5 rounded-full border border-line bg-ink-2/90 px-3 py-1.5 text-[11px] font-semibold text-cloud shadow-xl backdrop-blur-sm sm:inline-flex">
            <Globe className="h-3.5 w-3.5 text-gold" />
            עברית + English
          </div>

          <div className="animate-float-slow">
            <SitePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
