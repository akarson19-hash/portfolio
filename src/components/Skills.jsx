import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLaptop, FaDatabase, FaTools } from 'react-icons/fa';

const SkillCard = ({ name, percentage }) => {
  return (
    <div className="glassmorphism p-4 rounded-xl border border-white/5 hover:border-neon-cyan/20 transition-all duration-300 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-bold text-neon-cyan">{percentage}%</span>
      </div>
      
      {/* Progress Bar Container */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue shadow-[0_0_8px_#00f2fe] rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    {
      id: 'languages',
      name: 'Languages',
      icon: <FaCode />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 80 },
      ],
      glow: 'from-neon-cyan to-neon-blue',
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: <FaServer />,
      skills: [
        { name: 'Spring Boot', level: 85 },
        { name: 'Spring MVC', level: 80 },
        { name: 'REST API', level: 85 },
        { name: 'Hibernate', level: 75 },
        { name: 'JPA', level: 80 },
      ],
      glow: 'from-orange-500 to-amber-500',
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: <FaLaptop />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 80 },
      ],
      glow: 'from-neon-violet to-purple-600',
    },
    {
      id: 'database',
      name: 'Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 80 },
      ],
      glow: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: <FaTools />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'Postman', level: 85 },
        { name: 'VS Code', level: 90 },
      ],
      glow: 'from-pink-500 to-rose-500',
    },
  ];

  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h4 className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2">Technical Ability</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-300 border ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-black border-transparent shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                : 'border-white/5 bg-white/2 hover:bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            All Skills
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-300 flex items-center space-x-2 border ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-black border-transparent shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                  : 'border-white/5 bg-white/2 hover:bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <span className="text-xs">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="glassmorphism p-6 rounded-2xl border border-white/5 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-white/5">
                <div className={`p-2.5 rounded-lg bg-gradient-to-tr ${cat.glow} text-black font-semibold text-sm`}>
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold text-gray-200">{cat.name}</h3>
              </div>

              {/* Skills Progress Grid */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillCard
                    key={skillIdx}
                    name={skill.name}
                    percentage={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
