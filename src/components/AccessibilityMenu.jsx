import { useEffect, useState } from "react";
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
          ? "border-gold bg-gold/15 text-cloud"
          : "border-line bg-ink-3 text-ash hover:text-cloud"
      }`}
    >
      <Icon className="h-5 w-5 text-gold" />
      <span className="flex-1 text-start">{label}</span>
      <span
        className={`h-2.5 w-2.5 rounded-full ${active ? "bg-gold" : "bg-line"}`}
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
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(DEFAULTS);
  const [loaded, setLoaded] = useState(false);

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
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="פתיחת תפריט נגישות"
        className="fixed bottom-5 start-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-[0_10px_30px_-6px_rgba(245,166,35,0.6)] transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <Accessibility className="h-7 w-7" strokeWidth={2.2} />
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
              id="a11y-panel"
              role="dialog"
              aria-label="תפריט נגישות"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-5 start-5 z-[70] max-h-[85vh] w-[calc(100vw-2.5rem)] max-w-sm overflow-y-auto rounded-2xl border border-line bg-ink-2 p-5 shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold text-cloud">
                  <Accessibility className="h-5 w-5 text-gold" />
                  תפריט נגישות
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="סגירת תפריט הנגישות"
                  className="grid h-9 w-9 place-items-center rounded-lg text-ash hover:text-cloud ring-line"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Font size */}
              <div className="mb-3 rounded-xl border border-line bg-ink-3 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-cloud">
                  <Type className="h-5 w-5 text-gold" /> גודל הטקסט
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => bumpFont(-1)}
                    disabled={state.fontScale <= MIN_SCALE}
                    aria-label="הקטנת הטקסט"
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line text-cloud disabled:opacity-40"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <div
                    className="flex-1 text-center font-display text-sm font-bold text-gold"
                    aria-live="polite"
                  >
                    {Math.round(state.fontScale * 100)}%
                  </div>
                  <button
                    type="button"
                    onClick={() => bumpFont(1)}
                    disabled={state.fontScale >= MAX_SCALE}
                    aria-label="הגדלת הטקסט"
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line text-cloud disabled:opacity-40"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Toggle
                  icon={Contrast}
                  label="ניגודיות גבוהה"
                  active={state.contrast}
                  onClick={() => toggle("contrast")}
                />
                <Toggle
                  icon={Link2}
                  label="הדגשת קישורים"
                  active={state.links}
                  onClick={() => toggle("links")}
                />
                <Toggle
                  icon={Type}
                  label="גופן קריא"
                  active={state.readable}
                  onClick={() => toggle("readable")}
                />
                <Toggle
                  icon={Pause}
                  label="עצירת אנימציות"
                  active={state.noMotion}
                  onClick={() => toggle("noMotion")}
                />
              </div>

              <button
                type="button"
                onClick={reset}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-ink px-4 py-3 text-sm font-semibold text-cloud transition-colors hover:border-gold/50"
              >
                <RotateCcw className="h-4 w-4" /> איפוס הגדרות
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-ash">
                נתקלתם בבעיית נגישות?{" "}
                <a href="/accessibility" className="text-gold underline">
                  להצהרת הנגישות ופנייה לרכז/ת הנגישות
                </a>
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
