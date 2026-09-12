import React, { useEffect, useRef, useState } from 'react';
import { FileText, Sparkles, Users } from 'lucide-react';

export default function FreeResourceSection({ onOpenPdfModal }) {
  const quoteRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const quoteText = `Most people study Top creators and just copy their tone. I study their structure and patterns that attract opportunities and people.`;
  const words = quoteText.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!quoteRef.current) return;

      const rect = quoteRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when the text enters middle of screen (75%)
      // Complete full white reveal by 45% screen height
      const start = windowHeight * 0.75;
      const end = windowHeight * 0.45;

      let progress = (start - rect.top) / (start - end);

      if (rect.top <= end) {
        progress = 1;
      } else {
        progress = Math.min(Math.max(progress, 0), 1);
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="download" className="relative z-10 bg-[#0A0A0A] px-5 py-24 sm:px-8 sm:py-32 md:px-10">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-12 text-center">
        
        {/* Header */}
        <div>
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Free Resource
          </h2>
        </div>

        {/* Card Container */}
        <div className="w-full max-w-2xl rounded-3xl border border-[#E91E8C]/30 bg-[#121212] p-8 sm:p-10 md:p-12 flex flex-col items-center gap-6 shadow-[0_0_40px_rgba(233,30,140,0.15)] relative overflow-hidden">
          
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E91E8C]/20 rounded-full blur-3xl" />

          <div className="relative rounded-2xl overflow-hidden border border-[#E91E8C]/40 shadow-2xl w-[120px] sm:w-[150px] aspect-[3/4]">
            <img
              src="/assets/pdf-cover.jpg"
              alt="Decoded PDF Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-2">
              <span className="font-black text-[#FFB3CB] uppercase tracking-widest text-xs flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" /> PDF
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3
              className="font-black uppercase text-[#F5F0EB] leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}
            >
              Decoded: 100 Top LinkedIn Creators' Headlines & About Sections
            </h3>
            <p
              className="font-light text-[#F5F0EB]/70 leading-relaxed max-w-xl mx-auto"
              style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
            >
              I studied 100 top LinkedIn creators and broke down their exact formulas. Headlines that convert. About sections that sell. The patterns no one talks about — decoded.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenPdfModal}
              className="group relative cursor-pointer overflow-hidden rounded-full border border-[#F5F0EB]/40 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F5F0EB] transition-all duration-300 hover:border-[#E91E8C]/80 hover:text-[#E91E8C] hover:shadow-[0_0_24px_rgba(255,107,174,0.4)] sm:px-10 sm:py-4 sm:text-sm"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full rounded-full bg-[#E91E8C]/15 transition-transform duration-300 group-hover:translate-x-0"
                aria-hidden="true"
              />
              <span className="relative flex items-center gap-2">
                Get Free PDF
                <Sparkles className="w-4 h-4 text-[#FFB3CB]" />
              </span>
            </button>

            <p
              className="text-[#F5F0EB]/50 uppercase tracking-widest text-[clamp(0.65rem,1vw,0.8rem)] flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[#E91E8C]" />
              Joined by 1,000+ creators
            </p>
          </div>
        </div>

        {/* Dim-to-White Scroll-Driven Text Below Free Resource */}
        <div ref={quoteRef} className="max-w-[540px]">
          <p className="font-medium leading-relaxed text-[clamp(0.95rem,1.8vw,1.25rem)]">
            {words.map((word, index) => {
              const wordThreshold = index / (words.length - 1);
              const isRevealed = scrollProgress >= wordThreshold;

              return (
                <span
                  key={index}
                  className="inline-block mr-[0.25em] transition-all duration-300 ease-out select-none"
                  style={{
                    color: isRevealed ? '#F5F0EB' : 'rgba(245, 240, 235, 0.25)',
                    opacity: isRevealed ? 1 : 0.25,
                    transform: isRevealed ? 'translateY(0px)' : 'translateY(2px)',
                  }}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>

      </div>
    </section>
  );
}
