import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';
import { GlassCard } from '@/components/GlassCard';
import { Palette, PenTool, Video, Image as ImageIcon, Code2, FileCode2 } from 'lucide-react';
import { 
  SiFigma, SiFramer, SiGithub, SiReact, 
  SiFirebase, SiHtml5, SiJavascript, SiReplit, SiGoogle, SiTailwindcss 
} from 'react-icons/si';

const TOOLS = [
  { name: "Figma", icon: SiFigma, category: "Design", color: "#F24E1E" },
  { name: "Photoshop", icon: Palette, category: "Design", color: "#31A8FF" },
  { name: "Illustrator", icon: PenTool, category: "Design", color: "#FF9A00" },
  { name: "After Effects", icon: Video, category: "Motion", color: "#9999FF" },
  { name: "Canva", icon: ImageIcon, category: "Design", color: "#00C4CC" },
  { name: "Framer", icon: SiFramer, category: "Design", color: "#0055FF" },
  { name: "VS Code", icon: Code2, category: "Development", color: "#007ACC" },
  { name: "GitHub", icon: SiGithub, category: "Development", color: "#ffffff" },
  { name: "React", icon: SiReact, category: "Development",color: "#61DAFB" },
  { name: "Firebase", icon: SiFirebase, category: "Development", color: "#FFCA28" },
  { name: "HTML5", icon: SiHtml5, category: "Development", color: "#E34F26" },
  { name: "CSS3", icon: FileCode2, category: "Development", color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, category: "Development",  color: "#F7DF1E" },
  { name: "Replit", icon: SiReplit, category: "Development", color: "#F26207" },
  { name: "Google", icon: SiGoogle, category: "Productivity", color: "#4285F4" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Development", color: "#06B6D4" },
];

const CATEGORIES = ["All", "Design", "Development", "Motion", "Productivity"];

export function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = activeCategory === "All" 
    ? TOOLS 
    : TOOLS.filter(t => t.category === activeCategory);

  return (
    <section id="tools" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">My Creative Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <AnimatedText text="The tools that bring ideas to life" />
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? 'text-white' : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeToolCategory"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool, i) => (
              <motion.div
                layout
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <GlassCard className="p-5 rounded-2xl flex flex-col items-center text-center relative group hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full">

                  <div className ="w-full flex justify-center">
                    <tool.icon size={32} color={tool.color} className="mb-4 mt-2" />
                  </div>
                  
                  <h4 className="font-semibold text-sm mt-auto">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
