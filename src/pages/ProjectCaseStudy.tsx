import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '@/data/projects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/sections/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useLenis } from '@/hooks/useLenis';
import { ArrowLeft, ExternalLink, Calendar, User, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { AuroraBackground } from '@/components/AuroraBackground';

export function ProjectCaseStudy() {
  useLenis();
  const { slug } = useParams();
  const project = PROJECTS_DATA.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 text-center">
        <Navbar />
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
        <Link href="/">
          <a className="px-6 py-3 bg-primary text-white rounded-full font-medium flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
      <ScrollProgress />
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* 1. Hero Banner */}
        <section className="relative pt-20 pb-16 md:pb-24 overflow-hidden border-b border-border">
          <AuroraBackground />
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <Link href="/#projects">
              <a className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </a>
            </Link>
            
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                    {project.year}
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                    {project.role}
                  </span>
                  {project.status === 'development' && (
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-semibold rounded-full border border-amber-500/20">
                      In Development
                    </span>
                  )}
                  {project.status === 'live' && (
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-semibold rounded-full border border-emerald-500/20">
                      Live
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-foreground/70 font-light mb-10 max-w-3xl">
                  {project.subtitle}
                </p>

                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    View Live Website <ExternalLink size={16} />
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 md:px-12 mt-16">
          {/* 2. Project Screenshot */}
          {project.image && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 rounded-2xl overflow-hidden glass border-border/50 shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full ${project.slug === 'drishti' ? 'h-auto object-cover' : 'h-auto object-cover'}`}
              />
            </motion.div>
          )}

          {project.uiScreens && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {project.uiScreens.map((screen: string, idx: number) => (
                <div key={idx} className="rounded-2xl overflow-hidden glass border-border/50 shadow-xl">
                  <img src={screen} alt={`${project.title} screen ${idx + 1}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </motion.div>
          )}

          <div className="grid md:grid-cols-[1fr_300px] gap-16 md:gap-24">
            
            {/* Main Content Column */}
            <div className="space-y-20">
              
              {/* Problem & Objective */}
              <section>
                <div className="mb-12">
                  <h3 className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                    <ChevronRight size={16} /> The Challenge
                  </h3>
                  <blockquote className="text-2xl md:text-3xl font-display font-medium leading-tight border-l-4 border-primary pl-6 py-2">
                    {project.problem}
                  </blockquote>
                </div>

                <div>
                  <h3 className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                    <ChevronRight size={16} /> Objective
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {project.objective}
                  </p>
                </div>
              </section>

              {/* Research Insights */}
              <section>
                <h3 className="text-2xl font-display font-bold mb-8">Research Insights</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.research.map((item, i) => (
                    <GlassCard key={i} className="p-6">
                      <p className="text-foreground/80 text-sm leading-relaxed">{item}</p>
                    </GlassCard>
                  ))}
                </div>
              </section>

              {/* Features */}
              <section>
                <h3 className="text-2xl font-display font-bold mb-8">Key Features</h3>
                <div className="flex flex-wrap gap-3">
                  {project.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="px-4 py-3 glass rounded-xl text-sm font-medium flex items-center gap-3 border-border/50"
                    >
                      <CheckCircle2 size={16} className="text-primary" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Challenges & Solutions */}
              <section>
                <h3 className="text-2xl font-display font-bold mb-8">Challenges & Solutions</h3>
                <div className="space-y-6">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="grid md:grid-cols-2 gap-6 p-6 glass rounded-2xl">
                      <div>
                        <h4 className="text-sm font-bold text-destructive mb-2 uppercase tracking-wider">Challenge</h4>
                        <p className="text-foreground/80 text-sm">{challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-emerald-500 mb-2 uppercase tracking-wider">Solution</h4>
                        <p className="text-foreground/80 text-sm">{project.solutions[i] || "Iterative design and testing."}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learnings */}
              <section>
                <h3 className="text-2xl font-display font-bold mb-6">Key Takeaways</h3>
                <ol className="list-decimal list-inside space-y-4 text-foreground/80 text-lg ml-4">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="pl-4 marker:text-primary marker:font-bold">{learning}</li>
                  ))}
                </ol>
              </section>

            </div>

            {/* Sidebar Meta Info */}
            <div className="space-y-8">
              <div className="sticky top-32 space-y-8">
                
                <GlassCard className="p-6 space-y-6">
                  <div>
                    <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-1 flex items-center gap-2">
                      <User size={14} /> Role
                    </h4>
                    <p className="font-medium">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-1 flex items-center gap-2">
                      <Clock size={14} /> Duration
                    </h4>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-1 flex items-center gap-2">
                      <Calendar size={14} /> Year
                    </h4>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-muted/50 rounded text-xs font-medium border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>

                {project.url && (
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                  >
                    View Live <ExternalLink size={18} />
                  </a>
                )}
                
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
