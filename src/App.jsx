import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AccessibilityMenu from "./components/AccessibilityMenu";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import { useCopy } from "./lib/i18n";

export default function App() {
  const skip = useCopy({ en: "Skip to main content", he: "דלג לתוכן הראשי" });

  return (
    <>
      {/* Skip link — first focusable element for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:z-[100] focus:top-4 focus:start-4 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        {skip}
      </a>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <AccessibilityMenu />
    </>
  );
}
