import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BlogAnnouncementBanner = () => {
  return (
    <div className="relative border-y border-white/5 bg-gradient-to-r from-blue-900/5 via-blue-800/5 to-blue-900/5 backdrop-blur-sm">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Content */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                Technical Case Studies
              </h3>
              <p className="text-sm text-gray-400 max-w-2xl">
                In-depth explorations of AI systems, graph neural networks, voice AI, and adversarial defense implementations
              </p>
            </div>
          </div>

          {/* Right side - CTA */}
          <Link to="/blog" className="flex-shrink-0">
            <Button
              variant="outline"
              className="border-blue-500/30 bg-blue-500/5 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-white transition-all duration-300 group"
            >
              View Case Studies
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Subtle bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>
  );
};
