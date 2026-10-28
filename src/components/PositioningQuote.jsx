import React from 'react';

export default function PositioningQuote() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-[960px] mx-auto px-gutter md:px-margin text-center">
        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-[0_16px_40px_rgba(31,38,135,0.08)] border border-white/90">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-fixed/80 backdrop-blur-md text-primary mb-6 ring-1 ring-white/80 shadow-sm">
            <span className="material-symbols-outlined text-[30px]">format_quote</span>
          </div>
          <blockquote className="text-headline-sm md:text-headline-md font-headline-md text-on-surface leading-relaxed mb-6 font-semibold tracking-tight">
            "SkillLinkr OMS is the operational backbone for campus opportunities. It gives societies an easy publishing workflow, Campus Ambassadors a college-specific verification system, and Admins a scalable governance layer—ensuring every opportunity reaching students is authentic, complete, and on-time."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-full glass-button-primary flex items-center justify-center font-bold text-white text-label-md">
              SL
            </div>
            <div className="text-left">
              <div className="text-title-md font-title-md text-on-surface font-bold">SkillLinkr Governance Architecture</div>
              <div className="text-body-sm font-body-sm text-on-surface-variant font-medium">Academic Innovation &amp; Opportunity Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
