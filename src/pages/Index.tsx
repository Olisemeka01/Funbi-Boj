
import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { GallerySection } from '@/components/GallerySection';
import { LoveNoteSection } from '@/components/LoveNoteSection';
import { SurpriseSection } from '@/components/SurpriseSection';
import { ContactSection } from '@/components/ContactSection';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FloatingHearts } from '@/components/FloatingHearts';

const Index = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-pink/20 via-soft-rose/30 to-deep-rose/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <FloatingHearts />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      
      <div className="relative z-10">
        <HeroSection />
        <GallerySection />
        <LoveNoteSection />
        <SurpriseSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
