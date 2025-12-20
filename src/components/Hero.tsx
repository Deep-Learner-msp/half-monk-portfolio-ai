
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Phone, Bot, Package, Mic, Shield, DollarSign, Brain } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Dark Background with Subtle Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-10 scale-110 md:scale-100 transition-all duration-700 hover:opacity-15"
          style={{
            backgroundImage: `url('/lovable-uploads/6836d5dd-f4fa-444a-ab1e-2d8223b8cff1.png')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/95 to-black/98"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-transparent to-black/95"></div>
      </div>

      {/* Enhanced Animated Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 md:right-20 w-px h-20 md:h-40 bg-gradient-to-b from-gray-400/30 to-transparent animate-pulse duration-2000"></div>
        <div className="absolute bottom-20 left-10 md:left-20 w-20 md:w-40 h-px bg-gradient-to-r from-gray-400/30 to-transparent animate-pulse delay-700 duration-2000"></div>
        <div className="absolute top-1/3 left-5 md:left-10 w-2 md:w-3 h-2 md:h-3 bg-gray-300/40 rotate-45 animate-pulse delay-300 duration-1500 hover:bg-gray-200/60 transition-all"></div>
        <div className="absolute bottom-1/3 right-5 md:right-10 w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-300/50 animate-pulse delay-1000 duration-1800 hover:bg-gray-200/70 transition-all"></div>
        <div className="absolute top-1/2 left-1/4 w-px h-10 md:h-20 bg-gradient-to-b from-gray-400/20 to-transparent animate-fade-in-up delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-10 md:w-20 h-px bg-gradient-to-r from-gray-400/20 to-transparent animate-fade-in delay-1200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6 md:mb-10">
            <span className="inline-block px-4 md:px-8 py-2 md:py-4 bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 text-gray-200 text-xs md:text-sm font-medium font-mono rounded-full mb-4 md:mb-6 animate-slide-in-right tracking-wider hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
              PRINCIPAL AI R&D SOLUTIONS ENGINEER
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="text-gray-100 font-serif tracking-tight animate-fade-in-up hover:text-white transition-colors duration-500">MSP Raja</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 max-w-5xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200 hover:text-gray-200 transition-colors duration-300">
            Strategic Problem Solver | Agentic AI + Supply Chain + Cybersecurity + Mental Health + FinTech
          </p>

          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 max-w-4xl mx-auto animate-fade-in-up delay-400">
            <span className="font-mono text-gray-200 border-b border-gray-600/40 pb-1 hover:border-gray-500/60 transition-all duration-300">AI Research & Solutions Architect</span> | Building What Scales, Leading What Delivers
          </p>

          <div className="mb-12 md:mb-16 animate-fade-in-up delay-600">
            <p className="text-gray-400 max-w-5xl mx-auto leading-relaxed text-base md:text-xl font-light px-2 hover:text-gray-300 transition-colors duration-300">
              7+ years of transforming complex AI challenges into production-ready solutions across
              supply chain, finance, cybersecurity, and health-tech. Specializing in agentic workflows,
              voice-enabled AI, document intelligence, and sales automation. I lead high-performing teams
              and bridge cutting-edge research with real-world execution that drives measurable impact.
            </p>
          </div>

          <div className="mb-12 md:mb-16 animate-fade-in-up delay-700">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="p-5 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/60 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group">
                  <div className="flex flex-col items-center justify-center">
                    <Bot className="w-8 h-8 text-gray-400 mb-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-300 font-medium">Agentic AI</p>
                  </div>
                </div>
                <div className="p-5 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/60 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group">
                  <div className="flex flex-col items-center justify-center">
                    <Package className="w-8 h-8 text-gray-400 mb-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-300 font-medium">Supply Chain</p>
                  </div>
                </div>
                <div className="p-5 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/60 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group">
                  <div className="flex flex-col items-center justify-center">
                    <Mic className="w-8 h-8 text-gray-400 mb-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-300 font-medium">Voice AI</p>
                  </div>
                </div>
                <div className="p-5 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/60 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group">
                  <div className="flex flex-col items-center justify-center">
                    <Shield className="w-8 h-8 text-gray-400 mb-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-300 font-medium">Cybersecurity</p>
                  </div>
                </div>
                <div className="p-5 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/60 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group">
                  <div className="flex flex-col items-center justify-center">
                    <DollarSign className="w-8 h-8 text-gray-400 mb-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-300 font-medium">FinTech</p>
                  </div>
                </div>
                <div className="p-5 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/60 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group">
                  <div className="flex flex-col items-center justify-center">
                    <Brain className="w-8 h-8 text-gray-400 mb-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-300 font-medium">Mental Health</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-16 md:mb-20 animate-fade-in-up delay-800 px-4">
            <Button 
              size="lg" 
              className="group bg-gray-100 text-black hover:bg-white hover:shadow-2xl px-6 md:px-10 py-3 md:py-5 text-base md:text-lg smooth-transition border-0 font-medium shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-gray-600/60 text-gray-200 hover:bg-gray-800/40 hover:border-gray-500/80 hover:text-white px-6 md:px-10 py-3 md:py-5 text-base md:text-lg smooth-transition bg-transparent font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => scrollToSection('about')}
            >
              Learn More
              <ArrowDown className="ml-2 md:ml-3 group-hover:translate-y-1 transition-transform duration-300" size={18} />
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-flex items-center text-gray-500 hover:text-gray-300 transition-colors duration-300 group hover:scale-110 transition-transform"
          >
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
