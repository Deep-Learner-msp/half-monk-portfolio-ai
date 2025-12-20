import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
    tags?: string[];
  };
}

const DEFAULT_SEO: SEOProps = {
  title: 'MSP Raja - AI Scientist & Principal Architect',
  description: 'AI Scientist and strategic problem solver specializing in cybersecurity, NLP, and innovative AI solutions. Building what matters in the intersection of AI, cybersecurity, and mental health.',
  keywords: ['AI Scientist', 'Machine Learning', 'Cybersecurity', 'NLP', 'Graph Neural Networks', 'Principal Architect', 'AI Research', 'Supply Chain AI', 'Mental Health AI'],
  author: 'MSP Raja',
  ogType: 'website',
  ogUrl: 'https://www.mspraja.com',
  twitterCard: 'summary_large_image',
};

export const SEO: React.FC<SEOProps> = (props) => {
  const seo = { ...DEFAULT_SEO, ...props };

  useEffect(() => {
    // Update document title
    if (seo.title) {
      document.title = seo.title;
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Standard meta tags
    if (seo.description) {
      updateMetaTag('description', seo.description);
    }

    if (seo.keywords && seo.keywords.length > 0) {
      updateMetaTag('keywords', seo.keywords.join(', '));
    }

    if (seo.author) {
      updateMetaTag('author', seo.author);
    }

    // Open Graph tags
    if (seo.title) {
      updateMetaTag('og:title', seo.title, true);
    }

    if (seo.description) {
      updateMetaTag('og:description', seo.description, true);
    }

    if (seo.ogType) {
      updateMetaTag('og:type', seo.ogType, true);
    }

    if (seo.ogUrl) {
      updateMetaTag('og:url', seo.ogUrl, true);
    }

    if (seo.ogImage) {
      updateMetaTag('og:image', seo.ogImage, true);
    }

    updateMetaTag('og:site_name', 'MSP Raja Portfolio', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', seo.twitterCard || 'summary_large_image');

    if (seo.title) {
      updateMetaTag('twitter:title', seo.title);
    }

    if (seo.description) {
      updateMetaTag('twitter:description', seo.description);
    }

    if (seo.ogImage) {
      updateMetaTag('twitter:image', seo.ogImage);
    }

    updateMetaTag('twitter:creator', '@mspraja');

    // Article-specific tags
    if (seo.article) {
      updateMetaTag('article:published_time', seo.article.publishedTime, true);

      if (seo.article.modifiedTime) {
        updateMetaTag('article:modified_time', seo.article.modifiedTime, true);
      }

      updateMetaTag('article:author', seo.article.author, true);
      updateMetaTag('article:section', seo.article.section, true);

      if (seo.article.tags && seo.article.tags.length > 0) {
        // Remove existing article tags first
        document.querySelectorAll('meta[property^="article:tag"]').forEach(el => el.remove());

        // Add new tags
        seo.article.tags.forEach(tag => {
          const element = document.createElement('meta');
          element.setAttribute('property', 'article:tag');
          element.setAttribute('content', tag);
          document.head.appendChild(element);
        });
      }
    }

    // Canonical URL
    if (seo.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }

      canonical.setAttribute('href', seo.canonicalUrl);
    }
  }, [seo]);

  return null;
};
