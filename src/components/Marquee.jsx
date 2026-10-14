import { useState } from "react";
import { Sparkles, Pause, Play } from "lucide-react";
import { useCopy } from "../lib/i18n";

const COPY = {
  en: {
    items: [
      "Custom design",
      "English websites",
      "Local SEO",
      "Fast load times",
      "Mobile-first",
      "English + עברית",
      "Ongoing support",
      "High conversions",
      "US clients",
    ],
    pause: "Pause scrolling banner",
    play: "Play scrolling banner",
  },
  he: {
    items: [
      "עיצוב מותאם אישית",
      "אתרים באנגלית",
      "קידום SEO מקומי",
      "מהירות טעינה",
      "מותאם לנייד",
      "עברית + English",
      "תמיכה שוטפת",
      "המרות גבוהות",
      "לקוחות בארה״ב",
    ],
    pause: "עצירת הפס הנע",
    play: "הפעלת הפס הנע",
  },
};

function Row({ items, hidden }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-8 pe-8">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-8 whitespace-nowrap">
          <span className="font-display text-lg font-semibold text-cloud/80">{t}</span>
          <Sparkles className="h-4 w-4 shrink-0 text-accent" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  const c = useCopy(COPY);
  // WCAG 2.2.2: auto-moving content needs a way to pause it.
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative border-y border-line bg-ink-2/50">
      <div dir="ltr" className="relative overflow-hidden py-4">
        {/* edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
        />
        <div
          className="marquee-track animate-marquee flex w-max"
          style={paused ? { animationPlayState: "paused" } : undefined}
        >
          <Row items={c.items} />
          <Row items={c.items} hidden />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? c.play : c.pause}
        aria-pressed={paused}
        className="absolute end-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-ink text-cloud transition-colors hover:border-accent/60"
      >
        {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
      </button>
    </div>
  );
}
