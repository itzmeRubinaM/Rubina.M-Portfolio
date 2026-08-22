import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTWORK_DATA } from '@/data/artwork';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/sections/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useLenis } from '@/hooks/useLenis';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { AnimatedText } from '@/components/AnimatedText';

const CATEGORIES = ["All", "Illustration", "Portrait", "Abstract", "Mixed Media"];

export function GalleryPage() {
  useLenis();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArtwork = activeCategory === "All" 
    ? ARTWORK_DATA 
    : ARTWORK_DATA.filter(art => art.category === activeCategory);

  // Lightbox handlers
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredArtwork.length);
    }
  };
  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredArtwork.length) % filteredArtwork.length);
    }
  };

  // Keyboard nav for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredArtwork.length]);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <ScrollProgress />
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <AnimatedText text="Digital Art Gallery" />
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of digital illustrations, portraits, and abstract pieces exploring human emotion, depth, and color.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredArtwork.map((art, index) => (
                <motion.div
                  layout
                  key={art.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(index)}
                  className="gallery-item relative group overflow-hidden rounded-xl bg-muted/20 aspect-[4/5] cursor-pointer"
                  data-cursor="view"
                >
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn size={20} />
                    </div>
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{art.category}</p>
                    <h4 className="text-white text-xl font-display font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{art.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </main>

      <Footer />
      <ScrollToTop />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="absolute top-6 left-6 text-sm font-mono text-muted-foreground z-10">
              {lightboxIndex + 1} / {filteredArtwork.length}
            </div>

            <button 
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors z-10 hidden md:flex"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors z-10 hidden md:flex"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              className="w-full max-w-5xl h-[65vh] px-4 flex items-center justify-center mt-12"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  src={filteredArtwork[lightboxIndex].image}
                  alt={filteredArtwork[lightboxIndex].title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </AnimatePresence>
            </div>

            <div 
              className="absolute bottom-0 left-0 w-full bg-background/90 backdrop-blur-xl border-t border-border/50 p-6 overflow-y-auto max-h-[35vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container mx-auto max-w-5xl">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{filteredArtwork[lightboxIndex].title}</h3>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30 uppercase tracking-wider">
                    {filteredArtwork[lightboxIndex].category}
                  </span>
                </div>
                
                <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                  {filteredArtwork[lightboxIndex].story}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h5 className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Inspiration</h5>
                    <p className="text-xs text-foreground/80">{filteredArtwork[lightboxIndex].inspiration}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Style</h5>
                    <p className="text-xs text-foreground/80">{filteredArtwork[lightboxIndex].style}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Software</h5>
                    <p className="text-xs text-foreground/80">{filteredArtwork[lightboxIndex].software}</p>
                  </div>
                </div>

                <div className="border-l-2 border-primary/50 pl-4 py-1">
                  <p className="text-muted-foreground italic text-sm font-serif">
                    "{filteredArtwork[lightboxIndex].quote}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
