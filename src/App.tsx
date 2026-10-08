import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DashboardPreview } from './components/DashboardPreview';
import { Features } from './components/Features';
import { QRFlow } from './components/QRFlow';
import { SellerBenefits } from './components/SellerBenefits';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  return (
    <div className="w-full min-h-screen bg-surface-base text-slate-800 flex flex-col selection:bg-blue-100 selection:text-blue-900 min-w-0">
      {/* 1. Navbar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main className="w-full flex-1 min-w-0">
        {/* 2. Hero Section */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Solution Section */}
        <SolutionSection />

        {/* 5. Product Preview (Dashboard) */}
        <DashboardPreview />

        {/* 6. Feature Section */}
        <Features />

        {/* 7. QR Code Flow */}
        <QRFlow />

        {/* 8. Seller Benefits */}
        <SellerBenefits />

        {/* 9. How It Works */}
        <HowItWorks />

        {/* 10. Business Model */}
        <Pricing onOpenDemo={handleOpenDemo} />

        {/* 11. About WarrantyIDEA */}
        <About />

        {/* 12. CTA */}
        <CTA onOpenDemo={handleOpenDemo} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Interactive Live Demo Simulator */}
      <DemoModal isOpen={isDemoOpen} onClose={handleCloseDemo} />
    </div>
  );
}

export default App;
