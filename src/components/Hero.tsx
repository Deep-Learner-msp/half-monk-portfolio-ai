
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full mb-4">
              AI Scientist & Principal Architect
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">MSP Raja</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
            Solving Real Problems | AI + Cybersecurity + Blockchain + Mental Health
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
            <span className="font-mono text-blue-600">Half Monk, Half Machine</span> | Building What Matters
          </p>

          <div className="mb-12">
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
              I'm an AI Scientist and strategic problem solver building AI-powered cybersecurity solutions 
              that directly tackle today's most pressing digital threats — from identity compromise to 
              mental burnout in security teams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg smooth-transition"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg smooth-transition"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
