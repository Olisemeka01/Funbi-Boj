
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const SurpriseSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentSurprise, setCurrentSurprise] = useState(0);

  const surprises = [
    "Your gap tooth is so beautiful to see when you're cheesing and laughing.",
    "Your bumbum is like God bringing heaven down to earth for me 😼💕",
    "Every time I'm cuddled up with you, it feels like the world is softer and I'm floating in space that has your face plastered on all the planets and stars."
  ];

  const handleSurpriseClick = () => {
    if (!isRevealed) {
      setIsRevealed(true);
    } else {
      setCurrentSurprise((prev) => (prev + 1) % surprises.length);
    }
  };

  return (
    <section className="py-20 px-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 font-poppins">
            A Little Surprise 🎁
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I have something special just for you...
          </p>
        </div>

        <div className="relative">
          <Button
            onClick={handleSurpriseClick}
            className="group relative bg-gradient-to-r from-romantic-pink to-deep-rose hover:from-deep-rose hover:to-romantic-red text-white font-semibold py-6 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <Heart className="w-6 h-6 mr-3 animate-pulse-heart" />
            {isRevealed ? 'Another Surprise? 😊' : 'Click Me 😊'}
            <Heart className="w-6 h-6 ml-3 animate-pulse-heart" />
          </Button>

          {isRevealed && (
            <div className="mt-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-romantic-pink/30 dark:border-gray-700/50 animate-fade-in-up">
              <div className="flex items-center justify-center mb-6">
                <span className="text-4xl animate-bounce-heart">💖</span>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                {surprises[currentSurprise]}
              </p>
              
              <div className="flex items-center justify-center mt-6 space-x-2">
                {surprises.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentSurprise 
                        ? 'bg-deep-rose' 
                        : 'bg-romantic-pink/40'
                    }`}
                  />
                ))}
              </div>
              
              <div className="mt-8">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Click again for more surprises! ✨
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { SurpriseSection };
