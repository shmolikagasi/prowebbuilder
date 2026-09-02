import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AccessibilityMenu from "./components/AccessibilityMenu";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AccessibilityStatement from "./pages/AccessibilityStatement";

export default function App() {
  return (
    <>
      {/* Skip link — first focusable element for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:z-[100] focus:top-4 focus:start-4 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        דלג לתוכן הראשי
      </a>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <AccessibilityMenu />
    </>
  );
}
