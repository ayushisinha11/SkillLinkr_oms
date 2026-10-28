import React from 'react';

export default function AnalyticsSection() {
  return (
    <section className="py-20 md:py-28 relative z-10" id="analytics">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-margin-lg">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider font-semibold">Performance Telemetry</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-1 tracking-tight">Verified Opportunity Intelligence</h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2 leading-relaxed">
            Real-time network operational metrics across 50+ onboarded institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Chart Column */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200/60 mb-6">
              <div>
                <h4 className="text-title-md font-title-md font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">monitoring</span>
                  Verification Throughput &amp; Volume Trend
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Submitted drafts vs. approved live opportunities across campus cohorts.</p>
              </div>
              <div className="flex items-center gap-3 text-label-sm font-label-sm">
                <span className="flex items-center gap-1.5 text-on-surface">
                  <span className="w-3 h-3 rounded bg-primary"></span>Submitted
                </span>
                <span className="flex items-center gap-1.5 text-on-surface">
                  <span className="w-3 h-3 rounded bg-tertiary"></span>Approved
                </span>
              </div>
            </div>

            <div className="relative h-64 w-full flex flex-col justify-end pt-4">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-25">
                <div className="border-b border-outline-variant w-full"></div>
                <div className="border-b border-outline-variant w-full"></div>
                <div className="border-b border-outline-variant w-full"></div>
                <div className="border-b border-outline-variant w-full"></div>
              </div>

              <div className="grid grid-cols-6 gap-3 items-end h-48 z-10 px-2">
                {/* Jan */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center gap-1 h-36">
                    <div className="telemetry-bar w-3 sm:w-4 bg-primary/40 rounded-t-sm h-[40%]" title="Jan Submitted: 40%"></div>
                    <div className="telemetry-bar w-3 sm:w-4 bg-tertiary rounded-t-sm h-[32%]" title="Jan Approved: 32%"></div>
                  </div>
                  <span className="text-[11px] font-code-tabular text-secondary mt-1">Jan</span>
                </div>
                {/* Feb */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center gap-1 h-36">
                    <div className="telemetry-bar w-3 sm:w-4 bg-primary/40 rounded-t-sm h-[55%]" title="Feb Submitted: 55%"></div>
                    <div className="telemetry-bar w-3 sm:w-4 bg-tertiary rounded-t-sm h-[48%]" title="Feb Approved: 48%"></div>
                  </div>
                  <span className="text-[11px] font-code-tabular text-secondary mt-1">Feb</span>
                </div>
                {/* Mar */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center gap-1 h-36">
                    <div className="telemetry-bar w-3 sm:w-4 bg-primary/40 rounded-t-sm h-[70%]" title="Mar Submitted: 70%"></div>
                    <div className="telemetry-bar w-3 sm:w-4 bg-tertiary rounded-t-sm h-[64%]" title="Mar Approved: 64%"></div>
                  </div>
                  <span className="text-[11px] font-code-tabular text-secondary mt-1">Mar</span>
                </div>
                {/* Apr */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center gap-1 h-36">
                    <div className="telemetry-bar w-3 sm:w-4 bg-primary/40 rounded-t-sm h-[85%]" title="Apr Submitted: 85%"></div>
                    <div className="telemetry-bar w-3 sm:w-4 bg-tertiary rounded-t-sm h-[80%]" title="Apr Approved: 80%"></div>
                  </div>
                  <span className="text-[11px] font-code-tabular text-secondary mt-1">Apr</span>
                </div>
                {/* May */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center gap-1 h-36">
                    <div className="telemetry-bar w-3 sm:w-4 bg-primary/40 rounded-t-sm h-[68%]" title="May Submitted: 68%"></div>
                    <div className="telemetry-bar w-3 sm:w-4 bg-tertiary rounded-t-sm h-[62%]" title="May Approved: 62%"></div>
                  </div>
                  <span className="text-[11px] font-code-tabular text-secondary mt-1">May</span>
                </div>
                {/* Jun */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center gap-1 h-36">
                    <div className="telemetry-bar w-3 sm:w-4 bg-primary/50 rounded-t-sm h-[98%]" title="Jun Submitted: 98%"></div>
                    <div className="telemetry-bar w-3 sm:w-4 bg-tertiary rounded-t-sm h-[94%]" title="Jun Approved: 94%"></div>
                  </div>
                  <span className="text-[11px] font-code-tabular text-secondary mt-1">Jun</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-body-sm text-on-surface-variant font-code-tabular">
                <span>Peak Velocity: <strong>1,480 opportunities/mo</strong></span>
                <span className="text-tertiary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>94.2% Audit Acceptance Rate
                </span>
              </div>
            </div>
          </div>

          {/* Right Metrics Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 mb-4">
                <h4 className="text-title-md font-title-md font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">pie_chart</span>
                  Opportunity Breakdown
                </h4>
                <span className="text-[11px] font-code-tabular text-secondary font-semibold">Categorical Split</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                  <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="38, 100" strokeWidth="4"></path>
                    <path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="27, 100" strokeDashoffset="-38" strokeWidth="4"></path>
                    <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="20, 100" strokeDashoffset="-65" strokeWidth="4"></path>
                    <path className="text-primary-fixed-dim" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="15, 100" strokeDashoffset="-85" strokeWidth="4"></path>
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-title-md font-bold text-on-surface block leading-none">100%</span>
                    <span className="text-[9px] text-secondary font-mono uppercase">Verified</span>
                  </div>
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary"></span>Hackathons &amp; Tech</span>
                    <strong className="font-mono">38%</strong>
                  </div>
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>Internships &amp; Research</span>
                    <strong className="font-mono">27%</strong>
                  </div>
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>Workshops &amp; Bootcamps</span>
                    <strong className="font-mono">20%</strong>
                  </div>
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim"></span>Cultural &amp; Recruitment</span>
                    <strong className="font-mono">15%</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 mb-3">
                <h4 className="text-title-md font-title-md font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">timelapse</span>
                  Speed-to-Publish SLA Benchmark
                </h4>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold">
                    <span>SkillLinkr OMS (Automated Chain)</span>
                    <span className="text-tertiary font-bold">3.8 Hours</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                    <div className="bg-tertiary h-2 rounded-full" style={{ width: '6%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-on-surface-variant">
                    <span>Campus WhatsApp Admin Groups</span>
                    <span className="font-mono">72.0 Hours</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                    <div className="bg-secondary/40 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-on-surface-variant">
                    <span>Institutional Email Listservs</span>
                    <span className="font-mono">96.0 Hours</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                    <div className="bg-secondary/40 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
