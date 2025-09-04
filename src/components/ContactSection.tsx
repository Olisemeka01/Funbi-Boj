
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Phone } from 'lucide-react';

const ContactSection = () => {
  const handleSendKiss = () => {
    alert('💋 Kiss sent! Check your heart, it should be there now! 💕');
  };

  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/1234567890?text=I%20love%20you%20too!%20💕', '_blank');
  };

  const handleCall = () => {
    alert('📞 Calling the love of my life... (This would dial your number in a real app!) 💕');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-romantic-pink/20 dark:to-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 font-poppins">
            Stay Connected 💬
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Even though you're always in my heart, here are some fun ways to reach me!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Button
            onClick={handleSendKiss}
            className="group bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold py-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex flex-col items-center space-y-3">
              <Heart className="w-8 h-8 animate-pulse-heart group-hover:animate-bounce-heart" />
              <span className="text-lg">Send a Kiss 💋</span>
            </div>
          </Button>

          <Button
            onClick={handleWhatsApp}
            className="group bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex flex-col items-center space-y-3">
              <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
              <span className="text-lg">WhatsApp Love 💚</span>
            </div>
          </Button>

          <Button
            onClick={handleCall}
            className="group bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex flex-col items-center space-y-3">
              <Phone className="w-8 h-8 group-hover:animate-bounce" />
              <span className="text-lg">Call Me Maybe? 📞</span>
            </div>
          </Button>
        </div> */}

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-romantic-pink/20 dark:border-gray-700/50">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl animate-pulse-heart">💌</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-great-vibes">
            Love Messages
          </h3>
          
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tl-sm">
              <p className="text-sm">Good morning beautiful! ☀️</p>
              <span className="text-xs opacity-75">9:47 AM</span>
            </div>
            
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-2xl rounded-tr-sm ml-8">
              <p className="text-sm">Good morning my love! 💕</p>
              <span className="text-xs opacity-75">9:48 AM</span>
            </div>
            
            <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tl-sm">
              <p className="text-sm">I love you more every day ❤️</p>
              <span className="text-xs opacity-75">9:49 AM</span>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center space-x-2">
            <span className="animate-pulse-heart">💕</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Always and forever</span>
            <span className="animate-pulse-heart">💕</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
