import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        ARNAV
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
      </div>

      {/* Mobile Menu Trigger */}
      <div className="flex sm:hidden items-center gap-3">
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
        </div>
      )}
    </nav>
  );
}
