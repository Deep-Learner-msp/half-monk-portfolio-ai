
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Vantablack Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/6836d5dd-f4fa-444a-ab1e-2d8223b8cff1.png')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"></div>
      </div>

      {/* Subtle Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-px h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-20 left-20 w-32 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
        <div className="absolute top-1/3 left-10 w-2 h-2 bg-white/30 rotate-45"></div>
        <div className="absolute bottom-1/3 right-10 w-1 h-1 bg-white/40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-full mb-4">
              AI Scientist & Principal Architect
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">MSP Raja</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto leading-relaxed">
            Solving Real Problems | AI + Cybersecurity + Blockchain + Mental Health
          </p>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            <span className="font-mono text-white border-b border-white/30">Half Monk, Half Machine</span> | Building What Matters
          </p>

          <div className="mb-12">
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">
              I'm an AI Scientist and strategic problem solver building AI-powered cybersecurity solutions 
              that directly tackle today's most pressing digital threats — from identity compromise to 
              mental burnout in security teams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg smooth-transition border-0"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-4 text-lg smooth-transition bg-transparent"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-flex items-center text-white/70 hover:text-white transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
