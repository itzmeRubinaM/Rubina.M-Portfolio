import { useEffect, useState } from 'react';

export function useScrollReveal(threshold = 0.1) {
  const [isRevealed, setIsRevealed] = useState(false);

  // We rely on Framer Motion's whileInView, but this hook can be used for custom logic
  // if we need to track if something has scrolled into view for non-framer components.
  
  return { isRevealed, setIsRevealed };
}
