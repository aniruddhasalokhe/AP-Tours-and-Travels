// ============================================================
// AP Tours & Travels — Main Application
// ============================================================
// Assembles all sections in order. Content is driven from src/config/site.ts.
// ============================================================

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileBottomBar from './components/layout/MobileBottomBar';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

import Hero from './components/sections/Hero';
import TrustStrip from './components/sections/TrustStrip';
import Services from './components/sections/Services';
import OurVehicle from './components/sections/OurVehicle';
import WhyChooseUs from './components/sections/WhyChooseUs';
import PartnerWithUs from './components/sections/PartnerWithUs';
import Contact from './components/sections/Contact';
import FAQ from './components/sections/FAQ';

function App() {
  return (
    <div className="min-h-screen font-['Inter']">
      {/* --- Sticky Header --- */}
      <Header />

      {/* --- Main Content --- */}
      <main>
        {/* 1. Hero with Quick Quote Form */}
        <Hero />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Our Services */}
        <Services />

        {/* 4. Our Vehicle */}
        <OurVehicle />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Partner With Us */}
        <PartnerWithUs />

        {/* 7. Contact */}
        <Contact />

        {/* 8. Frequently Asked Questions (At the last) */}
        <FAQ />
      </main>

      {/* --- Footer --- */}
      <Footer />

      {/* --- Floating Elements --- */}
      <MobileBottomBar />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
