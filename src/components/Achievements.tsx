import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, GraduationCap, Code, Shield, Trophy } from 'lucide-react';
import { getAchievementsByType, getRecentAchievements } from '../data/achievements';
import { containerVariants, itemVariants } from '../types/motion';

const Achievements: React.FC = () => {

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'certification': return Award;
      case 'education': return GraduationCap;
      case 'project': return Code;
      case 'award': return Trophy;
      case 'publication': return Shield;
      default: return Award;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'certification': return 'from-blue-500 to-cyan-500';
      case 'education': return 'from-green-500 to-emerald-500';
      case 'project': return 'from-purple-500 to-violet-500';
      case 'award': return 'from-yellow-500 to-orange-500';
      case 'publication': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const recentAchievements = getRecentAchievements(6);

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Achievements & <span className="gradient-text">Milestones</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6" />
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
              From e-commerce platforms to social impact projects - here's what I've built and achieved. 
              Each project tells a story of innovation, learning, and real-world impact.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {recentAchievements.map((achievement) => {
              const IconComponent = getTypeIcon(achievement.type);
              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Header */}
                  <div className={`h-32 bg-gradient-to-br ${getTypeColor(achievement.type)} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-4xl text-white/80">{achievement.icon}</div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <IconComponent size={16} className="text-white" />
                      </div>
                    </div>

                    {/* Date */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Calendar size={12} className="text-white" />
                        <span className="text-white text-xs font-medium">{achievement.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-800 dark:text-dark-200 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    {/* Short Summary */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg border-l-4 border-primary-500">
                      <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                        {achievement.shortSummary}
                      </p>
                    </div>

                    {/* Impact */}
                    {achievement.impact && (
                      <div className="mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300">
                          💡 {achievement.impact}
                        </span>
                      </div>
                    )}

                    {/* Technologies */}
                    {achievement.technologies && achievement.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {achievement.technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                              {tech}
                            </span>
                          ))}
                          {achievement.technologies.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                              +{achievement.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {achievement.organization && (
                      <div className="mb-4">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          🏢 {achievement.organization}
                        </span>
                      </div>
                    )}

                    {achievement.url && achievement.url !== '#' && (
                      <motion.a
                        href={achievement.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-300"
                      >
                        <span>View Project</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievement Categories */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-8 text-center">
              Achievement <span className="gradient-text">Categories</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['certification', 'education', 'project', 'award'].map((type) => {
                const typeAchievements = getAchievementsByType(type);
                const IconComponent = getTypeIcon(type);
                
                return (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-dark-700 p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${getTypeColor(type)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-dark-800 dark:text-dark-200 mb-2 capitalize">
                      {type.replace('-', ' ')}
                    </h4>
                    
                    <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {typeAchievements.length}
                    </p>
                    
                    <p className="text-sm text-dark-600 dark:text-dark-400">
                      {type === 'certification' && 'Professional certifications'}
                      {type === 'education' && 'Educational milestones'}
                      {type === 'project' && 'Completed projects'}
                      {type === 'award' && 'Recognition & awards'}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-4">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto mb-6">
                I'm always excited to work on new projects and collaborate with innovative teams. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Award size={20} />
                <span>Let's Collaborate</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
