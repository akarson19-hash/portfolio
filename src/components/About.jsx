import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLaptopCode, FaDatabase, FaJava, FaReact, FaBookReader } from 'react-icons/fa';

const CountUp = ({ to, duration = 1.5, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(to);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const timelineData = [
    {
      icon: <FaLaptopCode className="text-neon-cyan" />,
      title: 'Full Stack Development',
      desc: 'Building responsive, feature-rich web products by coupling MERN technologies with robust database schemes.',
      glow: 'shadow-[0_0_15px_rgba(0,242,254,0.15)] border-neon-cyan/20',
    },
    {
      icon: <FaDatabase className="text-neon-blue" />,
      title: 'Backend Architecture',
      desc: 'Formulating structured RESTful APIs, securing transactions with JWT, and managing entity relations with Spring Boot and JPA.',
      glow: 'shadow-[0_0_15px_rgba(79,172,254,0.15)] border-neon-blue/20',
    },
    {
      icon: <FaJava className="text-orange-500" />,
      title: 'Java Programming',
      desc: 'Leveraging core Java concepts, object-oriented design, and design patterns to solve algorithmic and logical challenges.',
      glow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)] border-orange-500/20',
    },
    {
      icon: <FaReact className="text-neon-violet" />,
      title: 'MERN Stack Development',
      desc: 'Developing single-page client states using React Redux/Context and building corresponding Express configurations.',
      glow: 'shadow-[0_0_15px_rgba(127,0,255,0.15)] border-neon-violet/20',
    },
    {
      icon: <FaBookReader className="text-emerald-500" />,
      title: 'Continuous Learning',
      desc: 'Acquiring certifications, solving coding challenges on Leetcode, and constantly keeping up with modern software conventions.',
      glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)] border-emerald-500/20',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2"
          >
            History & Background
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-sans"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Block */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glassmorphism p-8 rounded-3xl border border-white/5 space-y-5"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 border-b border-white/5 pb-5">
                {/* Circular Profile Image with glowing border */}
                <div className="relative w-20 h-20 rounded-full p-1 bg-white/[0.02] border border-white/10 shadow-[0_0_20px_rgba(0,242,254,0.15)] flex-shrink-0 neon-cyan-border">
                  <img
                    src="/profile.jpeg"
                    alt="Akarson S Thumbnail"
                    className="w-full h-full object-cover rounded-full border border-white/5"
                  />
                  <div className="absolute inset-1 border border-neon-cyan/25 rounded-full" />
                </div>
                
                <div className="text-center sm:text-left space-y-1 self-center">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Hi, I'm Akarson S
                  </h3>
                  <p className="text-xs text-neon-cyan font-bold tracking-widest uppercase">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-sans">
                A passionate Full Stack Developer with a strong interest in building scalable, secure, and user-friendly web applications. I have experience in Java, Spring Boot, the MERN Stack, and modern cloud deployment configurations.
              </p>
              <p className="text-gray-400 leading-relaxed font-sans">
                I enjoy solving complex technical puzzles, mapping database models, and designing premium user interfaces. I continuously learn new systems to build clean, maintainable code for real-world projects.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-neon-cyan pl-3">
                  <div className="text-xs text-gray-500 font-medium">LOCATION</div>
                  <div className="text-sm font-semibold text-gray-300">Tamil Nadu, India</div>
                </div>
                <div className="border-l-2 border-neon-violet pl-3">
                  <div className="text-xs text-gray-500 font-medium">DEGREE</div>
                  <div className="text-sm font-semibold text-gray-300">B.E. in ECE</div>
                </div>
              </div>
            </motion.div>

            {/* Achievement Counters Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glassmorphism p-6 rounded-2xl border border-white/5 text-center hover:border-white/10 transition-colors">
                <div className="text-3xl font-extrabold text-neon-cyan glow-text-cyan">
                  <CountUp to="1000" suffix="+" />
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">SkillRack Solved</div>
              </div>

              <div className="glassmorphism p-6 rounded-2xl border border-white/5 text-center hover:border-white/10 transition-colors">
                <div className="text-3xl font-extrabold text-neon-blue">
                  <CountUp to="150" suffix="+" />
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">LeetCode Solved</div>
              </div>

              <div className="glassmorphism p-6 rounded-2xl border border-white/5 text-center hover:border-white/10 transition-colors">
                <div className="text-3xl font-extrabold text-neon-violet">
                  7.35
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">College CGPA</div>
              </div>

              <div className="glassmorphism p-6 rounded-2xl border border-white/5 text-center hover:border-white/10 transition-colors">
                <div className="text-3xl font-extrabold text-emerald-400">
                  <CountUp to="1" />
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">MERN Internship</div>
              </div>
            </div>
          </div>

          {/* Timeline Style Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-300 mb-2 pl-2">Professional Focus Area</h3>
            <div className="relative border-l border-white/10 ml-4 space-y-6">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-[-9px] top-1.5 w-4.5 h-4.5 rounded-full bg-dark-bg border-[3px] border-neon-cyan group-hover:border-neon-violet transition-colors duration-300 timeline-dot" />

                  {/* Tech Card */}
                  <div className={`glassmorphism p-5 rounded-2xl border ${item.glow} group-hover:translate-x-1 transition-transform duration-300`}>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/5 text-base">
                        {item.icon}
                      </div>
                      <h4 className="text-base font-bold text-gray-200">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
