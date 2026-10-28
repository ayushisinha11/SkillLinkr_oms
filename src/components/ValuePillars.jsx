import React from 'react';

export default function ValuePillars() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-margin-lg">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider font-semibold">Institutional Foundation</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-1 tracking-tight">Why SkillLinkr OMS Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: TRUST */}
          <div className="p-6 rounded-2xl glass-card hover:border-primary/50 group">
            <div className="h-12 w-12 rounded-xl bg-tertiary-fixed/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-on-tertiary-fixed mb-5 shadow-xs transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[26px]">verified_user</span>
            </div>
            <span className="text-label-sm font-label-sm text-tertiary font-bold tracking-wider">PILLAR 01</span>
            <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3 font-bold">TRUST</h3>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Create an uncompromised verification layer before an opportunity reaches students. No misleading dates, outdated registration links, or unverified student clubs.
            </p>
          </div>
          {/* Card 2: STRUCTURE */}
          <div className="p-6 rounded-2xl glass-card hover:border-primary/50 group">
            <div className="h-12 w-12 rounded-xl bg-primary-fixed/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-on-primary-fixed mb-5 shadow-xs transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[26px]">account_tree</span>
            </div>
            <span className="text-label-sm font-label-sm text-primary font-bold tracking-wider">PILLAR 02</span>
            <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3 font-bold">STRUCTURE</h3>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Replace scattered manual coordination and messy WhatsApp announcements with a clear submission, line-item correction, and review workflow.
            </p>
          </div>
          {/* Card 3: SCALE */}
          <div className="p-6 rounded-2xl glass-card hover:border-primary/50 group">
            <div className="h-12 w-12 rounded-xl bg-secondary-fixed/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-on-secondary-fixed mb-5 shadow-xs transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[26px]">hub</span>
            </div>
            <span className="text-label-sm font-label-sm text-secondary font-bold tracking-wider">PILLAR 03</span>
            <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3 font-bold">SCALE</h3>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Allow SkillLinkr to expand across hundreds of colleges without central Admins manually reviewing every single listing. Local ambassadors handle local trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
