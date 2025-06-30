
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Phone } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Professional Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20 scale-110 md:scale-100"
          style={{
            backgroundImage: `url('/public/lovable-uploads/6836d5dd-f4fa-444a-ab1e-2d8223b8cff1.png')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90"></div>
      </div>

      {/* Enhanced Geometric Elements with Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 md:right-20 w-px h-20 md:h-40 bg-gradient-to-b from-white/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-20 left-10 md:left-20 w-20 md:w-40 h-px bg-gradient-to-r from-white/30 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-5 md:left-10 w-2 md:w-3 h-2 md:h-3 bg-white/40 rotate-45 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-5 md:right-10 w-1.5 md:w-2 h-1.5 md:h-2 bg-white/50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-px h-10 md:h-20 bg-gradient-to-b from-white/20 to-transparent animate-fade-in-up delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-10 md:w-20 h-px bg-gradient-to-r from-white/20 to-transparent animate-fade-in delay-1200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6 md:mb-10">
            <span className="inline-block px-4 md:px-8 py-2 md:py-4 bg-white/8 backdrop-blur-xl border border-white/20 text-white text-xs md:text-sm font-medium font-mono rounded-full mb-4 md:mb-6 animate-slide-in-right tracking-wider">
              CHIEF AI ARCHITECT & RESEARCH LEAD
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="text-white font-serif tracking-tight animate-fade-in-up">MSP Raja</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-4 md:mb-6 max-w-5xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200">
            Strategic Problem Solver | AI + Cybersecurity + Mental Health
          </p>
          
          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-4xl mx-auto animate-fade-in-up delay-400">
            <span className="font-mono text-white border-b border-white/40 pb-1">Chief AI Scientist</span> | Building What Scales, Leading What Delivers
          </p>

          <div className="mb-12 md:mb-16 animate-fade-in-up delay-600">
            <p className="text-gray-300 max-w-5xl mx-auto leading-relaxed text-base md:text-xl font-light px-2">
              7+ years of turning complex AI problems into scalable, production-ready solutions across 
              finance, cybersecurity, and health-tech. I lead high-performing teams and bridge deep research 
              with real-world execution that drives measurable impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-16 md:mb-20 animate-fade-in-up delay-800 px-4">
            <Button 
              size="lg" 
              className="group bg-white text-black hover:bg-gray-100 px-6 md:px-10 py-3 md:py-5 text-base md:text-lg smooth-transition border-0 font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-white/60 text-white hover:bg-white/15 hover:border-white px-6 md:px-10 py-3 md:py-5 text-base md:text-lg smooth-transition bg-transparent font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => scrollToSection('about')}
            >
              Learn More
              <ArrowDown className="ml-2 md:ml-3 group-hover:translate-y-1 transition-transform duration-300" size={18} />
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-flex items-center text-white/70 hover:text-white transition-colors duration-300 group"
          >
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
