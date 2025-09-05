
const LoveNoteSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-romantic-pink/10 via-soft-rose/20 to-deep-rose/10 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 font-poppins">
            A Little Love Note ✍️
          </h2>
          <div className="flex items-center justify-center mb-8">
            <span className="animate-pulse-heart text-4xl text-red-500">💌</span>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-romantic-pink/20 dark:border-gray-700/50">
          <div className="mb-8">
            <span className="text-6xl opacity-20 font-great-vibes">"</span>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="font-great-vibes text-2xl md:text-3xl text-deep-rose dark:text-romantic-pink">
              My Dearest Funbiii,
            </p>
            
            <p className="text-gray-700 dark:text-gray-200">
              Every moment with you feels like magic. From the way you laugh at my silly jokes 
              to how you make even the ordinary days feel extraordinary – you've turned my world 
              into the most beautiful love story.
            </p>
            
            <p className="text-gray-700 dark:text-gray-200">
              This little page is a tiny gift to say how much I adore you. Thank you for being 
              my best friend, my partner in adventure, and the love of my life. 
            </p>
            
            <p className="font-great-vibes text-xl md:text-2xl text-deep-rose dark:text-romantic-pink">
              Forever yours,
            </p>
            
            <div className="flex items-center justify-center mt-8">
              <span className="animate-bounce-heart text-3xl">Boj💕</span>
            </div>
          </div>
          
          <div className="mt-8">
            <span className="text-6xl opacity-20 font-great-vibes transform rotate-180 inline-block">"</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LoveNoteSection };
