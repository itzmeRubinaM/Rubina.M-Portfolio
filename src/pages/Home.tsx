import React, { useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { MarqueeStrip } from '@/components/MarqueeStrip';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { GallerySection } from '@/sections/GallerySection';
import { Skills } from '@/sections/Skills';
import { ToolsSection } from '@/sections/ToolsSection';
import { Experience } from '@/sections/Experience';
import { Services } from '@/sections/Services';
import { DesignProcess } from '@/sections/DesignProcess';
import { Achievements } from '@/sections/Achievements';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';

const brandingItems = [
  "✦ Designing Experiences",
  "✦ Building Digital Products",
  "✦ UI/UX Designer",
  "✦ Full-Stack Developer",
  "✦ Digital Artist",
  "✦ Creative Thinker",
  "✦ AI Builder",
];

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useLenis();

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <MarqueeStrip items={brandingItems} />
          <About />
          <Projects />
          <GallerySection />
          <Skills />
          <ToolsSection />
          <Experience />
          <Services />
          <DesignProcess />
          <Achievements />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
