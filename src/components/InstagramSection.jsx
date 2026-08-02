import React, { useState } from 'react';
import { Play, Heart, Eye, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramSection() {
  const [activeReelIndex, setActiveReelIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Touch swipe gesture states
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const reels = [
    {
      id: 'DZzn3h3M9Jp',
      url: 'https://www.instagram.com/thekamnabhardwaj/',
      title: 'How to write hooks that grab attention in 2 seconds 🔥',
      views: '45.2K',
      likes: '3.8K',
      tag: 'CONTENT HOOKS',
      bgGradient: 'from-pink-900/60 to-purple-950/80',
    },
    {
      id: 'DXvzWqTMfIp',
      url: 'https://www.instagram.com/thekamnabhardwaj/',
      title: 'Day in the life of a 21-year-old personal branding strategist 💻',
      views: '82.1K',
      likes: '6.4K',
      tag: 'VLOG / STORY',
      bgGradient: 'from-rose-950/70 to-zinc-950',
    },
    {
      id: 'DZ10LkGNC-0',
      url: 'https://www.instagram.com/thekamnabhardwaj/',
      title: 'The ghostwriting secret top creators charge $5,000 for 🤐',
      views: '120.5K',
      likes: '11.2K',
      tag: 'GHOSTWRITING',
      bgGradient: 'from-fuchsia-950/80 to-stone-950',
    },
    {
      id: 'DYpMyXuNiTF',
      url: 'https://www.instagram.com/thekamnabhardwaj/',
      title: 'Stop making boring LinkedIn posts — try this visual layout framework 🎨',
      views: '63.8K',
      likes: '5.1K',
      tag: 'FORMATTING',
      bgGradient: 'from-pink-950/60 to-slate-950',
    },
    {
      id: 'DWdrplHkkDi',
      url: 'https://www.instagram.com/thekamnabhardwaj/',
      title: 'My top 3 tools for researching viral content ideas in 10 minutes ⚡️',
      views: '39.4K',
      likes: '2.9K',
      tag: 'WORKFLOW',
      bgGradient: 'from-[#E91E8C]/30 to-[#0A0A0A]',
    },
  ];

  const handlePrev = () => {
    setActiveReelIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveReelIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 40;
    const distance = touchStartX - touchEndX;
    
    if (distance > minSwipeDistance) {
      handleNext(); // Swiped left -> next reel
    } else if (distance < -minSwipeDistance) {
      handlePrev(); // Swiped right -> prev reel
    }
  };

  const getReelStyle = (index) => {
    const offset = index - activeReelIndex;
    const isHovered = hoveredIndex === index;
    const isAnyHovered = hoveredIndex !== null;

    let baseTranslateX = offset * 135;

    if (isAnyHovered) {
      if (index < hoveredIndex) {
        baseTranslateX -= (hoveredIndex - index) * 30 + 45;
      } else if (index > hoveredIndex) {
        baseTranslateX += (index - hoveredIndex) * 30 + 45;
      }
    }

    const translateY = Math.abs(offset) * 15 - (isHovered ? 32 : 0);
    const rotate = isHovered ? 0 : offset * 6;
    const scale = isHovered ? 1.12 : (isAnyHovered ? 0.94 : 1 - Math.abs(offset) * 0.04);
    const zIndex = isHovered ? 50 : 30 - Math.abs(offset);
    const opacity = isHovered ? 1 : (isAnyHovered ? 0.9 : 1);

    return {
      transform: `translateX(${baseTranslateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      zIndex,
      opacity,
      boxShadow: isHovered
        ? '0 30px 60px -12px rgba(233, 30, 140, 0.55), 0 0 20px rgba(255, 179, 203, 0.3)'
        : '0 12px 35px rgba(0, 0, 0, 0.85)',
    };
  };

  return (
    <section id="insta" className="bg-[#0A0A0A] scroll-mt-6 pb-16 pt-20 sm:pt-28 md:pt-32 relative overflow-hidden">
      <div className="mb-10 px-5 sm:px-8 md:px-10 text-center">
        <h2
          className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Instagram
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#F5F0EB]/40 mt-3">
          Reels · Visual Storytelling · Swipe left/right or tap cards
        </p>
      </div>

      {/* 3D Interactive Card Fan Deck */}
      <div className="flex flex-col items-center w-full min-h-[520px] relative max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Touch Swipeable Container */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-4xl h-[480px] flex justify-center items-center touch-pan-y"
        >
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              onClick={() => setActiveReelIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={getReelStyle(index)}
              className="fan-card absolute cursor-pointer w-[270px] h-[380px] rounded-2xl overflow-hidden bg-[#121212] border border-[#FFB3CB]/20 flex flex-col justify-between select-none"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${reel.bgGradient} opacity-90`} />
              
              <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-widest">
                    {reel.tag}
                  </span>
                  <InstagramIcon className="w-5 h-5 text-[#FFB3CB]" />
                </div>

                <div className="flex flex-col items-center justify-center gap-2 my-auto">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                  <span className="text-[11px] font-semibold text-white/90 uppercase tracking-widest">
                    Watch Reel
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm text-white leading-snug line-clamp-2">
                    {reel.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-white/70 border-t border-white/15 pt-2">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#FFB3CB]" /> {reel.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-[#E91E8C]" /> {reel.likes}
                    </span>
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 mt-4">
          {reels.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveReelIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeReelIndex === i ? 'w-8 bg-[#E91E8C]' : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://www.instagram.com/thekamnabhardwaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#F5F0EB]/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F5F0EB]/80 transition-all duration-200 hover:border-[#E91E8C]/60 hover:text-[#E91E8C] hover:shadow-[0_0_18px_rgba(255,107,174,0.3)] cursor-pointer"
          >
            <InstagramIcon className="w-4 h-4 text-[#E91E8C]" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
