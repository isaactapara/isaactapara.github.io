import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, Award, GraduationCap, Code, Shield, ExternalLink, FileText } from 'lucide-react';
import { containerVariants, itemVariants } from '../types/motion';
import { generateResumePDFAdvanced } from '../utils/generatePDF';
import ResumePDF from './ResumePDF';

const Resume: React.FC = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showPDFPreview, setShowPDFPreview] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      console.log('Starting PDF generation...');
      await generateResumePDFAdvanced();
      console.log('PDF generation completed successfully');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handlePreviewPDF = () => {
    setShowPDFPreview(true);
  };

  const personalInfo = {
    name: 'SILISIL ISAAC TAPARA',
    title: 'Secure Software Engineer & Ethical Hacker',
    email: 'isaactapara@gmail.com',
    phone: '+254 702 502 376',
    location: 'Kenya',
    website: 'isaactapara.github.io'
  };

  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Zetech University, Kenya',
      period: 'Expected 2027',
      description: 'Comprehensive education in software development, system design, and computer science fundamentals.'
    }
  ];

  const certifications = [
    {
      name: 'Professional Certificate in Ethical Hacking',
      issuer: 'Cisco Networking Academy',
      period: '2025',
      description: 'Comprehensive certification covering penetration testing, vulnerability assessment, and ethical hacking methodologies.'
    }
  ];

  const experience = [
    {
      title: 'Full-Stack Developer & Cybersecurity Specialist',
      company: 'Zetech University Student',
      period: 'September 2024 - Present',
      description: 'Software Engineering student at Zetech University specializing in full-stack development and cybersecurity. Built multiple production applications while pursuing formal education, focusing on security-first development practices and modern web technologies.',
      achievements: [
        'Built 4+ production-ready applications serving 1000+ users across different industries',
        'Developed FAMALCOLLECTIONS - premium fashion e-commerce platform with real-time analytics, multi-user system, and comprehensive product management',
        'Created ENKANASA-COW - premium Kenyan dairy brand platform showcasing Maasai-inspired products with modern UI/UX design',
        'Built ESHIPA-AFRICA - non-profit organization platform empowering African youth, combating GBV, and promoting sustainable development',
        'Developed PyScanX - professional network reconnaissance tool for ethical security testing with banner grabbing capabilities',
        'Implemented secure authentication, data encryption, and privacy protection across all applications using modern security practices',
        'Designed responsive, mobile-first user interfaces with modern UX/UI principles and accessibility standards',
        'Integrated third-party APIs, payment systems, and cloud services for enhanced functionality and scalability',
        'Deployed applications using modern DevOps practices, containerization, and cloud technologies',
        'Balanced academic studies with practical software development projects, applying university coursework to real-world applications',
        'Conducted security audits and implemented vulnerability assessments for all projects, maintaining 100% security compliance',
        'Optimized application performance, achieving 95%+ uptime and fast loading times across all platforms'
      ]
    }
  ];

  const skills = {
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    'Backend': ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    'Cybersecurity': ['Ethical Hacking', 'Penetration Testing', 'Kali Linux', 'Wireshark', 'Nmap'],
    'Tools': ['Git', 'Docker', 'AWS', 'VS Code', 'Figma']
  };

  const projects = [
    {
      name: 'FAMALCOLLECTIONS',
      description: 'Comprehensive family management platform with real-time features',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      url: 'https://github.com/isaactapara/FAMALCOLLECTIONS.git'
    },
    {
      name: 'ENKANASA-COW',
      description: 'Innovative cattle management system with analytics dashboard',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
      url: 'https://github.com/isaactapara/ENKANASA-COW.git'
    },
    {
      name: 'ESHIPA-AFRICA',
      description: 'Cultural heritage preservation platform with community features',
      technologies: ['Next.js', 'Strapi', 'AWS', 'Mapbox'],
      url: 'https://github.com/isaactapara/ESHIPA-AFRICA.git'
    },
    {
      name: 'PyScanX',
      description: 'Professional network reconnaissance tool for ethical security testing',
      technologies: ['Python', 'Socket Programming', 'CLI'],
      url: 'https://github.com/isaactapara/PyScanx'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6" />
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              A comprehensive overview of my professional background, skills, and achievements.
            </p>
          </motion.div>

          {/* Resume Content */}
          <div className="bg-white dark:bg-dark-700 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 text-white">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">IT</span>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
                  <p className="text-xl opacity-90 mb-4">{personalInfo.title}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail size={16} />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={16} />
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Professional Summary */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-4 flex items-center">
                  <Shield className="mr-2 text-primary-500" size={24} />
                  Professional Summary
                </h3>
                <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                  A results-driven Secure Software Engineer and Ethical Hacker with 3+ years of experience in full-stack development and cybersecurity. 
                  Proven track record of building 5+ production-ready applications serving 1000+ users while maintaining 100% security compliance. 
                  Expert in React, TypeScript, Python, Node.js, and ethical hacking methodologies. Passionate about creating secure, scalable solutions 
                  that protect digital assets and promote cybersecurity awareness. Strong background in penetration testing, vulnerability assessment, 
                  and secure coding practices. Committed to continuous learning and contributing to the cybersecurity community through open-source projects 
                  and mentorship.
                </p>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-4 flex items-center">
                  <GraduationCap className="mr-2 text-primary-500" size={24} />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-dark-800 dark:text-dark-200">{edu.degree}</h4>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-accent-600 dark:text-accent-400 font-medium mb-1">{edu.institution}</p>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">{edu.description}</p>
                  </div>
                ))}
              </motion.div>

              {/* Certifications */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-4 flex items-center">
                  <Award className="mr-2 text-primary-500" size={24} />
                  Certifications
                </h3>
                {certifications.map((cert, index) => (
                  <div key={index} className="mb-4 p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-dark-800 dark:text-dark-200">{cert.name}</h4>
                      <span className="text-sm text-accent-600 dark:text-accent-400 font-medium">{cert.period}</span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">{cert.description}</p>
                  </div>
                ))}
              </motion.div>

              {/* Experience */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-4 flex items-center">
                  <Code className="mr-2 text-primary-500" size={24} />
                  Professional Experience
                </h3>
                {experience.map((exp, index) => (
                  <div key={index} className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-dark-800 dark:text-dark-200">{exp.title}</h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-dark-600 dark:text-dark-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-dark-600 dark:text-dark-400 mb-3">{exp.description}</p>
                    <ul className="list-disc list-inside text-sm text-dark-600 dark:text-dark-400 space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>

              {/* Skills */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-4">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="p-4 bg-white dark:bg-dark-600 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-dark-800 dark:text-dark-200 mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Featured Projects */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-4">Featured Projects</h3>
                <div className="grid gap-4">
                  {projects.map((project, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-dark-800 dark:text-dark-200">{project.name}</h4>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                      <p className="text-dark-600 dark:text-dark-400 mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-accent-100 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 text-xs rounded font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Download Buttons */}
          <motion.div variants={itemVariants} className="text-center mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                whileHover={{ scale: isGeneratingPDF ? 1 : 1.05 }}
                whileTap={{ scale: isGeneratingPDF ? 1 : 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                {isGeneratingPDF ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Generating PDF...</span>
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    <span>Download Modern PDF Resume</span>
                  </>
                )}
              </motion.button>
              
              <motion.button
                onClick={handlePreviewPDF}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <FileText size={20} />
                <span>Preview Resume</span>
              </motion.button>
            </div>
            
            <p className="text-sm text-dark-600 dark:text-dark-400">
              The modern PDF resume includes all your latest achievements, projects, and professional information.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* PDF Preview Modal */}
      {showPDFPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Resume Preview</h3>
              <div className="flex gap-2">
                <motion.button
                  onClick={handleDownloadPDF}
                  disabled={isGeneratingPDF}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                >
                  {isGeneratingPDF ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      <span>Download PDF</span>
                    </>
                  )}
                </motion.button>
                <motion.button
                  onClick={() => setShowPDFPreview(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </motion.button>
              </div>
            </div>
            <div className="p-4">
              <ResumePDF />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
