import React, { useState, useEffect } from 'react';
import { ExternalLink, Heart, Eye } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramSection() {
  const [activeReelIndex, setActiveReelIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // 60FPS Touch Drag Tracking State
  const [touchStartX, setTouchStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const instagramProfileUrl = 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy&utm_source=qr';

  // 4 Instagram Reels with updated exact Reel links & embeds
  const reels = [
    {
      id: 'DTS2wbWk2Nk',
      url: 'https://www.instagram.com/reel/DTS2wbWk2Nk/?igsh=bTNtN2xvZXh2cTRq',
      embedUrl: 'https://www.instagram.com/reel/DTS2wbWk2Nk/embed/',
      title: 'Personal Branding & Visual Content Strategy 🔥',
      views: '54.8K',
      likes: '4.9K',
      tag: 'BRAND STRATEGY',
    },
    {
      id: 'DTDD_1rDKQP',
      url: 'https://www.instagram.com/reel/DTDD_1rDKQP/?igsh=MXYya3dvaTFydGtrZw==',
      embedUrl: 'https://www.instagram.com/reel/DTDD_1rDKQP/embed/',
      title: 'Day in the life of a personal branding strategist 💻',
      views: '82.1K',
      likes: '6.4K',
      tag: 'VLOG / STORY',
    },
    {
      id: 'DS4qmEQjJLn',
      url: 'https://www.instagram.com/reel/DS4qmEQjJLn/?igsh=MTl3aHI1c2g1OTE=',
      embedUrl: 'https://www.instagram.com/reel/DS4qmEQjJLn/embed/',
      title: 'The storytelling secret top creators charge $5,000 for 🤐',
      views: '120.5K',
      likes: '11.2K',
      tag: 'STORYTELLING',
    },
    {
      id: 'DSCoQNZjCH7',
      url: 'https://www.instagram.com/reel/DSCoQNZjCH7/?igsh=Y3ZjbDA5eDBmdmtt',
      embedUrl: 'https://www.instagram.com/reel/DSCoQNZjCH7/embed/',
      title: 'How to write hooks that grab attention in 2 seconds 🎨',
      views: '63.8K',
      likes: '5.1K',
      tag: 'CONTENT HOOKS',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setActiveReelIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveReelIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  // 60FPS Touch Drag Handlers (Mobile)
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.targetTouches[0].clientX;
    const delta = currentX - touchStartX;
    setDragOffset(delta);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (Math.abs(dragOffset) > 40) {
      if (dragOffset < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setDragOffset(0);
  };

  const getReelStyle = (index) => {
    const isHovered = hoveredIndex === index;
    const isAnyHovered = hoveredIndex !== null;

    if (isDesktop) {
      // DESKTOP: All 4 cards visible at once with hover distance push effect!
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
          : '0 15px 40px rgba(0, 0, 0, 0.85)',
      };
    } else {
      // MOBILE: Smooth 60fps cyclic swipe deck
      let diff = index - activeReelIndex;
      const half = reels.length / 2;

      if (diff > half) {
        diff -= reels.length;
      } else if (diff < -half) {
        diff += reels.length;
      }

      const offset = diff;
      const absOffset = Math.abs(offset);

      let baseTranslateX = 0;
      if (absOffset < 2) {
        baseTranslateX = offset * 165 + (isDragging ? dragOffset : 0);
      } else {
        baseTranslateX = (offset < 0 ? -1 : 1) * 200;
      }

      let scale = isHovered ? 1.05 : absOffset >= 2 ? 0.7 : 1 - absOffset * 0.12;
      let opacity = absOffset >= 2 ? 0 : absOffset === 1 ? 0.85 : 1;
      const zIndex = isHovered ? 50 : absOffset >= 2 ? 5 : 30 - absOffset * 10;
      const translateY = isHovered ? -20 : absOffset * 10;

      return {
        transform: `translateX(${baseTranslateX}px) translateY(${translateY}px) scale(${scale})`,
        opacity,
        zIndex,
        transition: isDragging
          ? 'none'
          : 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease, box-shadow 450ms ease',
        boxShadow: isHovered
          ? '0 30px 60px -12px rgba(233, 30, 140, 0.55), 0 0 20px rgba(255, 179, 203, 0.3)'
          : '0 12px 35px rgba(0, 0, 0, 0.85)',
      };
    }
  };

  return (
    <section id="insta" className="bg-[#0A0A0A] scroll-mt-6 pb-16 pt-20 sm:pt-28 md:pt-32 relative overflow-hidden">
      <div className="mb-8 px-5 sm:px-8 md:px-10 text-center">
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

      {/* 4 Cards Deck Container with Official Instagram Video iFrame Embeds */}
      <div
        className="relative mx-auto h-[500px] sm:h-[540px] max-w-6xl flex items-center justify-center perspective-[1200px] touch-pan-y transform-gpu will-change-transform"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {reels.map((reel, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={reel.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={getReelStyle(index)}
              className="absolute w-[250px] sm:w-[280px] h-[440px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/15 bg-[#0D0D0D] cursor-pointer select-none group transform-gpu flex flex-col justify-between"
            >
              {/* Card Header Tag Bar */}
              <div className="p-3 px-4 bg-[#121212] border-b border-white/10 flex items-center justify-between z-20">
                <span className="rounded-full bg-black/60 border border-white/20 px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-widest">
                  {reel.tag}
                </span>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] font-bold text-[#E91E8C] hover:text-[#FFB3CB] transition-colors uppercase tracking-wider"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Live Official Instagram Reel Video iFrame Embed */}
              <div className="relative w-full h-full overflow-hidden bg-black">
                <iframe
                  src={reel.embedUrl}
                  title={reel.title}
                  className="w-full h-full border-0 rounded-b-3xl pointer-events-auto"
                  allowTransparency="true"
                  allow="encrypted-media"
                  scrolling="no"
                />
              </div>

              {/* Hover Footer Info Bar */}
              <div className="p-3 px-4 bg-[#121212]/95 border-t border-white/10 flex items-center justify-between text-[10px] text-white/70 font-semibold z-20">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3 text-[#FFB3CB]" /> {reel.views}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-[#E91E8C]" /> {reel.likes}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {reels.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveReelIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeReelIndex === idx ? 'w-6 bg-[#E91E8C]' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Instagram Profile CTA */}
      <div className="mt-8 text-center">
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
