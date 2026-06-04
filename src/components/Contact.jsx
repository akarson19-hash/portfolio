import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTerminal, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope size={18} className="text-neon-cyan" />,
      label: 'Email',
      value: 'akarson19@gmail.com',
      link: 'mailto:akarson19@gmail.com',
    },
    {
      icon: <FaPhone size={18} className="text-neon-violet" />,
      label: 'Phone',
      value: '+91 9500920070',
      link: 'tel:9500920070',
    },
    {
      icon: <FaMapMarkerAlt size={18} className="text-neon-blue" />,
      label: 'Location',
      value: 'Tamil Nadu, India',
      link: 'https://maps.google.com/?q=Tamil+Nadu,+India',
    },
  ];

  const socials = [
    { icon: <FaLinkedin size={18} />, link: 'https://www.linkedin.com/in/akarson-s-302790333/', name: 'LinkedIn' },
    { icon: <FaGithub size={18} />, link: 'https://github.com/akarson19-hash?tab=repositories', name: 'GitHub' },
    { icon: <FaTerminal size={18} />, link: 'https://www.skillrack.com/faces/resume.xhtml?id=515193&key=961e45a2ee2d3335d5061d145bd6afa5e08f3fd0', name: 'SkillRack' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h4 className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2">Get In Touch</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f2fe]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Info Cards & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white pl-1">Let's connect!</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans pl-1">
                Have a job opening, project query, or simply want to chat? Send a message or reach out via email/phone. I will get back to you as soon as possible.
              </p>

              <div className="space-y-4 pt-2">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glassmorphism p-5 rounded-2xl border border-white/5 flex items-center space-x-4 hover:border-neon-cyan/20 hover:scale-101 transition-all duration-300 group block"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/30 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{info.label}</div>
                      <div className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors mt-0.5">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Block */}
            <div className="glassmorphism p-6 rounded-2xl border border-white/5">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Follow me on</div>
              <div className="flex space-x-4">
                {socials.map((soc, index) => (
                  <a
                    key={index}
                    href={soc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    title={soc.name}
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-neon-violet/5 blur-[50px] pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Akarson S"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#030014]/60 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_8px_rgba(0,242,254,0.15)] transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      placeholder="akarson19@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#030014]/60 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_8px_rgba(0,242,254,0.15)] transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    placeholder="Hello, Akarson!"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#030014]/60 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_8px_rgba(0,242,254,0.15)] transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#030014]/60 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_8px_rgba(0,242,254,0.15)] transition-all resize-none font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(0,242,254,0.2)] hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] disabled:opacity-50 transition-all duration-300"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <FaPaperPlane size={12} />
                        <span>Send Secure Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Success Notification overlay */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#030014]/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 10 }}
                      className="text-neon-cyan mb-4"
                    >
                      <FaCheckCircle size={60} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent Securely!</h3>
                    <p className="text-xs text-gray-400 max-w-xs font-sans leading-relaxed">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
