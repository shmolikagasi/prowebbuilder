import { Check, X } from "lucide-react";
import Reveal from "./Reveal";

const ROWS = [
  ["רואים דמו אמיתי לפני שמשלמים", true, false],
  ["מתמחים באתרים ממירים לעסקים", true, false],
  ["אספקה מהירה — ימים, לא חודשים", true, false],
  ["בנוי לייצר לידים ושיחות", true, false],
  ["קידום מקומי (SEO) כלול", true, "בתוספת תשלום"],
  ["תחזוקה ותמיכה שוטפת", true, "בתוספת תשלום"],
  ["ללא סיכון מראש", true, false],
];

function Cell({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 font-semibold text-good">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-good/15">
          <Check className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline">כן</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-1.5 text-ash">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-danger/10 text-danger">
          <X className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline">לא</span>
      </span>
    );
  }
  return <span className="text-xs font-medium text-ash">{value}</span>;
}

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 scroll-mt-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(29,78,216,0.06),transparent_70%)]"
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              למה אנחנו
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl">
              <span dir="ltr" className="inline-block">prowebbuilder</span> מול כל השאר
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-ash">
              אותו כסף, תוצאה אחרת לגמרי. זה היתרון.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-line bg-ink-3">
            {/* Header */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 border-b border-line bg-ink-2 px-4 py-4 sm:px-6">
              <span className="text-sm font-semibold text-ash">מה שחשוב</span>
              <span className="text-center font-display text-sm font-bold text-gold sm:text-base" dir="ltr">
                prowebbuilder
              </span>
              <span className="text-center text-sm font-semibold text-ash">
                סוכנות רגילה
              </span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-line">
              {ROWS.map(([label, mine, theirs]) => (
                <div
                  key={label}
                  className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 px-4 py-4 transition-colors hover:bg-ink-2/50 sm:px-6"
                >
                  <span className="text-sm font-medium text-cloud sm:text-[15px]">
                    {label}
                  </span>
                  <span className="flex justify-center">
                    <Cell value={mine} />
                  </span>
                  <span className="flex justify-center">
                    <Cell value={theirs} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
