import React, { useEffect, useState } from 'react';

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Handwritten Signature Script ARII */}
        <span
          className="font-caveat font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F5F0EB] via-[#FFB3CB] to-[#E91E8C] text-[clamp(5rem,20vw,12rem)] drop-shadow-[0_0_40px_rgba(233,30,140,0.7)] select-none animate-pulse leading-none"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Arii
        </span>

        {/* Signature Swash Stroke Underline */}
        <svg className="w-48 h-8 sm:w-64 sm:h-10 -mt-2 sm:-mt-4 overflow-visible" viewBox="0 0 220 40" fill="none">
          <path
            d="M10 25 C 60 10, 120 35, 210 15"
            stroke="url(#sigGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="sigGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5F0EB" />
              <stop offset="50%" stopColor="#FFB3CB" />
              <stop offset="100%" stopColor="#E91E8C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
