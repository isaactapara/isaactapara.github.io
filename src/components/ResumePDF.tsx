import React from 'react';
import { Mail, MapPin, Phone, Award, GraduationCap, Code, Shield, ExternalLink } from 'lucide-react';

interface ResumePDFProps {
  onDownload?: () => void;
}

const ResumePDF: React.FC<ResumePDFProps> = () => {
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
    <div className="resume-pdf bg-white text-black min-h-screen p-8 max-w-4xl mx-auto" id="resume-content">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white mb-8 rounded-lg">
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
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Shield className="mr-2 text-blue-600" size={24} />
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A results-driven Secure Software Engineer and Ethical Hacker with 3+ years of experience in full-stack development and cybersecurity. 
            Proven track record of building 5+ production-ready applications serving 1000+ users while maintaining 100% security compliance. 
            Expert in React, TypeScript, Python, Node.js, and ethical hacking methodologies. Passionate about creating secure, scalable solutions 
            that protect digital assets and promote cybersecurity awareness. Strong background in penetration testing, vulnerability assessment, 
            and secure coding practices. Committed to continuous learning and contributing to the cybersecurity community through open-source projects 
            and mentorship.
          </p>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <GraduationCap className="mr-2 text-blue-600" size={24} />
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                <span className="text-sm text-blue-600 font-medium">{edu.period}</span>
              </div>
              <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
              <p className="text-gray-600 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="mr-2 text-blue-600" size={24} />
            Certifications
          </h3>
          {certifications.map((cert, index) => (
            <div key={index} className="mb-4 p-4 bg-green-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                <span className="text-sm text-green-600 font-medium">{cert.period}</span>
              </div>
              <p className="text-green-600 font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Professional Experience */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Code className="mr-2 text-blue-600" size={24} />
            Professional Experience
          </h3>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-600 font-medium">{exp.period}</span>
              </div>
              <p className="text-gray-600 mb-3">{exp.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Projects</h3>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{project.name}</h4>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10 pt-6 border-t-2 border-blue-600">
        <p className="text-gray-600">
          This resume was generated from my portfolio at {personalInfo.website}
        </p>
        <p className="text-gray-600 mt-2">
          Last updated: October 13, 2025
        </p>
      </div>
    </div>
  );
};

export default ResumePDF;