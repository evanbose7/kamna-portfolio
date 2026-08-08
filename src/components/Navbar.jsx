import React, { useState } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';

export default function Navbar({ onOpenPdfModal }) {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = ['English', 'Hindi', 'Spanish', 'French'];

  const navLinks = [
    { name: 'Instagram', href: '#insta' },
    { name: 'About', href: '#about' },
    { name: 'YouTube', href: '#youtube' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <nav className="hero-nav flex items-center justify-between px-6 pt-5 sm:px-14 sm:pt-6 md:px-24 md:pt-8 relative z-40 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0">
      <a
        href="#"
        className="font-black uppercase tracking-tight text-[#F5F0EB] hover:text-[#E91E8C] transition-colors duration-200 text-[clamp(1.2rem,2.8vw,2rem)]"
      >
        Kamna
      </a>

      {/* Desktop Links */}
      <div className="hidden sm:flex items-center gap-6 md:gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative inline-flex w-fit items-center text-xs font-semibold uppercase tracking-widest text-[#F5F0EB]/80 hover:text-[#F5F0EB] transition-colors duration-200 md:text-sm lg:text-base cursor-pointer"
          >
            {link.name}
            <span className="absolute left-0 top-[1.5em] h-[2px] w-full bg-[#E91E8C] transition-transform duration-300 origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100" />
          </a>
        ))}

        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 rounded-full border border-[#F5F0EB]/20 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#F5F0EB]/70 transition-all duration-200 hover:border-[#E91E8C]/60 hover:text-[#E91E8C] cursor-pointer whitespace-nowrap"
          >
            <Globe className="w-3.5 h-3.5 text-[#E91E8C]" />
            {currentLang}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-32 rounded-xl border border-[#F5F0EB]/15 bg-[#121212] py-2 shadow-2xl backdrop-blur-xl z-50">
              {languages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => {
                    setCurrentLang(lang);
                    setLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-1.5 text-xs font-medium transition-colors ${
                    currentLang === lang
                      ? 'text-[#E91E8C] bg-[#E91E8C]/10 font-bold'
                      : 'text-[#F5F0EB]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Trigger */}
      <div className="flex sm:hidden items-center gap-3">
        <button
          type="button"
          onClick={() => setLangOpen(!langOpen)}
          className="flex items-center gap-1 rounded-full border border-[#F5F0EB]/20 px-3 py-1 text-xs font-medium text-[#F5F0EB]/70"
        >
          {currentLang}
        </button>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#F5F0EB] hover:text-[#E91E8C] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bg-[#0A0A0A] border-b border-[#F5F0EB]/10 p-6 flex flex-col gap-5 sm:hidden z-50 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold uppercase tracking-wider text-[#F5F0EB] hover:text-[#E91E8C]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPdfModal();
            }}
            className="w-full rounded-full bg-gradient-to-r from-[#E91E8C] to-[#FFB3CB] py-3 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg"
          >
            Get Free PDF
          </button>
        </div>
      )}
    </nav>
  );
}
