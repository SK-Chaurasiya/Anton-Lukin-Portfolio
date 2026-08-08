export interface PhotoItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Blok 45' | 'Aerial Landscapes' | 'Brutalist Architecture' | 'Cinematic Stills' | 'Video Reels';
  location: string;
  coordinates: string;
  year: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
  exif: {
    camera: string;
    droneModel?: string;
    lens: string;
    aperture: string;
    shutter: string;
    iso: string;
    altitude?: string;
  };
  tags: string[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'WebGL / 3D' | 'Systems & Tools' | 'Open Source';
  description: string;
  longDescription: string;
  keyFeatures: string[];
  architecture: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featuredUrl?: string;
  imageUrl: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    iconName: string;
    description: string;
  }[];
}

export interface CareerMilestone {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  techUsed: string[];
}
