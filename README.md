# ACM NMIET Student Chapter — Official Web Application

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)

A high-performance, modern web application for the **ACM NMIET Student Chapter** at Nutan Maharashtra Institute of Engineering & Technology, Pune. Designed with modern aesthetics, custom animations, 60fps smooth scrolling, and complete data-driven architecture.

---

## 🚀 Key Features

- **Minimalist High-Tech Boot Loader**: High-tech system boot preloader with 3-digit percentage counter (`000%` → `100%`), line-by-line log updates, session skip detection, and smooth CSS fade-out exit.
- **Hero Section & 3D Visuals**: Animated hero headline powered by `<BlurText />`, quick chapter stats, and custom 3D isometric crystal visual (`<HeroIllustration />`).
- **Focus Areas & Technical Domains**: Interactive cards detailing Web & App Dev, AI & ML, Competitive Coding, Cybersecurity, UI/UX & Design, and Data Science with status tags (`Active`, `Coming Soon`, `Planned`) and tech stack badges.
- **Events Directory**: Categorized event cards with filter tabs (*Workshops, Hackathons, Talks, Community*).
- **Leadership & Team Showcase**: Pyramid hierarchy showing Faculty Sponsor, Chapter President, Vice President, and Team Leads featuring 3D tilt `<ProfileCard />` components.
- **Glassmorphic Navigation**: Navigation bar using `<GlassSurface />` from React Bits for smooth backdrop blur and section scroll tracking.
- **Performance Optimized**: Built with `content-visibility: auto`, `React.memo` section wrapping, and hardware acceleration for 60fps scrolling.
- **Data-Driven Architecture**: 100% of website text and data is stored in `src/data/content.json` for instant copy editing without touching code.

---

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Vanilla CSS (Design Tokens, Dot Grid)
- **Animations**: Framer Motion, GSAP, Canvas Confetti
- **Icons**: Lucide React
- **Deployment**: Vercel ready (`vercel.json` pre-configured)

---

## 📂 Project Structure

```text
ACM_NEW_WEB/
├── public/
│   ├── acm-logo.png        # Official ACM NMIET Chapter Logo
│   └── favicon.png         # Site Favicon
├── src/
│   ├── components/
│   │   ├── Loader.tsx             # Minimalist system boot preloader
│   │   ├── Loader.css             # Preloader overlay styling
│   │   ├── Navbar.tsx             # Header navbar with GlassSurface
│   │   ├── HeroSection.tsx        # Hero section with entrance hooks
│   │   ├── HeroIllustration.tsx   # 3D Isometric SVG visual & code cards
│   │   ├── BlurText.tsx           # React Bits animated blur text
│   │   ├── StatementSection.tsx   # Purpose & domain cards
│   │   ├── FocusAreasSection.tsx  # Technical domains 6-card grid
│   │   ├── AboutSection.tsx       # Mission & core values
│   │   ├── EventsSection.tsx      # Tabbed events directory
│   │   ├── TeamSection.tsx        # Team hierarchy & ProfileCard
│   │   ├── ProfileCard.tsx        # 3D interactive tilt cards
│   │   ├── ContactSection.tsx     # Contact info & campus image
│   │   └── Footer.tsx             # Site footer & quick links
│   ├── data/
│   │   └── content.json           # Single source of truth for all copy & data
│   ├── App.tsx                    # Main layout, scroll observer & section memoization
│   ├── index.css                  # Global styles, dot grid, design tokens
│   └── main.tsx                   # React entry point
├── .gitignore                     # Production Git ignore rules
├── vercel.json                    # Vercel deployment configuration
├── package.json                   # Dependencies & npm scripts
└── vite.config.ts                 # Vite config
```

---

## ⚡ Quick Start / Local Setup

### 1. Prerequisites
- Node.js 18+ 
- npm or pnpm or yarn

### 2. Installation
```bash
# Clone repository
git clone https://github.com/DevJay067/ACM_NEW_WEB.git

# Navigate to project directory
cd ACM_NEW_WEB

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` (or the port specified in terminal) in your browser.

> 💡 **Dev Tip**: To skip the loading screen during development, add `?noloader=1` to the URL:
> `http://localhost:5173/?noloader=1`

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 Deploying to Vercel

1. Push repository to GitHub.
2. Import project in Vercel.
3. Vercel automatically detects `Vite` framework preset using `vercel.json`.
4. Deploy!

---

## 🤝 Contributing & Updating Content

To update website text, event details, team members, or focus areas, modify `src/data/content.json`. **Do not hardcode strings inside TSX components.**

Happy Coding! 🚀
