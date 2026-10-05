# PROJECT CONTEXT & ARCHITECTURE GUIDE
> **For AI Assistants (Antigravity, Claude, Cursor, Copilot, ChatGPT) & Developers**

This document serves as the authoritative context file for **ACM NMIET Student Chapter Web Application**. Read this file before making modifications to ensure consistency with design systems, data contracts, and performance optimizations.

---

## 📌 1. Executive Summary & Core Rules

1. **Single Source of Truth for Copy (`content.json`)**:
   - ALL headings, paragraphs, badges, event lists, team members, contact info, and loader strings MUST reside inside `src/data/content.json`.
   - **DO NOT** hardcode raw strings or magic arrays inside TSX components.

2. **Design Tokens & Theme System**:
   - **Background**: Off-white light background (`#fafaf8`) with subtle dot pattern grid (`radial-gradient(circle, #cfcfc9 1.2px, transparent 1.2px)` with `22px` spacing).
   - **Primary Accent**: ACM Electric Blue (`#2563EB`).
   - **Dark Navy**: (`#0C1220`) for text, badges, and dark card themes.
   - **Typography**:
     - Headlines: `Space Grotesk` (`font-display`).
     - Body text: `Inter` (base).
     - Status / Code / Counters: `JetBrains Mono` (`font-mono`).

3. **60fps Smooth Scroll Performance Budget**:
   - All section components (`StatementSection`, `FocusAreasSection`, `AboutSection`, `EventsSection`, `TeamSection`, `ContactSection`, `Footer`) MUST be wrapped in `React.memo()`.
   - Non-hero sections use CSS `content-visibility: auto` & `contain-intrinsic-size: 1px 700px` in `src/index.css`.
   - Scroll observers in `App.tsx` run with `requestAnimationFrame` throttling to avoid main-thread scroll stutter.
   - Global `html { scroll-behavior: smooth; }` wheel-lock is omitted in CSS to allow native 60fps wheel gestures; programmatic clicks use `element.scrollIntoView({ behavior: 'smooth' })`.

4. **Boot Loader Sequence & Hero Synchronization**:
   - The loader overlay in `Loader.tsx` locks scroll (`overflow: hidden`) on mount.
   - When the loader finishes (progress = 100%), it fires `onExitStart` -> `setHeroEntranceStarted(true)` in `App.tsx`.
   - `HeroSection` and `<BlurText />` receive `isReady={heroEntranceStarted}` and `forceAnimate={isReady}` to trigger entrance animations synchronously upon preloader exit.
   - `sessionStorage` stores `acm_loader_seen` so the loader plays once per session (override with URL params `?loader=1` to force show or `?noloader=1` to bypass).

---

## 🧭 2. Page Section Order & Component Mapping

The page layout in `App.tsx` follows this exact chronological order:

```text
1. Loader               (src/components/Loader.tsx)
2. Navbar               (src/components/Navbar.tsx)
3. HeroSection          (src/components/HeroSection.tsx)
4. StatementSection     (src/components/StatementSection.tsx)
5. AboutSection         (src/components/AboutSection.tsx)
6. EventsSection        (src/components/EventsSection.tsx)
7. FocusAreasSection    (src/components/FocusAreasSection.tsx)
8. TeamSection          (src/components/TeamSection.tsx)
9. ContactSection       (src/components/ContactSection.tsx)
10. Footer              (src/components/Footer.tsx)
```

---

## 🛠️ 3. Component Details & Data Schema

### `Loader.tsx`
- **Role**: Minimalist system boot loading screen.
- **Props**: `onExitStart?: () => void`, `onComplete?: () => void`.
- **Layout**: Top headers (`ACM NMIET STUDENT CHAPTER` / `EST. 2025 · CHAPTER BOOT`), middle left status headline + 2px ACM blue progress bar, bottom-left tagline + bottom-right 3-digit percentage counter (`000%` → `100%`).

### `Navbar.tsx`
- **Role**: Fixed glassmorphic navigation header.
- **Props**: `activeSection: string`, `onNavigate: (id: string) => void`.
- **Implementation**: Uses `<GlassSurface />` component with `displace={0}` to maintain 100% sharp button contrast for the `Join ACM` button (`#2563EB` background with `#FFFFFF` text).

### `BlurText.tsx` (React Bits Component)
- **Role**: Word-by-word animated blur reveal for hero headlines.
- **Key Prop**: `forceAnimate: boolean`. When `forceAnimate` transitions from `false` to `true`, text spans re-key (`key="${index}-${shouldAnimate}"`) to execute smooth blur transitions.

### `FocusAreasSection.tsx`
- **Role**: Technical domains 6-card grid.
- **Data Key**: `focusAreas` in `content.json`.
- **Domains**: Web & App Dev, AI & ML, Competitive Coding, Cybersecurity, UI/UX & Design, Data Science.
- **Badges**: `Active` (Emerald), `Coming Soon` (Amber), `Planned` (Yellow).

### `ProfileCard.tsx` (React Bits Component)
- **Role**: 3D interactive tilt cards used in the `TeamSection`.
- **Props**: `avatarUrl`, `name`, `title`, `handle`, `status`, `innerGradient`, `enableTilt`.

---

## 📋 4. `content.json` Data Contract

When adding new content or sections, follow the structure in `src/data/content.json`:

```json
{
  "site": { ... },
  "hero": { ... },
  "whatWeBuild": { ... },
  "about": { ... },
  "events": { ... },
  "focusAreas": {
    "eyebrow": "OUR FOCUS AREAS",
    "title": "Our Focus Areas",
    "subtitle": "...",
    "sectionTitle": "Technical Domains We're Passionate About",
    "sectionDescription": "...",
    "domains": [
      {
        "id": "web-app",
        "title": "Web & App Dev",
        "status": "Active",
        "icon": "Laptop",
        "description": "...",
        "technologies": ["React", "Node.js", "Flutter"]
      }
    ]
  },
  "team": { ... },
  "contact": { ... },
  "loader": { ... }
}
```

---

## 🔧 5. Build & Deployment Checklist

When preparing a pull request or deploying:

1. **Run Type Check & Vite Build**:
   ```bash
   npm run build
   ```
   Ensure zero TypeScript compilation errors.

2. **Verify Vercel Config**:
   - Ensure `.gitignore` ignores `node_modules`, `dist`, `.vercel`.
   - Ensure `vercel.json` has `"buildCommand": "vite build"` and `"outputDirectory": "dist"`.

3. **Check Responsive Breakpoints**:
   - Verify layout on `390px` (mobile), `768px` (tablet), and `1440px` (desktop).

---

## 🤖 How AI Assistants Should Continue Work

- **If asked to add a new section**:
  1. Add data fields into `src/data/content.json`.
  2. Create `NewSection.tsx` in `src/components/` and wrap export with `React.memo(NewSection)`.
  3. Import and place in `App.tsx` and add section ID to `SECTIONS` array.
  4. Run `npm run build` to verify clean build.
- **If asked to modify styling**:
  - Maintain the off-white dot grid theme (`bg-[#fafaf8] bg-dots`) and ACM Blue accents (`#2563EB`).
  - Do NOT modify global scroll behavior unless requested.

---
*Created for ACM NMIET Student Chapter — Nutan Maharashtra Institute of Engineering & Technology, Pune.*
