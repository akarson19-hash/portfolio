import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaTerminal, FaLaptopCode } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Development Internship Certificate',
      description:
        'Completed hands-on internship training at AlgoTutor covering frontend, backend, REST APIs, database mapping, and CI/CD workflows.',
      details:
        'Official internship certificate awarded for MERN stack delivery, modern web architecture, and collaboration on production-ready features.',
      icon: <FaCertificate className="text-neon-blue" />,
      badgeText: 'Internship Certificate',
      link: 'https://drive.google.com/file/d/1QY2egycu2Df9ljl6WF1hVznx_GUUtqWg/view',
      buttonText: 'View Certificate',
      glow: 'shadow-[0_0_18px_rgba(79,172,254,0.18)] hover:border-neon-blue/30',
    },
    {
      title: 'SkillRack Certifications',
      description:
        'Verified coding achievements across SkillRack assessments with 1000+ solved problems and 240+ earned badges.',
      details:
        'Demonstrates platform-recognized programming proficiency, logic design, and professional challenge completion.',
      icon: <FaTerminal className="text-neon-cyan" />,
      badgeText: 'Verified Credential',
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=515193&key=961e45a2ee2d3335d5061d145bd6afa5e08f3fd0',
      buttonText: 'View Profile',
      glow: 'shadow-[0_0_18px_rgba(0,242,254,0.18)] hover:border-neon-cyan/30',
    },
    {
      title: 'LeetCode Problem Solving',
      description:
        'Completed 150+ algorithm challenges with optimized solutions in arrays, strings, trees, and dynamic programming.',
      details:
        'Technical training in data structures and algorithm implementation with performance-focused problem solving.',
      icon: <FaLaptopCode className="text-neon-violet" />,
      link: 'https://leetcode.com/u/Akarson_S/',
      buttonText: 'View Profile',
      badgeText: 'Technical Training',
      glow: 'shadow-[0_0_18px_rgba(127,0,255,0.18)] hover:border-neon-violet/30',
    },
    {
      title: 'Full Project Deployments',
      description:
        'Delivered production-ready deployments including a financial splitter and a pet portal with backend and frontend integration.',
      details:
        'Reflects practical certification-like experience in project architecture, deployment workflows, and modern web delivery.',
      icon: <FaAward className="text-orange-400" />,
      badgeText: 'Project Experience',
      glow: 'shadow-[0_0_18px_rgba(249,115,22,0.18)] hover:border-orange-500/30',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2">Verified Credentials</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Certifications</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm text-gray-400 leading-relaxed">
            Organized certificate cards for internship credentials, platform certifications, and training achievements in a clean responsive grid.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group glassmorphism p-6 rounded-3xl border border-white/5 ${cert.glow} transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-lg border border-white/10">
                    {cert.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 rounded-full">
                    {cert.badgeText}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed font-sans">
                  {cert.description}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed font-sans border-t border-white/5 pt-4">
                  {cert.details}
                </p>
              </div>

              {cert.link && (
                <div className="mt-8">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold tracking-wide text-gray-200 transition-all duration-200 hover:border-neon-cyan/40 hover:bg-neon-cyan/10 hover:text-white"
                  >
                    {cert.buttonText}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
