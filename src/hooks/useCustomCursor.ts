import { useEffect, useState } from 'react';

export function useCustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view'>('default');

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || target.closest('button')) {
        setCursorType('hover');
      } else if (target.closest('.gallery-item') || target.dataset.cursor === 'view') {
        setCursorType('view');
      } else {
        setCursorType('default');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return { cursorType, setCursorType };
}
