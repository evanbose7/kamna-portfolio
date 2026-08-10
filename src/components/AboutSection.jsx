import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenConnectModal }) {
  const aboutText = `Hi, I'm Arnav, 21 year old creator, storyteller, and personal branding strategist. I've built a community of LinkedIn upto 17K+ people and Instagram 1k+ — also worked with brands like OPPO, MARS, and Minimalist, and helped founders, coaches, and creators grow their presence online. Everything I share comes from building in public, experimenting, and learning firsthand — not theory. If you're looking for content that sounds like you and actually connects with people, you're in the right place.`;

  const words = aboutText.split(' ');
  const highlightWords = ['OPPO,', 'MARS,', 'Minimalist,', '17K+', '1k+', 'LinkedIn', 'Instagram', 'storyteller,', 'strategist.'];

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-24 scroll-mt-6 sm:px-8 md:px-10 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background ambient glowing circles */}
      <div className="pointer-events-none absolute top-[10%] left-[2%] w-[200px] h-[200px] rounded-full blur-3xl opacity-30 bg-[#FFB3CB]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[8%] w-[160px] h-[160px] rounded-full blur-3xl opacity-20 bg-[#E91E8C]" />
      <div className="pointer-events-none absolute top-[10%] right-[2%] w-[200px] h-[200px] rounded-full blur-3xl opacity-30 bg-[#E91E8C]" />
      <div className="pointer-events-none absolute bottom-[8%] right-[8%] w-[220px] h-[220px] rounded-full blur-3xl opacity-30 bg-[#FFB3CB]" />

      <div className="flex flex-col items-center gap-12 sm:gap-14 max-w-4xl text-center relative z-10">
        
        {/* Giant Section Title */}
        <div>
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Me
          </h2>
        </div>

        {/* Introduction Box with Light Pink Shader Glow (Static, Crisp & Fully Legible) */}
        <div className="relative w-full max-w-[700px]">
          
          {/* Light Pink Radial Spotlight Halo */}
          <div
            className="pointer-events-none absolute inset-0 m-auto w-full h-full rounded-3xl blur-2xl opacity-40"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,179,203,0.3) 0%, rgba(233,30,140,0.15) 60%, transparent 100%)',
            }}
          />

          {/* Highlighted Card Container */}
          <div className="relative rounded-3xl border border-[#FFB3CB]/30 bg-gradient-to-b from-[#121212]/90 via-[#181014]/80 to-[#121212]/90 p-7 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(255,179,203,0.18)] backdrop-blur-xl text-left sm:text-center min-h-[220px]">
            
            <p className="font-medium leading-relaxed tracking-wide text-[clamp(1.05rem,2.1vw,1.4rem)] relative z-10 text-white">
              {words.map((word, index) => {
                const isSpecial = highlightWords.includes(word);

                return (
                  <span
                    key={index}
                    className={`inline-block mr-[0.28em] select-none ${
                      isSpecial
                        ? 'text-[#E91E8C] font-bold [text-shadow:0_0_16px_rgba(233,30,140,0.85)]'
                        : 'text-white font-medium'
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </p>

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
