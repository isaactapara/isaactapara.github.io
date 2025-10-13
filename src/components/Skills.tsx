import React from 'react';
import { motion } from 'framer-motion';
import { skills, getSkillsByCategory, getTopSkills } from '../data/skills';
import { containerVariants, itemVariants, scaleInVariants } from '../types/motion';
import { 
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiVuedotjs,
  SiNodedotjs, SiPython, SiExpress, SiDjango, SiFastapi, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase,
  SiDocker, SiAmazonwebservices, SiGit, SiGithubactions, SiLinux, SiNginx,
  SiKalilinux, SiWireshark,
  SiFigma, SiPostman, SiJira, SiSlack, SiNotion
} from 'react-icons/si';

const Skills: React.FC = () => {
  // Technology icon mapping with fallback to emoji
  const getTechIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> | null } = {
      'React': SiReact,
      'TypeScript': SiTypescript,
      'Next.js': SiNextdotjs,
      'Tailwind CSS': SiTailwindcss,
      'HTML5': SiHtml5,
      'CSS3': SiCss3,
      'JavaScript': SiJavascript,
      'Vue.js': SiVuedotjs,
      'Node.js': SiNodedotjs,
      'Python': SiPython,
      'Express.js': SiExpress,
      'Django': SiDjango,
      'FastAPI': SiFastapi,
      'GraphQL': SiGraphql,
      'MongoDB': SiMongodb,
      'PostgreSQL': SiPostgresql,
      'MySQL': SiMysql,
      'Redis': SiRedis,
      'Firebase': SiFirebase,
      'Docker': SiDocker,
      'AWS': SiAmazonwebservices,
      'Git': SiGit,
      'GitHub Actions': SiGithubactions,
      'Linux': SiLinux,
      'Nginx': SiNginx,
      'Kali Linux': SiKalilinux,
      'Wireshark': SiWireshark,
      'VS Code': null, // VS Code icon not available in react-icons
      'Figma': SiFigma,
      'Postman': SiPostman,
      'Jira': SiJira,
      'Slack': SiSlack,
      'Notion': SiNotion
    };
    
    return iconMap[skillName] || null;
  };

  const categories = [
    { id: 'frontend', name: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', name: 'Backend', color: 'from-green-500 to-emerald-500' },
    { id: 'database', name: 'Database', color: 'from-purple-500 to-violet-500' },
    { id: 'devops', name: 'DevOps', color: 'from-orange-500 to-red-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', color: 'from-red-500 to-pink-500' },
    { id: 'tools', name: 'Tools', color: 'from-gray-500 to-slate-500' },
  ];

  const topSkills = getTopSkills(6);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6" />
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
              A comprehensive toolkit of technologies and frameworks I use to build secure, 
              scalable, and innovative solutions.
            </p>
          </motion.div>

            {/* Top Skills */}
            <motion.div variants={scaleInVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-8 text-center">
              Core <span className="gradient-text">Expertise</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {topSkills.map((skill, index) => {
                const IconComponent = getTechIcon(skill.name);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
                  >
                    <div className="text-3xl mb-3 flex justify-center">
                      {IconComponent ? (
                        <IconComponent className="text-primary-600 dark:text-primary-400" size={32} />
                      ) : (
                        <span className="text-3xl">{skill.icon}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-dark-800 dark:text-dark-200 mb-2">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-dark-600 dark:text-dark-400 mt-2 block">
                      {skill.level}%
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => {
              const categorySkills = getSkillsByCategory(category.id);
              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-dark-800 rounded-3xl p-8"
                >
                  <div className="flex items-center mb-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-lg">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200">
                        {category.name}
                      </h3>
                      <p className="text-dark-600 dark:text-dark-400">
                        {categorySkills.length} technologies
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = getTechIcon(skill.name);
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                            duration: 0.5 
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="bg-white dark:bg-dark-700 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-3 group"
                        >
                          <div className="text-2xl flex justify-center w-8">
                            {IconComponent ? (
                              <IconComponent className="text-primary-600 dark:text-primary-400" size={24} />
                            ) : (
                              <span className="text-2xl">{skill.icon}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-dark-800 dark:text-dark-200 text-sm">
                              {skill.name}
                            </h4>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-1">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ 
                                  delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                                  duration: 0.8 
                                }}
                                viewport={{ once: true }}
                                className={`bg-gradient-to-r ${category.color} h-1.5 rounded-full`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto mb-6">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of software development and cybersecurity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white dark:bg-dark-700 px-4 py-2 rounded-full shadow-md">
                  <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                    {skills.length} Technologies
                  </span>
                </div>
                <div className="bg-white dark:bg-dark-700 px-4 py-2 rounded-full shadow-md">
                  <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                    {categories.length} Categories
                  </span>
                </div>
                <div className="bg-white dark:bg-dark-700 px-4 py-2 rounded-full shadow-md">
                  <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                    Continuous Learning
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
