import React from 'react';

export default function PublishingChain() {
  return (
    <section className="py-20 md:py-28 relative z-10" id="publishing-chain">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-margin-lg">
        {/* End-To-End Architectural Pipeline Vector */}
        <div className="mb-10 p-6 rounded-2xl glass-card border border-white/90 shadow-[0_10px_32px_0_rgba(31,38,135,0.06)] hidden md:block">
          <div className="flex items-center justify-between mb-4">
            <span className="text-label-sm font-label-sm font-bold text-secondary uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">conversion_path</span>
              End-To-End Architectural Pipeline Vector
            </span>
            <span className="text-[11px] font-code-tabular text-tertiary bg-tertiary-fixed/30 px-2.5 py-0.5 rounded-full font-semibold">
              Deterministic Pipeline • Automated State Machine
            </span>
          </div>
          <div className="relative py-4">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-primary via-primary-container to-tertiary -translate-y-1/2 rounded-full opacity-60"></div>
            <div className="relative flex justify-between items-center">
              <div className="pipeline-node flex flex-col items-center bg-surface-bright p-2 rounded-xl ring-2 ring-primary/40 shadow-sm w-36 text-center cursor-default">
                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center mb-1 text-label-md font-bold">
                  <span className="material-symbols-outlined text-[18px]">edit_document</span>
                </div>
                <span className="text-[11px] font-bold text-on-surface">1. Society Draft</span>
                <span className="text-[9px] text-secondary font-mono">Multi-step Input</span>
              </div>
              <div className="pipeline-node flex flex-col items-center bg-surface-bright p-2 rounded-xl ring-2 ring-primary/40 shadow-sm w-36 text-center cursor-default">
                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center mb-1 text-label-md font-bold">
                  <span className="material-symbols-outlined text-[18px]">alt_route</span>
                </div>
                <span className="text-[11px] font-bold text-on-surface">2. Tenancy Routing</span>
                <span className="text-[9px] text-secondary font-mono">RLS Dispatch</span>
              </div>
              <div className="pipeline-node flex flex-col items-center bg-surface-bright p-2 rounded-xl ring-2 ring-primary/40 shadow-sm w-36 text-center cursor-default">
                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center mb-1 text-label-md font-bold">
                  <span className="material-symbols-outlined text-[18px]">fact_check</span>
                </div>
                <span className="text-[11px] font-bold text-on-surface">3. Campus Audit</span>
                <span className="text-[9px] text-secondary font-mono">Ambassador Gate</span>
              </div>
              <div className="pipeline-node flex flex-col items-center bg-surface-bright p-2 rounded-xl ring-2 ring-primary/40 shadow-sm w-36 text-center cursor-default">
                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center mb-1 text-label-md font-bold">
                  <span className="material-symbols-outlined text-[18px]">rule</span>
                </div>
                <span className="text-[11px] font-bold text-on-surface">4. Decision Loop</span>
                <span className="text-[9px] text-secondary font-mono">Approve/Ping Fix</span>
              </div>
              <div className="pipeline-node flex flex-col items-center bg-surface-bright p-2 rounded-xl ring-2 ring-tertiary/60 shadow-sm w-36 text-center cursor-default">
                <div className="w-9 h-9 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center mb-1 text-label-md font-bold">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                </div>
                <span className="text-[11px] font-bold text-on-surface">5. Auto Publish</span>
                <span className="text-[9px] text-tertiary font-mono">Edge Sync</span>
              </div>
              <div className="pipeline-node flex flex-col items-center bg-surface-bright p-2 rounded-xl ring-2 ring-tertiary/60 shadow-sm w-36 text-center cursor-default">
                <div className="w-9 h-9 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center mb-1 text-label-md font-bold">
                  <span className="material-symbols-outlined text-[18px]">phone_iphone</span>
                </div>
                <span className="text-[11px] font-bold text-on-surface">6. Live Feed</span>
                <span className="text-[9px] text-tertiary font-mono">Verified Badge</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider font-semibold">End-to-End Orchestration</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-1 tracking-tight">Controlled 6-Step Publishing Chain</h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2 leading-relaxed">
            From first student club draft to live verified discovery, every opportunity follows an automated, transparent pipeline.
          </p>
        </div>

        {/* Stepper Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* STEP 1 */}
          <div className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-primary/50 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-9 w-9 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-md font-label-md shadow-sm ring-2 ring-white/70 transition-transform group-hover:scale-110">
                  01
                </span>
                <span className="text-label-sm font-label-sm text-secondary font-semibold uppercase">CREATION PHASE</span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">Society Creates</h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Multi-step guided form capturing title, category, eligibility criteria, dates, mode, venue, registration URL, student perks, and promotional posters.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-primary font-medium">
              <span className="material-symbols-outlined text-[16px]">post_add</span>
              <span>Client &amp; server schema validation</span>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-primary/50 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-9 w-9 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-md font-label-md shadow-sm ring-2 ring-white/70 transition-transform group-hover:scale-110">
                  02
                </span>
                <span className="text-label-sm font-label-sm text-secondary font-semibold uppercase">ROUTING PHASE</span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">Submit for Review</h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Submission triggers automated tenancy routing, dispatching the opportunity directly into the specific college’s exclusive review inbox.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-primary font-medium">
              <span className="material-symbols-outlined text-[16px]">alt_route</span>
              <span>Deterministic college boundary locking</span>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-primary/50 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-9 w-9 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-md font-label-md shadow-sm ring-2 ring-white/70 transition-transform group-hover:scale-110">
                  03
                </span>
                <span className="text-label-sm font-label-sm text-secondary font-semibold uppercase">VERIFICATION AUDIT</span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">Campus Ambassador Reviews</h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Local student ambassador on that campus conducts line-item audit: organizer identity, booking confirmation, URL integrity, and eligibility clarity.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-tertiary font-medium">
              <span className="material-symbols-outlined text-[16px]">fact_check</span>
              <span>On-ground contextual validation</span>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-primary/50 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-9 w-9 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-md font-label-md shadow-sm ring-2 ring-white/70 transition-transform group-hover:scale-110">
                  04
                </span>
                <span className="text-label-sm font-label-sm text-secondary font-semibold uppercase">DECISION GATING</span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">Approve / Reject / Correct</h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Ambassador executes instant approval, requests line-item field corrections (with direct feedback), or rejects fraudulent or non-compliant events.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-primary font-medium">
              <span className="material-symbols-outlined text-[16px]">sync_alt</span>
              <span>Iterative correction feedback loop</span>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-primary/50 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-9 w-9 rounded-full bg-tertiary text-on-tertiary font-bold flex items-center justify-center text-label-md font-label-md shadow-sm ring-2 ring-white/70 transition-transform group-hover:scale-110">
                  05
                </span>
                <span className="text-label-sm font-label-sm text-tertiary font-semibold uppercase">INSTANT ACTIVATION</span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">Automatic Publication</h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Same-college ambassador approval instantly changes record state to Published without requiring central Admin manual intervention or bottlenecking.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-tertiary font-medium">
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              <span>Decentralized velocity with zero delays</span>
            </div>
          </div>

          {/* STEP 6 */}
          <div className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-primary/50 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-9 w-9 rounded-full bg-tertiary text-on-tertiary font-bold flex items-center justify-center text-label-md font-label-md shadow-sm ring-2 ring-white/70 transition-transform group-hover:scale-110">
                  06
                </span>
                <span className="text-label-sm font-label-sm text-tertiary font-semibold uppercase">STUDENT DISCOVERY</span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">Students Discover</h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Real-time synchronization into SkillLinkr student opportunity mobile &amp; web feed, complete with official College-Verified Badge.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-tertiary font-medium">
              <span className="material-symbols-outlined text-[16px]">school</span>
              <span>Trusted reach across student community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
