// React import not needed in React 17+ with JSX transform
import { motion } from 'framer-motion';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main Content */}
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Resume />
          <Contact />
        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
