import React, { useState } from 'react';

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
