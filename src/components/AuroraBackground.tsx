import React, { useEffect, useRef } from 'react';

export function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as a percentage
      const xPos = (clientX / innerWidth - 0.5) * 40; // max 20px movement
      const yPos = (clientY / innerHeight - 0.5) * 40;
      
      containerRef.current.style.setProperty('--mouse-x', `${xPos}px`);
      containerRef.current.style.setProperty('--mouse-y', `${yPos}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
        transition: 'transform 0.2s ease-out'
      }}
    >
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 aurora-orb" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-accent/15 aurora-orb" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[40%] bg-indigo-500/15 aurora-orb" style={{ animationDelay: '-4s' }} />
    </div>
  );
}
