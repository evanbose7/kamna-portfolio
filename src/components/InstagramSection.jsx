import React, { useState, useRef } from 'react';
import { Play, Heart, Eye, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramSection() {
  const [activeReelIndex, setActiveReelIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 60FPS Touch Drag & Long Press States
  const [touchStartX, setTouchStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const longPressTimerRef = useRef(null);

  const instagramProfileUrl = 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy&utm_source=qr';

  // Exactly 4 Instagram Reels Cards
  const reels = [
    {
      id: 'DZzn3h3M9Jp',
      url: instagramProfileUrl,
      title: 'How to write hooks that grab attention in 2 seconds 🔥',
      views: '45.2K',
      likes: '3.8K',
      tag: 'CONTENT HOOKS',
      bgGradient: 'from-pink-900/60 to-purple-950/80',
    },
    {
      id: 'DXvzWqTMfIp',
      url: instagramProfileUrl,
      title: 'Day in the life of a personal branding strategist 💻',
      views: '82.1K',
      likes: '6.4K',
      tag: 'VLOG / STORY',
      bgGradient: 'from-rose-950/70 to-zinc-950',
    },
    {
      id: 'DZ10LkGNC-0',
      url: instagramProfileUrl,
      title: 'The storytelling secret top creators charge $5,000 for 🤐',
      views: '120.5K',
      likes: '11.2K',
      tag: 'STORYTELLING',
      bgGradient: 'from-fuchsia-950/80 to-stone-950',
    },
    {
      id: 'DYpMyXuNiTF',
      url: instagramProfileUrl,
      title: 'Stop making boring posts — try this visual layout framework 🎨',
      views: '63.8K',
      likes: '5.1K',
      tag: 'VISUAL CREATIVE',
      bgGradient: 'from-pink-950/60 to-slate-950',
    },
  ];

  const handlePrev = () => {
    setActiveReelIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveReelIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  // Card click: Quick tap centers/selects card
  const handleCardClick = (index) => {
    if (Math.abs(dragOffset) > 10) return;
    setActiveReelIndex(index);
  };

  // 60FPS Touch Drag & Long Press Handlers
  const handleTouchStart = (e, index) => {
    const startX = e.targetTouches[0].clientX;
    setTouchStartX(startX);
    setIsDragging(true);

    // Start Long Press Timer (300ms hold triggers pop on mobile)
    if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = setTimeout(() => {
      setHoveredIndex(index);
    }, 300);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.targetTouches[0].clientX;
    const delta = currentX - touchStartX;
    setDragOffset(delta);

    // If finger moves more than 10px (swiping), cancel long press pop
    if (Math.abs(delta) > 10) {
      if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
      setHoveredIndex(null);
    }
  };

  const handleTouchEnd = () => {
    if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
    setIsDragging(false);

    // Unpop card when finger lifts
    setHoveredIndex(null);

    // Swipe card logic
    if (Math.abs(dragOffset) > 40) {
      if (dragOffset < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setDragOffset(0);
  };

  // Desktop Mouse Handlers
  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setHoveredIndex(null);
    }
  };

  // Circular 3-Card Visible Deck: 4th card tucked cleanly behind center card (opacity 0, scale 0.7)
  const getReelStyle = (index) => {
    let diff = index - activeReelIndex;
    const half = reels.length / 2;

    if (diff > half) {
      diff -= reels.length;
    } else if (diff < -half) {
      diff += reels.length;
    }

    const offset = diff;
    const absOffset = Math.abs(offset);
    const isHovered = hoveredIndex === index;
    const isAnyHovered = hoveredIndex !== null;

    // Position: 0 for center, -160px for left, +160px for right, 0 for hidden behind center!
    let baseTranslateX = 0;
    if (absOffset < 2) {
      baseTranslateX = offset * 160 + (isDragging ? dragOffset : 0);
    } else {
      baseTranslateX = (offset < 0 ? -1 : 1) * 200; // Tucked slightly behind edge for smooth fade transition
    }

    if (isAnyHovered && !isDragging && absOffset < 2) {
      if (index < hoveredIndex) {
        baseTranslateX -= (hoveredIndex - index) * 30 + 45;
      } else if (index > hoveredIndex) {
        baseTranslateX += (index - hoveredIndex) * 30 + 45;
      }
    }

    let scale = isHovered ? 1.08 : absOffset >= 2 ? 0.7 : 1 - absOffset * 0.12;
    let rotateY = 0; // Flat facing forward

    // Exactly 3 visible cards (offset -1, 0, 1). Offset >= 2 is completely hidden (opacity 0)
    let opacity = 1;
    if (absOffset >= 2) {
      opacity = 0;
    } else if (absOffset === 1) {
      opacity = 0.85;
    }

    const zIndex = isHovered ? 50 : absOffset >= 2 ? 5 : 30 - absOffset * 10;
    const translateY = isHovered ? -20 : absOffset * 10;

    return {
      transform: `translateX(${baseTranslateX}px) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: isDragging
        ? 'none'
        : 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease, box-shadow 450ms ease',
      boxShadow: isHovered
        ? '0 30px 60px -12px rgba(233, 30, 140, 0.55), 0 0 20px rgba(255, 179, 203, 0.3)'
        : '0 12px 35px rgba(0, 0, 0, 0.85)',
    };
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

      {/* 60FPS Circular 3-Card Deck Container (4th Card Hidden Behind Circle) */}
      <div className="relative mx-auto h-[480px] sm:h-[520px] max-w-5xl flex items-center justify-center perspective-[1200px] touch-pan-y transform-gpu will-change-transform">
        {reels.map((reel, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={reel.id}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              style={getReelStyle(index)}
              className="absolute w-[240px] sm:w-[270px] h-[400px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-[#121212] cursor-pointer select-none group transform-gpu"
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${reel.bgGradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Instagram Embed Cover Mockup */}
              <div className="relative h-full flex flex-col justify-between p-5 z-10">
                
                {/* Top Bar: Tag & Instagram Badge */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-black/50 border border-white/20 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-md">
                    {reel.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFB3CB] to-[#E91E8C] flex items-center justify-center shadow-lg">
                    <InstagramIcon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Center Play Button Overlay */}
                <div className="my-auto flex flex-col items-center justify-center gap-2">
                  <div
                    className={`w-14 h-14 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 ${
                      isHovered ? 'scale-115 bg-[#E91E8C] border-none shadow-[0_0_25px_rgba(233,30,140,0.8)]' : ''
                    }`}
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider">
                    {isHovered ? 'Pressing Reel...' : 'Hold to Pop · Swipe to Switch'}
                  </span>
                </div>

                {/* Bottom Metadata & Title */}
                <div className="space-y-3 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                  <h3 className="font-bold text-xs sm:text-sm text-white leading-snug line-clamp-2">
                    {reel.title}
                  </h3>
                  <div className="flex items-center justify-between text-[11px] text-white/70 font-semibold pt-1 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-[#FFB3CB]" /> {reel.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-[#E91E8C]" /> {reel.likes}
                      </span>
                    </div>
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-white hover:text-[#FFB3CB] transition-colors"
                      aria-label="Open Instagram Reel"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Swipe Navigation Buttons for Quick 60fps Card Switching */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Reel"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:scale-110 hover:border-[#E91E8C] hover:bg-[#E91E8C]/20 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5">
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
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Reel"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:scale-110 hover:border-[#E91E8C] hover:bg-[#E91E8C]/20 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
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
