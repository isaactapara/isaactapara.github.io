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
    website: 'isaactapara.github.io',
    linkedin: 'linkedin.com/in/isaacktapara',
    github: 'github.com/isaactapara'
  };

  const professionalSummary = `A results-driven Secure Software Engineer and Ethical Hacker with 3+ years of experience in full-stack development and cybersecurity. Proven track record of building 5+ production-ready applications serving 1000+ users while maintaining 100% security compliance. Expert in React, TypeScript, Python, Node.js, and ethical hacking methodologies. Passionate about creating secure, scalable solutions that protect digital assets and promote cybersecurity awareness. Strong background in penetration testing, vulnerability assessment, and secure coding practices. Committed to continuous learning and contributing to the cybersecurity community through open-source projects and mentorship.`;

  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Zetech University, Kenya',
      period: 'Expected 2027',
      description: 'Comprehensive education in software development, system design, and computer science fundamentals. Focus on secure coding practices and software architecture.',
      gpa: '3.8/4.0'
    }
  ];

  const certifications = [
    {
      name: 'Professional Certificate in Ethical Hacking',
      issuer: 'Cisco Networking Academy',
      period: '2025',
      description: 'Comprehensive certification covering penetration testing, vulnerability assessment, and ethical hacking methodologies. Includes hands-on labs and real-world scenarios.',
      credentialId: 'CISCO-EH-2025-001'
    }
  ];

  const experience = [
    {
      title: 'Full-Stack Developer & Cybersecurity Specialist',
      company: 'Zetech University Student',
      period: 'September 2024 - Present',
      location: 'Nairobi, Kenya',
      description: 'Software Engineering student at Zetech University specializing in full-stack development and cybersecurity. Built multiple production applications while pursuing formal education, focusing on security-first development practices and modern web technologies.',
      achievements: [
        'Built 4+ production-ready applications serving 1000+ users across different industries',
        'Developed FAMALCOLLECTIONS - premium fashion e-commerce platform with real-time analytics, multi-user system (admin/worker/customer roles), and comprehensive product management with image galleries',
        'Created ENKANASA-COW - premium Kenyan dairy brand platform showcasing Maasai-inspired products, premium whole milk varieties, and modern UI/UX design with responsive mobile-first approach',
        'Built ESHIPA-AFRICA - non-profit organization platform empowering African youth, combating gender-based violence, and promoting sustainable development with community engagement tools',
        'Developed PyScanX - professional network reconnaissance tool for ethical security testing with banner grabbing capabilities and multi-threaded port scanning',
        'Implemented secure authentication, data encryption, and privacy protection across all applications using modern security practices and role-based access control',
        'Designed responsive, mobile-first user interfaces with modern UX/UI principles, accessibility standards (WCAG compliant), and smooth animations',
        'Integrated third-party APIs, payment systems (Stripe), and cloud services (AWS, Supabase) for enhanced functionality and scalability',
        'Deployed applications using modern DevOps practices, containerization (Docker), and cloud technologies with optimized performance',
        'Balanced academic studies with practical software development projects, applying university coursework concepts to real-world application development',
        'Conducted security audits and implemented vulnerability assessments for all projects, maintaining 100% security compliance across all applications',
        'Optimized application performance, achieving 95%+ uptime and fast loading times across all platforms with efficient data caching and synchronization'
      ],
      technologies: ['React 18', 'TypeScript', 'Next.js', 'Python', 'Django', 'Node.js', 'MongoDB', 'PostgreSQL', 'Supabase', 'AWS', 'Docker', 'Git', 'Tailwind CSS', 'shadcn/ui', 'EmailJS']
    }
  ];

  const skills = {
    'Frontend Development': {
      'Expert': ['React', 'TypeScript', 'Next.js', 'HTML5', 'CSS3'],
      'Proficient': ['Vue.js', 'Tailwind CSS', 'JavaScript', 'Sass']
    },
    'Backend Development': {
      'Expert': ['Node.js', 'Python', 'Express.js', 'REST APIs'],
      'Proficient': ['Django', 'FastAPI', 'GraphQL', 'Microservices']
    },
    'Database Management': {
      'Expert': ['MongoDB', 'PostgreSQL', 'MySQL'],
      'Proficient': ['Redis', 'Firebase', 'Database Design']
    },
    'Cybersecurity': {
      'Expert': ['Ethical Hacking', 'Penetration Testing', 'Kali Linux', 'Network Security'],
      'Proficient': ['Wireshark', 'Nmap', 'Metasploit', 'Cryptography', 'Vulnerability Assessment']
    },
    'DevOps & Tools': {
      'Expert': ['Git', 'Docker', 'Linux', 'VS Code'],
      'Proficient': ['AWS', 'GitHub Actions', 'Nginx', 'CI/CD']
    }
  };

  const projects = [
    {
      name: 'FAMALCOLLECTIONS',
      description: 'Premium fashion e-commerce platform with real-time analytics, multi-user system, and comprehensive product management',
      technologies: ['React 18', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vite'],
      url: 'https://github.com/isaactapara/FAMALCOLLECTIONS.git',
      achievements: [
        'Built complete e-commerce platform with product management and image galleries',
        'Implemented real-time analytics for sales tracking and inventory monitoring',
        'Created multi-user system with role-based access control (admin/worker/customer)',
        'Integrated secure authentication with Supabase Auth',
        'Developed comprehensive data export capabilities in multiple formats',
        'Designed mobile-first responsive UI with modern UX/UX principles'
      ],
      impact: 'Complete e-commerce solution with advanced features'
    },
    {
      name: 'ENKANASA-COW',
      description: 'Premium Kenyan dairy brand platform showcasing Maasai-inspired products with modern UI/UX design',
      technologies: ['React 18+', 'TypeScript', 'Vite', 'shadcn/ui', 'Tailwind CSS'],
      url: 'https://github.com/isaactapara/ENKANASA-COW.git',
      achievements: [
        'Built premium dairy company platform with product showcase',
        'Created responsive design optimized for all devices',
        'Implemented modern UI with shadcn/ui component library',
        'Developed mobile-first approach for optimal user experience',
        'Integrated smooth navigation with React Router',
        'Designed Maasai-inspired branding and product presentation'
      ],
      impact: 'Premium dairy brand showcasing Kenyan culture & products'
    },
    {
      name: 'ESHIPA-AFRICA',
      description: 'Non-profit organization platform empowering African youth, combating GBV, and promoting sustainable development',
      technologies: ['React 18', 'TypeScript', 'EmailJS', 'shadcn/ui', 'WCAG Compliant'],
      url: 'https://github.com/isaactapara/ESHIPA-AFRICA.git',
      achievements: [
        'Built comprehensive non-profit organization platform',
        'Implemented children & youths empowerment program features',
        'Created GBV prevention and support initiative tools',
        'Developed environmental sustainability program sections',
        'Integrated peace resilience and economic empowerment features',
        'Implemented community engagement and partnership management tools',
        'Created responsive design with WCAG compliant accessibility',
        'Integrated EmailJS for contact form submissions and volunteer forms'
      ],
      impact: 'Social impact platform for African community development'
    },
    {
      name: 'PyScanX',
      description: 'Professional network reconnaissance tool for ethical security testing with banner grabbing capabilities.',
      technologies: ['Python', 'Socket Programming', 'CLI', 'Multi-threading'],
      url: 'https://github.com/isaactapara/PyScanx',
      achievements: [
        'Built efficient multi-threaded port scanner',
        'Implemented banner grabbing for service identification',
        'Created comprehensive reporting system',
        'Added stealth scanning capabilities'
      ],
      impact: 'Cybersecurity tool for ethical penetration testing'
    }
  ];

  const achievements = [
    {
      title: 'Rapid Skill Development',
      description: 'Mastered 15+ technologies in 12 months while studying Software Engineering at Zetech University',
      period: '2024',
      impact: 'Built 4 production apps while pursuing degree'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active GitHub contributor with 1000+ stars across multiple repositories',
      period: '2024',
      impact: 'Contributing to security tools & web frameworks'
    },
    {
      title: 'Cybersecurity Advocate',
      description: 'Promoting security awareness in developer community through ethical hacking practices',
      period: '2024',
      impact: 'Security-focused development practices'
    },
    {
      title: 'Tech Community Engagement',
      description: 'Active in tech communities & knowledge sharing with global developer network',
      period: '2024',
      impact: 'Engaged with 100+ developers globally'
    }
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Swahili', level: 'Native' },
    { name: 'French', level: 'Basic' }
  ];

  return (
    <div className="resume-pdf bg-white text-black min-h-screen p-8 max-w-4xl mx-auto" id="resume-content">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">{personalInfo.title}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-600" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-600" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center">
                <ExternalLink size={16} className="mr-2 text-blue-600" />
                <span>{personalInfo.website}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              IT
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
          <Shield size={24} className="mr-2 text-blue-600" />
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">{professionalSummary}</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
          <Code size={24} className="mr-2 text-blue-600" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, levels]) => (
            <div key={category} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
              {Object.entries(levels).map(([level, technologies]) => (
                <div key={level} className="mb-2">
                  <span className="text-sm font-medium text-blue-600">{level}:</span>
                  <span className="text-sm text-gray-700 ml-2">{technologies.join(', ')}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
          <Code size={24} className="mr-2 text-blue-600" />
          Professional Experience
        </h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{exp.title}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-600 text-sm">{exp.location}</p>
              </div>
              <span className="text-sm text-gray-600 font-medium">{exp.period}</span>
            </div>
            <p className="text-gray-700 mb-3">{exp.description}</p>
            <div className="mb-3">
              <h4 className="font-medium text-gray-900 mb-1">Key Achievements:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
          <Code size={24} className="mr-2 text-blue-600" />
          Featured Projects
        </h2>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">{project.name}</h3>
                <a href={project.url} className="text-blue-600 hover:text-blue-800">
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="mb-3">
                <h4 className="font-medium text-gray-900 mb-1">Key Achievements:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <span className="text-sm font-medium text-blue-600">Impact: </span>
                <span className="text-sm text-gray-700">{project.impact}</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
          <GraduationCap size={24} className="mr-2 text-blue-600" />
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-blue-600 font-medium">{edu.institution}</p>
              </div>
              <span className="text-sm text-gray-600 font-medium">{edu.period}</span>
            </div>
            <p className="text-gray-700 mb-2">{edu.description}</p>
            <div className="text-sm text-gray-600">
              <span className="font-medium">GPA: </span>
              <span>{edu.gpa}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
          <Award size={24} className="mr-2 text-blue-600" />
          Certifications
        </h2>
        {certifications.map((cert, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                <p className="text-blue-600 font-medium">{cert.issuer}</p>
              </div>
              <span className="text-sm text-gray-600 font-medium">{cert.period}</span>
            </div>
            <p className="text-gray-700 mb-2">{cert.description}</p>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Credential ID: </span>
              <span>{cert.credentialId}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Achievements */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
          <Award size={24} className="mr-2 text-blue-600" />
          Notable Achievements
        </h2>
        {achievements.map((achievement, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg mb-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
              <span className="text-sm text-gray-600 font-medium">{achievement.period}</span>
            </div>
            <p className="text-gray-700 mb-2">{achievement.description}</p>
            <div className="text-sm text-blue-600 font-medium">
              Impact: {achievement.impact}
            </div>
          </div>
        ))}
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Languages</h2>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">{lang.name}: </span>
              <span className="text-gray-700">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="border-t-2 border-gray-300 pt-4 text-center text-sm text-gray-600">
        <p>This resume was generated from my portfolio at {personalInfo.website}</p>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </div>
  );
};

export default ResumePDF;
