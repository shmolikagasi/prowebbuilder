import { Globe, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useCopy } from "../lib/i18n";

const COPY = {
  en: {
    pill: "English · עברית",
    title: "Bilingual websites, done right",
    bodyA:
      "Websites in English, Hebrew or both — for local and international audiences, with full LTR and RTL support. We already build for US businesses, like",
    client: "NL Construction, California",
    cta: "Talk to us",
  },
  he: {
    pill: "עברית · English",
    title: "בונים אתרים גם באנגלית",
    bodyA:
      "אתרים דו-לשוניים לקהל מקומי ובינלאומי, עם תמיכה מלאה בכיווניות RTL ו-LTR. כבר עבדנו עם לקוח מארה״ב —",
    client: "NL Construction, קליפורניה",
    cta: "רוצים אתר באנגלית?",
  },
};

export default function BilingualHighlight() {
  const c = useCopy(COPY);

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-ink-2 to-ink-3 p-8 sm:p-10">
            {/* animated glow */}
            <div
              aria-hidden
              className="animate-pulse-glow pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl"
            />
            <div
              aria-hidden
              className="animate-spin-slow pointer-events-none absolute -left-10 -bottom-16 h-48 w-48 rounded-full border border-dashed border-gold/15"
            />

            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <span aria-hidden className="animate-float grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gold/10 text-accent ring-1 ring-gold/25">
                <Globe className="h-8 w-8" />
              </span>

              <div className="flex-1">
                <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-accent">
                  {c.pill}
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-cloud sm:text-3xl">
                  {c.title}
                </h2>
                <p className="mt-2 max-w-xl text-ash">
                  {c.bodyA}{" "}
                  <span className="font-semibold text-cloud">{c.client}</span>.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-gold-soft"
              >
                {c.cta}
                <ArrowRight
                  aria-hidden
                  className="h-5 w-5 transition-transform duration-200 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
