import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { AnimatedText } from '@/components/AnimatedText';
import { MagneticButton } from '@/components/MagneticButton';
import { ARTWORK_DATA } from '@/data/artwork';

export function GallerySection() {
  // Take first 4 items for preview
  const previewArtworks = ARTWORK_DATA.slice(0, 4);

  return (
    <section id="gallery-preview" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Digital Art</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <AnimatedText text="Exploring emotions through digital illustration." />
            </h2>
          </div>
          <Link href="/gallery" className="shrink-0">
            <MagneticButton className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors whitespace-nowrap">
              View Full Gallery
            </MagneticButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {previewArtworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative group overflow-hidden rounded-xl bg-muted/20 aspect-[3/4] ${index % 2 === 1 ? 'md:translate-y-8' : ''}`}
            >
              <img 
                src={art.image} 
                alt={art.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{art.category}</p>
                <h4 className="text-white text-lg font-display font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{art.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
