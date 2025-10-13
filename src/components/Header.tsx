import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/isaactapara', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/isaacktapara/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:isaactapara@gmail.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/254702502376', label: 'WhatsApp' },
    { icon: Twitter, href: 'https://x.com/ToxicWarlord2', label: 'Twitter' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/25">
              <span className="text-white font-bold text-sm">IT</span>
            </div>
            <span className="font-bold text-lg gradient-text">Isaac Tapara</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-dark-700 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Social Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-2 text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-t border-dark-200 dark:border-dark-700"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-dark-700 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 font-medium py-2"
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-dark-200 dark:border-dark-700">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-2 text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
