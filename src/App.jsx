import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Global / Layout Assets
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative text-gray-200 min-h-screen bg-[#030014] selection:bg-neon-cyan/30 selection:text-white">
          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Custom pointer removed to keep standard cursor */}

          {/* Drifting blobs and canvas lines */}
          <Background />

          {/* Floating Back to Top Button */}
          <BackToTop />

          {/* Navigation */}
          <Navbar />

          {/* Single Page Sections */}
          <main className="relative max-w-7xl mx-auto px-4 md:px-8 space-y-16">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Internship />
            <Education />
            <Achievements />
            <Resume />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
