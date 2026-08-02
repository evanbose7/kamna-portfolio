import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [glowPos, setGlowPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const updateGlow = () => {
      setGlowPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(updateGlow);
    };

    animationFrameId = requestAnimationFrame(updateGlow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      {/* Trailing radial aura */}
      <div
        className="cursor-glow hidden md:block"
        style={{
          left: `${glowPos.x}px`,
          top: `${glowPos.y}px`,
        }}
      />
      {/* Sharp follower dot */}
      <div
        className="cursor-dot hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
