import React, { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const calculateProgress = () => {
      let currentProgress = 0;

      // 1. Check Lenis smooth scroll engine progress if active
      if (window.lenis && typeof window.lenis.progress === 'number') {
        currentProgress = window.lenis.progress * 100;
      } else {
        // 2. Fallback to native window scroll metrics
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          currentProgress = (scrollY / totalHeight) * 100;
        }
      }

      setScrollPercentage(Math.min(Math.max(currentProgress, 0), 100));
    };

    const onScrollUpdate = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(calculateProgress);
    };

    // Attach scroll listeners to Lenis and native window scroll
    if (window.lenis) {
      window.lenis.on('scroll', onScrollUpdate);
    }
    window.addEventListener('scroll', onScrollUpdate, { passive: true });
    window.addEventListener('resize', onScrollUpdate, { passive: true });

    // Initial check
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
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollPercentage)}
      aria-label="Page scroll progress"
      className="fixed top-0 left-0 right-0 h-[3.5px] z-[99999] bg-white/10 pointer-events-none"
    >
      {/* Zero CSS transition delay for 100% instant 60 FPS synchronization */}
      <div
        className="h-full scroll-progress-bar will-change-[width]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
