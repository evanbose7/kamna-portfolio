import React, { useEffect, useRef } from 'react';

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const calculateProgress = () => {
      let progress = 0;

      if (window.lenis && typeof window.lenis.progress === 'number') {
        progress = window.lenis.progress;
      } else {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          progress = scrollY / totalHeight;
        }
      }

      const clamped = Math.min(Math.max(progress, 0), 1);
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${clamped})`;
      }
    };

    const onScrollUpdate = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(calculateProgress);
    };

    if (window.lenis) {
      window.lenis.on('scroll', onScrollUpdate);
    }
    window.addEventListener('scroll', onScrollUpdate, { passive: true });
    window.addEventListener('resize', onScrollUpdate, { passive: true });

    calculateProgress();

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', onScrollUpdate);
      }
      window.removeEventListener('scroll', onScrollUpdate);
      window.removeEventListener('resize', onScrollUpdate);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      className="fixed top-0 left-0 right-0 h-[3.5px] z-[99999] bg-white/10 pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full w-full scroll-progress-bar will-change-transform origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
