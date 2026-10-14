import { Link } from "react-router-dom";
import { Hammer } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import LanguageToggle from "./LanguageToggle";
import { SITE, NAV_LINKS, LEGAL_LINKS } from "../lib/site";
import { useCopy } from "../lib/i18n";

const COPY = {
  en: { tagline: "Websites that bring in customers.", nav: "Footer", legal: "Legal", ig: "prowebbuilder on Instagram (opens in a new tab)" },
  he: { tagline: "אתרים שמביאים לקוחות.", nav: "תחתית", legal: "מידע משפטי", ig: "prowebbuilder באינסטגרם (נפתח בכרטיסייה חדשה)" },
};

export default function Footer() {
  const c = useCopy(COPY);
  const links = useCopy(NAV_LINKS);
  const legal = useCopy(LEGAL_LINKS);

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Link to="/" className="flex items-center gap-2.5" aria-label="prowebbuilder — home">
            <span aria-hidden className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-white">
              <Hammer className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-cloud" dir="ltr">
              pro<span className="text-accent">web</span>builder
            </span>
          </Link>

          <nav aria-label={c.nav} className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ash transition-colors hover:text-cloud"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={c.ig}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-cloud transition-colors hover:border-gold/50"
          >
            <InstagramIcon className="h-4 w-4 text-accent" />
            <span dir="ltr">@{SITE.instagramHandle}</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-center text-sm text-ash sm:flex-row sm:text-start">
          <nav aria-label={c.legal} className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <Link key={l.to} to={l.to} className="transition-colors hover:text-cloud">
                {l.label}
              </Link>
            ))}
            <LanguageToggle />
          </nav>
          <p>
            © {new Date().getFullYear()} {SITE.brand} — {c.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
