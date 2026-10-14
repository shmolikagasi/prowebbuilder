import {
  PenTool,
  Smartphone,
  Search,
  Gauge,
  LifeBuoy,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";
import { useCopy } from "../lib/i18n";

const ICONS = [PenTool, Smartphone, Search, Gauge, LifeBuoy, TrendingUp];

const COPY = {
  en: {
    eyebrow: "The solution",
    title: "Everything you get",
    lead: "A complete website, built for you end to end, that works as hard as you do.",
    features: [
      {
        title: "Custom-built website",
        body: "Designed from scratch for your industry — not a recycled template. Your brand, your services, your area.",
      },
      {
        title: "Mobile-first",
        body: "A flawless experience on every device. Big call buttons, tap-to-call and a sharp layout on every phone.",
      },
      {
        title: "SEO included",
        body: "Built to rank on Google for local searches, so more customers nearby find you and call.",
      },
      {
        title: "Fast & reliable",
        body: "Quick load times and rock-solid uptime. Visitors never wait — and never bounce.",
      },
      {
        title: "Maintenance & support",
        body: "We update, secure and maintain it. Need a change? Send a message — we handle it while you keep working.",
      },
      {
        title: "More leads, more conversions",
        body: "Every part of the site is designed to turn visitors into calls, inquiries and closed jobs.",
      },
    ],
  },
  he: {
    eyebrow: "הפתרון",
    title: "כל מה שתקבלו",
    lead: "אתר מלא, עשוי עבורכם מקצה לקצה, שעובד קשה בדיוק כמוכם.",
    features: [
      {
        title: "אתר בהתאמה אישית",
        body: "עיצוב מאפס, מותאם לתחום שלכם — לא תבנית משומשת. המותג שלכם, השירותים שלכם, האזור שלכם.",
      },
      {
        title: "מותאם לנייד",
        body: "חוויה מושלמת בכל מכשיר. כפתורי חיוג גדולים, לחיצה-להתקשרות ופריסה חדה בכל טלפון.",
      },
      {
        title: "כולל קידום SEO",
        body: "בנוי לדירוג גבוה בגוגל בחיפושים מקומיים, כדי שיותר לקוחות באזור ימצאו אתכם ויתקשרו.",
      },
      {
        title: "מהיר ואמין",
        body: "זמני טעינה מהירים ויציבות מלאה. הגולשים אף פעם לא מחכים — ולא נוטשים.",
      },
      {
        title: "תחזוקה ותמיכה",
        body: "אנחנו מעדכנים, מאבטחים ומתחזקים. צריכים שינוי? שולחים הודעה — אנחנו מטפלים, אתם ממשיכים לעבוד.",
      },
      {
        title: "יותר לידים, יותר המרות",
        body: "כל חלק באתר מתוכנן להפוך גולשים לשיחות, פניות ועבודות סגורות.",
      },
    ],
  },
};

export default function WhatYouGet() {
  const c = useCopy(COPY);

  return (
    <section id="services" className="py-20 sm:py-28 scroll-mt-20">
      <span id="what-you-get" className="block -translate-y-20" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {c.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl">
              {c.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-ash">{c.lead}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.features.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink-3 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                  {/* corner glow on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -start-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/20"
                  />
                  <span aria-hidden className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-accent ring-1 ring-gold/20 transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-cloud">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ash">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
