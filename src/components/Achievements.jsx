import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'Freshathon 2025 – 2nd Prize Winner',
      description:
        'Secured 2nd Prize in Freshathon 2025 by presenting an innovative software solution and demonstrating strong problem-solving, technical, and teamwork skills in a competitive hackathon environment.',
      details:
        'Presented a polished prototype and collaborated closely with teammates to deliver a production-ready demo under tight time constraints.',
      icon: <FaTrophy className="text-yellow-300" />,
      badgeText: 'Hackathon Achievement',
      glow: 'shadow-[0_0_22px_rgba(255,215,0,0.2)] hover:border-yellow-300/40',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2">Milestones</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group glassmorphism p-8 rounded-[2rem] border border-white/5 ${ach.glow} flex flex-col justify-between transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-3xl bg-white/5 flex items-center justify-center text-2xl border border-white/10 shadow-[0_0_18px_rgba(255,215,0,0.1)]">
                    {ach.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 rounded-full">
                    {ach.badgeText}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-neon-cyan">
                  {ach.title}
                </h3>
                <p className="text-sm text-gray-300 mb-5 leading-relaxed font-sans">
                  {ach.description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed font-sans border-t border-white/5 pt-4">
                  {ach.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
