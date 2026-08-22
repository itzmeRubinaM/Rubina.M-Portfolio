import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';
import { GlassCard } from '@/components/GlassCard';
import { RESUME_DATA } from '@/data/resume';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Journey</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <AnimatedText text="Work Experience" />
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[20px] top-0 bottom-0 w-px bg-border md:hidden" />

          {RESUME_DATA.experience.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center justify-between mb-16 md:mb-24 last:mb-0 w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-8 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>

                <div className="w-[40px] md:w-[calc(50%-40px)] shrink-0" />

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-[calc(100%-60px)] md:w-[calc(50%-40px)]"
                >
                  <GlassCard className="p-6 md:p-8" hover3D={true}>
                    <div className="flex items-center gap-2 text-primary font-mono text-xs mb-3">
                      <Briefcase size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-foreground/70 font-medium mb-6">{exp.company} • {exp.location}</h4>
                    
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-3 leading-relaxed">
                          <span className="text-primary mt-1 flex-shrink-0">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
