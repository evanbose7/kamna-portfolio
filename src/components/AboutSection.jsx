import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenConnectModal }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const paragraph1 = `Hello, I am Ari 👀 I’m a 25-year-old content creator, video editor, and creative who loves bringing ideas to life. I shoot, script, edit, and experiment with AI to create visuals and stories that feel fresh, engaging, and impossible to scroll past. I’ve worked with 10+ brands through freelancing, creating and handling content across industries like wellness, beauty, food and beverage, lifestyle, and more. From ideation to the final piece of content, I love being involved in the entire creative process.`;
  const paragraph2 = `And yeah, I’d love to help bring your ideas to life too 👉🏻👈🏻`;

  const paragraphs = [paragraph1, paragraph2];
  
  const highlightWords = [
    'Ari', '👀', 'content', 'creator,', 'video', 'editor,', 'creative', 'AI', 'visuals', 'stories',
    '10+', 'brands', 'wellness,', 'beauty,', 'food', 'beverage,', 'lifestyle,', 'process.', '👉🏻👈🏻'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.65;
      const end = -windowHeight * 0.1;

      let progress = (start - rect.top) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:py-24 scroll-mt-6 sm:px-8 md:px-10 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background ambient glowing circles */}
      <div className="pointer-events-none absolute top-[10%] left-[2%] w-[200px] h-[200px] rounded-full blur-3xl opacity-30 bg-[#FFB3CB]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[8%] w-[160px] h-[160px] rounded-full blur-3xl opacity-20 bg-[#E91E8C]" />
      <div className="pointer-events-none absolute top-[10%] right-[2%] w-[200px] h-[200px] rounded-full blur-3xl opacity-30 bg-[#E91E8C]" />
      <div className="pointer-events-none absolute bottom-[8%] right-[8%] w-[220px] h-[220px] rounded-full blur-3xl opacity-30 bg-[#FFB3CB]" />

      <div className="flex flex-col items-center gap-10 sm:gap-14 max-w-4xl text-center relative z-10">
        
        {/* Giant Section Title */}
        <div>
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Me
          </h2>
        </div>

        {/* Stationary Introduction Box with Light Pink Shader Glow */}
        <div ref={containerRef} className="relative w-full max-w-[840px]">
          
          {/* Light Pink Radial Spotlight Halo */}
          <div
            className="pointer-events-none absolute inset-0 m-auto w-full h-full rounded-3xl blur-2xl opacity-40"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,179,203,0.3) 0%, rgba(233,30,140,0.15) 60%, transparent 100%)',
            }}
          />

          {/* Highlighted Card Container */}
          <div className="relative rounded-3xl border border-[#FFB3CB]/30 bg-gradient-to-b from-[#121212]/90 via-[#181014]/80 to-[#121212]/90 p-6 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(255,179,203,0.18)] backdrop-blur-xl text-left sm:text-center space-y-6">
            
            {paragraphs.map((pText, pIdx) => {
              const words = pText.split(' ');
              const totalWordsCount = paragraphs.join(' ').split(' ').length;
              const prevWordsCount = paragraphs.slice(0, pIdx).join(' ').split(' ').length;

              return (
                <p key={pIdx} className="font-medium leading-relaxed sm:leading-[1.7] tracking-wide text-[clamp(1.15rem,2.4vw,1.55rem)] relative z-10">
                  {words.map((word, wIdx) => {
                    const globalWordIdx = (pIdx === 0 ? 0 : prevWordsCount) + wIdx;
                    const wordCenter = globalWordIdx / (totalWordsCount - 1);
                    
                    let wordWeight = 0;
                    if (globalWordIdx === 0) {
                      wordWeight = 1;
                    } else {
                      const localProgress = (scrollProgress - (wordCenter - 0.25)) / 0.35;
                      wordWeight = Math.min(Math.max(localProgress, 0), 1);
                    }

                    const isSpecial = highlightWords.includes(word);
                    const opacity = 0.22 + wordWeight * 0.78;

                    return (
                      <span
                        key={wIdx}
                        className="inline-block mr-[0.28em] transition-colors duration-400 ease-out select-none"
                        style={{
                          color: wordWeight > 0.6
                            ? isSpecial
                              ? '#E91E8C'
                              : '#FFFFFF'
                            : `rgba(245, 240, 235, ${opacity})`,
                          opacity,
                          fontWeight: isSpecial ? '700' : '500',
                          textShadow: isSpecial && wordWeight > 0.6
                            ? '0 0 16px rgba(233,30,140,0.85)'
                            : 'none',
                        }}
                      >
                        {word}
                      </span>
                    );
                  })}
                </p>
              );
            })}

          </div>
        </div>

        {/* Connect Button */}
        <div>
          <button
            type="button"
            onClick={onOpenConnectModal}
            className="btn-gradient group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_4px_28px_rgba(212,0,108,0.55)] cursor-pointer overflow-hidden sm:px-11 sm:text-sm"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover:translate-x-full"
              aria-hidden="true"
            />
            <span className="relative flex items-center gap-2">
              Connect With Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
