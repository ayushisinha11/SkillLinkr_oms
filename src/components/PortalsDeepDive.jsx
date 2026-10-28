import React from 'react';

export default function PortalsDeepDive() {
  return (
    <section className="py-20 md:py-28 relative z-10" id="portals">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-margin-lg">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider font-semibold">Tailored Interfaces</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-1 tracking-tight">Deep Dive Portal Experiences</h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2 leading-relaxed">
            Purpose-built workspaces optimized for the unique daily operational tasks of each campus role.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SOCIETY PORTAL */}
          <div className="rounded-2xl glass-card overflow-hidden flex flex-col hover:border-primary/50 transition-all">
            <div className="p-6 glass-card-subtle border-b border-slate-200/60">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-1 rounded-full glass-pill text-on-secondary-fixed text-label-sm font-label-sm font-bold">PORTAL A</span>
                <span className="material-symbols-outlined text-secondary">groups</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">Society Experience</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Empowering organizers to put their best foot forward.</p>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <ul className="space-y-3.5 mb-6 text-body-sm font-body-sm text-on-surface">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">edit_calendar</span>
                  <span><strong>Draft Saving:</strong> Work at your own pace without losing changes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">dynamic_form</span>
                  <span><strong>Guided Multi-Step Form:</strong> Step-by-step required field verification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">aspect_ratio</span>
                  <span><strong>Poster Validation:</strong> Image aspect ratio and DPI compliance checks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">preview</span>
                  <span><strong>Live Preview Card:</strong> View exact student app rendering beforehand.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">published_with_changes</span>
                  <span><strong>Inline Resubmission:</strong> Fix tagged ambassador feedback in 1-click.</span>
                </li>
              </ul>
              <a className="w-full text-center py-2.5 px-4 rounded-xl glass-button-secondary text-on-surface text-label-md font-label-md font-semibold block" href="#society-demo">
                Preview Society Form
              </a>
            </div>
          </div>

          {/* AMBASSADOR PORTAL */}
          <div className="rounded-2xl glass-card border-2 border-primary/50 overflow-hidden flex flex-col shadow-[0_10px_32px_0_rgba(0,82,201,0.14)]">
            <div className="p-6 bg-primary-fixed/25 backdrop-blur-md border-b border-slate-200/60">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-1 rounded-full glass-button-primary text-on-primary text-label-sm font-label-sm font-bold">PORTAL B</span>
                <span className="material-symbols-outlined text-primary">assignment_turned_in</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">Campus Ambassador Experience</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">High-velocity audit queue for verified campus curators.</p>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <ul className="space-y-3.5 mb-6 text-body-sm font-body-sm text-on-surface">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">inbox</span>
                  <span><strong>Own-College Pending Queue:</strong> Zero clutter from other universities.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">open_in_new</span>
                  <span><strong>Full Opportunity Modal Preview:</strong> Complete review sheet inspection.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">rate_review</span>
                  <span><strong>Line-Item Correction Tool:</strong> Ping specific notes on date, link, or rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">history</span>
                  <span><strong>Audit Trail:</strong> Full timestamps and reasons for every action taken.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">contact_page</span>
                  <span><strong>Society Directory:</strong> Roster of approved student clubs on campus.</span>
                </li>
              </ul>
              <a className="w-full text-center py-2.5 px-4 rounded-xl glass-button-primary text-on-primary text-label-md font-label-md font-semibold block" href="#ambassador-demo">
                Access Ambassador Queue
              </a>
            </div>
          </div>

          {/* ADMIN PORTAL */}
          <div className="rounded-2xl glass-card overflow-hidden flex flex-col hover:border-primary/50 transition-all">
            <div className="p-6 glass-card-subtle border-b border-slate-200/60">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-1 rounded-full bg-inverse-surface/90 text-inverse-on-surface text-label-sm font-label-sm font-bold shadow-xs">PORTAL C</span>
                <span className="material-symbols-outlined text-secondary">shield</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">Admin Experience</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Institutional oversight and systemic governance controls.</p>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <ul className="space-y-3.5 mb-6 text-body-sm font-body-sm text-on-surface">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">person_add</span>
                  <span><strong>Ambassador Provisioning:</strong> Onboard and assign trusted student leads.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">domain_add</span>
                  <span><strong>Global College Registry:</strong> Configure campus domains and profiles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">travel_explore</span>
                  <span><strong>Audit Log Inspection:</strong> Searchable records across all active colleges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">query_stats</span>
                  <span><strong>Multi-Institution Analytics:</strong> Track opportunity velocity &amp; outreach.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">warning</span>
                  <span><strong>Emergency Override:</strong> Instant network-wide take-down controls.</span>
                </li>
              </ul>
              <a className="w-full text-center py-2.5 px-4 rounded-xl glass-button-secondary text-on-surface text-label-md font-label-md font-semibold block" href="#admin-demo">
                Open Admin Console
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
