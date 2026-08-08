<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/de415540-862b-4c64-93a0-da0982f13fba" />
</div>

# Anton Lukin | Interactive WebGL Portfolio Prototype

A high-performance, conceptual redesign for [lukin.me](https://lukin.me), crafted to bridge the gap between rigorous systems architecture and cinematic aerial photography. 

This prototype moves away from standard list-based portfolios, utilizing custom WebGL interactions and fluid animations to create a highly visual, immersive narrative that matches the caliber of the work being showcased.

## 🚀 Core Architectural Features

* **Interactive 3D WebGL Canvas:** A high-performance Three.js hero section rendering 15,000 active particles with dynamic GLSL terrain shading, depth parallax, and toggleable color palettes (Sky Amber, Hacker Neon, Monochrome).
* **EXIF Telemetry Integration:** A custom media lightbox built for the Blok 45 and Drone Cinematography gallery that surfaces native flight data, lens specs, and GPS coordinates.
* **Algorithmic Ambient Audio:** A custom Web Audio API synthesizer that generates subtle algorithmic drone audio without relying on external media assets.
* **Zero-Backend Architecture:** Fully static contact routing utilizing native client protocols (`mailto:`) for seamless communication without external server dependencies.

## 🛠️ Tech Stack

* **Framework:** React 19 + TypeScript
* **Build Tool:** Vite
* **3D & Motion:** Three.js, GSAP (GreenSock)
* **Styling:** Tailwind CSS v4
* **Icons:** Lucide React

## 💻 Run Locally

This application is fully contained and requires zero backend configuration. 

**Prerequisites:** Node.js installed on your local machine.

1. **Clone the repository:**
   ```bash
Install dependencies:
      npm install
Spin up the local development server:
      npm run dev

View the prototype:
Open http://localhost:3000 in your browser

*(Note: Make sure to replace `YOUR_USERNAME/YOUR_REPO_NAME.git` in the clone command with your actual GitHub repository URL before you commit it!)*
