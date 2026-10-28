import React from 'react';

export default function KeyCapabilities() {
  const capabilities = [
    { num: '1', title: '1. Role-Based Access', icon: 'badge', color: 'text-primary', desc: 'Deterministic permissions for Admin, Ambassador, and Society actors.' },
    { num: '2', title: '2. College Isolation', icon: 'safety_divider', color: 'text-primary', desc: 'Strict tenant sandboxing prevents cross-campus data leakage or misactions.' },
    { num: '3', title: '3. Society Submission', icon: 'post_add', color: 'text-primary', desc: 'Guided wizard handles dates, criteria, tags, and promotional graphics.' },
    { num: '4', title: '4. Review Workflow', icon: 'rule', color: 'text-primary', desc: 'Multi-action decision engine with targeted correction requests.' },
    { num: '5', title: '5. Automatic Publish', icon: 'bolt', color: 'text-tertiary', desc: 'Instant live sync upon local ambassador review without central bottlenecks.' },
    { num: '6', title: '6. Status Tracking', icon: 'timeline', color: 'text-primary', desc: 'Clear real-time stages: Draft, In Review, Needs Action, and Live.' },
    { num: '7', title: '7. Notifications', icon: 'notifications_active', color: 'text-primary', desc: 'Instant alerts for revision requests, approval notifications, and deadlines.' },
    { num: '8', title: '8. Auditability', icon: 'history_edu', color: 'text-primary', desc: 'Every change, approval, and rejection is permanently attributed and logged.' },
    { num: '9', title: '9. Public Opportunity Feed', icon: 'feed', color: 'text-primary', desc: 'Fast, cached delivery of verified campus events to students.' },
    { num: '10', title: '10. Scalable College Network', icon: 'hub', color: 'text-tertiary', desc: 'Ready to scale across 1,000+ universities without degradation.' }
  ];

  return (
    <section className="py-20 md:py-28 relative z-10" id="features">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-margin-lg">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider font-semibold">Platform Architecture</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-1 tracking-tight">10 Key Capabilities</h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2 leading-relaxed">
            Engineered to institutional standards with the agility of enterprise software.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.num} className="p-5 rounded-2xl glass-card hover:border-primary/50 group">
              <span className={`material-symbols-outlined ${cap.color} text-[24px] mb-3 transition-transform group-hover:scale-110`}>
                {cap.icon}
              </span>
              <h4 className="text-title-md font-title-md text-on-surface mb-1 font-bold">{cap.title}</h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
