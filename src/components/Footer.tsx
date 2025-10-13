import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/isaactapara', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/isaacktapara/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:isaactapara@gmail.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/254702502376', label: 'WhatsApp' },
    { icon: Twitter, href: 'https://x.com/ToxicWarlord2', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <span className="text-white font-bold">IT</span>
                  </div>
                  <span className="text-2xl font-bold">Isaac Tapara</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  A passionate software engineer and cybersecurity enthusiast dedicated to building 
                  secure, innovative solutions that make a positive impact on people's lives.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6"
              >
                Quick Links
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6"
              >
                Get In Touch
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                <div>
                  <a
                    href="mailto:isaactapara@gmail.com"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    isaactapara@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    href="https://wa.me/254702502376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    +254 702 502 376
                  </a>
                </div>
                <div className="text-gray-400">
                  Kenya
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-dark-700 pt-8 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Isaac Tapara</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 SILISIL ISAAC TAPARA. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-full shadow-lg shadow-primary-500/25 flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
