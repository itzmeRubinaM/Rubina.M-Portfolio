import React, { useEffect, useRef } from 'react';
import { useCustomCursor } from '@/hooks/useCustomCursor';

export function CustomCursor() {
  const { cursorType } = useCustomCursor();
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.current = { x: clientX, y: clientY };
      
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      // Lerp for outer ring
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.15;
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.15;
      
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${delayedMouse.current.x}px, ${delayedMouse.current.y}px, 0)`;
      }
      
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Is touch device?
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return null;

  return (
    <>
      <div 
        ref={outerRef} 
        className={`fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border-2 border-primary pointer-events-none z-[100] transition-all duration-300 flex items-center justify-center
          ${cursorType === 'hover' ? 'scale-[1.8] bg-primary/10 border-primary/50' : ''}
          ${cursorType === 'view' ? 'scale-[2.5] bg-background/80 border-transparent backdrop-blur-md' : ''}
        `}
      >
        {cursorType === 'view' && (
          <span className="text-[8px] font-bold tracking-widest text-primary uppercase">View</span>
        )}
      </div>
      <div 
        ref={innerRef} 
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-primary pointer-events-none z-[100] transition-transform duration-200
          ${cursorType !== 'default' ? 'scale-0' : ''}
        `}
      />
    </>
  );
}
