import React, { useEffect, useState } from 'react';

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 900);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#0A0A0A] flex items-center justify-center transition-all duration-500 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      <div className="font-black uppercase tracking-tight text-[#F5F0EB]/90 text-[clamp(3rem,12vw,8rem)] animate-pulse">
        ARNAV
      </div>
    </div>
  );
}
