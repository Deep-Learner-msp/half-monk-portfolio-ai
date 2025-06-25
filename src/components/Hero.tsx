
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
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/2669c4ec-f365-4477-9fd2-9352299d69fc.png')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/95"></div>
      </div>

      {/* Enhanced Geometric Elements with Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-px h-40 bg-gradient-to-b from-white/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-px bg-gradient-to-r from-white/30 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-white/40 rotate-45 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-white/50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-20 bg-gradient-to-b from-white/20 to-transparent animate-fade-in-up delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-1 bg-gradient-to-r from-white/20 to-transparent animate-fade-in delay-1200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-10">
            <span className="inline-block px-8 py-4 bg-white/8 backdrop-blur-xl border border-white/20 text-white text-sm font-medium font-mono rounded-full mb-6 animate-slide-in-right tracking-wider">
              CHIEF AI ARCHITECT & RESEARCH LEAD
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white font-serif tracking-tight animate-fade-in-up">MSP Raja</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-gray-200 mb-6 max-w-5xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200">
            Strategic Problem Solver | AI + Cybersecurity + Mental Health
          </p>
          
          <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto animate-fade-in-up delay-400">
            <span className="font-mono text-white border-b border-white/40 pb-1">Chief AI Scientist</span> | Building What Scales, Leading What Delivers
          </p>

          <div className="mb-16 animate-fade-in-up delay-600">
            <p className="text-gray-300 max-w-5xl mx-auto leading-relaxed text-xl font-light">
              7+ years of turning complex AI problems into scalable, production-ready solutions across 
              finance, cybersecurity, and health-tech. I lead high-performing teams and bridge deep research 
              with real-world execution that drives measurable impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up delay-800">
            <Button 
              size="lg" 
              className="group bg-white text-black hover:bg-gray-100 px-10 py-5 text-lg smooth-transition border-0 font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={22} />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-white/60 text-white hover:bg-white/15 hover:border-white px-10 py-5 text-lg smooth-transition bg-transparent font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('about')}
            >
              Learn More
              <ArrowDown className="ml-3 group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-flex items-center text-white/70 hover:text-white transition-colors duration-300 group"
          >
            <ArrowDown size={28} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
