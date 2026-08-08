import React, { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramSection() {
  const [activeReelIndex, setActiveReelIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollContainerRef = useRef(null);

  const instagramProfileUrl = 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy&utm_source=qr';

  // 4 Reels with exact matched thumbnail covers & Instagram links requested by user
  const reels = [
    {
      id: 'DTS2wbWk2Nk',
      url: 'https://www.instagram.com/reel/DTS2wbWk2Nk/?igsh=bTNtN2xvZXh2cTRq',
      thumbnail: '/assets/reel-thumb-1.jpg',
      title: 'POV: Found the best side hustle (Paid per reel) 💰',
    },
    {
      id: 'DTDD_1rDKQP',
      url: 'https://www.instagram.com/reel/DTDD_1rDKQP/?igsh=MXYya3dvaTFydGtrZw==',
      thumbnail: '/assets/reel-thumb-2.jpg',
      title: 'Earn Money Via Reels 💵',
    },
    {
      id: 'DS4qmEQjJLn',
      url: 'https://www.instagram.com/reel/DS4qmEQjJLn/?igsh=MTl3aHI1c2g1OTE=',
      thumbnail: '/assets/reel-thumb-3.jpg',
      title: 'To anyone who is scared to create content 📸',
    },
    {
      id: 'DSCoQNZjCH7',
      url: 'https://www.instagram.com/reel/DSCoQNZjCH7/?igsh=Y3ZjbDA5eDBmdmtt',
      thumbnail: '/assets/reel-thumb-4.jpg',
      title: 'Ep 2 Indie Filmmaker Berozgar:( Making My Film 🎥',
    },
  ];

  const handlePrev = () => {
    setActiveReelIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveReelIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  // Scroll mobile container smoothly to index
  const scrollToMobileIndex = (index) => {
    setActiveReelIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = 270; // 260px width + 10px gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  // Card click: opens exact matched Reel link on Instagram
  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Desktop 4-Card Deck style calculation
  const getDesktopReelStyle = (index) => {
    const isHovered = hoveredIndex === index;
    const isAnyHovered = hoveredIndex !== null;

    let baseTranslateX = (index - 1.5) * 175;

    if (isAnyHovered) {
      if (index < hoveredIndex) {
        baseTranslateX -= (hoveredIndex - index) * 25 + 55;
      } else if (index > hoveredIndex) {
        baseTranslateX += (index - hoveredIndex) * 25 + 55;
      }
    }

    let scale = isHovered ? 1.05 : isAnyHovered ? 0.94 : 0.97;
    let opacity = isAnyHovered && !isHovered ? 0.8 : 1;
    const zIndex = isHovered ? 50 : 20 + index;
    const translateY = isHovered ? -24 : 0;

    return {
      transform: `translateX(${baseTranslateX}px) translateY(${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease, box-shadow 450ms ease',
      boxShadow: isHovered
        ? '0 30px 65px -12px rgba(233, 30, 140, 0.6), 0 0 25px rgba(255, 179, 203, 0.4)'
        : '0 15px 40px rgba(0, 0, 0, 0.75)',
    };
  };

  return (
    <section id="insta" className="bg-[#0A0A0A] scroll-mt-6 pb-16 pt-20 sm:pt-28 md:pt-32 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E91E8C]/10 blur-[120px] rounded-full" />

      <div className="mb-8 px-5 sm:px-8 md:px-10 text-center relative z-10">
        <h2
          className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Instagram
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#F5F0EB]/40 mt-3">
          Reels · Visual Storytelling · Personal Brand
        </p>
      </div>

      {/* 📱 MOBILE VIEW: Silky Smooth Native Hardware-Accelerated 60FPS Snap Track (No gap movement artifacts!) */}
      <div className="md:hidden relative w-full overflow-hidden px-4">
        <div
          ref={scrollContainerRef}
          onScroll={(e) => {
            const scrollLeft = e.currentTarget.scrollLeft;
            const cardWidth = 260;
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex >= 0 && newIndex < reels.length && newIndex !== activeReelIndex) {
              setActiveReelIndex(newIndex);
            }
          }}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-6 pt-2 px-[calc(50vw-130px)] touch-pan-x transform-gpu will-change-transform"
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              onClick={() => handleCardClick(reel.url)}
              className="snap-center shrink-0 w-[260px] h-[440px] rounded-3xl overflow-hidden border border-white/20 bg-[#121212] cursor-pointer select-none relative group transform-gpu shadow-2xl transition-transform duration-300"
            >
              {/* Crisp Bright & Ultra-Clean Thumbnail Image Cover */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover object-center select-none brightness-[1.05] contrast-[1.05] saturate-[1.05]"
              />

              {/* Top Right Instagram Icon */}
              <div className="absolute top-4 right-4 z-20">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFB3CB] to-[#E91E8C] flex items-center justify-center shadow-lg">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Sleek Small Dark Circular Play Button */}
              <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/60 border border-white/30 backdrop-blur-md flex items-center justify-center text-white z-20">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>

              {/* Bottom Title & Action */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                <h3 className="font-bold text-xs text-white leading-snug line-clamp-1">
                  {reel.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-[#FFB3CB] shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💻 DESKTOP VIEW: All 4 Cards Visible at Once with Hover Distance Push Effect */}
      <div className="hidden md:flex relative mx-auto h-[500px] max-w-6xl items-center justify-center perspective-[1200px] transform-gpu">
        
        {/* Left Navigation Chevron Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Reel"
          className="absolute left-10 md:left-14 z-40 h-11 w-11 flex items-center justify-center rounded-full bg-white/90 text-black shadow-2xl transition-all hover:scale-110 hover:bg-white active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Card Stage */}
        <div className="relative w-full h-full flex items-center justify-center">
          {reels.map((reel, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={reel.id}
                onClick={() => handleCardClick(reel.url)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={getDesktopReelStyle(index)}
                className="absolute w-[260px] h-[450px] rounded-3xl overflow-hidden border border-white/20 bg-[#121212] cursor-pointer select-none group transform-gpu shadow-2xl"
              >
                {/* Thumbnail Image Cover */}
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover object-center select-none brightness-[1.05] contrast-[1.05] saturate-[1.05] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top Right Instagram Icon */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFB3CB] to-[#E91E8C] flex items-center justify-center shadow-lg">
                    <InstagramIcon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Sleek Small Dark Circular Play Button */}
                <div className="absolute inset-0 m-auto w-11 h-11 rounded-full bg-black/60 border border-white/30 backdrop-blur-md flex items-center justify-center text-white z-20 transition-all duration-300 group-hover:scale-115 group-hover:bg-[#E91E8C] group-hover:border-none group-hover:shadow-[0_0_25px_rgba(233,30,140,0.8)]">
                  <Play className="w-4.5 h-4.5 fill-white ml-0.5" />
                </div>

                {/* Bottom Title & Action */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                  <h3 className="font-bold text-xs text-white leading-snug line-clamp-1">
                    {reel.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-[#FFB3CB] shrink-0 ml-2" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Right Navigation Chevron Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Reel"
          className="absolute right-10 md:right-14 z-40 h-11 w-11 flex items-center justify-center rounded-full bg-white/90 text-black shadow-2xl transition-all hover:scale-110 hover:bg-white active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4 relative z-10">
        {reels.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToMobileIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeReelIndex === idx ? 'w-6 bg-[#E91E8C]' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Instagram Profile CTA */}
      <div className="mt-8 text-center relative z-10">
        <a
          href={instagramProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#E91E8C]/40 bg-[#E91E8C]/10 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#E91E8C] transition-all duration-300 hover:bg-[#E91E8C] hover:text-white hover:shadow-[0_0_25px_rgba(233,30,140,0.5)] cursor-pointer"
        >
          <InstagramIcon className="w-4 h-4" />
          Follow @ariimakesfilms on Instagram
        </a>
      </div>
    </section>
  );
}
