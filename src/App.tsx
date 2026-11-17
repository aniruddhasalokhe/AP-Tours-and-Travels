// ============================================================
// AP Tours & Travels — Main Application
// ============================================================
// Assembles all sections in order. Each section is independently
// editable. Content is driven from src/config/site.ts.
// ============================================================

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileBottomBar from './components/layout/MobileBottomBar';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

import Hero from './components/sections/Hero';
import TrustStrip from './components/sections/TrustStrip';
import Services from './components/sections/Services';
import OurVehicle from './components/sections/OurVehicle';
import PopularRoutes from './components/sections/PopularRoutes';
import HowItWorks from './components/sections/HowItWorks';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Gallery from './components/sections/Gallery';
import FAQ from './components/sections/FAQ';
import PartnerWithUs from './components/sections/PartnerWithUs';
import Contact from './components/sections/Contact';

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

        {/* 5. Popular Routes */}
        <PopularRoutes />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Gallery */}
        <Gallery />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Partner With Us */}
        <PartnerWithUs />

        {/* 11. Contact */}
        <Contact />
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
