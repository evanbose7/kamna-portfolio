import React, { useEffect, useState } from 'react';

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    // Prevent FOUT by checking font loading state before revealing Ari text
    if (typeof document !== 'undefined' && document.fonts) {
      Promise.all([
        document.fonts.load('1em "Alex Brush"'),
        document.fonts.ready,
      ])
        .then(() => {
          setFontReady(true);
        })
        .catch(() => {
          setFontReady(true);
        });
    } else {
      setFontReady(true);
    }

    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1700);

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
      <div
        className={`relative flex flex-col items-center justify-center transition-opacity duration-300 ${
          fontReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Handwritten Signature Script Ari */}
        <span
          className="font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F5F0EB] via-[#FFB3CB] to-[#E91E8C] text-[clamp(6rem,24vw,14rem)] drop-shadow-[0_0_40px_rgba(233,30,140,0.7)] select-none animate-pulse leading-none py-4"
          style={{ fontFamily: "'Alex Brush', 'Great Vibes', 'Allura', 'Sacramento', cursive" }}
        >
          Ari
        </span>
      </div>
    </div>
  );
}
