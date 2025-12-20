
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Publications } from '@/components/Publications';
import { Awards } from '@/components/Awards';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { BlogAnnouncementBanner } from '@/components/BlogAnnouncementBanner';
import { SEO } from '@/components/SEO';
import { PersonStructuredData } from '@/components/StructuredData';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="MSP Raja - AI Scientist & Principal Architect"
        description="AI Scientist and strategic problem solver specializing in cybersecurity, NLP, and innovative AI solutions. Building what matters in the intersection of AI, cybersecurity, and mental health."
        keywords={['AI Scientist', 'Machine Learning', 'Cybersecurity', 'NLP', 'Graph Neural Networks', 'Principal Architect', 'AI Research', 'Supply Chain AI', 'Mental Health AI', 'Adversarial Defense', 'Deep Learning', 'PyTorch']}
        ogType="website"
        ogUrl="https://www.mspraja.com/"
        canonicalUrl="https://www.mspraja.com/"
      />
      <PersonStructuredData
        name="MSP Raja"
        alternateName="mspraja"
        url="https://www.mspraja.com"
        jobTitle="Chief AI Scientist and Principal Architect"
        sameAs={[
          'https://www.linkedin.com/in/mspraja',
          'https://github.com/mspraja',
          'https://twitter.com/mspraja'
        ]}
        description="AI Scientist specializing in cybersecurity, NLP, and innovative AI solutions"
      />
      <Navigation />
      <main>
        <Hero />
        <BlogAnnouncementBanner />
        <About />
        <Skills />
        <Experience />
        <Publications />
        <Awards />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
