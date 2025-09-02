import { useState, useEffect } from 'react';

export const useScrollDirection = (threshold = 100) => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (Math.abs(currentScrollY - prevScrollY) < threshold) {
        return;
      }

      setScrollDirection(currentScrollY > prevScrollY ? 'down' : 'up');
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY, threshold]);

  return scrollDirection;
};