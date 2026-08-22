import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';
import { GlassCard } from '@/components/GlassCard';
import { RESUME_DATA } from '@/data/resume';

export function Skills() {
  const { technical, soft } = RESUME_DATA.skills;
  
  const softwareAndTools = [
    "Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", 
    "Canva", "Framer", "VS Code", "Git & GitHub", "Firebase", 
    "Microsoft Office", "Google Workspace"
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <AnimatedText text="Skills & Disciplines" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Technical */}
          <GlassCard className="p-8 md:p-10" delay={0}>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary text-sm">01</span>
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technical.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 glass rounded-full text-sm hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </GlassCard>

          {/* Card 2: Software & Tools */}
          <GlassCard className="p-8 md:p-10" delay={0.1}>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm">02</span>
              Software & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {softwareAndTools.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 glass rounded-full text-sm hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-500/30 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </GlassCard>

          {/* Card 3: Soft Skills */}
          <GlassCard className="p-8 md:p-10" delay={0.2}>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-sm">03</span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {soft.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 glass rounded-full text-sm hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </GlassCard>
          
        </div>
      </div>
    </section>
  );
}
