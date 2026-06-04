import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-dark-border z-[10000] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-violet transition-all duration-75 ease-out shadow-[0_0_8px_#00f2fe]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
