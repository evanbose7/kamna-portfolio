import React, { useState } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './Icons';

export default function ConnectSection() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      num: '01',
      title: 'Discovery Call',
      price: '₹39',
      duration: '20 min',
      desc: '1-on-1 strategy call to audit your current brand positioning, identify key narrative angles, and map out a 30-day content framework.',
    },
    {
      num: '02',
      title: 'LinkedIn Content Creation',
      price: '₹79',
      duration: '30 min',
      desc: 'Live breakdown & rewrite of your top 3 post drafts. Learn hook psychology, formatting mechanics, and CTA placement.',
    },
    {
      num: '03',
      title: 'Starter Kit',
      price: '₹25',
      duration: 'Discovery Call + Cheat Sheet',
      desc: 'The complete onboarding bundle for ambitious creators: Includes 20-min strategy call + full downloadable cheat sheet.',
    },
    {
      num: '04',
      title: 'Content Creation Cheat Sheet',
      price: '₹9',
      duration: 'Digital product',
      desc: 'My battle-tested guide containing 50 proven hook templates, 10 post structures, and profile optimization checklists.',
    },
    {
      num: '05',
      title: 'Priority DM',
      price: '₹5',
      duration: '2-day response',
      desc: 'Ask me any specific question about your personal brand, ghostwriting rates, or client pitch strategy with guaranteed response.',
    },
  ];

  return (
    <section
      id="connect"
      className="relative z-10 -mt-10 scroll-mt-6 rounded-t-[40px] bg-white text-[#0A0A0A] px-6 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-12 sm:pb-24 sm:pt-28 md:-mt-14 md:rounded-t-[60px] md:px-16 md:pb-32 md:pt-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center sm:mb-20 md:mb-24">
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#0A0A0A]"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
          >
            Connect With Me
          </h2>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 sm:mb-20 border-b border-black/10 pb-12">
          <div className="flex flex-col items-center gap-1">
            <span className="font-black text-[#0A0A0A] leading-none text-[clamp(1.8rem,4vw,3.5rem)]">
              5/5
            </span>
            <span className="font-light uppercase tracking-widest text-[#0A0A0A]/50 text-[clamp(0.65rem,1vw,0.8rem)]">
              Rating
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="font-black text-[#0A0A0A] leading-none text-[clamp(1.8rem,4vw,3.5rem)]">
              29
            </span>
            <span className="font-light uppercase tracking-widest text-[#0A0A0A]/50 text-[clamp(0.65rem,1vw,0.8rem)]">
              Ratings
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="font-black text-[#0A0A0A] leading-none text-[clamp(1.8rem,4vw,3.5rem)]">
              28
            </span>
            <span className="font-light uppercase tracking-widest text-[#0A0A0A]/50 text-[clamp(0.65rem,1vw,0.8rem)]">
              Testimonials
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="font-black text-[#0A0A0A] leading-none text-[clamp(1.8rem,4vw,3.5rem)]">
              Top 5%
            </span>
            <span className="font-light uppercase tracking-widest text-[#0A0A0A]/50 text-[clamp(0.65rem,1vw,0.8rem)]">
              Creator
            </span>
          </div>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-3 sm:mb-20">
          <span className="rounded-full border border-black/20 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/70">
            People's Choice
          </span>
          <span className="rounded-full border border-black/20 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/70">
            Community Care
          </span>
        </div>

        <div className="mb-20 divide-y divide-black/15 border-t border-b border-black/15">
          {services.map((service) => (
            <div
              key={service.num}
              onClick={() => setSelectedService(selectedService?.num === service.num ? null : service)}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 cursor-pointer transition-colors hover:bg-black/[0.02] px-4 rounded-2xl"
            >
              <div className="flex items-start gap-6 sm:gap-10 md:gap-14">
                <span
                  className="font-black leading-none text-[#0A0A0A] shrink-0 text-[clamp(2rem,7vw,90px)] group-hover:text-[#E91E8C] transition-colors"
                >
                  {service.num}
                </span>
                <div className="flex flex-col gap-1 pt-1 sm:gap-2">
                  <h3
                    className="font-bold uppercase text-[#0A0A0A] text-[clamp(1.1rem,2.2vw,2rem)] group-hover:translate-x-1 transition-transform"
                  >
                    {service.title}
                  </h3>
                  <p className="font-light text-[#0A0A0A]/60 text-[clamp(0.85rem,1.6vw,1.2rem)] font-medium">
                    <span className="text-[#E91E8C] font-bold">{service.price}</span> · {service.duration}
                  </p>
                  {selectedService?.num === service.num && (
                    <p className="text-xs text-[#0A0A0A]/70 mt-2 max-w-lg leading-relaxed animate-in fade-in">
                      {service.desc}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 sm:mt-0 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A0A0A]/40 group-hover:text-[#E91E8C] transition-colors">
                <span>Book Service</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="https://topmate.io/kamna_bhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient group relative inline-block whitespace-nowrap rounded-full px-10 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_4px_28px_rgba(212,0,108,0.55)] cursor-pointer overflow-hidden sm:px-12 sm:text-sm"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover:translate-x-full"
              aria-hidden="true"
            />
            <span className="relative flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book on Topmate
            </span>
          </a>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://www.linkedin.com/in/kamna-bharadwaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0A0A]/50 hover:text-[#E91E8C] transition-colors p-2"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/thekamnabhardwaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0A0A]/50 hover:text-[#E91E8C] transition-colors p-2"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
