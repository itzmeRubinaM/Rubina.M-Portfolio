import React from 'react';
import { AnimatedText } from '@/components/AnimatedText';
import { GlassCard } from '@/components/GlassCard';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Rubina brought our design vision to life with incredible attention to detail and a natural sense for what feels right.",
      author: "Mentor",
      role: "Zidio Development"
    },
    {
      quote: "Her ability to combine technical skills with artistic sensibility is rare. A true creative technologist.",
      author: "Peer",
      role: "Amity University"
    },
    {
      quote: "The UI she designed for our project was intuitive and beautiful. She asks exactly the right questions.",
      author: "Collaborator",
      role: "Google Capstone"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <AnimatedText text="What People Say" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <GlassCard key={index} delay={index * 0.1} className="p-8 relative">
              <Quote className="text-primary/20 absolute top-6 right-6" size={48} />
              <p className="text-lg leading-relaxed text-foreground/90 italic mb-8 relative z-10">"{t.quote}"</p>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
