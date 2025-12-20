/**
 * AnimationPlayer Component
 *
 * Embeds Manim-generated animations in blog posts with fallback support
 * Supports video playback with controls and loading states
 */

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Maximize2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface AnimationPlayerProps {
  src: string;
  title: string;
  description?: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  poster?: string; // Optional poster image before video loads
}

export const AnimationPlayer = ({
  src,
  title,
  description,
  autoplay = false,
  loop = true,
  className = '',
  poster
}: AnimationPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoplay) {
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [autoplay]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <Card className="border border-red-500/20 bg-red-500/5 p-8">
        <div className="text-center">
          <p className="text-red-400 mb-2">⚠ Animation could not be loaded</p>
          <p className="text-gray-400 text-sm">
            The animation video is not available. Please ensure the video is rendered and placed in the public directory.
          </p>
          <p className="text-gray-500 text-xs mt-4">
            Expected path: <code className="bg-gray-800 px-2 py-1 rounded">{src}</code>
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Title and Description */}
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
          )}
          {description && (
            <p className="text-gray-400 text-sm">{description}</p>
          )}
        </div>
      )}

      {/* Video Container */}
      <div className="relative rounded-xl overflow-hidden bg-black border border-gray-700/50 shadow-2xl">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-400 text-sm">Loading animation...</p>
            </div>
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-auto"
          loop={loop}
          playsInline
          preload="metadata"
          poster={poster}
          onLoadedData={handleLoadedData}
          onError={handleError}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center gap-4">
            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Restart Button */}
            <button
              onClick={handleRestart}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Restart"
            >
              <RotateCcw className="w-5 h-5 text-white" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={handleFullscreen}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-gray-500 text-xs mt-3 italic">
        Interactive animation - hover to show controls
      </p>
    </div>
  );
};

/**
 * Usage Example:
 *
 * <AnimationPlayer
 *   src="/animations/GNNIAMArchitecture.mp4"
 *   title="Graph Neural Network Architecture"
 *   description="Visualization of heterogeneous graph construction, GAT attention mechanism, and temporal evolution for IAM threat detection"
 *   autoplay={false}
 *   loop={true}
 * />
 */
