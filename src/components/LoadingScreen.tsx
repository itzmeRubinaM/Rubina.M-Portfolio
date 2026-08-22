import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if already loaded in this session
    if (sessionStorage.getItem('portfolioLoaded')) {
      onComplete();
      return;
    }

    const obj = { val: 0 };
    gsap.to(obj, {
      val: 100,
      duration: 2.2,
      ease: "power2.out",
      onUpdate: () => setProgress(Math.round(obj.val)),
      onComplete: () => {
        setTimeout(() => {
          sessionStorage.setItem('portfolioLoaded', 'true');
          onComplete();
        }, 500);
      }
    });
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex items-center space-x-2 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl font-display font-bold text-foreground"
        >
          R
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-6xl font-display font-bold text-primary"
        >
          M
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-64 h-[2px] bg-border overflow-hidden relative mb-8 rounded-full"
      >
        <div 
          className="absolute top-0 left-0 h-full bg-primary"
          style={{ width: `${progress}%` }}
        />
      </motion.div>
      
      <div className="text-sm font-mono text-muted-foreground tabular-nums">
        {progress}%
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: progress > 50 ? 1 : 0 }}
        className="absolute bottom-12 text-sm text-muted-foreground tracking-widest uppercase"
      >
        Designing experiences that feel alive
      </motion.p>
    </motion.div>
  );
}
