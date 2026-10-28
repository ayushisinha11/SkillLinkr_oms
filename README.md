# SkillLinkr OMS (Opportunity Management System)

A modern, high-performance Opportunity Management System designed for collegiate ecosystems, higher education institutions, student societies, and campus ambassadors.

Built with **React 19**, **Vite**, and **Tailwind CSS**.

---

## 🏛️ System Architecture

- **Tri-Role Access Governance**: Strict architectural isolation between **Admin** (Global Oversight), **Campus Ambassador** (Local Contextual Gatekeeper), and **Society** (Opportunity Creator).
- **Controlled 6-Step Publishing Chain**: Standardized pipeline from draft creation, tenancy routing, line-item verification, approval gating, automatic publication, to live verified discovery.
- **Multi-Tenant College Isolation**: Strict campus boundaries enforced through cryptographic perimeter separation and row-level security (RLS).
- **Interactive Full-Page Scroll Parallax**: Dynamic background image and ambient luminous glassmorphism with GPU-accelerated motion.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/ayushisinha11/SkillLinkr_oms.git

# Navigate into project directory
cd SkillLinkr_oms

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Starts the local Vite dev server with instant Hot Module Replacement (HMR).

### Production Build

```bash
npm run build
```

Compiles optimized production assets to the `/dist` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/                 # Static assets (images, icons)
├── src/
│   ├── assets/             # Brand logos & background assets
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ValuePillars.jsx
│   │   ├── ThreeRoles.jsx
│   │   ├── PublishingChain.jsx
│   │   ├── GovernanceSection.jsx
│   │   ├── PortalsDeepDive.jsx
│   │   ├── AnalyticsSection.jsx
│   │   ├── KeyCapabilities.jsx
│   │   ├── PositioningQuote.jsx
│   │   ├── CtaSection.jsx
│   │   ├── Footer.jsx
│   │   └── BackgroundOrbs.jsx
│   ├── data/               # Centralized data definitions
│   │   └── siteData.js
│   ├── App.jsx             # Main layout & component tree
│   ├── index.css           # Tailwind directives & glassmorphic styling
│   └── main.jsx            # Application entrypoint
├── index.html              # Vite HTML template with Google Fonts
├── tailwind.config.js      # Tailored theme tokens & design system
├── vite.config.js          # Vite build config
└── package.json            # Project manifest & scripts
```

---

## 📄 License

© 2025 SkillLinkr OMS. Academic Innovation & Governance Architecture. All rights reserved.
