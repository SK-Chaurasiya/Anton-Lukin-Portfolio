import React, { useEffect } from 'react';
import { ANTON_INFO } from '../data/portfolioData';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'profile' | 'article';
  author?: string;
  section?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = `${ANTON_INFO.name} — ${ANTON_INFO.role}`,
  description = ANTON_INFO.bio,
  keywords = [
    'Anton Lukin',
    'Software Engineer',
    'Drone Cinematographer',
    'WebGL Engineer',
    'Three.js Developer',
    'Full-Stack Developer',
    'Aerial Photography',
    'Brutalist Architecture',
    'Blok 45 Belgrade',
    'High-Concurrency Systems',
    'React TypeScript Specialist'
  ],
  image = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&h=630&q=85',
  url = typeof window !== 'undefined' ? window.location.href : 'https://antonlukin.me',
  type = 'website',
  author = ANTON_INFO.name,
  section,
}) => {
  const fullTitle = section
    ? `${section.charAt(0).toUpperCase() + section.slice(1)} | ${title}`
    : title;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper for link tags (e.g., canonical)
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
    setMetaTag('meta[name="author"]', 'name', 'author', author);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');
    setMetaTag('meta[name="viewport"]', 'name', 'viewport', 'width=device-width, initial-scale=1.0');

    // 3. Canonical Link
    setLinkTag('canonical', url);

    // 4. Open Graph Meta Tags (Facebook, LinkedIn, Discord)
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
    setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${ANTON_INFO.name} Portfolio Showcase`);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', url);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', `${ANTON_INFO.name} Portfolio`);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // 5. Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:site"]', 'name', 'twitter:site', '@antonlukin');
    setMetaTag('meta[name="twitter:creator"]', 'name', 'twitter:creator', '@antonlukin');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    // 6. JSON-LD Structured Data for Search Engine Rich Snippets
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': ANTON_INFO.name,
      'jobTitle': ANTON_INFO.role,
      'description': ANTON_INFO.bio,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Belgrade',
        'addressCountry': 'Serbia',
      },
      'email': `mailto:${ANTON_INFO.email}`,
      'url': url,
      'sameAs': [
        ANTON_INFO.github,
        ANTON_INFO.linkedin,
        ANTON_INFO.instagram,
        ANTON_INFO.unsplash,
        ANTON_INFO.x,
      ],
      'knowsAbout': [
        'Software Engineering',
        'High-Concurrency Architecture',
        'WebGL & 3D Spatial Systems',
        'Drone Cinematography',
        'Brutalist Architectural Photography',
        'TypeScript & React',
        'Node.js & Go'
      ]
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);

  }, [fullTitle, description, keywords, image, url, type, author, section]);

  return null; // Head-only manager component
};
