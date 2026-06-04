import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      title: 'Expense Split Tracker',
      desc: 'Developed a financial utility web application to manage and split expenses among multiple users in groups. Features include automatic balance calculation, participant allocation, and comprehensive ledger histories.',
      tech: ['Spring Boot', 'Thymeleaf', 'MySQL', 'JavaScript', 'Spring Data JPA'],
      features: [
        'Expense Management',
        'Automatic Split Calculations',
        'Interactive User Dashboard',
        'Transaction History tracking',
      ],
      github: 'https://github.com/akarson19-hash/Expense-split-tracker',
      category: 'Backend',
      accentColor: '#00f2fe',
      bgGlow: 'rgba(0, 242, 254, 0.05)',
      imagePlaceholder: '🧾', // A clean emoji layout can serve as a gorgeous vector icon overlay
    },
    {
      title: 'Pet Adoption & Care Portal',
      desc: 'Built a full-stack responsive pet adoption platform connecting prospective pet adopters with shelters and owners. Includes list registries, adoption applications, and advanced matching search engines.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Pet List Registry & Profiles',
        'Adoption Form Requests',
        'Secure User Authentication',
        'Dynamic Search & Filters',
      ],
      github: 'https://github.com/akarson19-hash/Pet-adoption-portal',
      category: 'Full Stack',
      accentColor: '#7f00ff',
      bgGlow: 'rgba(127, 0, 255, 0.05)',
      imagePlaceholder: '🐾',
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h4 className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2">My Work Portfolio</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        {/* Project Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glassmorphism rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between group transition-all duration-300 relative"
              style={{
                boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)`,
              }}
            >
              {/* Corner Glow Overlay */}
              <div 
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] pointer-events-none opacity-40 transition-opacity duration-300 group-hover:opacity-60"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="p-8">
                {/* Header: Icon Placeholder and Category */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white/10"
                    style={{ 
                      backgroundColor: project.bgGlow,
                      textShadow: `0 0 10px ${project.accentColor}40`
                    }}
                  >
                    {project.imagePlaceholder}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {project.category}
                  </span>
                </div>

                {/* Body: Title and Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-sans">
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 border-t border-white/5 pt-5 mb-2">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Key Features</h4>
                  {project.features.map((feat, featIdx) => (
                    <div key={featIdx} className="flex items-start space-x-2.5">
                      <FaCheckCircle className="text-neon-cyan mt-0.5 flex-shrink-0" size={12} />
                      <span className="text-xs text-gray-400 font-sans">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action bar footer of card */}
              <div className="px-8 py-5 bg-white/[0.01] border-t border-white/5 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaGithub size={16} />
                  <span>GitHub Repository</span>
                </a>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-neon-cyan flex items-center justify-center text-gray-300 hover:text-black hover:scale-115 transition-all duration-300"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
