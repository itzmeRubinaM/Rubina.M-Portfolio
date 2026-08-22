import React from 'react';
import { motion } from 'framer-motion';
import { useMagneticButton } from '@/hooks/useMagneticButton';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  download?: string | boolean;
}

export function MagneticButton({ children, className = '', as = 'button', href, download, ...props }: MagneticButtonProps) {
  const { ref, position, handleMouse, reset } = useMagneticButton();

  const handleRipple = (e: React.MouseEvent<HTMLElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const ripple = btn.querySelector('.ripple');
    if (ripple) ripple.remove();

    btn.appendChild(circle);
  };

  const Component = as === 'a' ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      download={download}
      onMouseMove={handleMouse as any}
      onMouseLeave={reset}
      onClick={(e: any) => {
        handleRipple(e);
        if (props.onClick) props.onClick(e);
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden ${className}`}
      {...(props as any)}
    >
      <div className="relative z-10">{children}</div>
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background-color: rgba(255, 255, 255, 0.3);
          pointer-events: none;
          z-index: 0;
        }
        @keyframes ripple {
          to { transform: scale(4); opacity: 0; }
        }
      `}</style>
    </Component>
  );
}
