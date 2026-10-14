import { Check, X } from "lucide-react";
import Reveal from "./Reveal";
import { useCopy } from "../lib/i18n";

const COPY = {
  en: {
    eyebrow: "Why us",
    vs: "vs. everyone else",
    lead: "Same budget, a completely different result. That's the edge.",
    colLabel: "What matters",
    colThem: "Typical agency",
    yes: "Yes",
    no: "No",
    rows: [
      ["See a real demo before you pay", true, false],
      ["Specialists in high-converting business sites", true, false],
      ["Fast delivery — days, not months", true, false],
      ["Built to generate leads and calls", true, false],
      ["Local SEO included", true, "Extra cost"],
      ["Ongoing maintenance & support", true, "Extra cost"],
      ["Zero upfront risk", true, false],
    ],
  },
  he: {
    eyebrow: "למה אנחנו",
    vs: "מול כל השאר",
    lead: "אותו כסף, תוצאה אחרת לגמרי. זה היתרון.",
    colLabel: "מה שחשוב",
    colThem: "סוכנות רגילה",
    yes: "כן",
    no: "לא",
    rows: [
      ["רואים דמו אמיתי לפני שמשלמים", true, false],
      ["מתמחים באתרים ממירים לעסקים", true, false],
      ["אספקה מהירה — ימים, לא חודשים", true, false],
      ["בנוי לייצר לידים ושיחות", true, false],
      ["קידום מקומי (SEO) כלול", true, "בתוספת תשלום"],
      ["תחזוקה ותמיכה שוטפת", true, "בתוספת תשלום"],
      ["ללא סיכון מראש", true, false],
    ],
  },
};

function Cell({ value, yes, no }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 font-semibold text-good">
        <span aria-hidden className="grid h-6 w-6 place-items-center rounded-full bg-good/15">
          <Check className="h-4 w-4" />
        </span>
        <span className="sr-only sm:not-sr-only sm:static">{yes}</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-1.5 text-ash">
        <span aria-hidden className="grid h-6 w-6 place-items-center rounded-full bg-danger/10 text-danger">
          <X className="h-4 w-4" />
        </span>
        <span className="sr-only sm:not-sr-only sm:static">{no}</span>
      </span>
    );
  }
  return <span className="text-xs font-medium text-ash">{value}</span>;
}

export default function WhyUs() {
  const c = useCopy(COPY);

  return (
    <section id="why-us" className="relative py-20 sm:py-28 scroll-mt-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(29,78,216,0.06),transparent_70%)]"
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {c.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl">
              <span dir="ltr" className="inline-block">prowebbuilder</span> {c.vs}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-ash">{c.lead}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          {/* Real table semantics so screen readers announce row/column headers. */}
          <div className="overflow-hidden rounded-2xl border border-line bg-ink-3">
            <table className="w-full table-fixed text-start">
              <caption className="sr-only">
                prowebbuilder {c.vs}
              </caption>
              <colgroup>
                <col className="w-[46%]" />
                <col className="w-[27%]" />
                <col className="w-[27%]" />
              </colgroup>
              <thead className="border-b border-line bg-ink-2">
                <tr>
                  <th scope="col" className="px-4 py-4 text-start text-sm font-semibold text-ash sm:px-6">
                    {c.colLabel}
                  </th>
                  <th scope="col" className="px-2 py-4 text-center font-display text-sm font-bold text-accent sm:text-base">
                    <span dir="ltr">prowebbuilder</span>
                  </th>
                  <th scope="col" className="px-2 py-4 text-center text-sm font-semibold text-ash">
                    {c.colThem}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {c.rows.map(([label, mine, theirs]) => (
                  <tr key={label} className="transition-colors hover:bg-ink-2/50">
                    <th
                      scope="row"
                      className="px-4 py-4 text-start text-sm font-medium text-cloud sm:px-6 sm:text-[15px]"
                    >
                      {label}
                    </th>
                    <td className="px-2 py-4 text-center">
                      <Cell value={mine} yes={c.yes} no={c.no} />
                    </td>
                    <td className="px-2 py-4 text-center">
                      <Cell value={theirs} yes={c.yes} no={c.no} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
