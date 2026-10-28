import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-lines z-10" id="overview">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-margin-lg relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-white/90 text-primary text-label-sm font-label-sm mb-6 shimmer-badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="tracking-wider uppercase font-semibold">Academic Trust Infrastructure • OMS 2.0</span>
            </div>
            <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero text-on-surface mb-6 leading-tight tracking-tight">
              One Platform for Every <span className="text-primary underline decoration-primary-fixed decoration-4 underline-offset-4">Campus Opportunity.</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 max-w-xl">
              SkillLinkr OMS connects college societies, Campus Ambassadors, and administrators through a structured, college-specific workflow so trusted opportunities can reach students faster.
            </p>
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-sm w-full sm:w-auto mb-10">
              <a
                className="w-full sm:w-auto text-center glass-button-primary text-on-primary px-6 py-3 rounded-lg text-title-md font-title-md transition-all flex items-center justify-center gap-2"
                href="#portals"
              >
                <span>Access Role Portals</span>
                <span className="material-symbols-outlined text-[18px]">login</span>
              </a>
              <a
                className="w-full sm:w-auto text-center glass-button-secondary text-on-surface hover:text-primary px-6 py-3 rounded-lg text-title-md font-title-md transition-all flex items-center justify-center gap-2"
                href="#publishing-chain"
              >
                <span className="material-symbols-outlined text-[18px]">alt_route</span>
                <span>View Live Pipeline</span>
              </a>
            </div>
            {/* Micro-Trust Counters */}
            <div className="pt-6 border-t border-slate-200/60 w-full grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex flex-col group p-2 rounded-xl transition-colors hover:bg-white/40">
                <span className="text-headline-sm font-headline-sm text-on-surface font-extrabold tracking-tight">50+</span>
                <span className="text-label-sm font-label-sm text-secondary font-medium">Colleges Onboarded</span>
              </div>
              <div className="flex flex-col group p-2 rounded-xl transition-colors hover:bg-white/40">
                <span className="text-headline-sm font-headline-sm text-primary font-extrabold tracking-tight">100%</span>
                <span className="text-label-sm font-label-sm text-secondary font-medium">Institutionally Isolated</span>
              </div>
              <div className="flex flex-col group p-2 rounded-xl transition-colors hover:bg-white/40">
                <span className="text-headline-sm font-headline-sm text-tertiary font-extrabold tracking-tight">Zero</span>
                <span className="text-label-sm font-label-sm text-secondary font-medium">Unverified Spam</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive UI Simulation Card */}
          <div className="lg:col-span-6 w-full">
            <div className="relative glass-card rounded-2xl p-5 md:p-6 transition-all border border-white/90 shadow-[0_12px_40px_0_rgba(31,38,135,0.08)]">
              {/* Glass status ribbon */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full glass-pill text-on-secondary-fixed text-label-sm font-label-sm flex items-center gap-1.5 border border-white/90">
                    <span className="material-symbols-outlined text-[15px] text-primary">account_balance</span>
                    <span className="font-semibold text-on-surface">KIIT Autonomous Review Queue</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 backdrop-blur-md text-primary text-label-sm font-label-sm border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="font-medium">Ambassador Verification in Progress</span>
                </div>
              </div>

              {/* Opportunity Core Details */}
              <div className="mt-5 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider font-semibold">Opportunity #KIIT-2025-084</span>
                    <h3 className="text-headline-sm font-headline-sm text-on-surface mt-0.5 font-bold">National AI Hackathon 2025</h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1.5 mt-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">group</span>
                      <span>Submitted by <strong className="text-on-surface">KIIT Robotics Society</strong></span>
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-md glass-card-subtle text-primary text-code-tabular font-code-tabular font-semibold shadow-xs">
                    Oct 12-14, 2025
                  </span>
                </div>

                {/* Live Verification Checklist */}
                <div className="glass-card-subtle rounded-xl p-3.5 space-y-2 border border-white/80">
                  <p className="text-label-sm font-label-sm text-secondary font-semibold tracking-wider uppercase">AMBASSADOR LINE-ITEM AUDIT</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-label-md font-label-md">
                    <div className="flex items-center gap-2 text-tertiary">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span className="text-on-surface-variant font-medium">Eligibility verified (All UG/PG)</span>
                    </div>
                    <div className="flex items-center gap-2 text-tertiary">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span className="text-on-surface-variant font-medium">Venue confirmed (Auditorium 3)</span>
                    </div>
                    <div className="flex items-center gap-2 text-tertiary">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span className="text-on-surface-variant font-medium">Registration link scanned (Secure)</span>
                    </div>
                    <div className="flex items-center gap-2 text-tertiary">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span className="text-on-surface-variant font-medium">Poster validated (High-Res Asset)</span>
                    </div>
                  </div>
                </div>

                {/* Turnaround Velocity vs. Legacy */}
                <div className="p-3.5 glass-card-subtle rounded-xl space-y-2.5 my-3 border border-white/80">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-secondary font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">speed</span>Turnaround Velocity vs. Legacy
                    </span>
                    <span className="text-[11px] font-mono text-tertiary font-bold bg-tertiary/15 px-2 py-0.5 rounded-full ring-1 ring-tertiary/30">+94% Faster</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-2.5 rounded-lg bg-white/70 border border-white/80 flex items-center gap-3">
                      <div className="relative flex items-center justify-center">
                        <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                          <path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="99, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                        </svg>
                        <span className="absolute text-[10px] font-bold text-tertiary font-mono">99%</span>
                      </div>
                      <div>
                        <div className="text-[12px] font-bold text-on-surface">Authenticity</div>
                        <div className="text-[10px] text-on-surface-variant font-code-tabular">0 Fraudulent Leads</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/70 border border-white/80 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center text-[10px] font-semibold text-secondary mb-1">
                          <span>SLA TIME</span>
                          <span className="text-primary font-bold">3.8 hrs avg</span>
                        </div>
                        <div className="w-full bg-surface-container-highest rounded-full h-1.5 mb-1.5 overflow-hidden">
                          <div className="bg-primary h-1.5 rounded-full transition-all duration-1000" style={{ width: '14%' }}></div>
                        </div>
                        <div className="flex justify-between items-center text-[9px] text-on-surface-variant font-code-tabular">
                          <span>Manual: 72h</span>
                          <span className="text-tertiary font-bold">OMS: 3.8h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Security Metadata */}
                <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant px-1 pt-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                    <span>Isolation: <strong className="text-on-surface">KIIT University [ID: #994]</strong></span>
                  </span>
                  <span className="font-code-tabular text-label-sm font-medium px-2 py-0.5 rounded bg-white/70 border border-white/90 shadow-xs">RLS Enforced</span>
                </div>

                {/* Interactive Action Buttons */}
                <div className="pt-3 border-t border-slate-200/60 flex flex-wrap sm:flex-nowrap gap-2">
                  <button className="flex-1 bg-gradient-to-r from-tertiary to-tertiary-container hover:opacity-95 text-white font-title-md text-title-md py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-[0_4px_16px_rgba(0,103,70,0.25)] transition-all hover:-translate-y-0.5 active:translate-y-0">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Approve &amp; Auto-Publish</span>
                  </button>
                  <button className="glass-button-secondary text-on-surface font-title-md text-title-md py-2 px-3 rounded-lg flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    <span>Request Corrections</span>
                  </button>
                  <button className="glass-button-secondary hover:bg-error-container/60 hover:text-on-error-container text-secondary py-2 px-2.5 rounded-lg transition-colors flex items-center justify-center" title="Reject with Reason">
                    <span className="material-symbols-outlined text-[18px]">block</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
