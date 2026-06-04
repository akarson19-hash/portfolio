import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaTerminal, FaCode, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'Freshathon 2025 – 2nd Prize Winner',
      description: 'Secured 2nd Prize in Freshathon 2025 by presenting an innovative software solution and demonstrating strong problem-solving, technical, and teamwork skills in a competitive hackathon environment.',
      details: 'Presented a polished prototype and collaborated closely with teammates to deliver a production-ready demo under tight time constraints.',
      icon: <FaTrophy className="text-yellow-400" />,
      link: '#',
      badgeText: 'Hackathon Achievement',
      glow: 'shadow-[0_0_18px_rgba(255,215,0,0.15)] hover:border-yellow-300/30',
    },
    {
      title: 'SkillRack Gold/Bronze Badge',
      description: 'Solved over 1000+ coding problems and earned 240+ Bronze badges, maintaining a secure standing rank of 24195.',
      details: 'Demonstrates deep familiarity with logic design, string manipulation, arrays, matrix patterns, and multi-paradigm solving.',
      icon: <FaTerminal className="text-neon-cyan" />,
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=515193&key=961e45a2ee2d3335d5061d145bd6afa5e08f3fd0',
      badgeText: '1000+ Solved',
      glow: 'shadow-[0_0_15px_rgba(0,242,254,0.15)] hover:border-neon-cyan/30',
    },
    {
      title: 'Leetcode Problem Solving',
      description: 'Solved 150+ coding tasks covering complex Data Structures and Algorithms (DSA), Arrays, Strings, Trees, and OOPs concepts.',
      details: 'Consistently code optimized solutions in Java, emphasizing linear search, hash mapping, binary tree traversals, and dynamic concepts.',
      icon: <FaCode className="text-neon-violet" />,
      link: 'https://leetcode.com/u/Akarson_S/',
      badgeText: '150+ Solved',
      glow: 'shadow-[0_0_15px_rgba(127,0,255,0.15)] hover:border-neon-violet/30',
    },
    {
      title: 'Full Stack Development Intern',
      description: 'Finished hands-on internship training at AlgoTutor covering frontend, backend, REST API interfaces, database mapping, and CI/CD pipelines.',
      details: 'Secured completion certification with high marks. Deployed scalable web pages utilizing MERN stacks and AWS cloud environments.',
      icon: <FaAward className="text-neon-blue" />,
      link: 'https://drive.google.com/file/d/1QY2egycu2Df9ljl6WF1hVznx_GUUtqWg/view',
      badgeText: 'MERN Certified',
      glow: 'shadow-[0_0_15px_rgba(79,172,254,0.15)] hover:border-neon-blue/30',
    },
    {
      title: 'Full Project Deployments',
      description: 'Engineered and launched two production-grade architectures: a financial splitter and a pet portal.',
      details: 'Built server logics in Spring Boot and Node.js, and client representations using HTML template engine and React.',
      icon: <FaTrophy className="text-orange-500" />,
      link: 'https://github.com/akarson19-hash?tab=repositories',
      badgeText: '2 Live Projects',
      glow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:border-orange-500/30',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h4 className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2">Milestones</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        {/* Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glassmorphism p-6 md:p-8 rounded-3xl border border-white/5 ${ach.glow} flex flex-col justify-between transition-all duration-300`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-lg border border-white/10">
                    {ach.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 rounded-full">
                    {ach.badgeText}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan">
                  {ach.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed font-sans">
                  {ach.description}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed font-sans border-t border-white/5 pt-4 mb-6">
                  {ach.details}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-gray-400 hover:text-white transition-colors group/link"
                >
                  <span>Verify Achievement</span>
                  <FaExternalLinkAlt className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" size={10} />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
