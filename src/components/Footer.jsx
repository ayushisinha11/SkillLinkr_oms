import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface/95 backdrop-blur-xl text-inverse-on-surface border-t border-white/10 px-gutter md:px-margin-lg pt-margin-lg pb-margin relative z-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-1.png" alt="SkillLinkr Logo" className="h-10 w-10 rounded-xl object-cover shadow-sm border border-white/20" />
              <span className="text-headline-sm font-headline-sm font-extrabold text-inverse-on-surface tracking-tight">SkillLinkr OMS</span>
            </div>
            <p className="text-body-sm font-body-sm text-outline-variant max-w-sm mb-4 leading-relaxed">
              The standard Opportunity Management System for universities, student chapters, and collegiate event networks.
            </p>
            <div className="flex items-center gap-2 text-label-sm font-label-sm text-outline-variant">
              <span className="inline-block h-2 w-2 rounded-full bg-tertiary-fixed shadow-[0_0_6px_#6ffbbe]"></span>
              <span>Production Core v2.4.1 (Active)</span>
            </div>
          </div>

          {/* Column 2: Governance & Security Links */}
          <div>
            <h5 className="text-title-md font-title-md text-inverse-on-surface mb-3 font-semibold">Security &amp; Architecture</h5>
            <ul className="space-y-2 text-label-md font-label-md">
              <li><a className="text-outline-variant hover:text-inverse-on-surface transition-colors" href="#arch">Architecture Overview</a></li>
              <li><a className="text-outline-variant hover:text-inverse-on-surface transition-colors" href="#rls">Row Level Security (RLS)</a></li>
              <li><a className="text-outline-variant hover:text-inverse-on-surface transition-colors" href="#ferpa">FERPA &amp; Campus Compliance</a></li>
              <li><a className="text-outline-variant hover:text-inverse-on-surface transition-colors" href="#soc">Security Operations Center</a></li>
            </ul>
          </div>

          {/* Column 3: Roles & Operations Links */}
          <div>
            <h5 className="text-title-md font-title-md text-inverse-on-surface mb-3 font-semibold">Campus Operations</h5>
            <ul className="space-y-2 text-label-md font-label-md">
              <li><a className="text-outline-variant hover:text-inverse-on-surface transition-colors" href="#society-guide">Society Guidelines</a></li>
              <li><a className="text-outline-variant hover:text-inverse-on-surface transition-colors" href="#ambassador-protocol">Ambassador Protocol</a></li>
              <li><a className="text-outline-variant hover:text-inverse-on-surface transition-colors" href="#audit">Admin Verification Audit</a></li>
              <li><a className="text-outline-variant hover:text-inverse-on-surface transition-colors" href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Separator & Copyright Anchor */}
        <div className="pt-6 border-t border-outline/30 flex flex-col sm:flex-row items-center justify-between text-body-sm font-body-sm text-outline-variant gap-4">
          <div>
            © 2025 SkillLinkr OMS. Academic Innovation &amp; Governance Architecture. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-label-sm font-label-sm">
            <span className="hover:text-inverse-on-surface cursor-pointer">Status: All Systems Normal</span>
            <span>•</span>
            <span className="hover:text-inverse-on-surface cursor-pointer">Instance: oms.skilllinkr.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
