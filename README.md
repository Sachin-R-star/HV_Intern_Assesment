# Hogari Marai — Haute Couture & Editorial Landing Page

> 🚀 **Live Demo:** [https://hv-intern-assesment.vercel.app/](https://hv-intern-assesment.vercel.app/)  
> 🎨 **Figma Design:** [EGz _ Spare File Design (Yellow Theme)](https://www.figma.com/design/Jln0DH6rXXDisI72xs56Jc/EGz-_-Spare-File-Design?node-id=6-1196&p=f)

A responsive, content-editable luxury fashion portfolio engineered strictly to the Figma design specification for the **Hogari Marai** persona.

---

## 🏗 Architecture & Code Structure

The project follows a clean feature-based modular architecture designed for maintainability, readability, and separation of concerns:

```
src/
├── assets/                  # Local brand assets, cutouts & vector icons
├── components/
│   ├── common/              # Reusable UI primitives
│   │   ├── EditableText.jsx # Clean in-place text editor wrapper (zero boilerplate in sections)
│   │   └── SocialIcon.jsx   # Lightweight, dependency-free SVG brand icons
│   ├── layout/              # Structural shells
│   │   ├── Navbar.jsx       # Header navigation with mobile drawer
│   │   ├── Footer.jsx       # Editorial credits & legal links
│   │   └── ViewportToolbar.jsx # Interactive 1-click device preview switcher
│   ├── sections/            # Pure presentation sections
│   │   ├── HeroSection.jsx  # Staggered 5-column capsule mask & interactive follow pill
│   │   ├── IntroSection.jsx # Circular gold portrait & orbiting satellite badges
│   │   ├── EditorialCard.jsx # Figma-marked blue section (verified quote card)
│   │   ├── GallerySection.jsx # Stadium-shaped pill cards with fullscreen lightbox
│   │   └── ContactSection.jsx # Editorial inquiry form & social docks
│   └── editor/              # In-browser CMS subsystem
│       ├── CMSDrawer.jsx    # Slide-out configuration panel
│       ├── ImageUploadModal.jsx # Image replacer (presets, URL, local file base64)
│       └── FloatingActionMenu.jsx # Quick-toggle floating action controls
├── constants/
│   ├── defaultContent.js    # Schema-conforming default content from Figma
│   └── presetImages.js      # Curated high-resolution fashion editorial photography
├── hooks/
│   └── usePortfolio.js      # Custom state hook (persistence, mutations, import/export)
├── utils/
│   └── helpers.js           # Immutable path updater, file downloader & confetti
├── App.jsx                  # Clean application orchestrator (~70 lines)
├── index.css                # Tailwind directives, custom scrollbars & keyframes
└── main.jsx                 # Application entry point
```

---

## 💡 Key Engineering Decisions

1. **Custom State Hook (`usePortfolio`)**:
   - Decouples all state logic (content mutations, responsive view modes, edit mode toggles, and image modal state) from presentation components.
   - Handles `localStorage` synchronization gracefully with error handling for quota limits.

2. **Zero-Boilerplate In-Place Editing (`EditableText`)**:
   - Instead of repetitive, messy `contentEditable` handlers scattered across components, the `<EditableText />` primitive encapsulates blur-saving, enter-to-blur, and dashed hover borders. When edit mode is off, it renders clean semantic HTML (`<h1>`, `<p>`, `<span>`).

3. **Staggered Pill Masking (Hero Visual)**:
   - Uses 5 flex columns with individual capsule border-radii (`border-radius: 9999px`) and alternating organic heights (`400px`, `470px`, `500px`, `440px`, `370px`). Each pill reveals a slice of the composite model photograph with warm gold gradient overlays.

4. **Floating Micro-Interactions**:
   - Floating satellite circles around the intro avatar use out-of-phase CSS keyframe animations (`float-slow`, `float-medium`, `float-delayed`) for an organic, non-robotic levitation effect.
   - Interactive Follow button increments count dynamically with gold celebration confetti.

5. **Device Viewport Testing Bar**:
   - Evaluators can test true device responsiveness directly in the browser with 1 click:
     - **Fluid Fullscreen** (natural screen width)
     - **Desktop** (1200px framed container)
     - **Tablet** (768px iPad aspect)
     - **Mobile** (390px iPhone viewport matching the Figma artboard)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node.js 20 & 26)
- npm 9+

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Production Output
- Build artifacts are emitted to `dist/` with minified CSS and code-split JavaScript chunks.
