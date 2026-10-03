# ITZFIZZ — Scroll-Driven Hero Experience

A modern, responsive, and performance-focused **scroll-driven hero section** developed as part of the **Itzfizz Digital Web Development Internship Assignment**.

The project uses **React, JavaScript, GSAP, ScrollTrigger, Tailwind CSS, and Vite** to create a smooth and interactive hero experience where the main visual responds directly to the user's scroll progress.

## Live Demo

https://ayush0618singh.github.io/itzfizz-scroll-hero/

## GitHub Repository

https://github.com/Ayush0618singh/itzfizz-scroll-hero

---

## Project Objective

The objective of this assignment was to create a polished hero section with smooth entrance animations and scroll-driven interactions while maintaining responsive behavior and good frontend performance.

The implementation focuses on:

- Smooth initial-load animations
- Scroll-linked motion
- A moving central visual
- Impact statistics
- Responsive design
- Modern UI presentation
- Performance-focused animation techniques

---

## Key Features

### Scroll-Driven Motion

The main visual is directly connected to the user's scroll position using **GSAP ScrollTrigger**.

The interaction is not autoplay-based. Scrolling forward progresses the animation, while scrolling backward naturally reverses it.

### Animated Hero Heading

The `WELCOME ITZFIZZ` headline uses a staggered letter reveal with:

- Vertical movement
- Opacity transition
- Subtle 3D rotation
- Smooth easing

### Interactive Main Visual

The central concept car reacts to scroll progress with:

- Horizontal movement
- Subtle vertical movement
- Scale transitions
- Slight rotation
- Wheel rotation synchronized with scroll

### Impact Statistics

Four impact-statistic cards are displayed inside the hero section.

The cards:

- Animate one by one on initial load
- Use subtle staggered timing
- Respond slightly during the scroll interaction
- Remain visually integrated with the hero layout

### Scroll Progress Indicator

A custom vertical progress indicator displays the progress of the scroll interaction from:

```text
00 → 100
```

### Scroll Cue

A `SCROLL TO EXPLORE` cue helps communicate that the page contains an interactive scroll experience.

The cue remains visible during the early part of the interaction and smoothly fades near the end.

### Responsive Design

The layout is designed to adapt across:

- Desktop
- Laptop
- Tablet
- Mobile devices

### Accessibility

The project supports:

```css
prefers-reduced-motion
```

Users who prefer reduced motion can experience the page without the full animation sequence.

### Performance-Focused Animation

The animation mainly uses GPU-friendly properties such as:

- `transform`
- `translate`
- `scale`
- `rotate`
- `opacity`

This helps reduce unnecessary layout recalculations during scrolling.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | Component-based frontend development |
| JavaScript | Application and animation logic |
| GSAP | Animation engine |
| ScrollTrigger | Scroll-linked animation control |
| Tailwind CSS | Modern CSS tooling |
| CSS | Custom responsive styling and visual design |
| Vite | Development server and production build tool |
| Git | Version control |
| GitHub | Source-code hosting |
| GitHub Pages | Live deployment |

---

## Scroll Animation Flow

```text
Page Load
    ↓
Top Bar Reveal
    ↓
Eyebrow Text Reveal
    ↓
WELCOME ITZFIZZ Stagger Animation
    ↓
Description + Technology Tags
    ↓
Main Visual Reveal
    ↓
Statistics Stagger Animation
    ↓
User Starts Scrolling
    ↓
Car Movement
    ↓
Wheel Rotation
    ↓
Orbit Animation
    ↓
Scroll Progress Update
    ↓
Subtle Statistics Movement
    ↓
Scroll Completion
```

---

## Project Structure

```text
itzfizz-scroll-hero/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   └── HeroVisual.jsx
│   │
│   ├── data/
│   │   └── stats.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Main Components

### `HeroSection.jsx`

Responsible for:

- Main hero layout
- Headline animation
- Statistics rendering
- GSAP timeline
- ScrollTrigger configuration
- Scroll progress calculation
- Responsive scroll behavior

### `HeroVisual.jsx`

Contains the main SVG-based concept car visual including:

- Car body
- Glass
- Accent lighting
- Wheels
- Wheel spokes
- Decorative visual elements

### `stats.js`

Stores the statistics displayed inside the hero section.

### `index.css`

Contains the main visual styling including:

- Hero layout
- Typography
- Responsive breakpoints
- Statistics cards
- Scroll indicator
- Ambient background effects
- Concept visual styling

---

## Installation and Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ayush0618singh/itzfizz-scroll-hero.git
```

### 2. Enter the Project Directory

```bash
cd itzfizz-scroll-hero
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The local development URL will be displayed in the terminal.

---

## Production Build

Create an optimized production build using:

```bash
npm run build
```

The generated production files are stored inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The project is deployed using **GitHub Pages**.

The Vite configuration includes the GitHub Pages repository base path:

```js
base: "/itzfizz-scroll-hero/"
```

Deploy the latest production version using:

```bash
npm run deploy
```

Live website:

https://ayush0618singh.github.io/itzfizz-scroll-hero/

---

## Assignment Requirements Covered

- Full-screen hero section
- Letter-spaced `WELCOME ITZFIZZ` headline
- Impact metrics/statistics
- Smooth initial-load animation
- Staggered headline reveal
- Statistics appearing one by one
- Scroll-linked main visual movement
- Scroll-driven wheel rotation
- Forward and reverse scroll interaction
- Smooth interpolation using GSAP
- Transform-based animations
- Responsive behavior
- React implementation
- JavaScript interaction logic
- GSAP and ScrollTrigger integration
- Tailwind CSS integration
- GitHub repository
- GitHub Pages live deployment

---

## Performance Considerations

The implementation avoids unnecessary heavy calculations during scrolling.

GSAP and ScrollTrigger handle the scroll animation while transforms are used for the majority of visual movement.

Important animated properties include:

```text
translate
scale
rotate
opacity
```

This approach keeps the experience smooth while reducing unnecessary layout reflows.

---

## Accessibility Considerations

The project checks the user's reduced-motion preference using:

```text
prefers-reduced-motion: reduce
```

When enabled, the interface avoids the full animation sequence and keeps the content accessible.

---

## Impact Metrics Note

The statistics displayed in the hero section are **illustrative values used for the visual presentation of the assignment**.

They should not be interpreted as verified business-performance metrics of Itzfizz Digital.

---

## Author

**Ayush Kumar Singh**

GitHub:  
https://github.com/Ayush0618singh

---

## Assignment

**Itzfizz Digital — Web Development Internship**

Project: **Scroll-Driven Hero Section Animation**

Built with a focus on smooth motion, responsive frontend development, scroll-based interaction, and polished user experience.