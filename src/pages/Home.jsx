import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import ProblemSection from "../components/ProblemSection";
import WhatYouGet from "../components/WhatYouGet";
import BilingualHighlight from "../components/BilingualHighlight";
import WhyUs from "../components/WhyUs";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh bg-ink text-cloud">
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <ProblemSection />
        <WhatYouGet />
        <BilingualHighlight />
        <WhyUs />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
