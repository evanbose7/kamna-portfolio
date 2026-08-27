import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only run on desktop devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    let rafId;
    const animateGlow = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.18;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.18;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animateGlow);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Trailing radial aura */}
      <div
        ref={glowRef}
        className="cursor-glow hidden md:block"
        style={{ left: 0, top: 0, transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      />
      {/* Sharp follower dot */}
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ left: 0, top: 0, transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      />
    </>
  );
}
