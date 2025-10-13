export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
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
    description: 'A modern, full-featured e-commerce platform specializing in premium fashion clothing and footwear with advanced features like product reservations, real-time inventory management, and comprehensive analytics.',
    longDescription: 'FAMALCOLLECTIONS is a professional e-commerce platform built with cutting-edge technologies, providing a seamless shopping experience. The platform features complete product management with image galleries, real-time analytics for sales tracking and inventory monitoring, multi-user system with admin/worker/customer roles, secure authentication with Supabase Auth, comprehensive data export capabilities, and mobile-first responsive design.',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'Supabase', 'PostgreSQL', 'React Query', 'Jest', 'React Testing Library'],
    githubUrl: 'https://github.com/isaactapara/FAMALCOLLECTIONS.git',
    category: 'web',
    featured: true,
    status: 'completed',
    achievements: [
      'Built complete e-commerce platform with product management and image galleries',
      'Implemented real-time analytics for sales tracking and inventory monitoring',
      'Created multi-user system with role-based access control (admin/worker/customer)',
      'Integrated secure authentication with Supabase Auth',
      'Developed comprehensive data export capabilities in multiple formats',
      'Designed mobile-first responsive UI with modern UX/UX principles'
    ],
    challenges: [
      'Managing complex product catalog with multiple variants and images',
      'Implementing real-time inventory tracking across multiple users',
      'Creating secure role-based access control for different user types',
      'Optimizing performance for large product catalogs and analytics data'
    ],
    solutions: [
      'Used Supabase for robust backend with PostgreSQL and real-time subscriptions',
      'Implemented React Query for efficient data fetching and caching',
      'Created comprehensive role-based authentication with Supabase Auth',
      'Optimized with Vite for fast builds and efficient bundling'
    ]
  },
  {
    id: 'enkanasa-cow',
    title: 'ENKANASA-COW',
    description: 'A premium dairy company platform for ENKANASA COW, a Kenyan dairy company based in Narok County specializing in fresh milk and dairy products from grass-fed cows.',
    longDescription: 'ENKANASA-COW is a premium dairy company platform showcasing high-quality dairy products from grass-fed cows in Narok County, Kenya. The platform features premium whole milk varieties, fresh milk in multiple sizes, long life milk, organic fresh milk, and a premium perfume collection with Maasai-inspired names. The platform promotes sustainable farming practices and community empowerment through premium dairy products.',
    technologies: ['Vite', 'React 18+', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React Router', 'Lucide React'],
    githubUrl: 'https://github.com/isaactapara/ENKANASA-COW.git',
    category: 'web',
    featured: true,
    status: 'completed',
    achievements: [
      'Built premium dairy company platform with product showcase',
      'Created responsive design optimized for all devices',
      'Implemented modern UI with shadcn/ui component library',
      'Developed mobile-first approach for optimal user experience',
      'Integrated smooth navigation with React Router',
      'Designed Maasai-inspired branding and product presentation'
    ],
    challenges: [
      'Creating an authentic representation of Kenyan dairy culture',
      'Designing for both local and international audiences',
      'Showcasing premium products with cultural sensitivity',
      'Implementing responsive design for various devices'
    ],
    solutions: [
      'Used Maasai-inspired design elements and product names',
      'Implemented modern web technologies for optimal performance',
      'Created intuitive navigation and product presentation',
      'Designed with accessibility and cultural awareness in mind'
    ]
  },
  {
    id: 'eshipa-africa',
    title: 'ESHIPA-AFRICA',
    description: 'A non-profit organization platform dedicated to empowering children and youths, combating gender-based violence, and promoting sustainable development across Africa.',
    longDescription: 'ESHIPA Africa is a non-profit organization platform dedicated to empowering children and youths, combating gender-based violence, and promoting sustainable development across Africa through faith-inspired action and community engagement. The platform features children & youths empowerment programs, GBV prevention and support initiatives, environmental sustainability programs, peace resilience building, economic empowerment through vocational training, community engagement tools, and strategic partnership management.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'React Router', 'Lucide React', 'EmailJS', 'React Query', 'React Hook Form', 'Zod'],
    githubUrl: 'https://github.com/isaactapara/ESHIPA-AFRICA.git',
    category: 'web',
    featured: true,
    status: 'completed',
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
    challenges: [
      'Creating a platform that addresses multiple social issues effectively',
      'Designing for diverse African communities and cultural contexts',
      'Implementing comprehensive program management features',
      'Ensuring accessibility and inclusivity across all features'
    ],
    solutions: [
      'Used modern React 18 with TypeScript for robust development',
      'Implemented shadcn/ui for accessible and beautiful components',
      'Created comprehensive form handling with React Hook Form and Zod validation',
      'Designed with WCAG compliance for inclusive access'
    ]
  },
  {
    id: 'pyscanx',
    title: 'PyScanX',
    description: 'A TCP port scanner with banner grabbing, built in Python for ethical reconnaissance and secure development workflows.',
    longDescription: 'PyScanX is a professional-grade network reconnaissance tool designed for cybersecurity professionals and ethical hackers. It provides comprehensive port scanning capabilities with detailed service identification.',
    technologies: ['Python', 'Socket Programming', 'Threading', 'CLI', 'JSON', 'CSV'],
    githubUrl: 'https://github.com/isaactapara/PyScanx',
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
    description: 'A simulated ransomware demo tool for education and safe malware analysis practice.',
    longDescription: 'CryptoLockerX is an educational tool that simulates ransomware behavior in a controlled environment. It helps cybersecurity students and professionals understand ransomware mechanics without the risks.',
    technologies: ['Python', 'Cryptography', 'GUI', 'Educational Tools'],
    githubUrl: '#',
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
    description: 'A local Python-based tool to watch traffic, identify spikes, and log suspicious patterns on internal networks.',
    longDescription: 'Network Monitor is a comprehensive network analysis tool that provides real-time monitoring, traffic analysis, and security alerting for internal networks.',
    technologies: ['Python', 'Network Programming', 'Data Analysis', 'Real-time Monitoring'],
    githubUrl: '#',
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
