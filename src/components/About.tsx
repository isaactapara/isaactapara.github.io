import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Zap, Shield } from 'lucide-react';
import { containerVariants, itemVariants, slideInVariants, fadeInVariants } from '../types/motion';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every line of code I write considers security implications. I believe in building secure systems from the ground up.',
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'I thrive on complex challenges and enjoy breaking down problems into manageable, solvable pieces.',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Technology should serve people. I focus on creating solutions that genuinely improve users\' lives.',
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'The tech world evolves rapidly, and I stay ahead by constantly learning and adapting to new technologies.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6" />
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
              I'm a Software Engineering student at Zetech University and cybersecurity enthusiast who started my tech journey in January 2024. 
              Since joining university in September 2024, I've built 4 production applications and mastered 15+ technologies, 
              balancing academic studies with practical development work to create secure, innovative solutions that make a positive impact on people's lives.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Story */}
                    <motion.div variants={slideInVariants}>
              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-dark-700 dark:text-dark-300 leading-relaxed">
                    My journey in technology began with a curiosity about how things work and a passion for 
                    solving problems. As I delved deeper into software development, I discovered the critical 
                    importance of cybersecurity and ethical hacking in our digital world.
                  </p>
                  
                  <p className="text-dark-700 dark:text-dark-300 leading-relaxed">
                    Today, I specialize in building secure, scalable applications while promoting cybersecurity 
                    awareness. My work spans from family management platforms to cattle management systems, 
                    always with a focus on security, usability, and real-world impact.
                  </p>
                  
                  <p className="text-dark-700 dark:text-dark-300 leading-relaxed">
                    When I'm not coding, you'll find me exploring new security tools, contributing to open-source 
                    projects, or sharing knowledge with the developer community. I believe in the power of 
                    technology to create positive change while keeping users safe and secure.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">4+</div>
                    <div className="text-sm text-dark-600 dark:text-dark-400">Production Apps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent-500 mb-1">12</div>
                    <div className="text-sm text-dark-600 dark:text-dark-400">Months Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">15+</div>
                    <div className="text-sm text-dark-600 dark:text-dark-400">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent-500 mb-1">100%</div>
                    <div className="text-sm text-dark-600 dark:text-dark-400">Security Focus</div>
                  </div>
                </div>
              </div>
            </motion.div>

                    {/* Right Column - Values */}
                    <motion.div variants={fadeInVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-6">
                  My <span className="gradient-text">Values</span>
                </h3>
                
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/25">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-800 dark:text-dark-200 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-dark-600 dark:text-dark-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Award size={20} />
              <span>Let's Work Together</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
