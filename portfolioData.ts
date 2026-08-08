import { PhotoItem, ProjectItem, SkillCategory, CareerMilestone } from '../types';

export const ANTON_INFO = {
  name: 'Anton Lukin',
  role: 'Software Engineer & Drone Cinematographer',
  location: 'Belgrade, Serbia / Remote Worldwide',
  bio: 'Engineering high-concurrency systems, spatial WebGL applications, and documenting brutalist architecture & aerial landscapes through high-altitude drone cinematography.',
  email: 'anton@lukin.me',
  github: 'https://github.com/antonlukin',
  linkedin: 'https://linkedin.com/in/antonlukin',
  instagram: 'https://instagram.com/antonlukin',
  unsplash: 'https://unsplash.com/@antonlukin',
  x: 'https://x.com/antonlukin',
  availability: 'Available for Select Engineering Contracts & Aerial Cinematography Commissions',
};

export const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'blok45-mural-01',
    title: 'Monolithic Geometry (Blok 45)',
    subtitle: 'Brutalist street art preservation project',
    category: 'Blok 45',
    location: 'Blok 45, New Belgrade, Serbia',
    coordinates: '44.8014° N, 20.3892° E',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=85',
    description: 'An aerial perspective capturing the intersection of 1970s Yugoslav brutalist concrete architecture and vibrant contemporary graffiti art in Blok 45, New Belgrade.',
    exif: {
      camera: 'DJI Mavic 3 Pro',
      droneModel: 'DJI Mavic 3 Pro (Hasselblad L2D-20c)',
      lens: '24mm f/2.8 Equivalent',
      aperture: 'f/4.0',
      shutter: '1/320s',
      iso: '100',
      altitude: '42m AGL',
    },
    tags: ['Blok 45', 'Brutalism', 'Urban Art', 'DJI Mavic 3', 'Aerial'],
    featured: true,
  },
  {
    id: 'aerial-coast-01',
    title: 'Adriatic Dawn Fracture',
    subtitle: 'Golden hour coastal flight sequence',
    category: 'Aerial Landscapes',
    location: 'Kotor Bay, Montenegro',
    coordinates: '42.4247° N, 18.7712° E',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    description: 'Crisp morning light piercing through fjord mist over the steep limestone cliffs of Kotor Bay. Shot during a sunrise flight at 120m altitude.',
    exif: {
      camera: 'DJI Inspire 2',
      droneModel: 'DJI Inspire 2 (Zenmuse X7)',
      lens: '35mm F2.8 LS ASPH',
      aperture: 'f/5.6',
      shutter: '1/500s',
      iso: '200',
      altitude: '125m AGL',
    },
    tags: ['Aerial', 'Coastal', 'Golden Hour', 'Montenegro', 'Zenmuse X7'],
    featured: true,
  },
  {
    id: 'brutalist-genex-01',
    title: 'The Western City Gate',
    subtitle: 'Verticality of Yugoslav Modernism',
    category: 'Brutalist Architecture',
    location: 'Genex Tower, Belgrade, Serbia',
    coordinates: '44.8202° N, 20.4078° E',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    description: 'Hovering parallel to the iconic Genex Tower at dusk. The raw exposed aggregate concrete catches the last rays of crimson sunset.',
    exif: {
      camera: 'DJI Mavic 3 Cine',
      droneModel: 'DJI Mavic 3 Cine (Apple ProRes 422 HQ)',
      lens: '166mm Telephoto Equivalent',
      aperture: 'f/3.4',
      shutter: '1/160s',
      iso: '400',
      altitude: '115m AGL',
    },
    tags: ['Brutalism', 'Genex Tower', 'Belgrade', 'Architecture', 'Telephoto'],
    featured: true,
  },
  {
    id: 'blok45-riverbank-02',
    title: 'Sava River Symmetry',
    subtitle: 'Top-down orthogonal survey of Blok 45 bank',
    category: 'Blok 45',
    location: 'Sava Riverbank, Blok 45, Serbia',
    coordinates: '44.7965° N, 20.3831° E',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    description: '90-degree nadir perspective showcasing the mathematical grid alignment of riverside houseboats and concrete pathways along Blok 45.',
    exif: {
      camera: 'DJI Air 3',
      droneModel: 'DJI Air 3 Dual Camera',
      lens: '24mm f/1.7',
      aperture: 'f/2.8',
      shutter: '1/800s',
      iso: '100',
      altitude: '90m AGL',
    },
    tags: ['Nadir', 'Blok 45', 'Sava River', 'Geometry', 'Orthogonal'],
    featured: false,
  },
  {
    id: 'aerial-alps-01',
    title: 'Glacial Ridgeline Run',
    subtitle: 'FPV mountain cinematic sweep',
    category: 'Aerial Landscapes',
    location: 'Durmitor National Park, Montenegro',
    coordinates: '43.1283° N, 19.0303° E',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
    description: 'High-speed manual FPV quadcopter flight following the razor-sharp peak of Bobotov Kuk at sub-zero temperatures.',
    exif: {
      camera: 'Custom 5" FPV Drone + GoPro Hero 12',
      droneModel: 'Custom 6S FPV (O3 Air Unit + GoPro Hero 12 Black)',
      lens: 'HyperSmooth Wide 12mm',
      aperture: 'f/2.8',
      shutter: '1/1000s (ND32)',
      iso: '100',
      altitude: '2100m MSL',
    },
    tags: ['FPV', 'Mountains', 'Durmitor', 'Winter', 'High Speed'],
    featured: true,
  },
  {
    id: 'cinematic-belgrade-02',
    title: 'Nebula Over the Citadel',
    subtitle: 'Long exposure nocturnal flight',
    category: 'Cinematic Stills',
    location: 'Kalemegdan Fortress, Belgrade',
    coordinates: '44.8236° N, 20.4503° E',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85',
    description: 'Starlight and city glow reflecting off the confluence of the Sava and Danube rivers, captured in steady 2-second aerial long exposure.',
    exif: {
      camera: 'DJI Mavic 3 Pro',
      droneModel: 'DJI Mavic 3 Pro',
      lens: '24mm f/2.8',
      aperture: 'f/2.8',
      shutter: '2.0s',
      iso: '800',
      altitude: '75m AGL',
    },
    tags: ['Night', 'Long Exposure', 'Belgrade', 'Danube', 'Citadel'],
    featured: false,
  },
  {
    id: 'blok45-street-03',
    title: 'Concrete Canvas #45',
    subtitle: 'Detail scan of Yugoslavia urban mural',
    category: 'Blok 45',
    location: 'Blok 45 Promenade, Belgrade',
    coordinates: '44.8001° N, 20.3870° E',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85',
    description: 'High-resolution photogrammetry texture capture of a multi-story mural embedded on prefabricated Yugoslav panel buildings.',
    exif: {
      camera: 'DJI Mavic 3 Pro',
      droneModel: 'DJI Mavic 3 Pro',
      lens: '70mm Telephoto f/2.8',
      aperture: 'f/3.2',
      shutter: '1/640s',
      iso: '100',
      altitude: '18m AGL',
    },
    tags: ['Blok 45', 'Photogrammetry', 'Street Art', 'Textures'],
    featured: false,
  },
  {
    id: 'brutalist-sava-center',
    title: 'Sava Centar Structural Ribs',
    subtitle: 'Glass and steel Yugoslav modernism',
    category: 'Brutalist Architecture',
    location: 'Sava Centar, New Belgrade',
    coordinates: '44.8095° N, 20.4328° E',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    description: 'Geometrical abstraction of the canted green glass facade and structural steel trusses of Belgrade’s famous congress hall.',
    exif: {
      camera: 'DJI Air 3',
      droneModel: 'DJI Air 3',
      lens: '70mm Telephoto',
      aperture: 'f/2.8',
      shutter: '1/400s',
      iso: '100',
      altitude: '50m AGL',
    },
    tags: ['Brutalism', 'Modernism', 'Sava Centar', 'Architecture'],
    featured: false,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aether-webgl-engine',
    title: 'Aether 3D WebGL Engine',
    subtitle: 'Hardware-accelerated particle & terrain visualizer',
    category: 'WebGL / 3D',
    description: 'A modular, lightweight WebGL 2.0 / Three.js engine optimized for rendering 100,000+ real-time particles and volumetric heightmaps with custom GLSL compute shaders.',
    longDescription: 'Built from the ground up to render real-time drone telemetry, 3D point clouds, and interactive terrain heightmaps directly in the browser at sustained 60 FPS. Features instanced mesh buffers, custom GLSL noise displacement shaders, and depth-aware cursor interaction.',
    keyFeatures: [
      'Custom GLSL particle noise shaders with GPU displacement',
      'Real-time mouse spatial parallax & depth map blending',
      'Memory-efficient InstancedBufferAttribute memory buffers',
      'Adaptive level-of-detail (LOD) for mobile & low-tier GPUs',
      'Zero-dependency fallback canvas for legacy non-WebGL clients',
    ],
    architecture: 'Three.js v158 / WebGL 2.0 + Custom GLSL Vertex & Fragment Shaders + React 19 state synchronization wrapper.',
    codeSnippet: {
      language: 'typescript',
      code: `// Custom GLSL Vertex Shader snippet for GPU Particle Displacement
const vertexShader = \`
  uniform float uTime;
  uniform vec2 uMouse;
  attribute float aScale;
  attribute vec3 aVelocity;
  varying vec3 vPosition;

  void main() {
    vPosition = position;
    vec3 p = position;
    
    // Simplex noise displacement on GPU
    float displacement = sin(p.x * 0.02 + uTime * 1.5) * cos(p.z * 0.02 + uTime * 1.2) * 12.0;
    p.y += displacement;
    
    // Mouse interaction displacement
    float dist = distance(p.xz, uMouse * 100.0);
    if (dist < 40.0) {
      p.y += (40.0 - dist) * 0.8;
    }

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = aScale * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
\`;`,
    },
    metrics: [
      { label: 'Particle Capacity', value: '100,000+' },
      { label: 'Target Framerate', value: '60 FPS' },
      { label: 'Gzipped Bundle Size', value: '28 KB' },
    ],
    tags: ['TypeScript', 'Three.js', 'WebGL', 'GLSL Shaders', 'React'],
    githubUrl: 'https://github.com/antonlukin/aether-webgl',
    liveUrl: 'https://aether-demo.lukin.me',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'blok45-archival-system',
    title: 'Blok45 Digital Archival System',
    subtitle: 'High-resolution street art & architectural repository',
    category: 'Full Stack',
    description: 'Full-stack spatial archival web app documenting street art, murals, and brutalist Yugoslav architecture with geolocation telemetry and photogrammetry 3D viewers.',
    longDescription: 'Created to preserve and categorize the rapidly evolving street art scene in Belgrade’s Blok 45. Includes interactive satellite mapping, EXIF extraction, automated WebP/AVIF thumbnail generation, and full-text search across artist tags and historical timelines.',
    keyFeatures: [
      'Interactive satellite & vector map with drone coordinate pin clusters',
      'EXIF & telemetry metadata parser for drone photo flights',
      'High-zoom progressive image viewer with deep tile rendering',
      'Sub-50ms search with multi-tag filtering across 1,000+ captures',
      'Responsive dark mode optimized for visual art presentation',
    ],
    architecture: 'Next.js 14 / React 19 + Express API + PostgreSQL / Spatial PostGIS + Tailwind CSS v4.',
    codeSnippet: {
      language: 'typescript',
      code: `// Fast EXIF Telemetry Extraction Pipeline
import { ExifParser } from '@/lib/exif-parser';

export async function processDroneFlightUpload(fileBuffer: Buffer) {
  const metadata = await ExifParser.extract(fileBuffer);
  return {
    droneModel: metadata.Make + ' ' + metadata.Model,
    coordinates: {
      lat: metadata.GPSLatitude,
      lng: metadata.GPSLongitude,
      altitudeMeters: metadata.GPSAltitude,
    },
    cameraParams: {
      aperture: \`f/\${metadata.FNumber}\`,
      shutter: \`1/\${Math.round(1 / metadata.ExposureTime)}s\`,
      iso: metadata.ISO,
    }
  };
}`,
    },
    metrics: [
      { label: 'Archived Captures', value: '1,250+' },
      { label: 'Search Latency', value: '<35ms' },
      { label: 'Lighthouse Score', value: '99/100' },
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Express', 'Tailwind CSS', 'PostGIS'],
    githubUrl: 'https://github.com/antonlukin/blok45-archive',
    liveUrl: 'https://blok45.lukin.me',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'skyroute-flight-planner',
    title: 'SkyRoute Autonomous Flight Planner',
    subtitle: 'Waymoint trajectory generator for aerial survey drones',
    category: 'Systems & Tools',
    description: 'Algorithmic flight route generator that computes optimal 3D waypoints for aerial surveying, obstacle avoidance, and camera gimbal overlap optimization.',
    longDescription: 'Used to plan precise drone mapping missions over dense urban structures and mountainous terrains. Calculates optimal battery consumption profiles, wind drift compensation vectoring, and camera trigger intervals for 3D photogrammetry reconstruction.',
    keyFeatures: [
      '3D flight path interpolation with smooth Bezier curve velocity profiles',
      'Real-time wind vector drift calculation and battery endurance estimator',
      'KML / Waypoint XML export directly compatible with DJI Pilot and Litchi',
      'Elevation API terrain following to maintain constant ground altitude (AGL)',
      'Client-side offline path validation using Web Workers',
    ],
    architecture: 'TypeScript + Web Workers + Canvas 2D / WebGL 3D Preview + Geometry Algorithm Engine.',
    codeSnippet: {
      language: 'typescript',
      code: `// Bezier Curve Trajectory Interpolation for Smooth Drone Motion
export function calculateSmoothFlightPath(waypoints: Vector3[], speedMs: number) {
  const smoothedPath: Vector3[] = [];
  for (let i = 0; i < waypoints.length - 1; i++) {
    const p0 = waypoints[Math.max(0, i - 1)];
    const p1 = waypoints[i];
    const p2 = waypoints[i + 1];
    const p3 = waypoints[Math.min(waypoints.length - 1, i + 2)];
    
    // Catmull-Rom spline control points
    for (let t = 0; t <= 1; t += 0.1) {
      smoothedPath.push(catmullRom(p0, p1, p2, p3, t));
    }
  }
  return smoothedPath;
}`,
    },
    metrics: [
      { label: 'Waypoint Calculation', value: '<10ms' },
      { label: 'Supported Formats', value: 'DJI / KML / CSV' },
      { label: 'Energy Savings', value: '18% Avg' },
    ],
    tags: ['TypeScript', 'Geometry Algorithms', 'Web Workers', 'GIS Data', 'Canvas'],
    githubUrl: 'https://github.com/antonlukin/skyroute-planner',
    liveUrl: 'https://skyroute.lukin.me',
    imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hyperstream-gateway',
    title: 'HyperStream Event Gateway',
    subtitle: 'High-throughput SSE & WebSocket proxy service',
    category: 'Systems & Tools',
    description: 'A resilient, low-latency API gateway in Go and Node.js for multiplexing real-time sensor streams, drone telemetry, and server-sent event feeds.',
    longDescription: 'Designed for high concurrency and low memory footprint. Handles token authentication, client heartbeat tracking, backpressure management, and automatic reconnect fallback for lossy mobile networks.',
    keyFeatures: [
      'Handles 100,000+ active connections per node with <5MB RAM overhead',
      'Automatic failover between WebSockets, SSE, and HTTP long-polling',
      'Built-in rate limiting, JWT validation, and per-channel access control',
      'Zero-downtime hot reloading of route tables and event topics',
    ],
    architecture: 'Go / Node.js + Redis Pub/Sub + Docker / Kubernetes Deployment.',
    codeSnippet: {
      language: 'go',
      code: `// High-Performance SSE Broadcast Channel in Go
type GatewayStream struct {
	clients   map[string]chan []byte
	broadcast chan []byte
	mu        sync.RWMutex
}

func (s *GatewayStream) ListenAndServe(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")
	
	msgChan := make(chan []byte, 256)
	s.registerClient(msgChan)
	defer s.unregisterClient(msgChan)

	for msg := range msgChan {
		fmt.Fprintf(w, "data: %s\\n\\n", msg)
		w.(http.Flusher).Flush()
	}
}`,
    },
    metrics: [
      { label: 'Concurrent Clients', value: '100,000+' },
      { label: 'Latency P99', value: '2.4 ms' },
      { label: 'Uptime Guarantee', value: '99.99%' },
    ],
    tags: ['Go', 'Node.js', 'WebSockets', 'Redis', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/antonlukin/hyperstream',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'kube-vista-visualizer',
    title: 'KubeVista 3D Cluster Topology',
    subtitle: 'Interactive Kubernetes cluster monitor',
    category: 'Open Source',
    description: 'An open-source browser dashboard that renders Kubernetes cluster namespaces, pods, nodes, and ingress traffic routes in a live 3D force-directed graph.',
    longDescription: 'Provides real-time spatial visibility into cluster health. Operators can inspect pod CPU/RAM usage, visualize network requests flowing between microservices, and trigger rolling restarts directly from the 3D canvas.',
    keyFeatures: [
      'Interactive 3D force-directed node graph using Three.js',
      'Live metric streams via Prometheus & Kubernetes API watchers',
      'Visual pod crash loop back-off alerts with red glowing particle effects',
      'Dark mode cyber UI with HUD overlays and keyboard command bar',
    ],
    architecture: 'React 19 + Three.js 3D Force Graph + Express API + Kubernetes Client SDK.',
    codeSnippet: {
      language: 'typescript',
      code: `// Real-Time 3D Force Graph Node Color Status Mapper
export function getPodNodeColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'running': return '#10b981'; // Emerald green
    case 'pending': return '#f59e0b'; // Amber yellow
    case 'crashloopbackoff':
    case 'failed': return '#ef4444';  // Glowing pulse red
    default: return '#6b7280';
  }
}`,
    },
    metrics: [
      { label: 'GitHub Stars', value: '1,420+' },
      { label: 'Supported K8s', value: 'v1.24+' },
      { label: 'FPS on 500 Nodes', value: '60 FPS' },
    ],
    tags: ['React', 'Three.js', 'Kubernetes', 'Prometheus', 'TypeScript'],
    githubUrl: 'https://github.com/antonlukin/kube-vista',
    liveUrl: 'https://kube-vista.lukin.me',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend & 3D WebGL',
    skills: [
      { name: 'TypeScript', level: 98, experience: '8+ Yrs', iconName: 'Code', description: 'Advanced strict mode typing, generic utilities, AST processing' },
      { name: 'React 19 / Next.js', level: 95, experience: '7+ Yrs', iconName: 'Layout', description: 'Server Components, Concurrent Mode, custom hook architectures' },
      { name: 'Three.js / WebGL', level: 92, experience: '5+ Yrs', iconName: 'Box', description: 'Custom GLSL shaders, particle systems, instanced rendering, buffer geometry' },
      { name: 'Tailwind CSS v4', level: 96, experience: '5+ Yrs', iconName: 'Palette', description: 'Design systems, micro-interactions, responsive fluid layouts' },
    ],
  },
  {
    category: 'Backend & Systems',
    skills: [
      { name: 'Node.js & Express', level: 94, experience: '8+ Yrs', iconName: 'Server', description: 'REST APIs, WebSockets, event-driven microservices, performance tuning' },
      { name: 'Go (Golang)', level: 88, experience: '4+ Yrs', iconName: 'Cpu', description: 'Goroutines, channel concurrency, low-latency networking services' },
      { name: 'PostgreSQL / PostGIS', level: 90, experience: '6+ Yrs', iconName: 'Database', description: 'Spatial indexing, query optimization, complex migrations, GIS data' },
      { name: 'Redis & Caching', level: 91, experience: '6+ Yrs', iconName: 'Zap', description: 'Pub/Sub messaging, multi-tier cache strategies, rate limiting' },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker & Containers', level: 92, experience: '6+ Yrs', iconName: 'Package', description: 'Multi-stage builds, Alpine image hardening, compose orchestrations' },
      { name: 'Kubernetes', level: 85, experience: '4+ Yrs', iconName: 'Cloud', description: 'Helm charts, deployment manifests, ingress controllers, pod monitoring' },
      { name: 'CI/CD Pipelines', level: 90, experience: '6+ Yrs', iconName: 'GitBranch', description: 'GitHub Actions, automated testing, zero-downtime release workflows' },
    ],
  },
  {
    category: 'Drone & Aerial Cinematography',
    skills: [
      { name: 'Drone Piloting (FPV & Commercial)', level: 96, experience: '7+ Yrs', iconName: 'Compass', description: 'Certified UAV pilot, high-speed manual FPV tracking, precision flight' },
      { name: 'Color Grading & Post-Production', level: 92, experience: '6+ Yrs', iconName: 'Film', description: 'DaVinci Resolve Studio, ACES color management, Apple ProRes workflow' },
      { name: 'Photogrammetry 3D Scanning', level: 89, experience: '4+ Yrs', iconName: 'Camera', description: 'RealityCapture, mesh texturing, urban architectural scanning' },
    ],
  },
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    period: '2022 — Present',
    role: 'Senior Staff Software Engineer & Creative Lead',
    company: 'Lukin Spatial Tech & Consulting',
    location: 'Belgrade / Remote',
    type: 'Full-time / Consulting',
    summary: 'Architecting high-concurrency web engines, 3D WebGL data visualization platforms, and leading drone aerial cinematography projects across Europe.',
    highlights: [
      'Built custom WebGL 3D rendering engines handling 100k+ real-time particle nodes for geospatial telemetry.',
      'Reduced web client bundle size by 42% through custom ESModule code splitting and dynamic loading.',
      'Directed and captured aerial drone footage for urban architecture documentaries and brutalist preservation campaigns.',
    ],
    techUsed: ['TypeScript', 'React', 'Three.js', 'Go', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'DJI Mavic 3 Pro'],
  },
  {
    period: '2019 — 2022',
    role: 'Lead Full-Stack Engineer',
    company: 'Aetheria Cloud Systems',
    location: 'Remote',
    type: 'Full-time',
    summary: 'Led a distributed engineering team of 8 building real-time dashboard analytics and Kubernetes infrastructure monitoring tools.',
    highlights: [
      'Engineered an SSE event gateway processing over 100,000 concurrent client streams with sub-5ms P99 latency.',
      'Authored automated CI/CD deployment pipelines reducing release deployment times from 45 mins to 3.5 mins.',
      'Mentored junior and mid-level developers in React performance optimization, TypeScript patterns, and testing.',
    ],
    techUsed: ['TypeScript', 'Node.js', 'Go', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL'],
  },
  {
    period: '2016 — 2019',
    role: 'Full-Stack Developer',
    company: 'Vanguard Software Solutions',
    location: 'Belgrade, Serbia',
    type: 'Full-time',
    summary: 'Developed responsive web applications, REST API backends, and internal media asset management platforms.',
    highlights: [
      'Built a high-resolution media asset pipeline supporting automatic image transcoding and metadata indexing.',
      'Refactored legacy Monolith codebase into modular TypeScript REST API microservices.',
    ],
    techUsed: ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'MongoDB', 'AWS S3'],
  },
];
