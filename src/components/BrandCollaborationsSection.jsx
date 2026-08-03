import React, { useState } from 'react';
import { Sparkles, TrendingUp, Eye, Award, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function BrandCollaborationsSection() {
  const [hoveredBrandIndex, setHoveredBrandIndex] = useState(null);

  // Marquee Brand List (Looping Ticker)
  const tickerBrands = [
    { name: 'OPPO', category: 'TECH & SMARTPHONES' },
    { name: 'MARS COSMETICS', category: 'BEAUTY & LIFESTYLE' },
    { name: 'MINIMALIST', category: 'SKINCARE & WELLNESS' },
    { name: 'UNACADEMY', category: 'EDTECH & LEARNING' },
    { name: 'LENSKART', category: 'FASHION & D2C' },
    { name: 'TOPMATE', category: 'CREATOR PLATFORM' },
  ];

  // Detailed Brand Spotlight Cards
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

  return (
    <section id="brands" className="bg-[#0A0A0A] scroll-mt-6 py-20 sm:py-28 md:py-32 relative overflow-hidden">
      
      {/* Background ambient glowing halos */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-96 h-96 bg-[#E91E8C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 bg-[#FFB3CB]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-14 px-5 sm:px-8 md:px-10 text-center">
        <h2
          className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Brands & Impact
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#F5F0EB]/40 mt-3">
          Collaborations · Campaigns · Proven Results
        </p>
      </div>

      {/* 🚀 1. Infinite Ticker Marquee Carousel */}
      <div className="w-full overflow-hidden border-y border-white/10 bg-[#121212]/80 backdrop-blur-md py-4 mb-16 relative">
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

      {/* 🚀 2. Interactive Spotlight Brand Cards */}
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
