import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Shield } from 'lucide-react';
import { projects, getFeaturedProjects, getProjectsByCategory, Project } from '../data/projects';
import { containerVariants, itemVariants } from '../types/motion';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(getFeaturedProjects());

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Development', count: getProjectsByCategory('web').length },
    { id: 'cybersecurity', name: 'Cybersecurity', count: getProjectsByCategory('cybersecurity').length },
    { id: 'mobile', name: 'Mobile Apps', count: getProjectsByCategory('mobile').length },
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(getProjectsByCategory(categoryId));
    }
  };


  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return '🌐';
      case 'cybersecurity': return '🛡️';
      case 'mobile': return '📱';
      case 'ai': return '🤖';
      case 'blockchain': return '⛓️';
      default: return '💻';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'planned': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6" />
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              cybersecurity, and innovative problem-solving.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-dark-700 text-dark-600 dark:text-dark-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  <Filter size={16} />
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 dark:bg-dark-600/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl">{getCategoryIcon(project.category)}</div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-dark-800 dark:text-dark-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        {project.githubUrl !== '#' && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
                          >
                            <ExternalLink size={18} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Key Achievements */}
                    {project.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2 flex items-center">
                          <Shield size={14} className="mr-1" />
                          Key Achievements
                        </h4>
                        <ul className="text-xs text-dark-600 dark:text-dark-400 space-y-1">
                          {project.achievements.slice(0, 2).map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action Button */}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Projects */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/isaactapara"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
