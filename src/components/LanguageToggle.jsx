import { useLang } from "../lib/i18n";

// Low-key text link (lives in the footer's legal row) that flips the whole
// site between English and Hebrew.
export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  const next = lang === "en" ? "he" : "en";

  return (
    <button
      type="button"
      onClick={() => {
        setLang(next);
        window.scrollTo({ top: 0 });
      }}
      className="transition-colors hover:text-cloud"
    >
      {next === "he" ? (
        <span lang="he" dir="rtl">עברית</span>
      ) : (
        <span lang="en" dir="ltr">English</span>
      )}
    </button>
  );
}
