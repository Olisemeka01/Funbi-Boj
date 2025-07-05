
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-12">
      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-8 animate-bounce-heart">
          <span className="text-6xl md:text-8xl">👋</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 font-poppins">
          Hey Babe <span className="animate-pulse-heart text-red-500">❤️</span>
        </h1>
        
        <div className="mb-8 h-12 flex items-center justify-center">
          {showTypewriter && (
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 typewriter font-great-vibes">
              I made this just for you...
            </p>
          )}
        </div>
        
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Welcome to our little corner of the internet, where every pixel is filled with love for you 💕
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-deep-rose dark:text-romantic-pink">
            <span className="animate-pulse-heart">💖</span>
            <span className="text-sm font-medium">Scroll down to explore our story</span>
            <span className="animate-pulse-heart">💖</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
