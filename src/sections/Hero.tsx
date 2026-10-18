import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuroraBackground } from '@/components/AuroraBackground';
import { MagneticButton } from '@/components/MagneticButton';
import { AnimatedText } from '@/components/AnimatedText';
import { ArrowDown } from 'lucide-react';
import resumePdf from '@/assets/Rubina-Mollah-Resume.pdf?url';
import pfpImg from '@/assets/PFP_1785827688210.jpeg';

export function Hero() {
  const roles = [
    "UI/UX Designer",
    "Frontend Developer",
    "Creative Technologist",
    "Digital Artist"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripple, setRipple] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Max tilt: 8 degrees
  const rotateX = mousePos.y * -16; // -8 to 8
  const rotateY = mousePos.x * 16;  // -8 to 8

  const handlePortraitClick = () => {
    setRipple(prev => prev + 1);
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <AuroraBackground />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Skill Badges */}
        <motion.div 
          className="hidden md:flex absolute top-1/4 left-10 glass px-4 py-2 rounded-full text-xs font-semibold text-primary items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          React & Tailwind
        </motion.div>
        
        <motion.div 
          className="hidden md:flex absolute bottom-1/3 right-10 glass px-4 py-2 rounded-full text-xs font-semibold text-accent items-center gap-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Figma Prototyping
        </motion.div>

        {/* Portrait Orb Component */}
        <div className="mb-10 relative mt-8 md:mt-0">
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative flex items-center justify-center will-change-transform w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
          >
            {/* Animated Gradient Border Wrapper */}
            <div className="absolute inset-[-4px] rounded-full overflow-hidden opacity-50 mix-blend-screen pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)"
                }}
              />
            </div>

            {/* Breathing Glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px hsl(var(--primary) / 0.3)",
                  "0 0 80px hsl(var(--primary) / 0.5)",
                  "0 0 40px hsl(var(--primary) / 0.3)"
                ]
              }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              className="absolute inset-0 rounded-full pointer-events-none"
            />

            {/* Frosted Glass Frame & Image */}
            <div 
              className="relative w-full h-full rounded-full backdrop-blur-xl bg-white/5 border border-white/20 overflow-hidden cursor-pointer group z-10"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={handlePortraitClick}
            >
              <img 
                src={pfpImg} 
                alt="Rubina Mollah" 
                className="w-full h-full object-cover object-top"
              />

              {/* Moving Light Streak */}
              <motion.div 
                className="absolute inset-0 w-[50%] h-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent -rotate-45"
                animate={{ translateX: ["-200%", "300%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ top: "-50%", left: "-25%" }}
              />

              {/* Ripple Effect */}
              <AnimatePresence>
                {ripple > 0 && (
                  <motion.div
                    key={ripple}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 3, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-white/30 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* 3 Animated Orbit Rings */}
            <div className="absolute inset-1/2 flex items-center justify-center pointer-events-none">
              {/* Ring 1 Outermost */}
              <div 
                className="absolute border border-primary/20 rounded-full w-[260px] h-[260px] md:w-[360px] md:h-[360px] animate-spin"
                style={{ animationDuration: isHovering ? '2s' : '8s', animationTimingFunction: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Ring 2 */}
              <div 
                className="absolute border border-accent/15 rounded-full w-[220px] h-[220px] md:w-[310px] md:h-[310px] animate-spin"
                style={{ animationDuration: isHovering ? '2s' : '12s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}
              >
                <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-accent rounded-full translate-x-1/2 translate-y-1/2" />
              </div>

              {/* Ring 3 Inner */}
              <div 
                className="absolute border border-primary/10 border-dashed rounded-full w-[175px] h-[175px] md:w-[240px] md:h-[240px] animate-spin"
                style={{ animationDuration: isHovering ? '2s' : '6s', animationTimingFunction: 'linear' }}
              />
            </div>

            {/* 4 Small Floating Particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary/60 blur-[1px] pointer-events-none"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono tracking-widest uppercase mb-4 text-sm"
        >
          Hello, I am
        </motion.p>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter mb-6">
          <AnimatedText text="Rubina Mollah" delay={0.4} />
        </h1>
        
        <div className="h-10 md:h-16 flex items-center justify-center overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-xl md:text-3xl font-light text-foreground/80"
            >
              {roles[currentRoleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-xl mx-auto text-lg text-muted-foreground mb-12"
        >
          Designing experiences that feel alive.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton 
            className="px-8 py-4 border border-primary/50 text-foreground rounded-full font-medium transition-all duration-300 hover:backdrop-blur-xl hover:bg-white/10 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/20"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </MagneticButton>
          
          <MagneticButton 
            as="a"
            href={resumePdf}
            download="Rubina_Mollah_Resume.pdf"
            className="px-8 py-4 border border-white/20 text-foreground rounded-full font-medium transition-all duration-300 hover:backdrop-blur-xl hover:bg-white/10 hover:border-white/40"
          >
            Download Resume
          </MagneticButton>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary"
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}