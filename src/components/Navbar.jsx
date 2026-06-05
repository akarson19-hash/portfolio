import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTerminal, FaBars, FaTimes } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  const socials = [
    { icon: <FaLinkedin size={18} />, link: 'https://www.linkedin.com/in/akarson-s-302790333/', name: 'LinkedIn' },
    { icon: <FaGithub size={18} />, link: 'https://github.com/akarson19-hash?tab=repositories', name: 'GitHub' },
    { icon: <SiLeetcode size={18} />, link: 'https://leetcode.com/u/Akarson_S/', name: 'LeetCode' },
    { icon: <FaTerminal size={18} />, link: 'https://www.skillrack.com/faces/resume.xhtml?id=515193&key=961e45a2ee2d3335d5061d145bd6afa5e08f3fd0', name: 'SkillRack' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setScrolled(window.scrollY > 20);

      // Scroll Spy active tracking
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030014]/70 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue font-sans hover:scale-105 transition-transform duration-200"
        >
          AKARSON <span className="text-neon-violet font-semibold">S</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-neon-cyan relative ${
                activeSection === item.id ? 'text-neon-cyan' : 'text-gray-400'
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-cyan to-neon-blue shadow-[0_0_8px_#00f2fe]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Socials / External links */}
        <div className="hidden lg:flex items-center space-x-4 border-l border-white/10 pl-6">
          {socials.map((soc, index) => (
            <a
              key={index}
              href={soc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-cyan hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
              title={soc.name}
            >
              {soc.icon}
            </a>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-neon-cyan focus:outline-none transition-colors"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-[#030014]/95 backdrop-blur-lg border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-base font-semibold py-1 transition-all duration-200 hover:text-neon-cyan ${
                    activeSection === item.id ? 'text-neon-cyan border-l-2 border-neon-cyan pl-2' : 'text-gray-400 pl-0'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="flex items-center space-x-6 pt-4 border-t border-white/5">
                {socials.map((soc, index) => (
                  <a
                    key={index}
                    href={soc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-cyan flex items-center space-x-2"
                  >
                    {soc.icon}
                    <span className="text-xs">{soc.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
