# Hogari Marai — Luxury Fashion Portfolio & Editorial Landing Page

A pixel-perfect, high-fidelity responsive landing page recreated from the [Figma Design](https://www.figma.com/design/Jln0DH6rXXDisI72xs56Jc/EGz-_-Spare-File-Design?node-id=6-1196&p=f) for the **Hogari Marai** persona (Yellow/Gold theme section).

Built with **React**, **Vite**, **Tailwind CSS**, **Lucide Icons**, and custom interactive components.

---

## ✨ Features

### 1. 🎨 Figma-Faithful Design & Typography
- **Signature Staggered Capsule Pillars**: 5 vertical rounded pill columns (`border-radius: 9999px`) creating an organic wave mask for the hero fashion model.
- **Color Palette**: Rich warm gold gradients (`#dfac4c` to `#c48e2b`), champagne tones (`#F6F4F0`), charcoal accents, and subtle glassmorphic reflections.
- **Editorial Typography**: Pairing of **Cormorant Garamond** & **Playfair Display** luxury serif headings with **Plus Jakarta Sans** body copy.

### 2. 📱 Fully Responsive (Mobile & Web)
- **Fluid Layout**: Adapts gracefully across mobile, tablet, laptop, and ultra-wide screens.
- **Interactive Device Switcher Bar**: Switch at any time between:
  - 🖥️ **Desktop Mode** (1200px)
  - 📱 **Tablet Mode** (768px)
  - 📲 **Mobile Mode** (390px — matches the iPhone artboard from the Figma file with dynamic island and frame)
  - 🔲 **Fluid Fullscreen**

### 3. ✏️ 100% In-Browser Editable & CMS
Every text, context, image, and icon can be edited and new items can be added manually:
- **Live Inline Editing**: Click **"✏️ Edit Mode"** to click and edit any heading, bio, button, or attribution directly on the page.
- **Image Picker & Uploader**: Click any image to replace it with:
  - 📂 **Local file upload** (converts to base64 Data URL)
  - 🔗 **Direct image URL**
  - ✨ **Curated High-Res Studio Presets** (including the exact Figma cutouts)
- **Add Items Manually**: Add new gallery capsules and cards with 1 click.
- **CMS Customizer Drawer**: Slide-out panel for structured editing of Hero, Intro, Marked Box, Gallery, and Contact/Socials.
- **Local Persistence & Export**:
  - Automatically saves to `localStorage`
  - **Export JSON**: Download your full customized page configuration as a `.json` file
  - **Import JSON**: Restore any previously exported configuration
  - **Reset to Figma Defaults**: Restore the original design with 1 click

### 4. 💫 Floating & Attractive Icons & Buttons
- **Floating Stats Pill**: Interactive "Follow" button (with follower count toggle & gold confetti), "62K Followers" amber pill badge, and "Message" button.
- **Floating Satellite Badges**: Levitating circular avatars with staggered CSS float keyframes around the central portrait.
- **Floating Action Buttons**: Golden gradient "ABOUT ME >" and "HIRE ME >" buttons with light sweep shine hover effects.
- **Floating Social Dock**: Instagram, LinkedIn, Pinterest, and Behance buttons with floating animations and hover glow.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3000/`.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

