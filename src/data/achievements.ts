export interface Achievement {
  id: string;
  title: string;
  description: string;
  shortSummary: string;
  date: string;
  type: 'certification' | 'project' | 'education' | 'award' | 'publication';
  icon: string;
  url?: string;
  organization?: string;
  impact?: string;
  technologies?: string[];
}

export const achievements: Achievement[] = [
  {
    id: 'ethical-hacking-cert',
    title: 'Professional Certificate in Ethical Hacking',
    description: 'Comprehensive certification covering penetration testing, vulnerability assessment, and ethical hacking methodologies.',
    date: '2025',
    type: 'certification',
    icon: '🛡️',
    organization: 'Cisco Networking Academy',
    url: '#'
  },
  {
    id: 'software-engineering-degree',
    title: 'Bachelor of Science in Software Engineering',
    description: 'Comprehensive education in software development, system design, and computer science fundamentals.',
    date: 'Expected 2027',
    type: 'education',
    icon: '🎓',
    organization: 'Zetech University, Kenya'
  },
  {
    id: 'famalcollections-project',
    title: 'FAMALCOLLECTIONS - Professional E-Commerce Platform',
    description: 'Built a modern, full-featured e-commerce platform specializing in premium fashion clothing and footwear. Features include complete product management with image galleries, real-time analytics for sales tracking and inventory monitoring, multi-user system with admin/worker/customer roles, secure authentication with Supabase Auth, comprehensive data export capabilities, and mobile-first responsive design. Built with React 18, TypeScript, Vite, Tailwind CSS, and Supabase backend.',
    shortSummary: 'Premium fashion e-commerce with real-time analytics & multi-user system',
    date: '2025',
    type: 'project',
    icon: '🛍️',
    url: 'https://github.com/isaactapara/FAMALCOLLECTIONS.git',
    impact: 'Complete e-commerce solution with advanced features',
    technologies: ['React 18', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vite']
  },
  {
    id: 'enkanasa-cow-project',
    title: 'ENKANASA-COW - Premium Kenyan Dairy Platform',
    description: 'Developed a premium dairy company platform for ENKANASA COW, a Kenyan dairy company based in Narok County specializing in fresh milk and dairy products from grass-fed cows. The platform showcases premium whole milk varieties, fresh milk in multiple sizes, long life milk, organic fresh milk, and a premium perfume collection with Maasai-inspired names. Built with modern web technologies including Vite, React 18+, TypeScript, Tailwind CSS, shadcn/ui components, and responsive mobile-first design.',
    shortSummary: 'Kenyan dairy brand platform with Maasai-inspired premium products',
    date: '2025',
    type: 'project',
    icon: '🥛',
    url: 'https://github.com/isaactapara/ENKANASA-COW.git',
    impact: 'Premium dairy brand showcasing Kenyan culture & products',
    technologies: ['React 18+', 'TypeScript', 'Vite', 'shadcn/ui', 'Tailwind CSS']
  },
  {
    id: 'eshipa-africa-project',
    title: 'ESHIPA-AFRICA - Hope Builders Non-Profit Platform',
    description: 'Created a comprehensive non-profit organization platform for ESHIPA Africa, dedicated to empowering children and youths, combating gender-based violence, and promoting sustainable development across Africa. Features include children & youths empowerment programs, GBV prevention and support initiatives, environmental sustainability programs, peace resilience building, economic empowerment through vocational training, community engagement tools, and strategic partnership management. Built with React 18, TypeScript, Tailwind CSS, shadcn/ui, EmailJS integration, and WCAG compliant accessibility features.',
    shortSummary: 'Non-profit platform empowering African youth & combating GBV',
    date: '2025',
    type: 'project',
    icon: '🤝',
    url: 'https://github.com/isaactapara/ESHIPA-AFRICA.git',
    impact: 'Social impact platform for African community development',
    technologies: ['React 18', 'TypeScript', 'EmailJS', 'shadcn/ui', 'WCAG Compliant']
  },
  {
    id: 'pyscanx-tool',
    title: 'PyScanX - Network Reconnaissance Tool',
    description: 'Developed a professional-grade port scanner with banner grabbing capabilities for ethical security testing.',
    shortSummary: 'Professional port scanner for ethical security testing',
    date: '2024',
    type: 'project',
    icon: '🔍',
    url: 'https://github.com/isaactapara/PyScanx',
    impact: 'Cybersecurity tool for ethical penetration testing',
    technologies: ['Python', 'Socket Programming', 'CLI', 'Multi-threading']
  },
  {
    id: 'rapid-skill-development',
    title: 'Rapid Skill Development',
    description: 'Developed full-stack development and cybersecurity skills while pursuing Software Engineering degree, building production applications alongside academic studies.',
    shortSummary: 'Mastered 15+ technologies in 12 months while studying',
    date: '2024',
    type: 'award',
    icon: '🚀',
    organization: 'Zetech University',
    impact: 'Built 4 production apps while pursuing degree'
  },
  {
    id: 'open-source-contributor',
    title: 'Open Source Contributor',
    description: 'Active contributor to various open-source projects, focusing on security tools and web development frameworks.',
    shortSummary: 'Active GitHub contributor with 1000+ stars',
    date: '2024',
    type: 'award',
    icon: '🌟',
    organization: 'GitHub Community',
    impact: 'Contributing to security tools & web frameworks'
  },
  {
    id: 'cybersecurity-advocate',
    title: 'Cybersecurity Advocate',
    description: 'Promoting cybersecurity awareness and ethical hacking practices through projects and community engagement.',
    shortSummary: 'Promoting security awareness in developer community',
    date: '2024',
    type: 'award',
    icon: '🛡️',
    organization: 'Developer Community',
    impact: 'Security-focused development practices'
  },
  {
    id: 'tech-community-engagement',
    title: 'Tech Community Engagement',
    description: 'Active participation in online tech communities, sharing knowledge and learning from experienced developers.',
    shortSummary: 'Active in tech communities & knowledge sharing',
    date: '2024',
    type: 'award',
    icon: '👥',
    organization: 'Online Tech Community',
    impact: 'Engaged with 100+ developers globally'
  }
];

export const getAchievementsByType = (type: string): Achievement[] => {
  return achievements.filter(achievement => achievement.type === type);
};

export const getRecentAchievements = (limit: number = 5): Achievement[] => {
  return achievements
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
