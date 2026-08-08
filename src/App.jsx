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
import FreeResourceSection from './components/FreeResourceSection';
import YouTubeSection from './components/YouTubeSection';
import PdfModal from './components/PdfModal';
import TestimonialsSection from './components/TestimonialsSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Initialize 60 FPS Lenis Inertia Smooth Scroll & attach to window
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
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
      <Navbar onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* Instagram 3D Fan Deck Section (In place of LinkedIn Section) */}
      <InstagramSection />

      {/* About Section */}
      <AboutSection />

      {/* Brand Collaborations Section */}
      <BrandCollaborationsSection />

      {/* Free Resource PDF Section */}
      <FreeResourceSection onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* 🍿 Netflix-Style YouTube Video Showcase Section */}
      <YouTubeSection />

      {/* Testimonials Carousel Section */}
      <TestimonialsSection />

      {/* Connect & Service Offerings Section */}
      <ConnectSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Free PDF Modal */}
      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </main>
  );
}
