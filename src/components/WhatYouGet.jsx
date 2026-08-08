import {
  PenTool,
  Smartphone,
  Search,
  Gauge,
  LifeBuoy,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: PenTool,
    title: "אתר בהתאמה אישית",
    body: "עיצוב מאפס, מותאם לתחום שלכם — לא תבנית משומשת. המותג שלכם, השירותים שלכם, האזור שלכם.",
  },
  {
    icon: Smartphone,
    title: "מותאם לנייד",
    body: "חוויה מושלמת בכל מכשיר. כפתורי חיוג גדולים, לחיצה-להתקשרות ופריסה חדה בכל טלפון.",
  },
  {
    icon: Search,
    title: "כולל קידום SEO",
    body: "בנוי לדירוג גבוה בגוגל בחיפושים מקומיים, כדי שיותר לקוחות באזור ימצאו אתכם ויתקשרו.",
  },
  {
    icon: Gauge,
    title: "מהיר ואמין",
    body: "זמני טעינה מהירים ויציבות מלאה. הגולשים אף פעם לא מחכים — ולא נוטשים.",
  },
  {
    icon: LifeBuoy,
    title: "תחזוקה ותמיכה",
    body: "אנחנו מעדכנים, מאבטחים ומתחזקים. צריכים שינוי? שולחים הודעה — אנחנו מטפלים, אתם ממשיכים לעבוד.",
  },
  {
    icon: TrendingUp,
    title: "יותר לידים, יותר המרות",
    body: "כל חלק באתר מתוכנן להפוך גולשים לשיחות, פניות ועבודות סגורות.",
  },
];

export default function WhatYouGet() {
  return (
    <section id="services" className="py-20 sm:py-28 scroll-mt-20">
      <span id="what-you-get" className="block -translate-y-20" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              הפתרון
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl">
              כל מה שתקבלו
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-ash">
              אתר מלא, עשוי עבורכם מקצה לקצה, שעובד קשה בדיוק כמוכם.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink-3 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                {/* corner glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/20"
                />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-cloud">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ash">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
