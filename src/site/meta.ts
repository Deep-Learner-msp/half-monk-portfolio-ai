import { useEffect } from 'react';
import { SITE_URL } from '@/content/profile';

interface PageMeta {
  title: string;
  description: string;
  /** Path starting with "/" */
  path: string;
  type?: 'website' | 'profile' | 'article';
  publishedTime?: string;
  themeColor?: string;
  /** JSON-LD object for this page */
  jsonLd?: object;
}

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
};

/** Keeps title, description, Open Graph, canonical and page JSON-LD in sync with the route. */
export function usePageMeta({ title, description, path, type = 'website', publishedTime, themeColor, jsonLd }: PageMeta) {
  const ld = jsonLd ? JSON.stringify(jsonLd) : '';
  useEffect(() => {
    const url = SITE_URL + path;
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', type);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (publishedTime) setMeta('property', 'article:published_time', publishedTime);
    if (themeColor) setMeta('name', 'theme-color', themeColor);
    setCanonical(url);

    let script: HTMLScriptElement | null = null;
    if (ld) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.page = 'true';
      script.textContent = ld;
      document.head.appendChild(script);
    }
    return () => {
      script?.remove();
    };
  }, [title, description, path, type, publishedTime, themeColor, ld]);
}
