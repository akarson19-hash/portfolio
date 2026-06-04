import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing core resources...');

  const loadingSteps = [
    { threshold: 10, text: 'Resolving network endpoints...' },
    { threshold: 30, text: 'Fetching resume configuration...' },
    { threshold: 50, text: 'Initializing canvas particle engine...' },
    { threshold: 75, text: 'Injecting neon glow modules...' },
    { threshold: 90, text: 'Optimizing layouts for recruiter view...' },
  ];

  useEffect(() => {
    const duration = 1200; // 1.2s total loader time
    const intervalTime = 15;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const percent = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(percent);

      const currentStepObj = loadingSteps.find(step => percent >= step.threshold);
      if (currentStepObj) {
        setLoadingText(currentStepObj.text);
      }

      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#030014] z-[99999] flex flex-col items-center justify-center select-none">
      {/* Outer spinning aura */}
      <div className="absolute top-[35%] left-[35%] w-[30vw] h-[30vw] rounded-full bg-neon-cyan/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[35%] right-[35%] w-[30vw] h-[30vw] rounded-full bg-neon-violet/5 blur-[80px] pointer-events-none" />

      {/* Main loading element */}
      <div className="relative flex flex-col items-center max-w-sm w-full px-8 text-center">
        {/* Glowing visualizer ring */}
        <div className="relative w-28 h-28 mb-8">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="48"
              className="stroke-gray-800"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="56"
              cy="56"
              r="48"
              className="stroke-neon-cyan drop-shadow-[0_0_8px_#00f2fe]"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="301.6"
              strokeDashoffset={301.6 - (301.6 * progress) / 100}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.05s ease-out' }}
            />
          </svg>
          {/* Centered counter */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue font-sans">
              {progress}%
            </span>
          </div>
        </div>

        {/* Status text */}
        <div className="h-6 mb-2">
          <motion.div
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold text-gray-400 tracking-widest uppercase"
          >
            {loadingText}
          </motion.div>
        </div>

        {/* Linear progress bar */}
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-neon-cyan to-neon-violet shadow-[0_0_5px_#00f2fe]"
            style={{ width: `${progress}%`, transition: 'width 0.05s ease-out' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
