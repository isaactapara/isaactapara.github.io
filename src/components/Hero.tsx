import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown, Code, Shield, Globe } from 'lucide-react';
import { containerVariants, itemVariants, fadeInVariants, scaleInVariants } from '../types/motion';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Secure Software Engineer',
    'Ethical Hacker',
    'Full-Stack Developer',
    'Cybersecurity Advocate',
    'Tech Innovator'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-50 via-white to-dark-100 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div variants={scaleInVariants} className="mb-8">
            <div className="relative inline-block">
              <motion.img
                src="/assets/isaac.jpg"
                alt="Isaac Tapara"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary-200 dark:border-primary-800 shadow-2xl shadow-primary-500/25"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-500 rounded-full border-2 border-white dark:border-dark-900 flex items-center justify-center shadow-lg shadow-accent-500/50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-3 h-3 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">SILISIL ISAAC</span>
            <br />
            <span className="text-dark-800 dark:text-dark-200">TAPARA</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-2xl text-dark-600 dark:text-dark-400 font-medium"
            >
              {roles[currentRole]}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building secure, scalable solutions and promoting cybersecurity awareness. 
            I create innovative software that makes a difference in people's lives while keeping them safe online.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="https://www.linkedin.com/in/isaacktapara/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Let's Connect</span>
            </motion.a>
            
          </motion.div>

          {/* Skills Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-8 opacity-60"
          >
            <motion.div
              whileHover={{ scale: 1.2, opacity: 1 }}
              className="flex items-center space-x-2 text-dark-500 dark:text-dark-500"
            >
              <Code size={24} />
              <span className="text-sm font-medium">Full-Stack</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.2, opacity: 1 }}
              className="flex items-center space-x-2 text-dark-500 dark:text-dark-500"
            >
              <Shield size={24} />
              <span className="text-sm font-medium">Security</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.2, opacity: 1 }}
              className="flex items-center space-x-2 text-dark-500 dark:text-dark-500"
            >
              <Globe size={24} />
              <span className="text-sm font-medium">Web Dev</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-dark-500 dark:text-dark-500"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
