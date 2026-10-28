import React, { useState, useEffect, useRef } from 'react';
import { navItems } from '../data/siteData';

export default function Navbar() {
  const [activeNav, setActiveNav] = useState('overview');
  const navRef = useRef(null);
  const sliderRef = useRef(null);

  const updateSlider = (activeId, animate = true) => {
    if (!navRef.current || !sliderRef.current) return;
    const activeEl = navRef.current.querySelector(`[data-nav-id="${activeId}"]`);
    if (!activeEl) return;

    if (!animate) {
      sliderRef.current.style.transition = 'none';
    }
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();

    sliderRef.current.style.width = `${elRect.width}px`;
    sliderRef.current.style.height = `${elRect.height}px`;
    sliderRef.current.style.left = `${elRect.left - navRect.left}px`;
    sliderRef.current.style.top = `${elRect.top - navRect.top}px`;

    if (!animate) {
      requestAnimationFrame(() => {
        if (sliderRef.current) sliderRef.current.style.transition = '';
      });
    }
  };

  useEffect(() => {
    updateSlider(activeNav, false);

    const handleResize = () => updateSlider(activeNav, false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeNav]);

  const handleNavClick = (id) => {
    setActiveNav(id);
    updateSlider(id, true);
  };

  return (
    <header className="w-full glass-header fixed top-0 left-0 right-0 z-50 px-gutter md:px-margin-lg py-2 flex items-center justify-between transition-all">
      {/* Brand Anchor */}
      <a href="#overview" className="flex items-center gap-space-sm group cursor-pointer text-decoration-none">
        <img
          src="/logo-1.png"
          alt="SkillLinkr Logo"
          className="h-8 w-8 rounded-lg object-cover shadow-sm transition-transform group-hover:scale-105"
        />
        <div>
          <span className="text-[14px] font-bold text-on-surface tracking-tight">SkillLinkr OMS</span>
          <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded-full bg-white/80 border border-slate-200/60 text-on-surface-variant text-[9px] font-code-tabular font-medium shadow-xs">
            oms.skilllinkr.com
          </span>
        </div>
      </a>

      {/* Pill-style Nav */}
      <nav className="hidden md:flex items-center">
        <div ref={navRef} className="pill-nav">
          <div ref={sliderRef} className="pill-slider" />
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-nav-id={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`pill-nav-item ${isActive ? 'pill-active' : ''}`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="pill-label">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Header Action */}
      <div className="flex items-center gap-space-sm">
        <a
          href="#governance"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">domain</span>
          <span>Find Campus</span>
        </a>
        <a
          href="#cta"
          className="px-4 py-2 rounded-xl glass-button-primary text-on-primary text-label-md font-label-md font-semibold flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
          <span>Deploy Instance</span>
        </a>
      </div>
    </header>
  );
}
