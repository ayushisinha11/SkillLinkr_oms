import React from 'react';
import BackgroundOrbs from './components/BackgroundOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValuePillars from './components/ValuePillars';
import ThreeRoles from './components/ThreeRoles';
import PublishingChain from './components/PublishingChain';
import GovernanceSection from './components/GovernanceSection';
import PortalsDeepDive from './components/PortalsDeepDive';
import AnalyticsSection from './components/AnalyticsSection';
import KeyCapabilities from './components/KeyCapabilities';
import PositioningQuote from './components/PositioningQuote';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative min-h-screen overflow-x-hidden">
      {/* Full-Page Scroll-Based Parallax Background & Ambient Orbs */}
      <BackgroundOrbs bgOpacity={0.42} />

      {/* Top sticky navigation bar with active sliding indicator */}
      <Navbar />

      {/* Main landing sections */}
      <main className="relative z-10">
        <Hero />
        <ValuePillars />
        <ThreeRoles />
        <PublishingChain />
        <GovernanceSection />
        <PortalsDeepDive />
        <AnalyticsSection />
        <KeyCapabilities />
        <PositioningQuote />
        <CtaSection />
      </main>

      {/* Enterprise Footer */}
      <Footer />
    </div>
  );
}
