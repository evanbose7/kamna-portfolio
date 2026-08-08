import React, { useState } from 'react';
import { Play, Heart, Eye, ExternalLink, Sparkles, Flame } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const instagramProfileUrl = 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy&utm_source=qr';

  // 4 Instagram Reels Cards
  const reels = [
    {
      id: 'DZzn3h3M9Jp',
      url: instagramProfileUrl,
      title: 'How to write hooks that grab attention in 2 seconds 🔥',
      description: 'The exact 3-step framework I use to convert casual scrollers into engaged followers.',
      views: '45.2K',
      likes: '3.8K',
      tag: 'FEATURED HOOKS',
      featured: true,
      bgGradient: 'from-pink-900/80 via-purple-950/90 to-black',
    },
    {
      id: 'DXvzWqTMfIp',
      url: instagramProfileUrl,
      title: 'Day in the life of a personal branding strategist 💻',
      description: 'Behind the scenes client calls, content ideation, and filming.',
      views: '82.1K',
      likes: '6.4K',
      tag: 'VLOG / STORY',
      featured: false,
      bgGradient: 'from-rose-950/80 to-zinc-950',
    },
    {
      id: 'DZ10LkGNC-0',
      url: instagramProfileUrl,
      title: 'The storytelling secret top creators charge $5,000 for 🤐',
      description: 'Why emotional positioning beats raw analytics every single time.',
      views: '120.5K',
      likes: '11.2K',
      tag: 'STORYTELLING',
      featured: false,
      bgGradient: 'from-fuchsia-950/80 to-stone-950',
    },
    {
      id: 'DYpMyXuNiTF',
      url: instagramProfileUrl,
      title: 'Stop making boring posts — try this visual layout framework 🎨',
      description: 'Transform plain text into high-converting visual carousel decks.',
      views: '63.8K',
      likes: '5.1K',
      tag: 'VISUAL CREATIVE',
      featured: false,
      bgGradient: 'from-pink-950/70 to-slate-950',
    },
  ];

  return (
    <section id="insta" className="bg-[#0A0A0A] scroll-mt-6 pb-20 pt-20 sm:pt-28 md:pt-32 relative overflow-hidden">
      
      {/* Ambient Radial Spotlight */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E91E8C]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E91E8C]/30 bg-[#E91E8C]/10 px-3.5 py-1 text-xs font-bold text-[#E91E8C] uppercase tracking-widest mb-4">
            <InstagramIcon className="w-4 h-4 text-[#E91E8C]" />
            Instagram Bento Showcase
          </div>
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Instagram Reels
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#F5F0EB]/40 mt-3">
            Visual Storytelling · Personal Branding · Creator Insights
          </p>
        </div>

        {/* 🍱 Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-[260px] sm:auto-rows-[280px]">
          {reels.map((reel, index) => {
            const isHovered = hoveredIndex === index;
            const isFeatured = reel.featured;

            return (
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-3xl overflow-hidden border border-white/10 bg-[#121212] p-6 flex flex-col justify-between transform-gpu transition-all duration-400 ease-out hover:-translate-y-2 hover:border-[#E91E8C]/60 select-none group cursor-pointer ${
                  isFeatured
                    ? 'md:col-span-2 md:row-span-2 min-h-[380px] shadow-[0_0_50px_rgba(233,30,140,0.25)] border-[#E91E8C]/40'
                    : 'md:col-span-1 md:row-span-1 shadow-lg'
                }`}
              >
                {/* Background Gradient & Ambient Shaders */}
                <div className={`absolute inset-0 bg-gradient-to-b ${reel.bgGradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Decorative Subtle Grid Lines for Bento Aesthetics */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                {/* Top Row: Tag & Instagram Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 border border-white/20 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-md">
                      {isFeatured && <Flame className="w-3 h-3 text-[#E91E8C] animate-pulse" />}
                      {reel.tag}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FFB3CB] to-[#E91E8C] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-4.5 h-4.5 text-white" />
                  </div>
                </div>

                {/* Center Content / Hero Callout */}
                <div className="relative z-10 my-auto py-4 flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 ${
                        isFeatured ? 'w-16 h-16' : 'w-12 h-12'
                      } ${isHovered ? 'scale-110 bg-[#E91E8C] border-none shadow-[0_0_30px_rgba(233,30,140,0.8)]' : ''}`}
                    >
                      <Play className={`${isFeatured ? 'w-7 h-7' : 'w-5 h-5'} fill-white ml-0.5`} />
                    </div>

                    {isFeatured && (
                      <div className="hidden sm:flex flex-col">
                        <span className="text-xs font-bold text-[#FFB3CB] uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" /> High Impact Reel
                        </span>
                        <span className="text-xs text-white/50">Tap to watch on Instagram</span>
                      </div>
                    )}
                  </div>

                  <h3
                    className={`font-bold text-white leading-snug tracking-tight ${
                      isFeatured ? 'text-lg sm:text-2xl md:text-3xl max-w-lg' : 'text-xs sm:text-sm line-clamp-2'
                    }`}
                  >
                    {reel.title}
                  </h3>

                  {isFeatured && (
                    <p className="text-xs sm:text-sm text-white/70 max-w-md leading-relaxed hidden sm:block">
                      {reel.description}
                    </p>
                  )}
                </div>

                {/* Bottom Row: Views, Likes & Action Link */}
                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 bg-black/40 backdrop-blur-md -mx-6 -mb-6 p-4 px-6 mt-auto">
                  <div className="flex items-center gap-4 text-xs font-semibold text-white/80">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#FFB3CB]" /> {reel.views}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-[#E91E8C]" /> {reel.likes}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#E91E8C] group-hover:text-[#FFB3CB] transition-colors uppercase tracking-wider">
                    <span>Watch</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </a>
            );
          })}
        </div>

        {/* Instagram Profile CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#E91E8C]/40 bg-[#E91E8C]/10 px-9 py-4 text-xs font-bold uppercase tracking-widest text-[#E91E8C] transition-all duration-300 hover:bg-[#E91E8C] hover:text-white hover:shadow-[0_0_30px_rgba(233,30,140,0.5)] cursor-pointer"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow @ariimakesfilms on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
