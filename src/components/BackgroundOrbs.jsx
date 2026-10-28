import React, { useState, useEffect } from 'react';

export default function BackgroundOrbs({ bgOpacity = 0.38 }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollHeight)) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll translation for the full-page parallax effect
  const translateYPercent = scrollProgress * 18;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* ========================================================================
          FULL-PAGE SCROLL-BASED TRANSLUCENT MEETING ROOM BACKGROUND
          ======================================================================== */}
      <div
        className="absolute -top-[10%] left-0 w-full h-[135%] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/meeting_room_16x9.jpg')",
          opacity: bgOpacity,
          transform: `translate3d(0, -${translateYPercent}%, 0)`,
          filter: 'contrast(1.06) brightness(1.02)',
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)',
        }}
      />

      {/* Delicate light scrim overlay ensuring optimal text contrast and glassmorphic bleed */}
      <div className="absolute inset-0 bg-[#f8f9ff]/50 backdrop-blur-[0.5px] pointer-events-none" />

      {/* Luminous ambient background gradient orbs (Glassmorphism glow layers) */}
      <div className="absolute -top-40 left-1/4 w-[580px] h-[580px] bg-primary/12 rounded-full blur-[130px] animate-orb-1"></div>
      <div className="absolute top-[28%] -right-24 w-[620px] h-[620px] bg-[#6366f1]/12 rounded-full blur-[140px] animate-orb-2"></div>
      <div className="absolute top-[52%] -left-36 w-[640px] h-[640px] bg-tertiary-fixed-dim/18 rounded-full blur-[140px] animate-orb-3"></div>
      <div className="absolute top-[75%] right-10 w-[580px] h-[580px] bg-primary-fixed/30 rounded-full blur-[130px] animate-orb-1"></div>
      <div className="absolute bottom-10 left-1/3 w-[520px] h-[520px] bg-[#818cf8]/12 rounded-full blur-[120px] animate-orb-2"></div>
    </div>
  );
}
