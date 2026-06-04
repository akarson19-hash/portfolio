import React from 'react';
import { FaLinkedin, FaGithub, FaTerminal } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const socials = [
    { icon: <FaLinkedin size={18} />, link: 'https://www.linkedin.com/in/akarson-s-302790333/', name: 'LinkedIn' },
    { icon: <FaGithub size={18} />, link: 'https://github.com/akarson19-hash?tab=repositories', name: 'GitHub' },
    { icon: <SiLeetcode size={18} />, link: 'https://leetcode.com/u/Akarson_S/', name: 'LeetCode' },
    { icon: <FaTerminal size={18} />, link: 'https://www.skillrack.com/faces/resume.xhtml?id=515193&key=961e45a2ee2d3335d5061d145bd6afa5e08f3fd0', name: 'SkillRack' },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#030014]/60 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Copyright */}
        <div className="text-gray-500 text-sm font-sans mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Akarson S. All Rights Reserved.
        </div>

        {/* Center/Right Side: Name Branding */}
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          Designed & Built with <span className="text-neon-cyan glow-text-cyan">&hearts;</span> by Akarson S
        </div>

        {/* Right Side: Social icons */}
        <div className="flex space-x-5">
          {socials.map((soc, index) => (
            <a
              key={index}
              href={soc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-neon-cyan hover:scale-110 transition-all duration-200"
              title={soc.name}
            >
              {soc.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
