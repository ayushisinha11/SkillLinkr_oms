import React from 'react';

export default function GovernanceSection() {
  return (
    <section className="py-20 md:py-28 relative z-10" id="governance">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-margin-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Rigorous Architecture Statement */}
          <div className="lg:col-span-6">
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider font-semibold">Strict Multi-Tenancy Architecture</span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-1 mb-6 tracking-tight">
              College Isolation by Design.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-6 leading-relaxed">
              A student ambassador at KIIT can only review KIIT societies. A VIT administrator can only review VIT data. Campus boundaries are unbreachable.
            </p>
            <div className="glass-card-subtle border-l-4 border-primary p-4 rounded-r-xl mb-8">
              <p className="text-body-md font-body-md text-on-surface font-medium italic">
                "College access must be enforced in the interface, API/server authorization, and database/RLS—not just hidden in the UI."
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 rounded-full glass-pill text-on-surface text-label-md font-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary">security</span>
                <span>Row-Level Security (RLS)</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full glass-pill text-on-surface text-label-md font-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">fence</span>
                <span>Institutional Boundary Guard</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full glass-pill text-on-surface text-label-md font-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">fingerprint</span>
                <span>Tamper-Proof Audit Trail</span>
              </span>
            </div>
          </div>

          {/* Right: Technical Isolation Diagram Visualizer */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 shadow-[0_12px_40px_0_rgba(31,38,135,0.08)]">
            <div className="p-4 rounded-xl bg-white/70 border border-white/80 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">enhanced_encryption</span>
                  Cryptographic Campus Perimeter Separation
                </span>
                <span className="text-[10px] font-mono font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">RLS STRICT</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-lg border-2 border-tertiary/40 bg-tertiary/5 relative overflow-hidden">
                  <div className="text-[11px] font-bold text-tertiary flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[14px]">domain</span>KIIT Autonomous Tenant
                  </div>
                  <div className="text-[10px] text-on-surface-variant leading-relaxed">
                    Societies: 42 active<br />
                    Ambassadors: #KIIT-094<br />
                    Events: Isolated &amp; Encrypted
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[9px] font-mono text-tertiary font-bold bg-white/80 px-1.5 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[10px]">check</span>Authorized Zone
                  </div>
                </div>

                <div className="p-3 rounded-lg border-2 border-error/30 bg-error-container/20 relative overflow-hidden">
                  <div className="text-[11px] font-bold text-error flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[14px]">domain_disabled</span>VIT Vellore Tenant
                  </div>
                  <div className="text-[10px] text-on-surface-variant leading-relaxed">
                    JWT Context: Mismatch<br />
                    Postgres Policy: Blocked<br />
                    Cross-access: 0 Row Access
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[9px] font-mono text-error font-bold bg-white/80 px-1.5 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[10px]">close</span>Blocked by RLS
                  </div>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-200/70 pt-3">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-medium text-on-surface">Cross-Tenant Data Exposure Risk</span>
                  <span className="font-mono font-bold text-tertiary">0% OMS (vs 68% WhatsApp Groups)</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden flex">
                  <div className="bg-tertiary h-2" style={{ width: '2%' }}></div>
                  <div className="bg-error/30 h-2" style={{ width: '68%' }}></div>
                </div>
                <div className="flex justify-between items-center text-[11px] pt-1">
                  <span className="font-medium text-on-surface">Spam &amp; Duplicate Redundancy Rate</span>
                  <span className="font-mono font-bold text-tertiary">-94% Reduction</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 mb-6">
              <span className="text-label-md font-label-md font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">grid_view</span>
                <span>Access Partition Verification Matrix</span>
              </span>
              <span className="text-label-sm font-code-tabular text-tertiary glass-pill px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                </span>
                STATUS: SECURED
              </span>
            </div>

            {/* Comparison Grid */}
            <div className="space-y-4">
              {/* Partition 1: Permitted */}
              <div className="p-4 rounded-xl glass-card-subtle">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-3 w-3 rounded-full bg-tertiary shadow-[0_0_8px_#00835a]"></span>
                    <span className="font-title-md text-title-md text-on-surface font-semibold">KIIT Ambassador Portal</span>
                  </div>
                  <span className="text-label-sm font-label-sm px-2.5 py-0.5 rounded-full bg-tertiary/15 text-tertiary border border-tertiary/30 font-semibold">ALLOWED</span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Reads &amp; mutates records matching: <code className="font-code-tabular text-[12px] bg-white/70 px-1.5 py-0.5 rounded border border-white/80 text-on-surface font-semibold">institution_id == 'KIIT-094'</code>.
                </p>
              </div>

              {/* Partition 2: Prohibited Attempt */}
              <div className="p-4 rounded-xl bg-error-container/20 backdrop-blur-md border border-error/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-3 w-3 rounded-full bg-error shadow-[0_0_8px_#ba1a1a]"></span>
                    <span className="font-title-md text-title-md text-on-surface font-semibold">KIIT Ambassador → VIT Queue</span>
                  </div>
                  <span className="text-label-sm font-label-sm px-2.5 py-0.5 rounded-full bg-error/15 text-error border border-error/30 font-semibold">REJECTED 403</span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Cross-institution queries strictly drop at PostgreSQL RLS layer. No row data exposed.
                </p>
              </div>

              {/* Partition 3: Prohibited Attempt */}
              <div className="p-4 rounded-xl bg-error-container/20 backdrop-blur-md border border-error/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-3 w-3 rounded-full bg-error shadow-[0_0_8px_#ba1a1a]"></span>
                    <span className="font-title-md text-title-md text-on-surface font-semibold">KIIT Ambassador → SRM Queue</span>
                  </div>
                  <span className="text-label-sm font-label-sm px-2.5 py-0.5 rounded-full bg-error/15 text-error border border-error/30 font-semibold">REJECTED 403</span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Foreign organization edit request blocked. Authorization context mismatch logged to Audit.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-label-sm font-label-sm text-secondary">
              <span>Enforcement Engine: JWT Claims + Postgres RLS</span>
              <span className="text-primary font-medium hover:underline cursor-pointer flex items-center gap-1">
                View Schema Docs <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
