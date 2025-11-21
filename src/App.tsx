// React import not needed in React 17+ with JSX transform
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import SmoothScroll from './components/ui/SmoothScroll';
import { useDarkMode } from './hooks/useDarkMode';
import { Terminal as TerminalIcon } from 'lucide-react';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize dark mode
  useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 'k') || e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-dark-900 dark:text-white transition-colors duration-300 bg-grid-pattern">
        <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

        {/* Floating Terminal Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsTerminalOpen(true)}
          className="fixed bottom-6 left-6 z-40 p-3 bg-dark-900 dark:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          title="Open Terminal (Ctrl+K)"
        >
          <TerminalIcon size={24} />
          <span className="absolute left-full ml-3 px-2 py-1 bg-dark-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Open Terminal (Ctrl+K)
          </span>
        </motion.button>

        <Header isScrolled={isScrolled} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
