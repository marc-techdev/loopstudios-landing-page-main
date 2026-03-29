# Frontend Mentor - Loopstudios Landing Page

![Design preview for the Loopstudios landing page coding challenge](preview.jpg)

## Overview

A fully responsive landing page for Loopstudios, built as a Frontend Mentor challenge. The page showcases immersive VR experiences with a clean, modern design that adapts seamlessly from mobile (375px) to desktop (1440px).

## Tech Stack

- **HTML5** — Semantic markup with accessible ARIA attributes
- **Tailwind CSS v4** — Utility-first styling via CDN with `@theme` tokens and `@apply` directives
- **Vanilla JavaScript** — Lightweight scripting for interactive elements

## Features

- Mobile-first responsive layout
- Animated mobile navigation menu with hamburger toggle
- Hover effects on navigation links, creation cards, and buttons
- Responsive image loading via `<picture>` elements (mobile/desktop sources)
- CSS transitions and gradient overlays on the creations grid
- Keyboard accessibility (Escape key closes mobile menu)
- Scroll lock when mobile menu is open

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-width banner with dark overlay and bordered headline |
| **Interactive VR** | Side-by-side image and text block (stacked on mobile) |
| **Our Creations** | 4-column image grid with hover overlays (single column on mobile) |
| **Footer** | Logo, navigation, social icons, and copyright |

## Design Tokens

| Token | Value |
|---|---|
| Primary White | `hsl(0, 0%, 100%)` |
| Primary Black | `hsl(0, 0%, 0%)` |
| Grey 200 | `hsl(0, 0%, 85%)` |
| Dark Gray | `hsl(0, 0%, 55%)` |
| Font — Headings | Josefin Sans (300) |
| Font — Body | Alata (400) |

## Project Structure

```
loopstudios-landing-page-main/
├── index.html          # Main page
├── script.js           # Mobile menu logic
├── style-guide.md      # Design reference
├── preview.jpg         # Design preview
├── images/
│   ├── desktop/        # Desktop-optimized images
│   └── mobile/         # Mobile-optimized images
└── design/             # Original design mockups
```

## Getting Started

1. Clone the repository
2. Open `index.html` in a browser, or use Live Server on port 5500

