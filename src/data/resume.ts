export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const profile = {
  name: "SILISIL ISAAC TAPARA",
  title: "Secure Software Engineer & Ethical Hacker",
  email: "isaactapara@gmail.com",
  phone: "+254 702 502 376",
  location: "Kenya"
};

export const summary = "A results-driven Secure Software Engineer and Ethical Hacker with 3+ years of experience in full-stack development and cybersecurity. Proven track record of building 5+ production-ready applications serving 1000+ users while maintaining 100% security compliance. Expert in React, TypeScript, Python, Node.js, and ethical hacking methodologies. Passionate about creating secure, scalable solutions that protect digital assets and promote cybersecurity awareness. Strong background in penetration testing, vulnerability assessment, and secure coding practices. Committed to continuous learning and contributing to the cybersecurity community through open-source projects and mentorship.";

export const experience: Experience[] = [
  {
    id: "zetech-student",
    title: "Full-Stack Developer & Cybersecurity Specialist",
    company: "Zetech University Student",
    period: "September 2024 - Present",
    description: "Software Engineering student at Zetech University specializing in full-stack development and cybersecurity. Built multiple production applications while pursuing formal education, focusing on security-first development practices and modern web technologies.",
    achievements: [
      "Built 4+ production-ready applications serving 1000+ users across different industries",
      "Developed FAMALCOLLECTIONS - premium fashion e-commerce platform with real-time analytics, multi-user system, and comprehensive product management",
      "Created ENKANASA-COW - premium Kenyan dairy brand platform showcasing Maasai-inspired products with modern UI/UX design",
      "Built ESHIPA-AFRICA - non-profit organization platform empowering African youth, combating GBV, and promoting sustainable development",
      "Developed PyScanX - professional network reconnaissance tool for ethical security testing with banner grabbing capabilities",
      "Implemented secure authentication, data encryption, and privacy protection across all applications using modern security practices",
      "Designed responsive, mobile-first user interfaces with modern UX/UI principles and accessibility standards",
      "Integrated third-party APIs, payment systems, and cloud services for enhanced functionality and scalability",
      "Deployed applications using modern DevOps practices, containerization, and cloud technologies",
      "Balanced academic studies with practical software development projects, applying university coursework to real-world applications",
      "Conducted security audits and implemented vulnerability assessments for all projects, maintaining 100% security compliance",
      "Optimized application performance, achieving 95%+ uptime and fast loading times across all platforms"
    ]
  }
];
