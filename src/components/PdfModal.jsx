import React, { useState } from 'react';
import { X, Download, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PdfModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border border-[#E91E8C]/30 bg-[#121212] p-6 sm:p-8 text-[#F5F0EB] shadow-[0_0_50px_rgba(233,30,140,0.3)]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#F5F0EB]/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-16 rounded-xl bg-gradient-to-br from-[#E91E8C] to-[#FFB3CB] flex items-center justify-center p-[1px] shrink-0">
                <div className="w-full h-full bg-[#0A0A0A] rounded-[11px] flex items-center justify-center font-bold text-[#E91E8C] text-xs tracking-widest">
                  PDF
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E91E8C]">
                  Free Downloadable Resource
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Decoded: 100 Top LinkedIn Creators' Formulas
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#F5F0EB]/70 leading-relaxed">
              Enter your name & email to get instant access to the exact breakdown of headlines and about sections used by 100 top LinkedIn creators.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 mt-1">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#F5F0EB]/60 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E91E8C] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#F5F0EB]/60 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E91E8C] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-gradient w-full rounded-full py-4 text-xs font-bold uppercase tracking-widest text-white shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Download className="w-4 h-4" />
                Claim Free PDF Now
              </button>

              <p className="text-center text-[10px] text-[#F5F0EB]/40">
                Join 1,000+ creators · 100% Free · Zero Spam
              </p>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <div className="w-16 h-16 rounded-full bg-[#E91E8C]/20 border border-[#E91E8C] flex items-center justify-center text-[#E91E8C]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-white">Your PDF is Ready! 🎉</h3>
            <p className="text-xs text-[#F5F0EB]/70 max-w-sm">
              Thank you {name}! We've sent your copy to <span className="text-[#FFB3CB]">{email}</span>. You can also download it directly below.
            </p>

            <a
              href="/assets/pdf-cover.jpg"
              download="Decoded-100-Top-LinkedIn-Creators-Kamna-Bhardwaj.pdf"
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white mt-2 hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" />
              Download PDF Directly
            </a>

            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-[#F5F0EB]/40 underline hover:text-white mt-2"
            >
              Submit another email
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
