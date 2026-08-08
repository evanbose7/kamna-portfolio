import React, { useState } from 'react';
import { Play, Heart, Eye, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Exactly 3 Instagram Reels Cards
  const reels = [
    {
      id: 'DZzn3h3M9Jp',
      url: 'https://www.instagram.com/ariimakesflims/',
      title: 'How to write hooks that grab attention in 2 seconds 🔥',
      views: '45.2K',
      likes: '3.8K',
      tag: 'CONTENT HOOKS',
      bgGradient: 'from-pink-900/60 to-purple-950/80',
    },
    {
      id: 'DXvzWqTMfIp',
      url: 'https://www.instagram.com/ariimakesflims/',
      title: 'Day in the life of a personal branding strategist 💻',
      views: '82.1K',
      likes: '6.4K',
      tag: 'VLOG / STORY',
      bgGradient: 'from-rose-950/70 to-zinc-950',
    },
    {
      id: 'DZ10LkGNC-0',
      url: 'https://www.instagram.com/ariimakesflims/',
      title: 'The storytelling secret top creators charge $5,000 for 🤐',
      views: '120.5K',
      likes: '11.2K',
      tag: 'STORYTELLING',
      bgGradient: 'from-fuchsia-950/80 to-stone-950',
    },
  ];

  return (
    <section id="insta" className="bg-[#0A0A0A] scroll-mt-6 pb-16 pt-20 sm:pt-28 md:pt-32 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E91E8C]/10 rounded-full blur-3xl" />

      <div className="mb-10 sm:mb-14 px-5 sm:px-8 md:px-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E91E8C]/30 bg-[#E91E8C]/10 px-3.5 py-1 text-xs font-bold text-[#E91E8C] uppercase tracking-widest mb-4">
          <InstagramIcon className="w-4 h-4" />
          Instagram
        </div>
        <h2
          className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          Instagram Reels
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#F5F0EB]/40 mt-3">
          Reels · Visual Storytelling · Personal Brand
        </p>
      </div>

      {/* Flat & Straight 3-Column Cards Showcase */}
      <div className="max-w-5xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {reels.map((reel, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative aspect-[9/16] w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#121212] transform-gpu transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 hover:border-[#E91E8C]/60 hover:shadow-[0_20px_50px_rgba(233,30,140,0.35)] flex flex-col justify-between p-5 select-none group"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${reel.bgGradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Top Bar: Tag & Instagram Icon */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full bg-black/50 border border-white/20 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-md">
                  {reel.tag}
                </span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFB3CB] to-[#E91E8C] flex items-center justify-center shadow-lg">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-2">
                <div
                  className={`w-14 h-14 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 ${
                    isHovered ? 'scale-110 bg-[#E91E8C] border-none shadow-[0_0_25px_rgba(233,30,140,0.8)]' : ''
                  }`}
                >
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
                <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider">
                  Watch Reel
                </span>
              </div>

              {/* Bottom Metadata & Title */}
              <div className="relative z-10 space-y-3 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
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
                  <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:text-[#FFB3CB] transition-colors" />
                </div>
              </div>

            </a>
          );
        })}
      </div>

      {/* Instagram Profile CTA */}
      <div className="mt-10 text-center relative z-10">
        <a
          href="https://www.instagram.com/ariimakesflims/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#E91E8C]/40 bg-[#E91E8C]/10 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#E91E8C] transition-all duration-300 hover:bg-[#E91E8C] hover:text-white hover:shadow-[0_0_25px_rgba(233,30,140,0.5)] cursor-pointer"
        >
          <InstagramIcon className="w-4 h-4" />
          Follow @ariimakesflims on Instagram
        </a>
      </div>

    </section>
  );
}
