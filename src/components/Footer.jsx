import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, YoutubeIcon, MediumIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#F5F0EB]/10 relative z-20">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-14 md:px-10 md:pt-24 md:pb-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="font-black uppercase tracking-tight text-[#F5F0EB]/90 hover:text-[#E91E8C] transition-colors text-[clamp(1.5rem,4vw,2.5rem)]"
            >
              Kamna
            </a>
            <p className="max-w-xs font-light text-[#F5F0EB]/40 leading-relaxed text-[clamp(0.8rem,1.3vw,0.95rem)]">
              Building my brand while teaching you to build yours.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-[#F5F0EB]/30 mb-1 font-bold">
              Navigate
            </p>
            {['Instagram', 'About', 'YouTube', 'Connect'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === 'instagram' ? 'insta' : item.toLowerCase()}`}
                className="group relative inline-flex w-fit items-center text-xs font-semibold uppercase tracking-widest text-[#F5F0EB]/60 hover:text-[#F5F0EB] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-[#F5F0EB]/30 font-bold">
              Follow
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#F5F0EB]/40 hover:text-[#E91E8C] transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Thekamnabhardwajj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#F5F0EB]/40 hover:text-[#E91E8C] transition-colors"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a
                href="https://medium.com/@thekamnabhardwaj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="text-[#F5F0EB]/40 hover:text-[#E91E8C] transition-colors"
              >
                <MediumIcon className="w-5 h-5" />
              </a>
            </div>

            <a
              href="https://topmate.io/kamna_bhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E91E8C]/70 hover:text-[#E91E8C] transition-colors pt-1"
            >
              Book on Topmate
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

      <div className="border-t border-[#F5F0EB]/5 px-5 py-6 sm:px-8 md:px-10">
        <p className="text-center font-light text-[#F5F0EB]/30 uppercase tracking-widest text-[clamp(0.6rem,1vw,0.75rem)]">
          © {new Date().getFullYear()} Kamna Bhardwaj. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
