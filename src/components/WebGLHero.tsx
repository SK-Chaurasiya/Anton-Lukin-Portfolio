import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ANTON_INFO } from '../data/portfolioData';
import { Camera, Code2, ArrowDown, Sparkles, Activity, Layers, Play, Pause, Compass, ShieldCheck } from 'lucide-react';

interface WebGLHeroProps {
  onExploreGallery: () => void;
  onExploreProjects: () => void;
  particleMode: 'landscape' | 'nebula' | 'sphere' | 'waves';
  onChangeParticleMode: () => void;
}

export const WebGLHero: React.FC<WebGLHeroProps> = ({
  onExploreGallery,
  onExploreProjects,
  particleMode,
  onChangeParticleMode,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fps, setFps] = useState(60);
  const [webglSupported, setWebglSupported] = useState(true);
  const [colorTheme, setColorTheme] = useState<'cyan-amber' | 'hacker-neon' | 'monochrome'>('cyan-amber');

  // Refs for WebGL animation loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particleSystemRef = useRef<THREE.Points | null>(null);
  const particlePositionsRef = useRef<Float32Array | null>(null);
  const originalPositionsRef = useRef<Float32Array | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameIdRef = useRef<number | null>(null);

  // GSAP Entrance Animations
  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, delay: 0.2 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 30, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)' },
          '-=0.6'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          '-=0.5'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          '-=0.4'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 20, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.hero-stats',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0 },
          '-=0.2'
        );
    }, textRef);

    return () => ctx.revert();
  }, []);

  // Three.js WebGL Particle Scene Initialization
  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      if (!window.WebGLRenderingContext || (!testCanvas.getContext('webgl') && !testCanvas.getContext('experimental-webgl'))) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x030712, 0.0018);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.set(0, 120, 280);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Clear previous children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Create 15,000 Particles
    const PARTICLE_COUNT = 15000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const originalPositions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    // Color Palette Definition based on theme
    let primaryCol = new THREE.Color('#0ea5e9'); // Sky Cyan
    let secondaryCol = new THREE.Color('#f97316'); // Golden Hour Amber
    let whiteCol = new THREE.Color('#f8fafc'); // Starlight White
    let accentCol = new THREE.Color('#38bdf8'); // Sky Accent

    if (colorTheme === 'hacker-neon') {
      primaryCol = new THREE.Color('#10b981'); // Neon Emerald Green
      secondaryCol = new THREE.Color('#8b5cf6'); // Deep Cyber Violet
      whiteCol = new THREE.Color('#f8fafc');
      accentCol = new THREE.Color('#34d399'); // Neon Mint Accent
    } else if (colorTheme === 'monochrome') {
      primaryCol = new THREE.Color('#e0f2fe'); // Ice Blue White
      secondaryCol = new THREE.Color('#94a3b8'); // Slate Gray
      whiteCol = new THREE.Color('#ffffff');
      accentCol = new THREE.Color('#cbd5e1'); // Silver Accent
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Initial positions: Drone landscape topography grid with elevation variance
      const x = (Math.random() - 0.5) * 700;
      const z = (Math.random() - 0.5) * 700;

      // Complex terrain elevation function (Simplex-like composition)
      const distFromCenter = Math.sqrt(x * x + z * z);
      const y =
        Math.sin(x * 0.015) * Math.cos(z * 0.015) * 35 +
        Math.sin(x * 0.03 + z * 0.02) * 18 -
        (distFromCenter * 0.08);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      // Color assignment based on elevation & random distribution
      let pColor = whiteCol;
      if (y > 15) {
        pColor = secondaryCol; // Peaks
      } else if (y < -10) {
        pColor = primaryCol;  // Valleys & lowlands
      } else if (Math.random() > 0.6) {
        pColor = accentCol;
      }

      colors[i3] = pColor.r;
      colors[i3 + 1] = pColor.g;
      colors[i3 + 2] = pColor.b;

      sizes[i] = Math.random() * 2.2 + 0.8;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    particlePositionsRef.current = positions;
    originalPositionsRef.current = originalPositions;

    // Custom Particle Shader / Texture
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.4, 'rgba(255,255,255,0.7)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 3.2,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
    particleSystemRef.current = particleSystem;

    // Mouse Move Event Listener for Depth Parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // FPS Meter
    let lastTime = performance.now();
    let frameCount = 0;

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      if (!isPlaying) return;

      const elapsedTime = clock.getElapsedTime();

      // FPS Calc
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.min(60, Math.round((frameCount * 1000) / (now - lastTime))));
        frameCount = 0;
        lastTime = now;
      }

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Parallax Camera tilt
      if (camera) {
        camera.position.x = mouseRef.current.x * 60;
        camera.position.y = 120 - mouseRef.current.y * 40;
        camera.lookAt(0, -10, 0);
      }

      // Update Particles according to particleMode
      if (particlePositionsRef.current && originalPositionsRef.current && particleSystemRef.current) {
        const pos = particlePositionsRef.current;
        const orig = originalPositionsRef.current;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const i3 = i * 3;
          const ox = orig[i3];
          const oy = orig[i3 + 1];
          const oz = orig[i3 + 2];

          if (particleMode === 'landscape') {
            // Drone Terrain Wave Topography
            const wave =
              Math.sin(ox * 0.02 + elapsedTime * 1.2) * Math.cos(oz * 0.02 + elapsedTime * 0.8) * 14 +
              Math.sin(elapsedTime * 1.5 + i * 0.1) * 3;
            pos[i3] = ox;
            pos[i3 + 1] = oy + wave;
            pos[i3 + 2] = oz;
          } else if (particleMode === 'nebula') {
            // Swirling Cosmos Galaxy
            const angle = elapsedTime * 0.15 + i * 0.0005;
            const radius = Math.sqrt(ox * ox + oz * oz) * 0.9;
            pos[i3] = Math.cos(angle) * radius;
            pos[i3 + 1] = oy * 0.6 + Math.sin(elapsedTime * 0.5 + i) * 8;
            pos[i3 + 2] = Math.sin(angle) * radius;
          } else if (particleMode === 'sphere') {
            // 3D Orbital Drone Mesh Sphere
            const radius = 160 + Math.sin(elapsedTime + i) * 6;
            const phi = (i / PARTICLE_COUNT) * Math.PI * 2;
            const theta = ((i % 100) / 100) * Math.PI;

            pos[i3] = radius * Math.sin(theta) * Math.cos(phi + elapsedTime * 0.2);
            pos[i3 + 1] = radius * Math.cos(theta);
            pos[i3 + 2] = radius * Math.sin(theta) * Math.sin(phi + elapsedTime * 0.2);
          } else if (particleMode === 'waves') {
            // High Frequency Oceanic Sine Waves
            pos[i3] = ox;
            pos[i3 + 1] = Math.sin(ox * 0.04 + elapsedTime * 2.5) * 25 + Math.cos(oz * 0.04 + elapsedTime * 2) * 20;
            pos[i3 + 2] = oz;
          }
        }

        particleSystem.geometry.attributes.position.needsUpdate = true;
        particleSystem.rotation.y = elapsedTime * 0.03;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, [isPlaying, particleMode, colorTheme]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* WebGL Fallback Gradient if WebGL disabled */}
      {!webglSupported && (
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-cyan-950 opacity-90 z-0" />
      )}

      {/* Grid Overlay Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.2) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10" />

      {/* Hero Content Overlay */}
      <div ref={textRef} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl space-y-6">
          {/* Status Badge */}
          <div className="hero-badge inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-950/50">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>FULL-STACK SOFTWARE CRAFTSMANSHIP & AERIAL CINEMATOGRAPHY</span>
          </div>

          {/* Title */}
          <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] font-sans">
            <span className="block text-slate-100">Engineering Systems.</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
              Capturing Horizon Perspectives.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg sm:text-xl text-slate-300 max-w-2xl font-sans font-normal leading-relaxed">
            I build high-concurrency web engines, spatial 3D WebGL interfaces, and document brutalist Yugoslav architecture & drone cinematography across Eastern & Southern Europe.
          </p>

          {/* Interactive Hero CTAs */}
          <div className="hero-cta flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onExploreGallery}
              className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Camera className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Explore Blok 45 Cinematography</span>
            </button>

            <button
              onClick={onExploreProjects}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-mono text-sm font-semibold border border-slate-700 hover:border-cyan-500/50 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2.5 backdrop-blur-md"
            >
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>Software Architecture</span>
            </button>
          </div>

          {/* Real-time Telemetry & Tech Highlights */}
          <div className="hero-stats pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm">
              <div className="text-cyan-400 font-mono font-bold text-xl sm:text-2xl">10+ Yrs</div>
              <div className="text-slate-400 text-xs font-mono">Software Engineering</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm">
              <div className="text-amber-400 font-mono font-bold text-xl sm:text-2xl">15,000</div>
              <div className="text-slate-400 text-xs font-mono">Interactive Particles</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm">
              <div className="text-emerald-400 font-mono font-bold text-xl sm:text-2xl">4K ProRes</div>
              <div className="text-slate-400 text-xs font-mono">Drone Cinematography</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm">
              <div className="text-sky-300 font-mono font-bold text-xl sm:text-2xl">60 FPS</div>
              <div className="text-slate-400 text-xs font-mono">WebGL Engine Target</div>
            </div>
          </div>
        </div>

        {/* Right Side Control Widget & Live Canvas Status Card */}
        <div className="w-full lg:w-80 p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl shadow-black space-y-4 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-mono text-xs font-bold text-slate-200 tracking-wider">3D ENGINE STATUS</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
              {fps} FPS
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Particle Mode:</span>
              <span className="text-cyan-300 font-bold uppercase">{particleMode}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Color Palette:</span>
              <span className="text-amber-300 capitalize font-bold">
                {colorTheme === 'cyan-amber' ? 'Sky Amber' : colorTheme === 'hacker-neon' ? 'Hacker Neon' : 'Monochrome'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Rendering API:</span>
              <span className="text-amber-300">WebGL 2.0</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Depth Parallax:</span>
              <span className="text-emerald-300">Active (Cursor)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Current Location:</span>
              <span className="text-slate-200">44.8171° N, 20.4569° E</span>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="pt-2 space-y-2">
            <button
              onClick={onChangeParticleMode}
              className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300 border border-cyan-500/30 transition-colors flex items-center justify-center space-x-2"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Switch Terrain Shader Mode</span>
            </button>

            <button
              onClick={() => {
                const themes: ('cyan-amber' | 'hacker-neon' | 'monochrome')[] = ['cyan-amber', 'hacker-neon', 'monochrome'];
                const nextIndex = (themes.indexOf(colorTheme) + 1) % themes.length;
                setColorTheme(themes[nextIndex]);
              }}
              className="w-full py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-mono text-amber-300 border border-amber-500/30 transition-colors flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Toggle Color Palette ({colorTheme === 'cyan-amber' ? 'Sky Amber' : colorTheme === 'hacker-neon' ? 'Hacker Neon' : 'Monochrome'})</span>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full py-2 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-xs font-mono text-slate-300 transition-colors flex items-center justify-center space-x-2"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlaying ? 'Pause WebGL Particles' : 'Resume WebGL Animation'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-2 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer" onClick={onExploreGallery}>
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </div>
    </section>
  );
};
