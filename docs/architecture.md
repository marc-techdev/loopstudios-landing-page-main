# Loopstudios Landing Page — Architecture

## Tech Stack
| Layer     | Technology                  |
|-----------|-----------------------------|
| Markup    | HTML5 (semantic)            |
| Styling   | Tailwind CSS v4 (CDN)       |
| Logic     | Vanilla JavaScript (ES6+)   |
| Fonts     | Google Fonts (Alata, Josefin Sans) |

## File Structure
```
loopstudios-landing-page-main/
├── index.html          # Single-page HTML with inline Tailwind styles
├── script.js           # Mobile menu toggle logic
├── images/
│   ├── desktop/        # Desktop-optimized images
│   ├── mobile/         # Mobile-optimized images
│   ├── logo.svg
│   ├── icon-*.svg      # Social + UI icons
│   └── favicon-32x32.png
├── design/             # Design reference screenshots
├── docs/
│   └── architecture.md # This file
├── CLAUDE.md           # AI assistant config
└── style-guide.md      # Design tokens reference
```

## Data Flow
```
Browser loads index.html
  → Tailwind CDN processes <style type="text/tailwindcss"> block
  → @theme defines custom design tokens (colors, fonts)
  → @apply creates component classes from utilities
  → Google Fonts loads Alata + Josefin Sans
  → script.js initializes mobile menu toggle
```

## Component Boundaries

### 1. Hero Section (`<header class="hero">`)
- Full-viewport hero with background image (mobile/desktop swap)
- Contains: Navbar, Mobile Menu Overlay, Hero Title

### 2. Navigation
- **Desktop**: Horizontal link list, hidden on mobile
- **Mobile**: Hamburger toggle → fullscreen black overlay
- JS manages: icon swap, ARIA attrs, body scroll lock, ESC close

### 3. Interactive VR Section (`<section class="interactive-section">`)
- Mobile: stacked (image + centered text)
- Desktop: overlapping layout (text box overlays bottom-right of image)

### 4. Creations Grid (`<section class="creations-section">`)
- Mobile: single column, "See All" at bottom
- Desktop: 4-column grid, "See All" in header row
- Cards: gradient overlay → white overlay + black text on hover

### 5. Footer (`<footer class="footer">`)
- Mobile: centered vertical stack
- Desktop: two-column (left: logo+nav, right: socials+copyright)

## Responsive Strategy
- **Mobile-first** approach: base styles target 375px
- **Breakpoints**: `md:` (768px), `lg:` (1024px)
- **`<picture>`** elements serve optimized images per viewport
