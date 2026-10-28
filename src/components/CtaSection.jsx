import React from 'react';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 relative z-10 overflow-hidden" id="cta">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-margin-lg text-center relative z-10">
        <div className="glass-card rounded-3xl p-10 md:p-16 shadow-[0_20px_50px_rgba(31,38,135,0.08)] border border-white/90">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider font-semibold">GET STARTED TODAY</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-display-hero text-on-surface mt-2 mb-4 tracking-tight">
            Ready to modernize your campus opportunity ecosystem?
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Empower student societies, secure your college brand, and give your student body immediate access to verified competitions, internships, and workshops.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a className="glass-button-primary text-on-primary px-6 py-3 rounded-xl text-title-md font-title-md transition-all flex items-center gap-2" href="#society-signup">
              <span className="material-symbols-outlined text-[20px]">groups</span>
              <span>Launch Society Portal</span>
            </a>
            <a className="glass-button-secondary text-on-surface px-6 py-3 rounded-xl text-title-md font-title-md transition-all flex items-center gap-2" href="#ambassador-login">
              <span className="material-symbols-outlined text-[20px] text-tertiary">badge</span>
              <span>Ambassador Sign-In</span>
            </a>
            <a className="glass-button-secondary text-on-surface px-6 py-3 rounded-xl text-title-md font-title-md transition-all flex items-center gap-2" href="#admin-console">
              <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
              <span>Admin Console Access</span>
            </a>
          </div>
          <div className="mt-8">
            <a className="text-label-md font-label-md text-primary hover:underline inline-flex items-center gap-1 font-semibold group" href="#contact">
              <span>Are you a university dean or registrar? Request College Integration</span>
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
