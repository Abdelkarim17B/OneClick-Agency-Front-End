import { useState, useEffect } from 'react';

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};

export const getParallaxStyle = (scrollY: number, speed: number = 0.5) => ({
  transform: `translateY(${scrollY * speed}px)`,
});

export const getParallaxOpacity = (scrollY: number, fadeStart: number = 0, fadeEnd: number = 300) => {
  const opacity = Math.max(0, Math.min(1, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)));
  return { opacity };
};
