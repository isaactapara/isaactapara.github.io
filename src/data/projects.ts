export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  demoUrl?: string;
  architecture?: string;
  category: 'web' | 'mobile' | 'cybersecurity' | 'ai' | 'blockchain';
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  achievements: string[];
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    id: 'famalcollections',
    title: 'FAMALCOLLECTIONS',
    description: 'A modern, full-featured e-commerce platform specializing in premium fashion.',
    longDescription: 'FAMALCOLLECTIONS is a professional e-commerce platform built with cutting-edge technologies, providing a seamless shopping experience. The platform features complete product management with image galleries, real-time analytics for sales tracking and inventory monitoring, multi-user system with admin/worker/customer roles, secure authentication with Supabase Auth, comprehensive data export capabilities, and mobile-first responsive design.',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'Supabase', 'PostgreSQL', 'React Query'],
    githubUrl: 'https://github.com/isaactapara/FAMALCOLLECTIONS.git',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'web',
    featured: true,
    status: 'completed',
    achievements: [
      'Built complete e-commerce platform with product management',
      'Implemented real-time analytics for sales tracking',
      'Created multi-user system with role-based access control',
      'Integrated secure authentication with Supabase Auth'
    ],
    challenges: [
      'Managing complex product catalog with multiple variants',
      'Implementing real-time inventory tracking across multiple users',
      'Creating secure role-based access control'
    ],
    solutions: [
      'Used Supabase for robust backend with PostgreSQL',
      'Implemented React Query for efficient data fetching',
      'Created comprehensive role-based authentication'
    ]
  },
  {
    id: 'enkanasa-cow',
    title: 'ENKANASA-COW',
    description: 'A premium dairy company platform for ENKANASA COW in Narok County.',
    longDescription: 'ENKANASA-COW is a premium dairy company platform showcasing high-quality dairy products from grass-fed cows in Narok County, Kenya. The platform features premium whole milk varieties, fresh milk in multiple sizes, long life milk, organic fresh milk, and a premium perfume collection with Maasai-inspired names.',
    technologies: ['Vite', 'React 18+', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React Router'],
    githubUrl: 'https://github.com/isaactapara/ENKANASA-COW.git',
    images: [
      'https://images.unsplash.com/photo-1528498033381-a9e5c4a5c769?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'web',
    featured: true,
    status: 'completed',
    achievements: [
      'Built premium dairy company platform with product showcase',
      'Created responsive design optimized for all devices',
      'Implemented modern UI with shadcn/ui component library',
      'Designed Maasai-inspired branding'
    ],
    challenges: [
      'Creating an authentic representation of Kenyan dairy culture',
      'Designing for both local and international audiences',
      'Showcasing premium products with cultural sensitivity'
    ],
    solutions: [
      'Used Maasai-inspired design elements and product names',
      'Implemented modern web technologies for optimal performance',
      'Created intuitive navigation and product presentation'
    ]
  },
  {
    id: 'eshipa-africa',
    title: 'ESHIPA-AFRICA',
    description: 'Non-profit platform empowering children, youths, and promoting sustainability.',
    longDescription: 'ESHIPA Africa is a non-profit organization platform dedicated to empowering children and youths, combating gender-based violence, and promoting sustainable development across Africa through faith-inspired action and community engagement.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'EmailJS'],
    githubUrl: 'https://github.com/isaactapara/ESHIPA-AFRICA.git',
    images: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'web',
    featured: true,
    status: 'completed',
    achievements: [
      'Built comprehensive non-profit organization platform',
      'Implemented children & youths empowerment program features',
      'Created GBV prevention and support initiative tools',
      'Integrated EmailJS for contact form submissions'
    ],
    challenges: [
      'Creating a platform that addresses multiple social issues effectively',
      'Designing for diverse African communities and cultural contexts',
      'Ensuring accessibility and inclusivity'
    ],
    solutions: [
      'Used modern React 18 with TypeScript for robust development',
      'Implemented shadcn/ui for accessible components',
      'Designed with WCAG compliance for inclusive access'
    ]
  },
  {
    id: 'pyscanx',
    title: 'PyScanX',
    description: 'A TCP port scanner with banner grabbing, built in Python.',
    longDescription: 'PyScanX is a professional-grade network reconnaissance tool designed for cybersecurity professionals and ethical hackers. It provides comprehensive port scanning capabilities with detailed service identification.',
    technologies: ['Python', 'Socket Programming', 'Threading', 'CLI', 'JSON'],
    githubUrl: 'https://github.com/isaactapara/PyScanx',
    images: [
      'https://images.unsplash.com/photo-1558494949-efc0257bb3af?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'cybersecurity',
    featured: true,
    status: 'completed',
    achievements: [
      'Built efficient multi-threaded port scanner',
      'Implemented banner grabbing for service identification',
      'Created comprehensive reporting system',
      'Added stealth scanning capabilities'
    ],
    challenges: [
      'Optimizing scan performance while maintaining accuracy',
      'Implementing stealth techniques to avoid detection',
      'Creating user-friendly interface for complex network operations'
    ],
    solutions: [
      'Used threading and async programming for performance',
      'Implemented various scan techniques (SYN, ACK, UDP)',
      'Created detailed documentation and usage examples'
    ]
  },
  {
    id: 'cryptolockerx',
    title: 'CryptoLockerX',
    description: 'A simulated ransomware demo tool for education.',
    longDescription: 'CryptoLockerX is an educational tool that simulates ransomware behavior in a controlled environment. It helps cybersecurity students and professionals understand ransomware mechanics without the risks.',
    technologies: ['Python', 'Cryptography', 'GUI', 'Educational Tools'],
    githubUrl: '#',
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'cybersecurity',
    featured: false,
    status: 'in-progress',
    achievements: [
      'Developed safe ransomware simulation environment',
      'Implemented educational modules for cybersecurity training',
      'Created detailed documentation for ethical use'
    ],
    challenges: [
      'Ensuring the tool cannot be misused maliciously',
      'Creating realistic simulation without actual harm',
      'Balancing educational value with security concerns'
    ],
    solutions: [
      'Built sandboxed environment with strict limitations',
      'Added extensive logging and monitoring',
      'Created comprehensive ethical guidelines'
    ]
  },
  {
    id: 'network-monitor',
    title: 'Network Monitor',
    description: 'Local Python-based tool to watch traffic and log suspicious patterns.',
    longDescription: 'Network Monitor is a comprehensive network analysis tool that provides real-time monitoring, traffic analysis, and security alerting for internal networks.',
    technologies: ['Python', 'Network Programming', 'Data Analysis'],
    githubUrl: '#',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'cybersecurity',
    featured: false,
    status: 'planned',
    achievements: [],
    challenges: [
      'Processing large volumes of network data in real-time',
      'Identifying genuine threats from false positives',
      'Creating intuitive visualization for complex network data'
    ],
    solutions: [
      'Implementing efficient data processing algorithms',
      'Using machine learning for pattern recognition',
      'Creating interactive dashboards for data visualization'
    ]
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
