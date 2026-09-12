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

  // Initialize 120 FPS Lenis Inertia Smooth Scroll & attach to window
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      smoothTouch: false, // Allows native 120 FPS mobile hardware touch momentum
    });

    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.lenis;
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
