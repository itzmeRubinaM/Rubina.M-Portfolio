import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { AnimatedText } from '@/components/AnimatedText';
import { PROJECTS_DATA } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const [launchforge, secondBrain, drishti, morphix, skilldna, novaai] = PROJECTS_DATA;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <AnimatedText text="Selected Work" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Project 1: LaunchForge AI (Full Width) */}
          <GlassCard 
            hover3D={true} glowOnHover={true} 
            className="md:col-span-2 overflow-hidden group cursor-pointer hover:border-primary/30 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-500"
          >
            <Link href={`/projects/${launchforge.slug}`} className="block">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12 order-2 md:order-1 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                      {launchforge.year}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {launchforge.title}
                  </h3>
                  <p className="text-foreground/80 mb-6 line-clamp-2">
                    {launchforge.overview}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {launchforge.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary group-hover:translate-x-2 transition-transform px-4 py-2 group-hover:bg-primary/10 rounded-full group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                    View Case Study <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="order-1 md:order-2 h-64 md:h-full relative overflow-hidden bg-muted/30 p-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden z-10" />
                  <motion.img 
                    src={launchforge.image || undefined} 
                    alt={launchforge.title}
                    className="w-[120%] max-w-none rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-700 -rotate-2 group-hover:rotate-0"
                  />
                </div>
              </div>
            </Link>
          </GlassCard>

          {/* Project 2: Second Brain AI */}
          <GlassCard 
            hover3D={true} glowOnHover={true} 
            className="overflow-hidden group cursor-pointer flex flex-col hover:border-primary/30 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-500"
          >
            <Link href={`/projects/${secondBrain.slug}`} className="block flex-1 flex flex-col">
              <div className="h-64 relative overflow-hidden bg-muted/30 p-6 flex items-end justify-center">
                <motion.img 
                  src={secondBrain.image || undefined} 
                  alt={secondBrain.title}
                  className="w-full rounded-t-xl shadow-2xl group-hover:scale-105 transition-transform duration-700 translate-y-8 group-hover:translate-y-4"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {secondBrain.title}
                </h3>
                <p className="text-foreground/80 mb-6 text-sm line-clamp-2 flex-1">
                  {secondBrain.overview}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {secondBrain.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary group-hover:translate-x-2 transition-transform mt-auto px-4 py-2 group-hover:bg-primary/10 rounded-full w-max group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                  View Case Study <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          </GlassCard>

          {/* Project 3: DRISHTI */}
          <GlassCard 
            hover3D={true} glowOnHover={true} 
            className="overflow-hidden group cursor-pointer flex flex-col hover:border-primary/30 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-500"
          >
            <Link href={`/projects/${drishti.slug}`} className="block flex-1 flex flex-col">
              <div className="h-64 relative overflow-hidden bg-muted/30 flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-500 p-8">
                <motion.img 
                  src={drishti.image || undefined} 
                  alt={drishti.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                    AI/ML App
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {drishti.title}
                </h3>
                <p className="text-foreground/80 mb-6 text-sm line-clamp-2 flex-1">
                  {drishti.overview}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {drishti.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary group-hover:translate-x-2 transition-transform mt-auto px-4 py-2 group-hover:bg-primary/10 rounded-full w-max group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                  View Case Study <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          </GlassCard>

        </div>

        {/* More Projects Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Morphix */}
            <GlassCard className="overflow-hidden group cursor-pointer flex flex-col hover:border-primary/30 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-500">
              <Link href={`/projects/${morphix.slug}`} className="block flex-1 flex flex-col">
                <div className="h-48 relative overflow-hidden bg-muted/30">
                  <motion.img 
                    src={morphix.image || undefined} 
                    alt={morphix.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-semibold rounded-full border border-amber-500/20">
                      In Development
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {morphix.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 text-sm line-clamp-2">
                    {morphix.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {morphix.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary group-hover:translate-x-2 transition-transform mt-auto">
                    View Case Study <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </GlassCard>

            {/* SkillDNA */}
            <GlassCard className="overflow-hidden group cursor-pointer flex flex-col hover:border-primary/30 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-500">
              <Link href={`/projects/${skilldna.slug}`} className="block flex-1 flex flex-col">
                <div className="h-48 relative overflow-hidden bg-muted/30">
                  <motion.img 
                    src={skilldna.image || undefined} 
                    alt={skilldna.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-semibold rounded-full border border-amber-500/20">
                      In Development
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {skilldna.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 text-sm line-clamp-2">
                    {skilldna.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {skilldna.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary group-hover:translate-x-2 transition-transform mt-auto">
                    View Case Study <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </GlassCard>

            {/* Nova AI */}
            <GlassCard className="overflow-hidden group cursor-pointer flex flex-col hover:border-primary/30 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-500">
              <Link href={`/projects/${novaai.slug}`} className="block flex-1 flex flex-col">
                <div className="h-48 relative overflow-hidden bg-muted/30 flex items-center justify-center p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                  <h4 className="text-3xl font-display font-bold text-foreground/50 tracking-tighter group-hover:scale-110 transition-transform duration-700">Nova AI</h4>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-semibold rounded-full border border-emerald-500/20">
                      Live
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {novaai.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 text-sm line-clamp-2">
                    {novaai.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {novaai.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary group-hover:translate-x-2 transition-transform mt-auto">
                    View Case Study <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </GlassCard>

          </div>
        </div>

      </div>
    </section>
  );
}
