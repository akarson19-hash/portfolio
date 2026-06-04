import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'Java Developer',
    'Spring Boot Enthusiast',
    'MERN Stack Developer',
    'Problem Solver',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          // Pause at complete text
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 40 : 80);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const stats = [
    { title: 'Backend', desc: 'Spring Boot & Java' },
    { title: 'Frontend', desc: 'React.js & Tailwind' },
    { title: 'Database', desc: 'MongoDB & MySQL' },
    { title: 'Coding', desc: '1000+ SkillRack Solved' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 md:py-0 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center lg:justify-start space-x-2"
          >
            <span className="text-neon-cyan font-bold tracking-widest text-xs uppercase px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5">
              Welcome to my space
            </span>
          </motion.div>

          <div className="space-y-3">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl font-medium"
            >
              Hello, I'm
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Akarson
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-violet glow-text-cyan">
                S
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-10 text-xl md:text-2xl font-semibold text-gray-300"
            >
              A <span className="text-neon-cyan typing-cursor">{displayedText}</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed mx-auto lg:mx-0 font-sans"
          >
            Building scalable web applications and solving real-world problems through software development. Specialized in full-stack engineering with Java, Spring Boot, and the MERN Stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold flex items-center space-x-2 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:scale-105 transition-all duration-300"
            >
              <span>View Projects</span>
              <FaArrowRight size={14} />
            </button>

            <a
              href="/Resume.pdf"
              download="Akarson_S_Resume.pdf"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-300 font-bold flex items-center space-x-2 hover:bg-white/10 hover:border-neon-cyan/40 hover:text-neon-cyan transition-all duration-300"
            >
              <FaDownload size={14} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-3 rounded-xl border border-white/5 bg-transparent text-gray-400 font-medium flex items-center space-x-2 hover:text-white transition-all duration-300"
            >
              <FaEnvelope size={14} className="opacity-70" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="glassmorphism p-3.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors text-center lg:text-left"
              >
                <div className="text-xs font-medium text-neon-cyan tracking-wider uppercase mb-1">{stat.title}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile Image Area */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Ambient Background Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan via-neon-blue to-neon-violet opacity-25 blur-3xl scale-95 pointer-events-none" />

            {/* Premium Glowing Border */}
            <div className="absolute -inset-2.5 rounded-full pointer-events-none transition-opacity" />

            {/* Avatar Frame (Glassmorphism circular container) */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-3 bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,242,254,0.25)] flex items-center justify-center neon-cyan-border">
              <img
                src="/profile.jpeg"
                alt="Akarson S Profile"
                className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-out border border-white/5"
              />

              {/* Internal subtle overlay on image */}
              <div className="absolute inset-3 border border-neon-cyan/25 rounded-full pointer-events-none transition-all duration-300" />
            </div>

            {/* Small Floating Details */}
            <div className="absolute -bottom-1 -right-1 glassmorphism px-4 py-2.5 rounded-2xl border border-neon-cyan/30 text-xs font-semibold flex items-center space-x-2 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute left-4" />
              <span className="text-gray-300 pl-1.5 font-sans">Available for Projects</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
