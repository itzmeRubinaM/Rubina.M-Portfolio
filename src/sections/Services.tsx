import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';
import { GlassCard } from '@/components/GlassCard';
import { PenTool, Code2, Brush, Sparkles, Layers, MessageSquare } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Wireframing, prototyping, user research, usability testing, and comprehensive design systems.",
      icon: <PenTool className="text-primary" size={24} />
    },
    {
      title: "Frontend Development",
      description: "Building responsive, performant web applications using React, TypeScript, and Tailwind CSS.",
      icon: <Code2 className="text-accent" size={24} />
    },
    {
      title: "Digital Illustration",
      description: "Custom character art, portrait illustration, and mixed media digital artwork.",
      icon: <Brush className="text-indigo-400" size={24} />
    },
    {
      title: "Brand Design",
      description: "Visual identity, logo design, and brand strategy (e.g., DRISHTI).",
      icon: <Layers className="text-primary" size={24} />
    },
    {
      title: "AI Integration",
      description: "Designing AI-powered interfaces and crafting prompt engineering workflows.",
      icon: <Sparkles className="text-accent" size={24} />
    },
    {
      title: "Consultation",
      description: "Design audits, UX reviews, and actionable feedback sessions to improve existing products.",
      icon: <MessageSquare className="text-indigo-400" size={24} />
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <AnimatedText text="What I Offer" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard key={index} glowOnHover={true} delay={index * 0.1} className="p-8">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
