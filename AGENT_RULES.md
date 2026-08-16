# WEBSY AGENT DESIGN & ARCHITECTURE RULES

> **Agency Identity**: Websy is a premier bespoke digital studio and e-commerce engineering powerhouse. We craft uncompromising, ultra-high-performance web flagships, conversion platforms, and scalable digital systems.

---

## 1. Zero AI Tropes & Anti-Patterns (STRICTLY PROHIBITED)

To maintain an authentic, elite agency aesthetic, all code and design contributions must strictly avoid cookie-cutter AI generator clichés:

| Prohibited Anti-Pattern | Why It Is Banned | Approved Alternative |
| :--- | :--- | :--- |
| ❌ **Purple / Cyan "AI Glows"** | Cheap, generic SaaS template trope | **Dark Obsidian (`#0C0D0E`) + Burnt Ember (`#E25C38`)** with subtle ambient light |
| ❌ **Uniform 3-Column Equal Cards** | Boring, lazy layout with zero visual hierarchy | **Asymmetric Bento Grids** (e.g., 8/4 splits, hero-featured row spans, density variance) |
| ❌ **Placeholder Buzzwords** ("Unlock Growth", "Supercharge", "Next-Gen") | Empty corporate fluff that destroys trust | **Concrete, high-impact copy** with real metrics ("1.1s LCP", "৳3.5k–৳15k", "Zero WP bloat") |
| ❌ **Abstract Floating 3D Donut Shapes** | Dated, uninformative visual noise | **Bespoke architectural diagrams, live UI previews, metrics monitors, code snippets** |
| ❌ **Unreadable Low-Contrast Text** | Poor accessibility and unrefined typography | **High-contrast hierarchy**: Pure Crisp `#F8FAFC`, Slate `#94A3B8`, Muted Zinc `#A1A1AA` |

---

## 2. Core Visual & Design System

### 2.1 Obsidian Palette & Materiality
* **Base Canvas**: `#0C0D0E` (Deep obsidian dark)
* **Surface Layer / Cards**: `#141619` (Tactile card container)
* **Elevated Hover / Active**: `#1E2024` (Interactive hover state)
* **Highlight Accent**: `#272A30` (Nested chips, micro-bars, dividers)
* **Subdued Hairline Borders**: `rgba(255, 255, 255, 0.08)` (`border-white/[0.08]`) default, rising to `rgba(255, 255, 255, 0.16)` on hover.

### 2.2 Brand Accent (Burnt Ember / Terracotta)
* **Primary Accent**: `#E25C38`
* **Interactive Hover**: `#EA6C48`
* **Pressed / Active**: `#C04826`
* **Ambient Glow / Aura**: `rgba(226, 92, 56, 0.12)` to `rgba(226, 92, 56, 0.20)`

### 2.3 Typography Matrix
* **Display & Headlines**: `Plus Jakarta Sans` (`font-display`), weights 600–800, tight negative letter-spacing (`tracking-tight` / `-0.025em`).
* **Body & UI Elements**: `Geist` (`font-sans`), weights 400–500, optimized legibility, high text contrast.
* **Code & Metrics**: `JetBrains Mono` / Monospace, weights 400–600 for technical specs and data points.

---

## 3. Layout Standards: High-Density Bento Architecture

1. **Asymmetric Grid Spans**:
   - Use asymmetric columns (`grid-cols-12` with `col-span-12 lg:col-span-8` and `col-span-12 lg:col-span-4`).
   - Feature primary case studies and hero features in expanded cards with interactive previews.
2. **Dense Information Hierarchy**:
   - Every card must deliver tangible substance: live status indicators, technical tags, real pricing, architectural benchmarks.
   - Pair metrics with visual proof (progress meters, code pill badges, live conversion toggles).
3. **Tactile Micro-Interactions**:
   - Subtle 1px border enlightenment on hover (`group-hover:border-white/[0.18]`).
   - Smooth easing curves (`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`).
   - Polished button interactions with micro spring/glow effects.

---

## 4. Code Quality & Engineering Directives

1. **No Dummy Placeholders**: Never write `Lorem Ipsum`, `TODO: implement`, or fake filler links. Provide complete, production-ready code.
2. **Accessibility & Semantics**: Maintain proper semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`), ARIA attributes, and keyboard navigation.
3. **Performance First**: Zero unoptimized layout shifts, fast image delivery with Next.js `<Image>`, and clean CSS containment.
