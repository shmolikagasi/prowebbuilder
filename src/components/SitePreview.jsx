import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft, Check, ExternalLink } from "lucide-react";

// Real portfolio — the actual sites prowebbuilder built.
// ⚠️ Put each client's LIVE public URL in `url` so clicking opens the real site.
const PROJECTS = [
  {
    name: "אריאל נדלן",
    tag: 'נדל"ן יוקרה',
    kind: "אתר תדמית",
    url: "https://resonant-blini-d28f51.netlify.app/",
    accent: "gold",
  },
  {
    name: "NL Construction",
    tag: "בנייה ושיפוצים · Encino, CA",
    kind: "אתר עסקי",
    url: "https://nlremodelingla.com/",
    accent: "steel",
  },
];

// Stylised mini-website thumbnail (pure markup, stays crisp).
function MiniThumb({ accent }) {
  const headline = accent === "gold" ? "bg-gold" : "bg-cloud/70";
  const block =
    accent === "gold"
      ? "bg-gradient-to-br from-gold/50 to-gold-2/20"
      : "bg-gradient-to-br from-cloud/25 to-cloud/5";
  return (
    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-line bg-gradient-to-br from-ink to-ink-2">
      <div className="flex items-center gap-1 px-2 py-1.5">
        <span className="h-1 w-1 rounded-full bg-ash/60" />
        <span className="h-1 w-1 rounded-full bg-ash/60" />
        <span className="ms-auto h-1 w-5 rounded-full bg-ash/25" />
      </div>
      <div className="space-y-1 px-2">
        <div className={`h-1.5 w-10 rounded-full ${headline}`} />
        <div className="h-1 w-14 rounded-full bg-ash/30" />
        <div className="h-1 w-11 rounded-full bg-ash/20" />
      </div>
      <div className={`absolute bottom-1.5 end-2 h-4 w-6 rounded ${block}`} />
    </div>
  );
}

/**
 * Hero visual: a browser window presenting prowebbuilder's real, clickable work.
 */
export default function SitePreview() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.28),transparent_65%)] blur-2xl"
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30, rotateX: 6 }}
        animate={reduce ? {} : { opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-2xl"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-line bg-ink-3 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ms-3 hidden flex-1 truncate rounded-md bg-ink px-3 py-1 text-xs text-ash sm:block">
            תיק העבודות שלנו
          </div>
        </div>

        {/* Body */}
        <div className="bg-gradient-to-b from-ink-2 to-ink p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="font-display text-base font-bold text-cloud">
                עבודות אחרונות
              </div>
              <div className="text-[11px] text-ash">
                אתרים אמיתיים שבנינו ללקוחות — לחצו לצפייה
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-semibold text-gold">
              <Check className="h-3 w-3" /> פרויקטים אמיתיים
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} — צפייה באתר (נפתח בכרטיסייה חדשה)`}
                className="group flex items-center gap-3 rounded-xl border border-line bg-ink-3 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-ink-2 hover:shadow-lg hover:shadow-gold/5"
              >
                <MiniThumb accent={p.accent} />

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate font-display text-sm font-bold text-cloud">
                      {p.name}
                    </span>
                    <span className="shrink-0 rounded bg-ink px-1.5 py-0.5 text-[9px] font-medium text-ash">
                      {p.kind}
                    </span>
                  </div>
                  <div className="mt-0.5 truncate text-[11px] text-ash">
                    {p.tag}
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-ash transition-colors group-hover:text-gold">
                    <ExternalLink className="h-3 w-3" /> צפו באתר
                  </div>
                </div>

                <ArrowUpLeft className="h-4 w-4 shrink-0 text-ash transition-all duration-200 group-hover:-translate-x-0.5 group-hover:translate-y-[-2px] group-hover:text-gold" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Honest floating badge */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={reduce ? {} : { opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="absolute -bottom-4 -right-3 flex items-center gap-2 rounded-xl border border-line bg-ink-2/90 px-3 py-2 shadow-xl backdrop-blur-sm sm:-right-6"
      >
        <span className="grid h-5 w-5 place-items-center rounded-full bg-good/15 text-good">
          <Check className="h-3.5 w-3.5" />
        </span>
        <span className="text-[11px] font-semibold text-cloud">
          עבודות אמיתיות, לא תבניות
        </span>
      </motion.div>
    </div>
  );
}
