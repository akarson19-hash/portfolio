import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaEyeSlash, FaGoogleDrive, FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);
  const driveLink = "https://drive.google.com/file/d/1iSrEqAfQ_LAhL9oQSXiee6oHhbaa70CU/view";
  const pdfLocalPath = "/Resume.pdf";

  return (
    <section id="resume" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h4 className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2">Curriculum Vitae</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Main Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full glassmorphism p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl mb-12"
          >
            {/* Ambient Corner Blur */}
            <div className="absolute top-0 left-0 w-36 h-36 rounded-full bg-neon-cyan/5 blur-[50px] pointer-events-none" />

            <div className="flex items-center space-x-5 text-center md:text-left mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan shadow-[0_0_15px_rgba(0,242,254,0.15)] flex-shrink-0">
                <FaFilePdf size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Akarson_Resume.pdf</h3>
                <p className="text-xs text-gray-500 font-sans">Format: PDF Document • Size: ~196 KB • Updated: June 2026</p>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="flex flex-wrap gap-3.5 justify-center">
              <a
                href={pdfLocalPath}
                download="Akarson_S_Resume.pdf"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold text-sm flex items-center space-x-2 shadow-[0_0_15px_rgba(0,242,254,0.2)] hover:scale-105 transition-all duration-300"
              >
                <FaDownload size={14} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-300 font-semibold text-sm flex items-center space-x-2 hover:bg-white/10 hover:border-neon-cyan/40 hover:text-neon-cyan transition-all duration-300"
              >
                {showPreview ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                <span>{showPreview ? 'Hide Preview' : 'Preview Resume'}</span>
              </button>

              <a
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-white/5 bg-transparent text-gray-400 font-semibold text-sm flex items-center space-x-2 hover:text-white transition-colors duration-200"
              >
                <FaGoogleDrive size={14} className="opacity-70" />
                <span>Google Drive</span>
              </a>
            </div>
          </motion.div>

          {/* Embedded Preview Frame Container */}
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '700px' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full glassmorphism rounded-3xl border border-white/5 overflow-hidden shadow-2xl p-2.5 relative"
            >
              {/* PDF Viewer */}
              <iframe
                src={`${pdfLocalPath}#toolbar=0&navpanes=0&scrollbar=0`}
                title="Akarson S Resume PDF Viewer"
                className="w-full h-full rounded-2xl bg-white/5"
                style={{ border: 'none' }}
              />
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Resume;
