import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';
import { GlassCard } from '@/components/GlassCard';
import { Link } from 'wouter';
import { 
  Rocket, 
  Palette, 
  BookOpen, 
  TrendingUp, 
  Lightbulb, 
  Star 
} from 'lucide-react';
import drishtiLogo from "@/assets/1778194803804_1784759145362.png";

export function Achievements() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Milestones</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <AnimatedText text="Career Highlights" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          
          {/* CARD 1: DRISHTI Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 * 0.08 }}
            className="md:col-span-2 lg:col-span-2 row-span-2"
          >
            <div className="group relative h-full rounded-2xl bg-foreground/5 backdrop-blur-md border border-border hover:border-primary/30 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden p-8 md:p-10 flex flex-col bg-gradient-to-br from-primary/10 to-accent/5">
              
              <div className="absolute top-8 right-8 w-16 h-16 opacity-30 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen drop-shadow-xl">
                <img src={drishtiLogo} alt="DRISHTI" className="w-full h-full object-contain" />
              </div>

              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 shrink-0 relative">
                <Star className="text-primary z-10" size={32} />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              </div>
              
              <h4 className="text-2xl md:text-3xl font-display font-bold mb-2">DRISHTI — Flagship Project</h4>
              <p className="text-primary/80 font-medium mb-6">AI-Powered Smart Accident Detection & Emergency Response System</p>
              
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                My most ambitious project — an academic and technical achievement that combines AI, real-time tracking, and life-saving emergency response into one unified mobile platform.
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {["AI Powered", "Emergency Response", "Mobile App", "Research Project", "Final Year Project"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-background/50 border border-border rounded-full text-xs text-foreground/80">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href="/projects/drishti" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold w-max hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Explore Project
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: Digital Artist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 * 0.08 }}
          >
            <div className="group h-full rounded-2xl bg-foreground/5 backdrop-blur-md border border-border hover:border-accent/30 hover:shadow-[0_0_30px_hsl(var(--accent)/0.1)] transition-all duration-500 hover:-translate-y-1 p-6 flex flex-col relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 shrink-0">
                <Palette className="text-accent" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Digital Artist</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                A growing portfolio of emotional digital illustrations exploring human connection, identity, and raw feeling. Artwork from @art_with_rubina on Instagram.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {["9+ Artworks", "Digital Illustration", "Mixed Media"].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-[10px] text-accent font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/gallery" className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                Explore Gallery &rarr;
              </Link>
            </div>
          </motion.div>

          {/* CARD 3: Projects Built */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2 * 0.08 }}
          >
            <div className="group h-full rounded-2xl bg-foreground/5 backdrop-blur-md border border-border hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-500 hover:-translate-y-1 p-6 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Rocket className="text-emerald-500" size={24} />
                </div>
                <span className="text-4xl font-display font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">5+</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Products & Projects</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Real-world products designed and developed — from AI-powered SaaS platforms to safety-critical mobile applications.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["LaunchForge AI", "Second Brain AI", "Morphix", "SkillDNA", "Nova AI"].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-500 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 4: Professional Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 3 * 0.08 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="group h-full rounded-2xl bg-foreground/5 backdrop-blur-md border border-border hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 hover:-translate-y-1 p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 shrink-0">
                <BookOpen className="text-blue-500" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">7 Certifications</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Completed certifications in Web Development, UI/UX Design, AI Tools, Cybersecurity (Deloitte), Deep Learning, Java, and Google Cloud.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto mb-6">
                {["Web Dev", "UI/UX", "AI Tools", "Cybersecurity", "Deep Learning", "Java", "Google Cloud"].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-muted/50 border border-border/50 rounded text-[10px] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-sm font-semibold text-blue-500/80 cursor-default flex items-center gap-2 border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 rounded-full w-max">
                View Credentials (Internal)
              </button>
            </div>
          </motion.div>

          {/* CARD 5: Continuous Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 4 * 0.08 }}
          >
            <div className="group h-full rounded-2xl bg-foreground/5 backdrop-blur-md border border-border hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500 hover:-translate-y-1 p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 shrink-0">
                <TrendingUp className="text-amber-500" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Always Learning</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Continuously leveling up across design, development, and AI — from Framer Motion to React, GSAP to modern design systems.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["React", "GSAP", "Framer Motion", "AI Tools", "Design Systems", "Motion Design"].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded text-[10px] text-amber-500 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 6: Portfolio & Product Dev */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 5 * 0.08 }}
          >
            <div className="group h-full rounded-2xl bg-foreground/5 backdrop-blur-md border border-border hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-500 hover:-translate-y-1 p-6 flex flex-col justify-center text-center items-center relative overflow-hidden bg-gradient-to-b from-transparent to-purple-500/5">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Lightbulb className="text-purple-500" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Building the Future</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Creating modern digital experiences that blend UI/UX craft with frontend engineering and AI integration.
              </p>
              <div className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 mt-auto">
                UI/UX + Code + AI
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
