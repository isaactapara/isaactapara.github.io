export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'cybersecurity' | 'tools';
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: '▲' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend', icon: '🎨' },
  { name: 'HTML5', level: 95, category: 'frontend', icon: '🌐' },
  { name: 'CSS3', level: 92, category: 'frontend', icon: '💅' },
  { name: 'JavaScript', level: 90, category: 'frontend', icon: '🟨' },
  { name: 'Vue.js', level: 75, category: 'frontend', icon: '💚' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
  { name: 'Python', level: 88, category: 'backend', icon: '🐍' },
  { name: 'Express.js', level: 82, category: 'backend', icon: '🚀' },
  { name: 'Django', level: 80, category: 'backend', icon: '🎸' },
  { name: 'FastAPI', level: 75, category: 'backend', icon: '⚡' },
  { name: 'REST APIs', level: 90, category: 'backend', icon: '🔗' },
  { name: 'GraphQL', level: 70, category: 'backend', icon: '📊' },
  
  // Database
  { name: 'MongoDB', level: 85, category: 'database', icon: '🍃' },
  { name: 'PostgreSQL', level: 80, category: 'database', icon: '🐘' },
  { name: 'MySQL', level: 78, category: 'database', icon: '🗄️' },
  { name: 'Redis', level: 75, category: 'database', icon: '🔴' },
  { name: 'Firebase', level: 80, category: 'database', icon: '🔥' },
  
  // DevOps
  { name: 'Docker', level: 80, category: 'devops', icon: '🐳' },
  { name: 'AWS', level: 75, category: 'devops', icon: '☁️' },
  { name: 'Git', level: 90, category: 'devops', icon: '📝' },
  { name: 'GitHub Actions', level: 78, category: 'devops', icon: '⚙️' },
  { name: 'Linux', level: 85, category: 'devops', icon: '🐧' },
  { name: 'Nginx', level: 70, category: 'devops', icon: '🌐' },
  
  // Cybersecurity
  { name: 'Ethical Hacking', level: 85, category: 'cybersecurity', icon: '🛡️' },
  { name: 'Penetration Testing', level: 80, category: 'cybersecurity', icon: '🔍' },
  { name: 'Network Security', level: 82, category: 'cybersecurity', icon: '🌐' },
  { name: 'Cryptography', level: 75, category: 'cybersecurity', icon: '🔐' },
  { name: 'Kali Linux', level: 85, category: 'cybersecurity', icon: '⚔️' },
  { name: 'Wireshark', level: 80, category: 'cybersecurity', icon: '🦈' },
  { name: 'Nmap', level: 85, category: 'cybersecurity', icon: '🗺️' },
  { name: 'Metasploit', level: 75, category: 'cybersecurity', icon: '💥' },
  
  // Tools
  { name: 'VS Code', level: 95, category: 'tools', icon: '💻' },
  { name: 'Figma', level: 80, category: 'tools', icon: '🎨' },
  { name: 'Postman', level: 85, category: 'tools', icon: '📮' },
  { name: 'Jira', level: 75, category: 'tools', icon: '🎯' },
  { name: 'Slack', level: 80, category: 'tools', icon: '💬' },
  { name: 'Notion', level: 85, category: 'tools', icon: '📝' }
];

export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 10): Skill[] => {
  return skills
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};
