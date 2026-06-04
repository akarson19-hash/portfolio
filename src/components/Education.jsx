import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaBook } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering (B.E) in ECE',
      institution: 'Sri Eshwar College of Engineering',
      duration: '2024 - 2028 (Pursuing)',
      performance: '7.35 CGPA',
      coursework: [
        'Data Structures & Algorithms (DSA)',
        'Object-Oriented Programming (OOPs)',
        'Digital Electronics',
        'Computer Architecture',
        'C & Java Programming',
      ],
      glow: 'shadow-[0_0_15px_rgba(0,242,254,0.1)] border-neon-cyan/20',
    },
    {
      degree: 'Higher Secondary Certificate (HSC) - Grade 12',
      institution: 'Srinivasa Vidhyalaya Matric Higher Secondary School',
      duration: '2023 - 2024',
      performance: '84%',
      coursework: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Computer Science',
      ],
      glow: 'shadow-[0_0_15px_rgba(127,0,255,0.1)] border-neon-violet/20',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC) - Grade 10',
      institution: 'Srinivasa Vidhyalaya Matric Higher Secondary School',
      duration: '2021 - 2022',
      performance: '90.4%',
      coursework: [
        'Mathematics',
        'Science',
        'Social Studies',
        'English & Tamil Languages',
      ],
      glow: 'shadow-[0_0_15px_rgba(79,172,254,0.1)] border-neon-blue/20',
    },
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h4 className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2">Qualifications</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 max-w-3xl mx-auto ml-4 md:ml-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12 mb-12 group"
            >
              {/* Timeline Graduation Icon Dot */}
              <div className="absolute left-[-15px] top-1.5 w-8 h-8 rounded-full bg-[#030014] border-2 border-neon-cyan flex items-center justify-center text-neon-cyan shadow-[0_0_10px_rgba(0,242,254,0.3)] group-hover:border-neon-violet group-hover:text-neon-violet transition-colors duration-300">
                <FaGraduationCap size={14} />
              </div>

              {/* Education Card */}
              <div className={`glassmorphism p-6 md:p-8 rounded-3xl border ${edu.glow} hover:border-white/10 transition-all duration-300 relative shadow-2xl`}>
                
                {/* Year Badge */}
                <div className="flex items-center space-x-2 text-[10px] font-bold text-neon-cyan mb-2">
                  <FaCalendarAlt size={10} />
                  <span className="uppercase tracking-widest">{edu.duration}</span>
                </div>

                {/* Degree Title & Institution */}
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-200">
                  {edu.degree}
                </h3>
                <h4 className="text-sm font-semibold text-gray-400 mt-1 mb-4">
                  {edu.institution}
                </h4>

                {/* Performance Banner */}
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 mb-6">
                  <span className="font-semibold text-gray-500 uppercase tracking-widest">Performance:</span>
                  <span className="font-bold text-neon-cyan">{edu.performance}</span>
                </div>

                {/* Coursework Bullet list */}
                <div className="border-t border-white/5 pt-5">
                  <div className="flex items-center space-x-2 mb-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <FaBook size={10} />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/[0.03] text-gray-400 border border-white/5 hover:border-neon-cyan/20 hover:text-gray-200 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
