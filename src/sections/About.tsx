import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/data/resume';
import { SkillCatcher } from '@/components/SkillCatcher';
import { AnimatedText } from '@/components/AnimatedText';

export function About() {
  const [activeTab, setActiveTab] = React.useState<'education' | 'experience'>('education');

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              <AnimatedText text="Creative at the intersection of design & code." />
            </h2>
            
            <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
              I'm Rubina Mollah - a UI/UX designer and full-stack developer with a creative edge in digital art.
            </p>
            
            <p className="text-foreground/80 text-lg mb-10 leading-relaxed">
              I blend design, technnology, and creativity to build intuitive digital expriences and meaningful products.
            </p>

            <blockquote className="border-l-2 border-primary pl-6 text-xl font-serif italic text-muted-foreground mb-12">
              "Good design isn't just how it looks - it's how it feels when you use it."
            </blockquote>

            {/* Timeline Tabs */}
            <div className="space-y-6">
              <div className="flex space-x-4 border-b border-border pb-2">
                <button 
                  onClick={() => setActiveTab('education')}
                  className={`text-lg font-medium pb-2 relative transition-colors ${activeTab === 'education' ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  Education
                  {activeTab === 'education' && (
                    <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary" />
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab('experience')}
                  className={`text-lg font-medium pb-2 relative transition-colors ${activeTab === 'experience' ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  Experience
                  {activeTab === 'experience' && (
                    <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary" />
                  )}
                </button>
              </div>

              <div className="space-y-6">
                {activeTab === 'education' && RESUME_DATA.education.map((item, index) => (
                  <motion.div 
                    key={`edu-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="pl-4 border-l border-border relative"
                  >
                    <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2" />
                    <h4 className="text-lg font-bold">{item.degree}</h4>
                    <p className="text-primary text-sm mb-1">{item.institution} • {item.period}</p>
                    {item.specialization && <p className="text-sm text-muted-foreground">| {item.specialization}</p>}
                  </motion.div>
                ))}

                {activeTab === 'experience' && RESUME_DATA.experience.slice(0, 2).map((item, index) => (
                  <motion.div 
                    key={`exp-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="pl-4 border-l border-border relative"
                  >
                    <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2" />
                    <h4 className="text-lg font-bold">{item.role}</h4>
                    <p className="text-primary text-sm mb-1">{item.company} • {item.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Game */}
          <div className="aspect-square">
            <SkillCatcher />
          </div>

        </div>
      </div>
    </section>
  );
}