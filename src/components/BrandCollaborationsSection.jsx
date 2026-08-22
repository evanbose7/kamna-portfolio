import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Wand2, Compass, Heart } from 'lucide-react';

export default function BrandCollaborationsSection() {
  const [hoveredBrandIndex, setHoveredBrandIndex] = useState(null);
  const [activeCardIds, setActiveCardIds] = useState({});

  // Marquee Brand List (Looping Ticker)
  const tickerBrands = [
    { name: 'OPPO', category: 'TECH & SMARTPHONES' },
    { name: 'MARS COSMETICS', category: 'BEAUTY & LIFESTYLE' },
    { name: 'MINIMALIST', category: 'SKINCARE & WELLNESS' },
    { name: 'UNACADEMY', category: 'EDTECH & LEARNING' },
    { name: 'LENSKART', category: 'FASHION & D2C' },
    { name: 'TOPMATE', category: 'CREATOR PLATFORM' },
  ];

  // Detailed Brand Spotlight Cards (Desktop View)
  const brandSpotlights = [
    {
      id: 'oppo',
      name: 'OPPO',
      category: 'TECH & SMARTPHONES',
      tagline: 'Personal Brand Storytelling & Gen-Z Campaign',
      metrics: [
        { label: 'Total Reach', value: '850K+' },
        { label: 'Engagement Rate', value: '8.4%' },
      ],
      description: 'Crafted engaging visual narrative hooks and storytelling reels for product launch campaigns, driving authentic connection with Gen-Z audiences.',
      gradient: 'from-emerald-900/40 via-teal-950/60 to-zinc-950',
      glowColor: 'rgba(20, 184, 166, 0.4)',
      accentColor: '#10B981',
    },
    {
      id: 'mars',
      name: 'MARS Cosmetics',
      category: 'BEAUTY & LIFESTYLE',
      tagline: 'Viral Content Strategy & Visual Reel Campaign',
      metrics: [
        { label: 'Organic Reel Views', value: '1.4M+' },
        { label: 'Audience Growth', value: '+65%' },
      ],
      description: 'Designed high-converting short-form video hooks highlighting brand identity, boosting organic engagement and cross-platform shares.',
      gradient: 'from-rose-950/50 via-pink-950/60 to-zinc-950',
      glowColor: 'rgba(244, 63, 94, 0.45)',
      accentColor: '#F43F5E',
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      category: 'SKINCARE & D2C',
      tagline: 'Educational LinkedIn Positioning & Founder Stories',
      metrics: [
        { label: 'Inbound Inquiries', value: '120+' },
        { label: 'Brand Impressions', value: '620K+' },
      ],
      description: 'Built data-driven educational content frameworks breaking down complex product formulas into digestible, viral LinkedIn posts.',
      gradient: 'from-fuchsia-950/40 via-purple-950/60 to-zinc-950',
      glowColor: 'rgba(217, 70, 239, 0.45)',
      accentColor: '#D946EF',
    },
    {
      id: 'unacademy',
      name: 'Unacademy',
      category: 'EDTECH & CAREER',
      tagline: 'Career Growth Workshops & Creator Partnerships',
      metrics: [
        { label: 'Workshop Signups', value: '3.2K' },
        { label: 'Satisfaction Score', value: '4.9/5' },
      ],
      description: 'Led personal branding masterclasses and co-created LinkedIn strategy blueprints for aspiring student creators and young professionals.',
      gradient: 'from-blue-950/50 via-indigo-950/60 to-zinc-950',
      glowColor: 'rgba(99, 102, 241, 0.45)',
      accentColor: '#6366F1',
    },
  ];

  // Mobile Portfolio Video Categories (Extracted from ARII WEBSITE)
  const mobilePortfolioSections = [
    {
      id: 'food',
      eyebrowLabel: '01 / 05 ✦ GOURMET & CULINARY',
      title: 'FOOD',
      subhead: 'Artisanal food, luxury desserts & culinary stories.',
      icon: Wand2,
      accentColor: '#FF9BD2',
      projects: [
        { id: 'food-1', numberLabel: '01 / 03', title: 'ARTISANAL DESSERT FILM 01', description: 'Cinematic food cinematography highlighting textures, flavor profiles, and artisanal passion.', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#FFB6E6]/30', videoUrl: '/assets/food-1.mp4' },
        { id: 'food-3', numberLabel: '02 / 03', title: 'VOICEOVER FOOD STORY 02', description: 'Narrative-driven culinary reel with rich audio score and voiceover storytelling.', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/food-3.mp4' },
        { id: 'food-4', numberLabel: '03 / 03', title: 'SEASONAL MENU SPECIAL 03', description: 'Visual feast capturing vibrant colors and sensory culinary experiences.', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/food-4.mp4' },
      ],
    },
    {
      id: 'architecture',
      eyebrowLabel: '02 / 05 ✦ SPATIAL & EDITORIAL',
      title: 'ARCHITECTURE & INTERIOR DESIGN',
      subhead: 'Spatial storytelling, architectural tours & luxury interiors.',
      icon: Compass,
      accentColor: '#FFB6E6',
      projects: [
        { id: 'arch-1', numberLabel: '01 / 04', title: 'ARTSIGNIA 5 YEARS ANNIVERSARY', description: 'Cinematic architectural documentary celebrating 5 years of spatial innovation.', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/architecture-1.mp4' },
        { id: 'arch-2', numberLabel: '02 / 04', title: 'MODERN INTERIOR FEATURE 02', description: 'Elegant spatial camera movements showcasing light, luxury textures, and design.', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/architecture-2.mp4' },
        { id: 'arch-3', numberLabel: '03 / 04', title: 'CREATIVE DESIGN TOUR 03', description: 'Editorial tour exploring architectural rhythm, material harmony, and atmosphere.', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/architecture-3.mp4' },
        { id: 'arch-4', numberLabel: '04 / 04', title: 'GURU GOBIND MUSEUM ARCHITECTURE', description: 'Monumental architectural storytelling preserving heritage through modern lens.', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/architecture-4.mp4' },
      ],
    },
    {
      id: 'jewellery',
      eyebrowLabel: '03 / 05 ✦ LUXURY & ELEGANCE',
      title: 'JEWELLERY (INTERNATIONAL BRANDS)',
      subhead: 'High jewelry visual storytelling & international campaigns.',
      icon: Heart,
      accentColor: '#FF9BD2',
      projects: [
        { id: 'jewel-1', numberLabel: '01 / 03', title: 'FINE JEWELRY REEL 01', description: 'Macro reflections and diamond brilliance captured in high-contrast luxury grade.', gradientBg: 'from-[#FF9BD2]/40 via-[#1F0A33] to-[#B388FF]/30', videoUrl: '/assets/jewellery-1.mp4' },
        { id: 'jewel-2', numberLabel: '02 / 03', title: 'LUXURY CRAFTSMANSHIP 02', description: 'Sensory storytelling highlighting gold textures, artisan details, and elegance.', gradientBg: 'from-[#B388FF]/40 via-[#1F0A33] to-[#FFB6E6]/30', videoUrl: '/assets/jewellery-2.mp4' },
        { id: 'jewel-3', numberLabel: '03 / 03', title: 'INTERNATIONAL BRAND FEATURE 03', description: 'Editorial global brand film designed for international luxury campaigns.', gradientBg: 'from-[#FFB6E6]/40 via-[#1F0A33] to-[#FF9BD2]/30', videoUrl: '/assets/jewellery-3.mp4' },
      ],
    },
    {
      id: 'wellbeing',
      eyebrowLabel: '04 / 05 ✦ MIND & MOVEMENT',
      title: 'WELL BEING',
      subhead: 'Holistic wellness, movement & mindful living films.',
      icon: Sparkles,
      accentColor: '#FF9BD2',
      projects: [
        { id: 'wb-1', numberLabel: '01 / 04', title: 'ELANURA WELLNESS STORY 01', description: 'Ambient visual essay celebrating holistic health, natural beauty, and wellness.', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#B388FF]/30', videoUrl: '/assets/wellbeing-1.mp4' },
        { id: 'wb-2', numberLabel: '02 / 04', title: 'MINDFUL MOVEMENT REEL 02', description: 'Serene camera work and rhythmic pacing designed for wellness brand engagement.', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FFB6E6]/30', videoUrl: '/assets/wellbeing-2.mp4' },
        { id: 'wb-3', numberLabel: '03 / 04', title: 'HOLISTIC LIFESTYLE FILM 03', description: 'Warm editorial lighting and natural imagery focusing on vitality and balance.', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/wellbeing-3.mp4' },
        { id: 'wb-4', numberLabel: '04 / 04', title: 'ELANURA ESSENCE CAMPAIGN 04', description: 'Mindful visual narrative showcasing organic wellness experiences.', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/wellbeing-4.mp4' },
      ],
    },
    {
      id: 'animation',
      eyebrowLabel: '05 / 05 ✦ MOTION & ANIMATION',
      title: 'ANIMATION',
      subhead: '3D motion design, visual effects & animated storytelling.',
      icon: Wand2,
      accentColor: '#FFB6E6',
      projects: [
        { id: 'anim-1', numberLabel: '01 / 01', title: 'CREATIVE ANIMATION REEL 01', description: 'Dynamic 3D animation, fluid visual effects, and high-speed motion design.', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/food-2.mp4' },
      ],
    },
  ];

  const handleCarouselScroll = (sectionId, e) => {
    const target = e.currentTarget;
    const scrollLeft = target.scrollLeft;
    const cardWidth = target.firstElementChild?.clientWidth || 300;
    const newIdx = Math.max(0, Math.round(scrollLeft / (cardWidth + 16)));

    if (activeCardIds[sectionId] !== newIdx) {
      setActiveCardIds((prev) => ({
        ...prev,
        [sectionId]: newIdx,
      }));
    }
  };

  return (
    <section id="brands" className="bg-[#0A0A0A] scroll-mt-6 py-12 sm:py-24 md:py-28 relative overflow-x-hidden w-full max-w-full">
      
      {/* Background ambient glowing halos */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-96 h-96 bg-[#E91E8C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 bg-[#FFB3CB]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-8 sm:mb-14 px-5 sm:px-8 md:px-10 text-center">
        <h2
          className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Brands & Impact
        </h2>
        <p className="hidden md:block text-xs uppercase tracking-widest text-[#F5F0EB]/40 mt-3">
          Collaborations · Campaigns · Proven Results
        </p>
      </div>

      {/* 🚀 1. Infinite Ticker Marquee Carousel (Desktop Only) */}
      <div className="hidden md:block w-full overflow-hidden border-y border-white/10 bg-[#121212]/80 backdrop-blur-md py-4 mb-12 sm:mb-16 relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

        <div className="flex w-max gap-12 animate-marquee select-none">
          {/* Double array for continuous seamless infinite marquee */}
          {[...tickerBrands, ...tickerBrands, ...tickerBrands].map((brand, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="text-sm font-black tracking-wider text-[#F5F0EB]/90 uppercase">
                {brand.name}
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#E91E8C] bg-[#E91E8C]/15 border border-[#E91E8C]/30 px-2.5 py-0.5 rounded-full uppercase">
                {brand.category}
              </span>
              <span className="text-white/20 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📱 2. MOBILE PHONE ONLY: CATEGORY WORK VIDEO CAROUSELS (CLEANED UP & NO PAGE SCROLL) */}
      {/* ========================================================================= */}
      <div className="block md:hidden w-full max-w-full overflow-x-hidden px-4 space-y-10 mb-10">
        {mobilePortfolioSections.map((section) => {
          const Icon = section.icon;
          const activeIdx = activeCardIds[section.id] || 0;

          return (
            <div key={section.id} className="w-full space-y-4">
              
              {/* SUBSECTION HEADER */}
              <div className="w-full flex flex-col justify-between gap-1 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF9BD2] uppercase">
                  <Icon className="w-3.5 h-3.5" style={{ color: section.accentColor }} />
                  <span>{section.eyebrowLabel}</span>
                </div>
                <h4 className="font-black text-xl text-[#FFF7FF] tracking-tight uppercase">
                  {section.title}
                </h4>
                <p className="text-xs font-serif italic text-white/60">
                  {section.subhead}
                </p>
              </div>

              {/* HORIZONTAL SWIPE CAROUSEL (CLEAN 100% CONTAINER FIT) */}
              <div
                onScroll={(e) => handleCarouselScroll(section.id, e)}
                className="w-full flex flex-row flex-nowrap items-stretch gap-4 overflow-x-auto scroll-snap-type-x-mandatory scrollbar-none py-2 px-1"
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                  touchAction: 'pan-x pan-y',
                }}
              >
                {section.projects.map((proj, pIdx) => {
                  const isActive = pIdx === activeIdx;

                  return (
                    <div
                      key={proj.id}
                      onClick={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.muted = false;

                          const handleExitFullscreen = () => {
                            video.muted = true;
                            video.removeEventListener('webkitendfullscreen', handleExitFullscreen);
                            document.removeEventListener('fullscreenchange', handleExitFullscreen);
                          };

                          video.addEventListener('webkitendfullscreen', handleExitFullscreen);
                          document.addEventListener('fullscreenchange', () => {
                            if (!document.fullscreenElement) {
                              handleExitFullscreen();
                            }
                          });

                          if (video.requestFullscreen) {
                            video.requestFullscreen().catch(() => {});
                          } else if (video.webkitEnterFullscreen) {
                            video.webkitEnterFullscreen();
                          }
                        }
                      }}
                      className={`
                        w-[78vw] max-w-[290px] shrink-0 flex flex-col justify-between space-y-3
                        snap-center transition-all duration-300 cursor-pointer
                        ${isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-75'}
                      `}
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <div
                        className={`
                          relative w-full rounded-[24px] overflow-hidden
                          border border-white/15 bg-gradient-to-br ${proj.gradientBg}
                          shadow-[0_16px_45px_rgba(0,0,0,0.6)]
                          aspect-[9/16] transition-all duration-300
                          ${isActive ? 'shadow-[0_0_25px_rgba(233,30,140,0.35)] border-[#E91E8C]/60' : ''}
                        `}
                      >
                        <video
                          src={proj.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover rounded-[24px]"
                        />

                        {/* Top Number Badge */}
                        <div className="absolute top-3 left-3 z-20 pointer-events-none">
                          <span className={`px-2.5 py-0.5 rounded-full bg-black/70 border border-white/20 font-mono text-[11px] font-bold ${isActive ? 'text-[#FF9BD2]' : 'text-white/70'}`}>
                            {proj.numberLabel}
                          </span>
                        </div>

                        {/* Top Right AI Pill */}
                        <div className="absolute top-3 right-3 z-20 pointer-events-none px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#FFB3CB] text-white font-mono text-[10px] font-black tracking-widest shadow-lg">
                          AI
                        </div>

                        {/* Bottom Glass Title Bar */}
                        <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                          <span className="font-bold text-xs text-white leading-snug line-clamp-1">
                            {proj.title}
                          </span>
                        </div>

                        <div className="absolute inset-0 z-10 pointer-events-none rounded-[24px] shadow-[inset_0_0_25px_rgba(0,0,0,0.75)]" />
                      </div>

                      {/* Card Info Below */}
                      <div className="space-y-1 px-1 text-left">
                        <h4 className="font-bold text-sm text-white tracking-tight uppercase">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-normal">
                          {proj.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

      {/* 🚀 3. Interactive Spotlight Brand Cards (Desktop View) */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {brandSpotlights.map((brand, index) => {
            const isHovered = hoveredBrandIndex === index;

            return (
              <div
                key={brand.id}
                onMouseEnter={() => setHoveredBrandIndex(index)}
                onMouseLeave={() => setHoveredBrandIndex(null)}
                className="group relative rounded-3xl border border-white/15 bg-[#121212] p-7 sm:p-9 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  boxShadow: isHovered
                    ? `0 20px 50px -10px ${brand.glowColor}, 0 0 30px rgba(255,255,255,0.05)`
                    : '0 10px 30px rgba(0,0,0,0.8)',
                  borderColor: isHovered ? brand.accentColor : 'rgba(245, 240, 235, 0.15)',
                }}
              >
                {/* Dynamic Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-60 transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-40'
                  }`}
                />

                {/* Card Top Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-3 inline-block"
                        style={{
                          color: brand.accentColor,
                          borderColor: `${brand.accentColor}40`,
                          backgroundColor: `${brand.accentColor}15`,
                        }}
                      >
                        {brand.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                        {brand.name}
                      </h3>
                    </div>

                    <div
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-white"
                      style={{
                        borderColor: isHovered ? brand.accentColor : 'rgba(255,255,255,0.2)',
                      }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-white/80 mt-3 leading-relaxed">
                    {brand.tagline}
                  </p>
                </div>

                {/* Description Body */}
                <p className="relative z-10 text-xs sm:text-sm text-[#F5F0EB]/70 leading-relaxed mb-8">
                  {brand.description}
                </p>

                {/* Metrics Highlight Pill Bar */}
                <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 mt-auto">
                  {brand.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5F0EB]/40">
                        {metric.label}
                      </span>
                      <span
                        className="text-xl sm:text-2xl font-black tracking-tight mt-0.5"
                        style={{ color: isHovered ? brand.accentColor : '#F5F0EB' }}
                      >
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://www.linkedin.com/in/kamna-bharadwaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#F5F0EB]/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F5F0EB]/80 transition-all duration-200 hover:border-[#E91E8C]/60 hover:text-[#E91E8C] hover:shadow-[0_0_18px_rgba(255,107,174,0.3)] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#E91E8C]" />
            Partner for your next brand campaign
          </a>
        </div>
      </div>
    </section>
  );
}
