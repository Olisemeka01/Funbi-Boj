
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GallerySection = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Placeholder media - replace with actual photos and videos
  const mediaItems = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      alt: "Our beautiful moment together",
      caption: "Remember this perfect day? 💕"
    },
    {
      type: "video",
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_360x240_1mb.mp4",
      alt: "Our special moments in motion",
      caption: "Our love story in motion 🎬💕"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
      alt: "Starry night like our love",
      caption: "Under the stars with you ✨"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      alt: "Beautiful flowers",
      caption: "You're more beautiful than any flower 🌸"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      alt: "Cozy moments",
      caption: "Cozy times are the best times 🥰"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-poppins animate-fade-in-up">
            Our Moments 📸
          </h2>
          <div className="flex items-center justify-center mb-6">
            <span className="animate-bounce-heart text-3xl text-red-500">💝</span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            Every picture tells a story, and our story is my favorite one to tell
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  controls
                  muted
                  loop
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
                hoveredImage === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-2xl animate-pulse-heart">❤️</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden animate-fade-in-up">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {mediaItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        className="w-full h-80 object-cover"
                        controls
                        muted
                        loop
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-80 object-cover"
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium">{item.caption}</p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="text-2xl animate-pulse-heart">❤️</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { GallerySection };
