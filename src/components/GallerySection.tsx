import { useState, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../assets/boj-imgs/1.jpeg";
import img2 from "../assets/boj-imgs/2.jpeg";
import img3 from "../assets/boj-imgs/3.jpeg";
import img4 from "../assets/boj-imgs/4.jpeg";
import img5 from "../assets/boj-imgs/5.jpeg";
import img6 from "../assets/boj-imgs/6.jpeg";
import img7 from "../assets/boj-imgs/7.jpeg";
import img8 from "../assets/boj-imgs/8.jpeg";
import img9 from "../assets/boj-imgs/9.jpeg";
import img10 from "../assets/boj-imgs/10.jpeg";
import img11 from "../assets/boj-imgs/11.jpeg";
import img12 from "../assets/boj-imgs/12.jpeg";
import img13 from "../assets/boj-imgs/13.jpeg";
import img14 from "../assets/boj-imgs/14.jpeg";
import vid15 from "../assets/boj-imgs/15.mp4";
import vid16 from "../assets/boj-imgs/16.mp4";
import vid17 from "../assets/boj-imgs/17.mp4";
import vid18 from "../assets/boj-imgs/18.mp4";
import vid19 from "../assets/boj-imgs/19.mp4";
import vid20 from "../assets/boj-imgs/20.mp4";
import vid21 from "../assets/boj-imgs/21.mp4";

const GallerySection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const videoRefs = useRef({});

  const mediaItems = [
    { type: "image", src: img3, alt: "Photo 3", caption: "Beautiful smilee 🌸" },
    { type: "image", src: img1, alt: "Photo 1", caption: " 💕" },
    { type: "video", src: vid16, alt: "Video 16", caption: " 🎉" },
    { type: "image", src: img2, alt: "Photo 2", caption: "✨" },
    { type: "image", src: img4, alt: "Photo 4", caption: "Our day 🥰" },
    { type: "video", src: vid15, alt: "Video 15", caption: "🎬💕" },
    { type: "image", src: img5, alt: "Photo 5", caption: "💑" },
    { type: "image", src: img6, alt: "Photo 6", caption: "" },
    { type: "video", src: vid17, alt: "Video 17", caption: " 💞" },
    { type: "image", src: img7, alt: "Photo 7", caption: " 💕" },
    { type: "image", src: img8, alt: "Photo 8", caption: " 🌟" },
    { type: "video", src: vid18, alt: "Video 18", caption: "🌍" },
    { type: "image", src: img9, alt: "Photo 9", caption: " 🌹" },
    { type: "image", src: img10, alt: "Photo 10", caption: " 💞" },
    { type: "video", src: vid19, alt: "Video 19", caption: " 😍" },
    { type: "image", src: img11, alt: "Photo 11", caption: "" },
    { type: "image", src: img12, alt: "Photo 12", caption: "" },
    { type: "video", src: vid20, alt: "Video 20", caption: " 😂" },
    { type: "image", src: img13, alt: "Photo 13", caption: "" },
    { type: "image", src: img14, alt: "Photo 14", caption: "🫶" },
    { type: "video", src: vid21, alt: "Video 21", caption: " 🎶" },
  ];

const handleVideoClick = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.play().catch((error) => console.log("Playback error:", error));
    }
  };

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
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.src}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  controls
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onClick={() => handleVideoClick(index)}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 pointer-events-none ${
                  hoveredImage === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
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
                  <div
                    className="relative group overflow-hidden rounded-2xl shadow-lg"
                    onClick={(e) => {
                      if (item.type === "video") {
                        e.stopPropagation();
                        handleVideoClick(index);
                      }
                    }}
                  >
                    {item.type === "video" ? (
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={item.src}
                        className="w-full h-80 object-cover cursor-pointer"
                        controls
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-80 object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none">
                      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
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