import { TrendingDown, Smartphone, SearchX, Clock } from "lucide-react";
import Reveal from "./Reveal";

const PROBLEMS = [
  {
    icon: TrendingDown,
    title: "הלידים הולכים למתחרים",
    body: "אתר איטי או מיושן שולח לקוחות שמוכנים לקנות ישר למתחרה שנראה מקצועי יותר.",
  },
  {
    icon: Smartphone,
    title: "שבור בנייד",
    body: "רוב הלקוחות מגיעים מהטלפון. טקסט זעיר, כפתורים קטנים ופריסה מבולגנת הורסים אמון תוך שניות.",
  },
  {
    icon: SearchX,
    title: "לא נמצאים בגוגל",
    body: "אם אתם לא מדורגים בגוגל על מה שאתם מציעים, אתם מסתמכים על פה-לאוזן בזמן שהמתחרים סוגרים לכם את הלקוחות.",
  },
  {
    icon: Clock,
    title: "אין דרך מהירה להתקשר",
    body: "בלי כפתור חיוג ברור ובלי טופס הצעת מחיר — כל תזוזה מיותרת היא ליד שלא תשמעו ממנו שוב.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative border-y border-line bg-ink-2/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              המחיר הנסתר
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl">
              מה קורה עם אתר חלש
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-ash">
              אתם עושים עבודה מצוינת בשטח. אבל כשהאתר לא משקף את האיכות הזו,
              אתם מפסידים עבודות עוד לפני שהטלפון מצלצל.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-ink-3 p-6 transition-colors duration-300 hover:border-danger/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-danger/10 text-danger">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-cloud">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
