import React from 'react';
import { motion } from 'framer-motion';
import { fadeInVariants, scaleInVariants } from '../types/motion';
import { profile, summary, experience } from '../data/resume';
import { achievements } from '../data/achievements';
import { skills } from '../data/skills';
import { projects } from '../data/projects';

const Resume: React.FC = () => {
  const education = achievements.filter(a => a.type === 'education');
  const certifications = achievements.filter(a => a.type === 'certification');
  const featuredProjects = projects.filter(p => p.featured);

  // Group skills by category for display
  const skillCategories = {
    Frontend: skills.filter(s => s.category === 'frontend'),
    Backend: skills.filter(s => s.category === 'backend'),
    Database: skills.filter(s => s.category === 'database'),
    Cybersecurity: skills.filter(s => s.category === 'cybersecurity'),
    Tools: skills.filter(s => s.category === 'tools' || s.category === 'devops'),
  };

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleInVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-300 mb-8">My professional journey and achievements</p>

          <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-blue-500/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="bg-gray-800 rounded-lg p-8 mb-8"
        >
          <div className="mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
              <p className="text-lg text-blue-400 mb-2">{profile.title}</p>
              <div className="text-gray-300 space-y-1">
                <p>📧 {profile.email}</p>
                <p>📱 {profile.phone}</p>
                <p>📍 {profile.location}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Professional Summary</h4>
              <p className="text-gray-300 leading-relaxed">
                {summary}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Education</h4>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-gray-700 p-4 rounded-lg">
                    <h5 className="text-lg font-medium text-white">{edu.title}</h5>
                    <p className="text-blue-400 font-medium">{edu.date}</p>
                    <p className="text-gray-300">{edu.organization}</p>
                    <p className="text-gray-400 text-sm mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Certifications</h4>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-gray-700 p-4 rounded-lg">
                    <h5 className="text-lg font-medium text-white">{cert.title}</h5>
                    <p className="text-blue-400 font-medium">{cert.date}</p>
                    <p className="text-gray-300">{cert.organization}</p>
                    <p className="text-gray-400 text-sm mt-2">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Professional Experience</h4>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id} className="bg-gray-700 p-4 rounded-lg">
                    <h5 className="text-lg font-medium text-white">{exp.title}</h5>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-300">{exp.period}</p>
                    <p className="text-gray-400 text-sm mt-2 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <div key={index} className="text-gray-300">• {achievement}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(skillCategories).map(([category, categorySkills]) => (
                  categorySkills.length > 0 && (
                    <div key={category} className="bg-gray-700 p-4 rounded-lg">
                      <h5 className="text-white font-medium mb-2">{category}</h5>
                      <p className="text-gray-300 text-sm">
                        {categorySkills.map(s => s.name).join(', ')}
                      </p>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Featured Projects</h4>
              <div className="space-y-4">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                    <h5 className="text-white font-medium mb-2">{project.title}</h5>
                    <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                    <p className="text-blue-400 text-sm"><strong>Technologies:</strong> {project.technologies.slice(0, 4).join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
