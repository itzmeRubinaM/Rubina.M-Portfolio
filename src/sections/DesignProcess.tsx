import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';

export function DesignProcess() {
  const steps = [
    { num: "01", title: "Research & Discovery", desc: "Understanding users, problems, and business goals." },
    { num: "02", title: "Define & Ideate", desc: "Creating personas, journey maps, and a clear design brief." },
    { num: "03", title: "Wireframe & Prototype", desc: "Low-fi sketches to hi-fi interactive prototypes." },
    { num: "04", title: "Design & Refine", desc: "Visual design, establishing systems, and iterative refinement." },
    { num: "05", title: "Deliver & Iterate", desc: "Developer handoff, support, and gathering user feedback." },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-muted/10 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <AnimatedText text="How I Work" />
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-px bg-border z-0" />
          
          {/* Vertical Line for Mobile */}
          <div className="md:hidden absolute left-[28px] top-[5%] bottom-[5%] w-px bg-border z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative z-10 flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-0 mb-10 md:mb-0 md:w-1/5"
            >
              <div className="w-14 h-14 rounded-full glass border-2 border-background flex items-center justify-center text-primary font-mono font-bold shrink-0 md:mb-6 shadow-lg shadow-background">
                {step.num}
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
