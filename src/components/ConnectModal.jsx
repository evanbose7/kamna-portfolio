import React from 'react';
import { X, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function ConnectModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const instagramUrl = 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy&utm_source=qr';
  const whatsappUrl = 'https://wa.me/917666837735?text=Hi%20Arnav!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect.';

  return (
    <div className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-6 animate-fadeIn">
      
      {/* Backdrop Click */}
      <div
        className="absolute inset-0 z-0"
        onClick={onClose}
      />

      {/* Modal / Mobile Bottom Sheet Card */}
      <div className="relative z-10 w-full max-w-lg rounded-t-3xl sm:rounded-3xl border border-white/15 bg-[#121212] p-6 sm:p-8 shadow-[0_25px_80px_rgba(233,30,140,0.35)] overflow-hidden transform-gpu animate-slideUp sm:animate-modalPop">
        
        {/* Ambient Halo Glows */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-56 h-56 rounded-full bg-[#E91E8C]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-[#25D366]/20 blur-3xl" />

        {/* Mobile Pull Handle Indicator */}
        <div className="sm:hidden w-12 h-1.5 rounded-full bg-white/20 mx-auto mb-5" />

        {/* Header Bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#E91E8C]">
              Let's Talk
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-0.5">
              Choose How To Connect
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2 Options Cards: Instagram & WhatsApp */}
        <div className="flex flex-col gap-4">
          
          {/* Option 1: Instagram DMs */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group relative flex items-center gap-4 rounded-2xl border border-white/15 bg-[#1A1A1A] p-4 sm:p-5 transition-all duration-300 hover:scale-[1.02] hover:border-[#E91E8C]/60 hover:bg-[#1F141B] hover:shadow-[0_10px_30px_rgba(233,30,140,0.3)] cursor-pointer overflow-hidden"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FFB3CB] to-[#E91E8C] text-white shadow-lg group-hover:scale-110 transition-transform">
              <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#FFB3CB] transition-colors">
                  Instagram DM
                </h4>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#E91E8C] transition-colors" />
              </div>
              <p className="text-xs text-white/50 truncate mt-0.5">
                @ariimakesfilms · Brand & Collab Inquiries
              </p>
            </div>
          </a>

          {/* Option 2: Direct WhatsApp Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group relative flex items-center gap-4 rounded-2xl border border-white/15 bg-[#1A1A1A] p-4 sm:p-5 transition-all duration-300 hover:scale-[1.02] hover:border-[#25D366]/60 hover:bg-[#122318] hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)] cursor-pointer overflow-hidden"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-lg group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20" />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#25D366] transition-colors">
                  WhatsApp Direct
                </h4>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-white/50 truncate mt-0.5">
                +91 76668 37735 · Direct Collaborations
              </p>
            </div>
          </a>

        </div>

      </div>
    </div>
  );
}
