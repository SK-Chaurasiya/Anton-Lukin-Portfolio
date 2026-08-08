# Anton Lukin | Interactive WebGL Portfolio Prototype

A high-performance conceptual redesign for [lukin.me](https://lukin.me), designed to bridge rigorous systems architecture with cinematic aerial photography.

This prototype moves away from conventional list-based portfolios and uses custom WebGL interactions, fluid animations, and immersive visual storytelling to match the caliber of the work being showcased.

---

## ✨ Highlights

* **Immersive WebGL Experience**
  Interactive 3D environments designed to create a cinematic portfolio experience.

* **Cinematic Visual Storytelling**
  Aerial photography and motion-driven layouts are presented as part of a continuous visual narrative.

* **Interactive Media Exploration**
  Custom gallery experiences expose technical metadata alongside photography and cinematography work.

* **Audio-Driven Atmosphere**
  Procedurally generated ambient audio adds subtle depth without relying on external media assets.

* **Zero-Backend Architecture**
  The project runs entirely as a static application with no external backend required.

---

## 🚀 Core Architectural Features

### Interactive 3D WebGL Canvas

A high-performance Three.js hero experience featuring:

* 15,000 active particles
* Dynamic GLSL terrain shading
* Depth-based parallax
* Fluid camera movement
* Interactive visual states
* Toggleable color palettes:

  * **Sky Amber**
  * **Hacker Neon**
  * **Monochrome**

### EXIF Telemetry Integration

A custom media lightbox for the **Blok 45** and **Drone Cinematography** galleries.

The interface can surface native photography and flight information, including:

* Flight data
* Camera and lens specifications
* GPS coordinates
* Image metadata

### Algorithmic Ambient Audio

A custom **Web Audio API** synthesizer generates subtle algorithmic drone audio directly in the browser.

No external audio files are required.

### Zero-Backend Architecture

The application is designed to operate without a dedicated backend.

Contact functionality uses native client-side protocols such as:

```text
mailto:
```

This keeps the architecture lightweight while avoiding unnecessary server dependencies.

---

## 🛠️ Tech Stack

| Category     | Technology      |
| ------------ | --------------- |
| Framework    | React 19        |
| Language     | TypeScript      |
| Build Tool   | Vite            |
| 3D Rendering | Three.js        |
| Animation    | GSAP            |
| Styling      | Tailwind CSS v4 |
| Icons        | Lucide React    |
| Audio        | Web Audio API   |
| Graphics     | GLSL / WebGL    |

---

## 📁 Project Architecture

The project follows a modern frontend architecture centered around reusable React components and GPU-powered visual experiences.

```text
├── React
│   ├── UI Components
│   ├── Gallery
│   ├── Media Lightbox
│   └── Portfolio Sections
│
├── Three.js
│   ├── WebGL Canvas
│   ├── Particle System
│   ├── Terrain Rendering
│   └── Camera / Parallax
│
├── GLSL
│   └── Custom Shaders
│
├── GSAP
│   └── UI & Motion Animation
│
└── Web Audio API
    └── Procedural Ambient Audio
```

---

## 💻 Run Locally

The application is fully contained and requires no backend configuration.

### Prerequisites

Make sure you have **Node.js** installed on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application should now be available at the local URL provided by Vite, typically:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📦 Deployment

Because the application uses a zero-backend architecture, it can be deployed to most modern static hosting platforms.

Compatible platforms include:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages
* Any static hosting provider

---

## 🎨 Visual Modes

The WebGL experience supports multiple visual palettes designed for different presentation styles.

| Mode            | Description                                              |
| --------------- | -------------------------------------------------------- |
| **Sky Amber**   | Warm cinematic tones inspired by aerial photography      |
| **Hacker Neon** | High-contrast neon palette for a futuristic aesthetic    |
| **Monochrome**  | Minimal grayscale presentation focused on form and depth |

---

## ⚡ Performance

The prototype is designed with GPU-powered rendering and lightweight browser APIs to maintain a fluid experience while handling complex visual interactions.

Performance considerations include:

* GPU-accelerated WebGL rendering
* Efficient particle rendering
* Shader-based terrain effects
* Hardware-accelerated animations
* No external audio assets
* No backend requests for core functionality

---

## 🔗 Original Website

Conceptual redesign based on:

**[lukin.me](https://lukin.me)**

---

## 📄 License

This project is a conceptual portfolio prototype.

Add your preferred license here if the repository will be publicly distributed.

---

## 👤 Author

**Anton Lukin**

Interactive WebGL Portfolio Prototype

---

## 📌 Git Workflow

After updating this README, use:

```bash
git add README.md
git commit -m "Update README with clean formatting"
git push
```
