import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenPdfModal }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPortraitHovered, setIsPortraitHovered] = useState(false);

  // Video media configuration (change to true if using video file in public/assets/)
  const isVideoMedia = false; 
  const mediaSrc = isVideoMedia ? '/assets/kamna-video.mp4' : '/assets/kamna-portrait.jpg';

  // Toggle portrait pop & tilt state on tap (mobile friendly)
  const handlePortraitClick = () => {
    setIsPortraitHovered((prev) => !prev);
  };

  return (
    <section className="relative flex flex-col bg-[#0A0A0A] min-h-[92vh] justify-center px-6 sm:px-14 md:px-24 py-10 overflow-hidden">
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute top-1/4 right-10 z-0 w-[450px] h-[450px] rounded-full blur-[100px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(233,30,140,0.5) 0%, rgba(255,179,203,0.2) 50%, transparent 80%)',
        }}
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Heading & Info */}
        <div className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-1 text-center lg:text-left">
          <div>
            <h1
              className="font-black uppercase leading-[1.05] tracking-tight break-words text-[#F5F0EB]"
              style={{ fontSize: 'clamp(2.8rem, 8.5vw, 7.5rem)' }}
            >
              <span className="inline-block mr-[0.25em]">Hi,</span>
              <span className="inline-block mr-[0.25em]">I'm</span>
              <span className="inline-block bg-gradient-to-r from-[#F5F0EB] via-[#FFB3CB] to-[#E91E8C] bg-clip-text text-transparent">
                Kamna
              </span>
            </h1>
          </div>

          <div className="flex flex-col gap-3 max-w-xl mx-auto lg:mx-0">
            <p
              className="font-light uppercase leading-snug tracking-wide text-[#F5F0EB] flex items-center justify-center lg:justify-start gap-2"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.35rem)' }}
            >
              Building my brand while teaching you to build yours <span className="text-[#E91E8C]">⭐️</span>
            </p>
            <p
              className="font-light leading-relaxed tracking-wide text-[#F5F0EB]/70"
              style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1.1rem)' }}
            >
              Personal brand strategist, Content creator, storyteller, and Ghostwriter.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center lg:justify-start pt-2">
            <button
              type="button"
              onClick={onOpenPdfModal}
              className="group relative cursor-pointer overflow-hidden rounded-full border border-[#F5F0EB]/40 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F5F0EB] transition-all duration-300 hover:border-[#E91E8C]/80 hover:text-[#E91E8C] hover:shadow-[0_0_20px_rgba(255,107,174,0.4)] sm:px-10 sm:py-4 sm:text-sm min-w-[14rem] text-center"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full rounded-full bg-[#E91E8C]/15 transition-transform duration-300 group-hover:translate-x-0"
                aria-hidden="true"
              />
              <span className="relative flex items-center justify-center gap-2">
                Get Free PDF
                <Sparkles className="w-4 h-4 text-[#FFB3CB]" />
              </span>
            </button>

            <a
              href="https://www.linkedin.com/in/kamna-bharadwaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient group relative inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_4px_30px_rgba(212,0,108,0.6)] active:scale-[0.97] sm:px-11 sm:py-4 sm:text-sm cursor-pointer overflow-hidden min-w-[14rem]"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden="true"
              />
              <span className="relative flex items-center gap-2">
                Connect With Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Polaroid Portrait Frame (Supports Image & Auto-Playing Video) */}
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end justify-center py-4">
          
          {/* Floating Surprise Hint Badge Directly Above Portrait Frame */}
          <div className="mb-3 z-40 whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E91E8C]/50 bg-[#E91E8C]/20 px-3.5 py-1 text-[11px] font-bold text-[#FFB3CB] shadow-lg animate-pulse uppercase tracking-wider backdrop-blur-md">
              ✨ Tap to see surprise
            </span>
          </div>

          <div
            onClick={handlePortraitClick}
            onMouseEnter={() => setIsPortraitHovered(true)}
            onMouseLeave={() => setIsPortraitHovered(false)}
            className="relative w-[min(75vw,340px)] sm:w-[360px] my-2 cursor-pointer select-none"
          >
            {/* Polaroid Radial Glow */}
            <div
              className={`pointer-events-none absolute inset-0 m-auto h-[85%] w-[85%] rounded-full blur-3xl bg-gradient-to-r from-[#FFB3CB]/40 via-[#E91E8C]/30 to-transparent transition-opacity duration-500 ${
                isPortraitHovered ? 'opacity-100' : 'opacity-60'
              }`}
            />

            {/* White Polaroid Card with Tilt & Pop Animation */}
            <div
              className={`relative bg-white p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] rounded-sm transform transition-all duration-500 ease-out ${
                isPortraitHovered
                  ? 'rotate-3 scale-[1.04] -translate-y-3 shadow-[0_35px_70px_-15px_rgba(233,30,140,0.4)]'
                  : 'rotate-0 scale-100 translate-y-0'
              }`}
            >
              <div className="relative overflow-hidden aspect-[2/3] bg-[#F5F0EB]">
                {isVideoMedia ? (
                  <video
                    src={mediaSrc}
                    poster="/assets/kamna-portrait.jpg"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover object-center select-none"
                  />
                ) : (
                  <img
                    src={mediaSrc}
                    alt="Kamna Bhardwaj — Content Strategist"
                    className="w-full h-full object-cover object-center select-none"
                  />
                )}
                
                {/* Audio/Video Mute Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                  aria-label="Toggle Mute"
                  className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0A0A0A]/70 text-[#F5F0EB] backdrop-blur-md transition-colors hover:bg-[#0A0A0A]/90 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#E91E8C]" />}
                </button>
              </div>

              {/* Handwritten Polaroid Caption */}
              <p className="text-center text-[#0A0A0A]/70 font-caveat text-xl pt-3 pb-1 tracking-wide font-semibold">
                @thekamnabhardwaj
              </p>
            </div>

            {/* --- TAP / HOVER POPUP HANDWRITTEN STICKERS --- */}

            {/* 1. Sticker Top-Left: "21 years old" */}
            <div
              className={`pointer-events-none absolute -top-6 -left-10 z-30 transform -rotate-6 transition-all duration-300 ease-back-out ${
                isPortraitHovered
                  ? 'opacity-100 scale-100 translate-y-0 delay-75'
                  : 'opacity-0 scale-75 translate-y-4'
              }`}
            >
              <div className="relative">
                <div className="bg-[#FFB3CB] text-[#0A0A0A] font-caveat text-lg sm:text-xl font-bold px-3 py-1 shadow-[4px_6px_0_rgba(0,0,0,0.35)] whitespace-nowrap">
                  21 years old
                </div>
                <svg className="w-16 h-14 absolute top-[80%] left-[80%] overflow-visible" viewBox="0 0 72 64" fill="none">
                  <path d="M5 5 C 22 0, 26 10, 18 14 C 8 18, 8 26, 22 26 C 32 26, 40 30, 46 38" stroke="#FFB3CB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* 2. Sticker Top-Right: "social media strategist" */}
            <div
              className={`pointer-events-none absolute -top-6 -right-12 z-30 transform rotate-6 transition-all duration-300 ease-back-out ${
                isPortraitHovered
                  ? 'opacity-100 scale-100 translate-y-0 delay-150'
                  : 'opacity-0 scale-75 translate-y-4'
              }`}
            >
              <div className="relative">
                <div className="bg-[#E91E8C] text-[#F5F0EB] font-caveat text-lg sm:text-xl font-bold px-3 py-1 shadow-[4px_6px_0_rgba(0,0,0,0.35)] whitespace-nowrap">
                  social media strategist
                </div>
                <svg className="w-16 h-14 absolute top-[80%] right-[80%] overflow-visible" viewBox="0 0 72 64" fill="none">
                  <path d="M67 5 C 50 0, 46 10, 54 14 C 64 18, 64 26, 50 26 C 40 26, 32 30, 26 38" stroke="#E91E8C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* 3. Sticker Middle-Left: "ghostwriter" */}
            <div
              className={`pointer-events-none absolute top-1/2 -left-20 transform -translate-y-1/2 -rotate-12 z-30 hidden sm:block transition-all duration-300 ease-back-out ${
                isPortraitHovered
                  ? 'opacity-100 scale-100 translate-x-0 delay-220'
                  : 'opacity-0 scale-75 -translate-x-4'
              }`}
            >
              <div className="relative">
                <div className="bg-[#FFB3CB] text-[#0A0A0A] font-caveat text-lg sm:text-xl font-bold px-3 py-1 shadow-[4px_6px_0_rgba(0,0,0,0.35)] whitespace-nowrap">
                  ghostwriter
                </div>
                <svg className="w-20 h-8 absolute top-1/2 left-full -translate-y-1/2 overflow-visible ml-1" viewBox="0 0 84 28" fill="none">
                  <path d="M2 14 Q 22 4, 42 14 T 78 14" stroke="#FFB3CB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* 4. Sticker Bottom-Left: "content creator" */}
            <div
              className={`pointer-events-none absolute -bottom-9 -left-6 z-30 transform rotate-3 transition-all duration-300 ease-back-out ${
                isPortraitHovered
                  ? 'opacity-100 scale-100 translate-y-0 delay-300'
                  : 'opacity-0 scale-75 -translate-y-4'
              }`}
            >
              <div className="relative">
                <div className="bg-[#FFB3CB] text-[#0A0A0A] font-caveat text-lg sm:text-xl font-bold px-3 py-1 shadow-[4px_6px_0_rgba(0,0,0,0.35)] whitespace-nowrap">
                  content creator
                </div>
                <svg className="w-16 h-16 absolute bottom-[85%] left-2 overflow-visible" viewBox="0 0 64 72" fill="none">
                  <path d="M8 66 C 8 50, 12 32, 16 18 Q 18 10, 20 6" stroke="#FFB3CB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* 5. Sticker Bottom-Right: "storyteller" */}
            <div
              className={`pointer-events-none absolute -bottom-9 -right-6 z-30 transform -rotate-3 transition-all duration-300 ease-back-out ${
                isPortraitHovered
                  ? 'opacity-100 scale-108 translate-y-0 delay-350'
                  : 'opacity-0 scale-75 -translate-y-4'
              }`}
            >
              <div className="relative">
                <div className="bg-[#E91E8C] text-[#F5F0EB] font-caveat text-lg sm:text-xl font-bold px-3 py-1 shadow-[4px_6px_0_rgba(0,0,0,0.35)] whitespace-nowrap">
                  storyteller
                </div>
                <svg className="w-16 h-16 absolute bottom-[85%] right-2 overflow-visible" viewBox="0 0 64 72" fill="none">
                  <path d="M56 66 C 56 50, 52 32, 48 18 Q 46 10, 44 6" stroke="#E91E8C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
