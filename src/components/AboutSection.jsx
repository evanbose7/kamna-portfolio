import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenConnectModal }) {
  const containerRef = useRef(null);
  const wordsContainerRef = useRef(null);

  const paragraph1 = `Hello, I am Ari 👀 I’m a 25-year-old content creator, video editor, and creative who loves bringing ideas to life. I shoot, script, edit, and experiment with AI to create visuals and stories that feel fresh, engaging, and impossible to scroll past. I’ve worked with 10+ brands through freelancing, creating and handling content across industries like wellness, beauty, food and beverage, lifestyle, and more. From ideation to the final piece of content, I love being involved in the entire creative process.`;
  const paragraph2 = `And yeah, I’d love to help bring your ideas to life too 👉🏻👈🏻`;

  const paragraphs = [paragraph1, paragraph2];
  
  const highlightWords = [
    'Ari', '👀', 'content', 'creator,', 'video', 'editor,', 'creative', 'AI', 'visuals', 'stories',
    '10+', 'brands', 'wellness,', 'beauty,', 'food', 'beverage,', 'lifestyle,', 'process.', '👉🏻👈🏻'
  ];

  useEffect(() => {
    let ticking = false;
    let lastProgress = -1;
    let containerDocTop = 0;

    const measureTop = () => {
      if (containerRef.current) {
        const scrollY = window.lenis ? window.lenis.scroll : (window.scrollY || window.pageYOffset || 0);
        containerDocTop = containerRef.current.getBoundingClientRect().top + scrollY;
      }
    };

    const wordsElements = wordsContainerRef.current
      ? Array.from(wordsContainerRef.current.querySelectorAll('.about-word'))
      : [];
    const totalWords = wordsElements.length;

    const updateWords = (progress) => {
      if (!totalWords) return;
      for (let i = 1; i < totalWords; i++) {
        const el = wordsElements[i];
        const center = i / (totalWords - 1);
        const localProgress = (progress - (center - 0.25)) / 0.35;
        const weight = Math.min(Math.max(localProgress, 0), 1);
        const isSpecial = el.getAttribute('data-special') === '1';
        const opacity = (0.22 + weight * 0.78).toFixed(2);

        if (weight > 0.6) {
          el.style.color = isSpecial ? '#E91E8C' : '#FFFFFF';
          el.style.opacity = '1';
          el.style.textShadow = isSpecial ? '0 0 16px rgba(233,30,140,0.85)' : 'none';
        } else {
          el.style.color = `rgba(245, 240, 235, ${opacity})`;
          el.style.opacity = opacity;
          el.style.textShadow = 'none';
        }
      }
    };

    const updateScroll = () => {
      if (!containerRef.current) {
        ticking = false;
        return;
      }

      if (!containerDocTop) {
        measureTop();
      }

      const scrollY = window.lenis ? window.lenis.scroll : (window.scrollY || window.pageYOffset || 0);
      const rectTop = containerDocTop - scrollY;
      const windowHeight = window.innerHeight;

      // Start revealing as section enters screen (75% viewport height)
      const start = windowHeight * 0.75;
      const end = -windowHeight * 0.1;

      let progress = (start - rectTop) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);

      // Skip updates when settled at 1 (already past) or 0 (not yet reached)
      if ((progress === 1 && lastProgress === 1) || (progress === 0 && lastProgress === 0)) {
        ticking = false;
        return;
      }

      // Small threshold to avoid subpixel noise
      if (Math.abs(progress - lastProgress) < 0.005 && progress > 0 && progress < 1) {
        ticking = false;
        return;
      }

      lastProgress = progress;
      updateWords(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    const handleResize = () => {
      measureTop();
      updateScroll();
    };

    measureTop();
    updateScroll();

    if (window.lenis) {
      window.lenis.on('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:py-24 scroll-mt-6 sm:px-8 md:px-10 overflow-hidden bg-[#0A0A0A] transform-gpu"
    >
      {/* Background ambient glowing circles */}
      <div className="pointer-events-none absolute top-[10%] left-[2%] w-[200px] h-[200px] rounded-full blur-3xl opacity-30 bg-[#FFB3CB] transform-gpu" />
      <div className="pointer-events-none absolute bottom-[10%] left-[8%] w-[160px] h-[160px] rounded-full blur-3xl opacity-20 bg-[#E91E8C] transform-gpu" />
      <div className="pointer-events-none absolute top-[10%] right-[2%] w-[200px] h-[200px] rounded-full blur-3xl opacity-30 bg-[#E91E8C] transform-gpu" />
      <div className="pointer-events-none absolute bottom-[8%] right-[8%] w-[220px] h-[220px] rounded-full blur-3xl opacity-30 bg-[#FFB3CB] transform-gpu" />

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
            className="pointer-events-none absolute inset-0 m-auto w-full h-full rounded-3xl blur-2xl opacity-40 transform-gpu"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,179,203,0.3) 0%, rgba(233,30,140,0.15) 60%, transparent 100%)',
            }}
          />

          {/* Highlighted Card Container */}
          <div
            ref={wordsContainerRef}
            className="relative rounded-3xl border border-[#FFB3CB]/30 bg-gradient-to-b from-[#121212]/95 via-[#181014]/90 to-[#121212]/95 p-6 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(255,179,203,0.18)] transform-gpu text-left sm:text-center space-y-6"
          >
            {paragraphs.map((pText, pIdx) => {
              const words = pText.split(' ');
              const prevWordsCount = paragraphs.slice(0, pIdx).join(' ').split(' ').length;

              return (
                <p key={pIdx} className="font-medium leading-relaxed sm:leading-[1.7] tracking-wide text-[clamp(1.15rem,2.4vw,1.55rem)] relative z-10">
                  {words.map((word, wIdx) => {
                    const globalWordIdx = (pIdx === 0 ? 0 : prevWordsCount) + wIdx;
                    const isSpecial = highlightWords.includes(word);
                    const isFirst = globalWordIdx === 0;

                    return (
                      <span
                        key={wIdx}
                        data-special={isSpecial ? '1' : '0'}
                        className={`about-word inline-block mr-[0.28em] select-none ${
                          isSpecial ? 'font-bold' : 'font-medium'
                        }`}
                        style={{
                          color: isFirst ? '#FFFFFF' : 'rgba(245, 240, 235, 0.22)',
                          opacity: isFirst ? 1 : 0.22,
                          textShadow: 'none',
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
