import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  Plus,
  Minus,
  Contrast,
  Link2,
  Type,
  Pause,
  RotateCcw,
  X,
} from "lucide-react";
import { useCopy } from "../lib/i18n";

const STORAGE_KEY = "pwb-a11y";
const MIN_SCALE = 1;
const MAX_SCALE = 1.5;
const STEP = 0.1;

const DEFAULTS = {
  fontScale: 1,
  contrast: false,
  links: false,
  readable: false,
  noMotion: false,
};

const COPY = {
  en: {
    open: "Open accessibility menu",
    title: "Accessibility menu",
    close: "Close accessibility menu",
    textSize: "Text size",
    smaller: "Decrease text size",
    larger: "Increase text size",
    contrast: "High contrast",
    links: "Highlight links",
    readable: "Readable font",
    noMotion: "Stop animations",
    reset: "Reset settings",
    issue: "Having trouble using this site?",
    statement: "Read our accessibility statement and contact us",
  },
  he: {
    open: "פתיחת תפריט נגישות",
    title: "תפריט נגישות",
    close: "סגירת תפריט הנגישות",
    textSize: "גודל הטקסט",
    smaller: "הקטנת הטקסט",
    larger: "הגדלת הטקסט",
    contrast: "ניגודיות גבוהה",
    links: "הדגשת קישורים",
    readable: "גופן קריא",
    noMotion: "עצירת אנימציות",
    reset: "איפוס הגדרות",
    issue: "נתקלתם בבעיית נגישות?",
    statement: "להצהרת הנגישות ופנייה לרכז/ת הנגישות",
  },
};

const round = (n) => Math.round(n * 10) / 10;

// Hoisted so it keeps a stable identity across renders (no remount /
// focus loss when preferences change).
function Toggle({ icon: Icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
        active
          ? "border-accent bg-gold/15 text-cloud"
          : "border-line bg-ink-3 text-ash hover:text-cloud"
      }`}
    >
      <Icon className="h-5 w-5 text-accent" aria-hidden />
      <span className="flex-1 text-start">{label}</span>
      <span
        className={`h-2.5 w-2.5 rounded-full ${active ? "bg-accent" : "bg-line"}`}
        aria-hidden
      />
    </button>
  );
}

function apply(state) {
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", String(state.fontScale));
  root.classList.toggle("a11y-contrast", state.contrast);
  root.classList.toggle("a11y-links", state.links);
  root.classList.toggle("a11y-readable", state.readable);
  root.classList.toggle("a11y-no-motion", state.noMotion);
}

export default function AccessibilityMenu() {
  const c = useCopy(COPY);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(DEFAULTS);
  const [loaded, setLoaded] = useState(false);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  // Load saved preferences once on mount.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved) setState({ ...DEFAULTS, ...saved });
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  // Apply to the DOM + persist whenever preferences change (pure effect).
  useEffect(() => {
    apply(state);
    if (!loaded) return;
    try {
      const isDefault = JSON.stringify(state) === JSON.stringify(DEFAULTS);
      if (isDefault) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, loaded]);

  // Modal dialog behaviour: move focus in, trap Tab, close on Escape,
  // and hand focus back to the trigger when it closes.
  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const panel = panelRef.current;
    panel?.querySelector("button")?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = panel.querySelectorAll("button:not([disabled]), a[href]");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  const toggle = (key) => setState((s) => ({ ...s, [key]: !s[key] }));
  const bumpFont = (dir) =>
    setState((s) => ({
      ...s,
      fontScale: round(
        Math.min(MAX_SCALE, Math.max(MIN_SCALE, s.fontScale + dir * STEP))
      ),
    }));
  const reset = () => setState(DEFAULTS);

  return (
    <>
      {/* Floating trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label={c.open}
        className="fixed bottom-5 start-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gold text-white shadow-[0_10px_30px_-6px_rgba(29,78,216,0.6)] transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <Accessibility className="h-7 w-7" strokeWidth={2.2} aria-hidden />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              aria-hidden
            />

            {/* Panel */}
            <motion.div
              ref={panelRef}
              id="a11y-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="a11y-title"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-5 start-5 z-[70] max-h-[85vh] w-[calc(100vw-2.5rem)] max-w-sm overflow-y-auto rounded-2xl border border-line bg-ink-2 p-5 shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2
                  id="a11y-title"
                  className="flex items-center gap-2 font-display text-lg font-bold text-cloud"
                >
                  <Accessibility className="h-5 w-5 text-accent" aria-hidden />
                  {c.title}
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={c.close}
                  className="grid h-10 w-10 place-items-center rounded-lg text-ash hover:text-cloud ring-line"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              {/* Font size */}
              <div className="mb-3 rounded-xl border border-line bg-ink-3 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-cloud">
                  <Type className="h-5 w-5 text-accent" aria-hidden /> {c.textSize}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => bumpFont(-1)}
                    disabled={state.fontScale <= MIN_SCALE}
                    aria-label={c.smaller}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line text-cloud disabled:opacity-40"
                  >
                    <Minus className="h-5 w-5" aria-hidden />
                  </button>
                  <div
                    className="flex-1 text-center font-display text-sm font-bold text-accent"
                    aria-live="polite"
                  >
                    {Math.round(state.fontScale * 100)}%
                  </div>
                  <button
                    type="button"
                    onClick={() => bumpFont(1)}
                    disabled={state.fontScale >= MAX_SCALE}
                    aria-label={c.larger}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line text-cloud disabled:opacity-40"
                  >
                    <Plus className="h-5 w-5" aria-hidden />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Toggle
                  icon={Contrast}
                  label={c.contrast}
                  active={state.contrast}
                  onClick={() => toggle("contrast")}
                />
                <Toggle
                  icon={Link2}
                  label={c.links}
                  active={state.links}
                  onClick={() => toggle("links")}
                />
                <Toggle
                  icon={Type}
                  label={c.readable}
                  active={state.readable}
                  onClick={() => toggle("readable")}
                />
                <Toggle
                  icon={Pause}
                  label={c.noMotion}
                  active={state.noMotion}
                  onClick={() => toggle("noMotion")}
                />
              </div>

              <button
                type="button"
                onClick={reset}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-ink px-4 py-3 text-sm font-semibold text-cloud transition-colors hover:border-gold/50"
              >
                <RotateCcw className="h-4 w-4" aria-hidden /> {c.reset}
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-ash">
                {c.issue}{" "}
                <Link
                  to="/accessibility"
                  onClick={() => setOpen(false)}
                  className="text-accent underline"
                >
                  {c.statement}
                </Link>
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
