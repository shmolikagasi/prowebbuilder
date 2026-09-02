import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalPage({ title, subtitle, updated, children }) {
  return (
    <div className="min-h-dvh bg-ink text-cloud">
      <Navbar />
      <main id="main">
        <header className="relative overflow-hidden border-b border-line pt-32 pb-14 sm:pt-40">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(29,78,216,0.12),transparent_70%)]"
          />
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ash transition-colors hover:text-gold"
            >
              <ArrowRight className="h-4 w-4" /> חזרה לעמוד הבית
            </Link>
            <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl">
              {title}
            </h1>
            {subtitle && <p className="mt-3 text-lg text-ash">{subtitle}</p>}
            {updated && (
              <p className="mt-4 text-sm text-ash">
                עודכן לאחרונה:{" "}
                <span className="font-semibold text-cloud">{updated}</span>
              </p>
            )}
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="prose-legal">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
