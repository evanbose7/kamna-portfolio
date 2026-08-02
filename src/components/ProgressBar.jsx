import React, { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const updateProgress = () => {
      if (window.lenis && typeof window.lenis.progress === 'number') {
        // Direct 1-to-1 sync with Lenis smooth scroll engine
        setScrollPercentage(Math.min(Math.max(window.lenis.progress * 100, 0), 100));
      } else {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        if (documentHeight > 0) {
          const scrolled = (window.scrollY / documentHeight) * 100;
          setScrollPercentage(Math.min(Math.max(scrolled, 0), 100));
        }
      }

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollPercentage)}
      aria-label="Page scroll progress"
      className="fixed top-0 left-0 right-0 h-[4px] z-[99999] bg-[#F5F0EB]/10 pointer-events-none"
    >
      <div
        className="h-full scroll-progress-bar transition-all duration-75 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
