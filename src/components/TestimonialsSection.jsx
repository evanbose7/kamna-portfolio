import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "I had a really lovely conversation with Kamna. Talking to her felt easy and energising — it was just very visible that she had great knowledge about her craft. What stood out was how naturally she connected the dots, quickly understanding context and offering thoughtful, relevant strategies on the spot. Kamna brings clarity, sharp thinking, and a strategic lens that makes her someone you genuinely want in your corner if you're serious about growing on LinkedIn!",
      author: "Manvi Narang",
      role: "Founder & Creative Lead",
      date: "Dec 2025"
    },
    {
      id: 2,
      quote: "Kamna completely transformed my LinkedIn content strategy in just one 30-minute session. She spotted the exact bottlenecks in my hook structures and helped me land 3 inbound consulting inquiries in the first week after implementing her feedback. Highly recommended!",
      author: "Aarav Mehta",
      role: "SaaS Founder",
      date: "Jan 2026"
    },
    {
      id: 3,
      quote: "Working with Kamna on my personal branding was hands down the best investment I made this year. She doesn't just write posts — she captures your exact voice and converts complex industry expertise into engaging, human stories.",
      author: "Priya Sharma",
      role: "Executive Coach",
      date: "Nov 2025"
    },
    {
      id: 4,
      quote: "Her 'Decoded' framework is absolute gold! Kamna breaks down content mechanics with surgical precision. If you want content that actually converts without sounding generic, talk to Kamna.",
      author: "Rohan Varma",
      role: "Growth Marketer",
      date: "Oct 2025"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#0A0A0A] px-5 py-20 sm:px-8 sm:py-28 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            What They Say
          </h2>
          <p className="mt-3 font-light text-[#F5F0EB]/50 uppercase tracking-widest text-[clamp(0.65rem,1.2vw,0.85rem)]">
            5/5 · 28 reviews · People's Choice · Top 5%
          </p>
        </div>

        {/* Static Dimensions Testimonial Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl h-[440px] sm:h-[420px] rounded-3xl border border-[#F5F0EB]/15 bg-[#121212]/90 text-[#F5F0EB] shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-7 sm:p-9 flex flex-col justify-between backdrop-blur-md relative overflow-hidden select-none">
            
            {/* Ambient Pink Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E91E8C]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Header & Rating */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E91E8C] text-[#E91E8C]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#E91E8C] uppercase tracking-widest">
                      5/5
                    </span>
                  </div>
                  <p className="text-[11px] text-[#F5F0EB]/40 uppercase tracking-widest">
                    28 verified reviews · Topmate
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-black uppercase tracking-tight text-[#F5F0EB]/90 text-lg leading-none">
                    Topmate
                  </p>
                </div>
              </div>

              {/* Badge Pills */}
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[#E91E8C]/40 px-3 py-0.5 text-[10px] font-bold text-[#FFB3CB] uppercase tracking-widest bg-[#E91E8C]/10">
                  People's Choice
                </span>
                <span className="rounded-full border border-[#E91E8C]/40 px-3 py-0.5 text-[10px] font-bold text-[#FFB3CB] uppercase tracking-widest bg-[#E91E8C]/10">
                  Top 5%
                </span>
                <span className="rounded-full border border-[#E91E8C]/40 px-3 py-0.5 text-[10px] font-bold text-[#FFB3CB] uppercase tracking-widest bg-[#E91E8C]/10">
                  Community Care
                </span>
              </div>
            </div>

            {/* Middle Quote Body with Fixed Line Height & Scrollable/Clamped Text */}
            <div className="flex-1 my-4 flex flex-col justify-center overflow-hidden">
              <p className="font-light leading-relaxed text-[#F5F0EB]/85 text-xs sm:text-sm italic line-clamp-6">
                “{current.quote}”
              </p>
            </div>

            {/* Bottom Footer: Author Info & Controls */}
            <div className="space-y-3 pt-3 border-t border-[#F5F0EB]/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#F5F0EB] text-sm">{current.author}</p>
                  <p className="text-[11px] text-[#F5F0EB]/50">{current.role}</p>
                </div>
                <span className="text-xs text-[#F5F0EB]/40">{current.date}</span>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-[#F5F0EB]/40 uppercase tracking-widest font-mono">
                  {currentIndex + 1} / {testimonials.length}
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F5F0EB]/20 text-[#F5F0EB]/70 transition-all duration-200 hover:border-[#E91E8C] hover:text-[#E91E8C] hover:shadow-[0_0_14px_rgba(255,107,174,0.5)] cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F5F0EB]/20 text-[#F5F0EB]/70 transition-all duration-200 hover:border-[#E91E8C] hover:text-[#E91E8C] hover:shadow-[0_0_14px_rgba(255,107,174,0.5)] cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Link to Topmate */}
        <div className="flex justify-center mt-8">
          <a
            href="https://topmate.io/kamna_bhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#F5F0EB]/40 hover:text-[#E91E8C] transition-colors cursor-pointer"
          >
            See all 28 reviews on Topmate
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
