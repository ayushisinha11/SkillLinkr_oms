import React from 'react';

export default function ThreeRoles() {
  return (
    <section className="py-20 md:py-28 relative z-10" id="roles">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-margin-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider font-semibold">Strict Governance Hierarchy</span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-1 tracking-tight">The 3 Core Roles</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-xl">
              Clean architectural separation between creators, college auditors, and institutional network overseers.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-1.5 text-label-md font-label-md glass-pill px-3.5 py-1.5 rounded-full text-on-surface border border-white/90 shadow-xs">
              <span className="material-symbols-outlined text-[18px] text-primary">policy</span>
              <span className="font-medium">Zero Privilege Leakage Principle</span>
            </span>
          </div>
        </div>

        {/* Bento-Style Role Grid */}
        <div className="glass-card rounded-2xl p-6 mb-8 border border-white/90 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200/60 mb-6">
            <div>
              <h4 className="text-title-md font-title-md font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">schema</span>Pictorial Tri-Role Data &amp; Governance Ecosystem
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">Unidirectional trust verification with decentralized execution and immutable central logging.</p>
            </div>
            <div className="flex items-center gap-2 text-label-sm font-code-tabular glass-pill px-3 py-1 rounded-full text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span>Continuous Zero-Trust Handshake</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-3 py-2">
            <div className="md:col-span-2 p-4 rounded-xl glass-card-subtle text-center border-l-4 border-inverse-surface">
              <div className="w-10 h-10 mx-auto rounded-lg bg-inverse-surface text-inverse-on-surface flex items-center justify-center mb-2 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
              </div>
              <span className="text-label-sm font-label-sm font-bold text-on-surface block">Global Admin</span>
              <span className="text-[11px] text-on-surface-variant leading-tight block mt-1">College Provisioning, Multi-tenant Isolation Policies &amp; Auditing</span>
            </div>

            <div className="md:col-span-1 flex flex-col items-center justify-center text-primary">
              <svg className="w-8 h-8 hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" strokeDasharray="3,3"></path>
              </svg>
              <span className="text-[10px] font-mono text-primary font-bold md:rotate-0 rotate-90">RLS Policy</span>
            </div>

            <div className="md:col-span-2 p-4 rounded-xl glass-card border-2 border-primary/40 text-center relative shadow-sm">
              <div className="w-10 h-10 mx-auto rounded-lg bg-primary-fixed/80 text-primary flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
              </div>
              <span className="text-label-sm font-label-sm font-bold text-primary block">Campus Ambassador</span>
              <span className="text-[11px] text-on-surface-variant leading-tight block mt-1">Contextual Campus Audit, Line-Item Corrections &amp; Instant Publishing</span>
              <div className="mt-2 pt-2 border-t border-slate-200/60 text-[10px] font-mono text-tertiary font-semibold flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[12px]">verified</span>
                <span>Local Gatekeeper</span>
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col items-center justify-center text-primary">
              <svg className="w-8 h-8 hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 12H5M11 5l-7 7 7 7" strokeDasharray="3,3"></path>
              </svg>
              <span className="text-[10px] font-mono text-primary font-bold md:rotate-0 rotate-90">Review Loop</span>
            </div>

            <div className="md:col-span-1 p-4 rounded-xl glass-card-subtle text-center border-r-4 border-primary">
              <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[20px]">groups</span>
              </div>
              <span className="text-label-sm font-label-sm font-bold text-on-surface block">Society Chapter</span>
              <span className="text-[11px] text-on-surface-variant leading-tight block mt-1">Event Draft, Validation &amp; Response</span>
            </div>
          </div>
        </div>

        {/* Roles 3-Column Detail Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {/* ROLE 1: ADMIN */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-primary/60">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-inverse-surface/90 text-inverse-on-surface text-label-sm font-label-sm font-semibold shadow-xs">
                  GLOBAL LEVEL
                </span>
                <span className="material-symbols-outlined text-secondary">admin_panel_settings</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2 font-bold">1. ADMIN</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                Global control across the entire network. Adds &amp; manages Campus Ambassadors and societies, oversees colleges, monitors opportunities across the platform, and handles system-wide governance.
              </p>
              <div className="space-y-2.5 border-t border-slate-200/60 pt-4 mb-6">
                <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                  <span>Provisions Campus Ambassadors &amp; institutions</span>
                </div>
                <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                  <span>System-wide audit trail inspection</span>
                </div>
                <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                  <span>Emergency unpublish &amp; override authority</span>
                </div>
              </div>
            </div>
            <div className="glass-card-subtle rounded-xl p-3 text-label-sm font-label-sm text-secondary font-mono">
              SCOPE: PLATFORM_WIDE [FULL_ACCESS]
            </div>
          </div>

          {/* ROLE 2: CAMPUS AMBASSADOR */}
          <div className="glass-card rounded-2xl border-2 border-primary/50 p-6 flex flex-col justify-between relative shadow-[0_10px_32px_0_rgba(0,82,201,0.12)]">
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-primary to-primary-container text-on-primary text-label-sm font-label-sm px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm ring-1 ring-white/60 font-semibold">
              Key Verifier
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed/80 backdrop-blur-md text-on-primary-fixed text-label-sm font-label-sm font-semibold border border-white/60">
                  COLLEGE AUDITOR
                </span>
                <span className="material-symbols-outlined text-primary">badge</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2 font-bold">2. CAMPUS AMBASSADOR</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                College-level verifier. Can manage societies and opportunities only for their own college. Reviews submissions, requests corrections, approves or rejects opportunities.
              </p>
              <div className="space-y-2.5 border-t border-slate-200/60 pt-4 mb-6">
                <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">check</span>
                  <span>Exclusive queue for own campus only</span>
                </div>
                <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">check</span>
                  <span>Line-item correction pinging directly to society</span>
                </div>
                <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">check</span>
                  <span>Instant auto-publishing on approval</span>
                </div>
              </div>
            </div>
            <div className="glass-card-subtle bg-primary/10 rounded-xl p-3 text-label-sm font-label-sm text-primary font-mono border-primary/20">
              SCOPE: INSTITUTION_ISOLATED [RLS_LOCKED]
            </div>
          </div>

          {/* ROLE 3: SOCIETY */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-primary/60">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/80 backdrop-blur-md text-on-secondary-fixed text-label-sm font-label-sm font-semibold border border-white/60">
                  CREATOR LEVEL
                </span>
                <span className="material-symbols-outlined text-secondary">campaign</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2 font-bold">3. SOCIETY</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                Opportunity creator. Creates and submits opportunities for its college, uploads full details and posters, tracks review status, responds to correction requests, and manages its own listings.
              </p>
              <div className="space-y-2.5 border-t border-slate-200/60 pt-4 mb-6">
                <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                  <span>Guided multi-step event submission wizard</span>
                </div>
                <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                  <span>Real-time status tracker (Draft, Review, Live)</span>
                </div>
                <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                  <span>Quick correction response with field updates</span>
                </div>
              </div>
            </div>
            <div className="glass-card-subtle rounded-xl p-3 text-label-sm font-label-sm text-secondary font-mono">
              SCOPE: SOCIETY_ENTITIES [COLLEGE_BOUND]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
