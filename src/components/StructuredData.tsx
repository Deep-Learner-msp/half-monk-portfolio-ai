import { useEffect } from 'react';

export interface ArticleStructuredDataProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
  url: string;
  keywords?: string[];
}

export interface PersonStructuredDataProps {
  name: string;
  alternateName?: string;
  url: string;
  jobTitle: string;
  sameAs?: string[];
  description?: string;
}

export interface WebPageStructuredDataProps {
  name: string;
  description: string;
  url: string;
}

export const ArticleStructuredData: React.FC<ArticleStructuredDataProps> = (props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-structured-data';

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.headline,
      description: props.description,
      image: props.image,
      datePublished: props.datePublished,
      dateModified: props.dateModified || props.datePublished,
      author: {
        '@type': 'Person',
        name: props.author.name,
        url: props.author.url || 'https://www.mspraja.com',
      },
      publisher: {
        '@type': 'Organization',
        name: props.publisher.name,
        logo: {
          '@type': 'ImageObject',
          url: props.publisher.logo,
        },
      },
      url: props.url,
      keywords: props.keywords?.join(', '),
    };

    script.textContent = JSON.stringify(structuredData);

    // Remove existing script if present
    const existingScript = document.getElementById('article-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('article-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [props]);

  return null;
};

export const PersonStructuredData: React.FC<PersonStructuredDataProps> = (props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'person-structured-data';

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: props.name,
      alternateName: props.alternateName,
      url: props.url,
      jobTitle: props.jobTitle,
      sameAs: props.sameAs,
      description: props.description,
    };

    script.textContent = JSON.stringify(structuredData);

    // Remove existing script if present
    const existingScript = document.getElementById('person-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('person-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [props]);

  return null;
};

export const BreadcrumbStructuredData: React.FC<{
  items: Array<{ name: string; url: string }>;
}> = ({ items }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-structured-data';

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };

    script.textContent = JSON.stringify(structuredData);

    // Remove existing script if present
    const existingScript = document.getElementById('breadcrumb-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [items]);

  return null;
};
