import { Sparkles } from "lucide-react";

const ITEMS = [
  "עיצוב מותאם אישית",
  "אתרים באנגלית",
  "קידום SEO מקומי",
  "מהירות טעינה",
  "מותאם לנייד",
  "עברית + English",
  "תמיכה שוטפת",
  "המרות גבוהות",
  "לקוחות בארה״ב",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-8 pe-8">
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center gap-8 whitespace-nowrap">
          <span className="font-display text-lg font-semibold text-cloud/80">
            {t}
          </span>
          <Sparkles className="h-4 w-4 shrink-0 text-gold" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      dir="ltr"
      className="relative overflow-hidden border-y border-line bg-ink-2/50 py-4"
    >
      {/* edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
      />
      <div className="marquee-track animate-marquee flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
