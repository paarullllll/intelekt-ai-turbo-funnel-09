
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import CaseStudySection from '@/components/CaseStudySection';
import FeaturesSection from '@/components/FeaturesSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import OutcomeMetricsSection from '@/components/OutcomeMetricsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-intelekt-background text-intelekt-text">
      <NavBar />
      <main>
        <HeroSection />
        <CaseStudySection />
        <FeaturesSection />
        <ArchitectureSection />
        <OutcomeMetricsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
