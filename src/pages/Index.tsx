
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Publications } from '@/components/Publications';
import { Awards } from '@/components/Awards';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { BlogAnnouncementBanner } from '@/components/BlogAnnouncementBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
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
