import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

import Cursor from './components/Cursor';
import ProgressBar from './components/ProgressBar';
import SplashLoader from './components/SplashLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstagramSection from './components/InstagramSection';
import AboutSection from './components/AboutSection';
import BrandCollaborationsSection from './components/BrandCollaborationsSection';
import YouTubeSection from './components/YouTubeSection';
import PdfModal from './components/PdfModal';
import ConnectModal from './components/ConnectModal';
import Footer from './components/Footer';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  // Silky smooth scroll exclusively on desktop
  useEffect(() => {
    let lenisInstance = null;

    const startLenis = () => {
      if (lenisInstance) return;
      // Only enable on desktop screens (>= 1024px)
      if (window.innerWidth < 1024) return;

      lenisInstance = new Lenis({
        lerp: 0.08, // Liquid-silk linear interpolation
        smoothWheel: true,
        wheelMultiplier: 0.9, // Gentle, premium wheel velocity
        touchMultiplier: 0, // Keep touch scrolling 100% native on mobile
        autoRaf: true, // High-precision delta-timed animation loop
      });

      window.lenis = lenisInstance;
    };

    const stopLenis = () => {
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
        delete window.lenis;
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        if (!lenisInstance) startLenis();
      } else {
        if (lenisInstance) stopLenis();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      stopLenis();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F0EB] relative selection:bg-[#E91E8C] selection:text-white">
      {/* Custom Cursor Aura & Follower Dot */}
      <Cursor />

      {/* Top Scroll Indicator */}
      <ProgressBar />

      {/* Splash Screen Reveal */}
      <SplashLoader />

      {/* Navigation Header */}
      <Navbar onOpenConnectModal={() => setIsConnectModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenConnectModal={() => setIsConnectModalOpen(true)} />

      {/* Instagram 3D Fan Deck Section */}
      <InstagramSection />

      {/* About Section */}
      <AboutSection onOpenConnectModal={() => setIsConnectModalOpen(true)} />

      {/* Brand Collaborations Section */}
      <BrandCollaborationsSection />

      {/* 🍿 Netflix-Style YouTube Video Showcase Section */}
      <YouTubeSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Free PDF Modal */}
      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Interactive Connect Modal (Instagram DM & WhatsApp Direct Options) */}
      <ConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
      />
    </main>
  );
}
