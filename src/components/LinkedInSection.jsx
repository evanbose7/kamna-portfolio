import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Repeat, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function LinkedInSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Touch swipe gesture states
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const posts = [
    {
      id: '7175360778315735043',
      url: 'https://www.linkedin.com/in/kamna-bharadwaj/',
      tag: 'VIRAL STORY',
      title: 'How I turned a 50-word messy thoughts draft into a post that gained 140,000+ views.',
      content: 'Storytelling on LinkedIn isn’t about big words. It’s about emotional resonance, pattern interrupt, and relatable vulnerability.',
      stats: { likes: '1.4K', comments: '182', reposts: '45' },
      date: 'Mar 2024'
    },
    {
      id: '7369397749256998912',
      url: 'https://www.linkedin.com/in/kamna-bharadwaj/',
      tag: 'BRAND STRATEGY',
      title: '3 Mistakes 90% of Founders make when building their personal brand on LinkedIn.',
      content: '1. Writing for peers instead of clients.\n2. Inconsistent posting cadence.\n3. Zero call to action in the bio section.',
      stats: { likes: '890', comments: '114', reposts: '32' },
      date: 'Jan 2025'
    },
    {
      id: '7350518438450057216',
      url: 'https://www.linkedin.com/in/kamna-bharadwaj/',
      tag: 'CASE STUDY',
      title: 'Decoded: 100 Top LinkedIn Creators Headlines & About Sections.',
      content: 'I analyzed 100 profiles that consistently generate inbound leads. Here are the 4 main frameworks they all use.',
      stats: { likes: '2.1K', comments: '340', reposts: '98' },
      date: 'Nov 2025'
    },
    {
      id: '7386432546634436608',
      url: 'https://www.linkedin.com/in/kamna-bharadwaj/',
      tag: 'BUILD IN PUBLIC',
      title: 'Crossing 17,000 followers on LinkedIn as a 21-year-old content strategist.',
      content: 'No fake engagement pods, no copy-pasting viral tweets. Just pure value, relentless consistency, and high-converting hooks.',
      stats: { likes: '1.8K', comments: '210', reposts: '64' },
      date: 'Feb 2026'
    },
    {
      id: '7468300929922945026',
      url: 'https://www.linkedin.com/in/kamna-bharadwaj/',
      tag: 'GHOSTWRITING',
      title: 'Why your content is getting views but zero DMs (and how to fix it).',
      content: 'Views are vanity. Conversions happen when you bridge the gap between interest and trust through authentic positioning.',
      stats: { likes: '1.2K', comments: '155', reposts: '39' },
      date: 'Jul 2026'
    },
  ];

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  // Card click / tap toggle
  const handleCardClick = (index) => {
    setActiveCardIndex(index);
    if (hoveredIndex === index) {
      setHoveredIndex(null); // Tap again -> unpop back to normal
    } else {
      setHoveredIndex(index); // Tap -> pop up
    }
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
    
    if (Math.abs(distance) > minSwipeDistance) {
      setHoveredIndex(null); // Automatically unpop card smoothly when swiping!
      
      if (distance > minSwipeDistance) {
        handleNext(); // Swiped left -> next card
      } else if (distance < -minSwipeDistance) {
        handlePrev(); // Swiped right -> prev card
      }
    }
  };

  const getCardStyle = (index) => {
    const offset = index - activeCardIndex;
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

    const translateY = Math.abs(offset) * 14 - (isHovered ? 32 : 0);
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
        : '0 12px 35px rgba(0, 0, 0, 0.75)',
    };
  };

  return (
    <section id="linkedin" className="bg-[#0A0A0A] scroll-mt-6 pb-16 pt-24 sm:pt-32 md:pt-40 relative overflow-hidden">
      <div className="mb-12 px-5 sm:px-8 md:px-10 text-center">
        <h2
          className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          LinkedIn
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#F5F0EB]/40 mt-3">
          17K+ Community · Top 5% Creator · Tap to pop/unpop · Swipe left/right
        </p>
      </div>

      {/* 3D Interactive Card Fan Deck */}
      <div className="flex flex-col items-center w-full min-h-[520px] relative max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Touch Swipeable Deck Container */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-4xl h-[480px] flex justify-center items-center touch-pan-y"
        >
          {posts.map((post, index) => (
            <div
              key={post.id}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={getCardStyle(index)}
              className="fan-card absolute cursor-pointer w-[280px] sm:w-[320px] h-[380px] rounded-2xl p-6 bg-[#121212] border border-[#FFB3CB]/20 flex flex-col justify-between select-none"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between border-b border-[#F5F0EB]/10 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E91E8C] to-[#FFB3CB] p-[2px]">
                      <img src="/assets/kamna-portrait.jpg" alt="Kamna" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Kamna Bhardwaj</p>
                      <p className="text-[10px] text-[#F5F0EB]/50">Content Strategist</p>
                    </div>
                  </div>
                  <LinkedinIcon className="w-5 h-5 text-[#E91E8C]" />
                </div>

                {/* Tag */}
                <span className="inline-block rounded-full bg-[#E91E8C]/15 border border-[#E91E8C]/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#E91E8C] mb-3">
                  {post.tag}
                </span>

                {/* Title & snippet */}
                <h3 className="font-bold text-sm text-[#F5F0EB] leading-snug mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-[#F5F0EB]/70 leading-relaxed line-clamp-3">
                  {post.content}
                </p>
              </div>

              {/* Stats Footer */}
              <div>
                <div className="flex items-center justify-between border-t border-[#F5F0EB]/10 pt-3 text-[11px] text-[#F5F0EB]/60">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-[#E91E8C]">
                      <ThumbsUp className="w-3.5 h-3.5" /> {post.stats.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" /> {post.stats.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Repeat className="w-3.5 h-3.5" /> {post.stats.reposts}
                    </span>
                  </div>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-full hover:bg-white/10 text-[#FFB3CB] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center gap-2 mt-6">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveCardIndex(i);
                setHoveredIndex(null);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeCardIndex === i ? 'w-8 bg-[#E91E8C]' : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
