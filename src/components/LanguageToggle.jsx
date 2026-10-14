import { Languages } from "lucide-react";
import { useLang } from "../lib/i18n";

// Small pill that flips the whole site between English and Hebrew.
export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLang();
  const next = lang === "en" ? "he" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={next === "he" ? "Switch to Hebrew" : "החלפה לאנגלית"}
      className={`inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-cloud transition-colors hover:border-accent/60 ${className}`}
    >
      <Languages className="h-4 w-4 text-accent" aria-hidden />
      {next === "he" ? (
        <span lang="he" dir="rtl">עברית</span>
      ) : (
        <span lang="en" dir="ltr">English</span>
      )}
    </button>
  );
}
