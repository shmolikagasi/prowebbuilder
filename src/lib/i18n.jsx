import { createContext, useContext, useEffect, useState } from "react";

// Site language. English (LTR) is the default; Hebrew (RTL) is an opt-in toggle.
const STORAGE_KEY = "pwb-lang";
export const LANGS = ["en", "he"];

const TITLES = {
  en: "prowebbuilder — Websites That Convert, for Every Business",
  he: "prowebbuilder — אתרים ממירים לכל עסק",
};

const LangContext = createContext({ lang: "en", setLang: () => {} });

function initialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.includes(q)) return q;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    /* ignore */
  }
  return "en";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  // Keep <html lang/dir> and the title in sync so screen readers switch voice
  // and the layout flips direction.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "he" ? "rtl" : "ltr";
    document.title = TITLES[lang];
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

// Pick the current language's entry from a { en, he } copy object.
export function useCopy(copy) {
  const { lang } = useLang();
  return copy[lang] ?? copy.en;
}
