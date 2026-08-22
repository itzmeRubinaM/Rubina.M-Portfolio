import React from 'react';

interface MarqueeStripProps {
  items: string[];
  className?: string;
}

export function MarqueeStrip({ items, className = '' }: MarqueeStripProps) {
  // Double the items to create seamless loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden whitespace-nowrap glass py-4 border-l-0 border-r-0 border-border flex items-center ${className}`}>
      <div 
        className="flex items-center space-x-12 px-6"
        style={{ animation: 'marquee 40s linear infinite', width: 'max-content' }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-12">
            <span className="text-sm font-semibold tracking-wider uppercase text-foreground/80">
              {item}
            </span>
            <span className="text-primary opacity-50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
