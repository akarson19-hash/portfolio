import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';

const Internship = () => {
  const certificateLink = "https://drive.google.com/file/d/1QY2egycu2Df9ljl6WF1hVznx_GUUtqWg/view";

  const details = [
    "Full-stack project architecture using MERN technologies (MongoDB, Express, React, Node.js).",
    "Gained hands-on knowledge in database modeling, routing, middleware authentication, and REST endpoints.",
    "Engineered robust authorization mechanisms using JWT (JSON Web Tokens) and bcrypt password hashing.",
    "Integrated web applications onto cloud servers (AWS EC2 & S3) with Git and automated CI/CD practices."
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h4 className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2">Work Experience</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-12 border-l border-white/10 ml-4 py-2 group"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute left-[-15px] top-6 w-8 h-8 rounded-full bg-[#030014] border-2 border-neon-cyan flex items-center justify-center text-neon-cyan shadow-[0_0_10px_rgba(0,242,254,0.3)] group-hover:border-neon-violet group-hover:text-neon-violet transition-colors duration-300">
              <FaBriefcase size={12} />
            </div>

            {/* Experience Card */}
            <div className="glassmorphism p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 relative shadow-2xl">
              
              {/* Badge Date */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 rounded-full absolute top-6 right-6">
                2025 (Completed)
              </span>

              {/* Title & Organization */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-200">
                  Full Stack Development Intern
                </h3>
                <h4 className="text-sm font-semibold text-gray-400 mt-1">
                  AlgoTutor
                </h4>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-6 leading-relaxed font-sans">
                Completed comprehensive, hands-on industrial training in full-stack web architectures. Built and deployed scalable web products, utilizing databases, secure servers, and modern web frameworks.
              </p>

              {/* Bullets */}
              <div className="space-y-3 mb-8 border-t border-white/5 pt-6">
                <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Key Accomplishments</h5>
                {details.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-neon-cyan mt-0.5 flex-shrink-0">
                      <FaCheck size={8} />
                    </div>
                    <span className="text-xs text-gray-400 leading-relaxed font-sans">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-neon-cyan text-gray-300 hover:text-black border border-white/10 hover:border-transparent flex items-center space-x-2 text-xs font-bold transition-all duration-300 hover:scale-103"
                >
                  <FaCertificate size={14} />
                  <span>Preview Certificate</span>
                </a>

                <a
                  href={certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-white flex items-center space-x-1.5 transition-colors"
                >
                  <span>Open Drive Link</span>
                  <FaExternalLinkAlt size={10} />
                </a>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Internship;
