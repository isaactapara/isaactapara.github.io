import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Globe, 
  Server, 
  ChevronDown, 
  ChevronUp, 
  Activity, 
  CheckCircle2,
  Lock
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  playTick?: () => void;
}

interface MilestoneSpec {
  architecture: string;
  security: string;
  metrics: string;
  stack: string[];
}

interface Milestone {
  id: string;
  category: 'fintech' | 'security' | 'enterprise' | 'research';
  period: string;
  role: string;
  organization: string;
  description: string;
  badge: string;
  hash: string;
  status: string;
  icon: 'cpu' | 'shield' | 'terminal' | 'globe' | 'server';
  specs: MilestoneSpec;
}

export const Experience: React.FC<ExperienceProps> = ({ playTick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('myelitetrader');

  const timelineMilestones: Milestone[] = [
    {
      id: 'myelitetrader',
      category: 'fintech',
      period: 'CURRENT // PRODUCTION',
      role: 'Full-Stack & Trading Systems Engineer',
      organization: 'MyEliteTrader (myelitetrader.com)',
      description: 'Engineered a comprehensive online trading software and analysis platform designed explicitly for binary options and Deriv markets, deploying downloadable applications across both desktop and mobile ecosystems. Developed advanced algorithmic automation functioning as a dynamic, high-performance alternative to traditional trading bots with specialized charting metrics for rise/fall and over/under strategies.',
      badge: 'Fintech Core',
      hash: 'SHA256: 9b2d8f...41a0',
      status: 'ONLINE // 99.98% SLA',
      icon: 'cpu',
      specs: {
        architecture: 'Sub-millisecond WebSocket data pipelines, active Deriv account OAuth authentication, Node.js/Express backend payment services with strict server routing and asynchronous webhook parsing.',
        security: 'Hardened against algorithmic slippage, automated API rate-limiting throttling, secure third-party gateway connections, and encrypted session transport.',
        metrics: '<12ms telemetry latency, zero unhandled WebSocket disconnections, deployed across desktop & mobile.',
        stack: ['TypeScript', 'React', 'Python', 'C#', 'Node.js', 'Express', 'Deriv API', 'WebSockets', 'Astro', 'Tailwind CSS'],
      },
    },
    {
      id: 'regional-revenue',
      category: 'fintech',
      period: '2024 — PRESENT',
      role: 'Backend & Payment Gateway Architect',
      organization: 'Regional Revenue & Transaction System',
      description: 'Designed comprehensive software architecture and data model structures using Django and React to streamline localized digital payments, secure data tracking, automated M-Pesa Daraja payment gateway verification, and user transaction management.',
      badge: 'Payment Gateway',
      hash: 'SHA256: d82e41...7b14',
      status: 'ACTIVE GATEWAY',
      icon: 'globe',
      specs: {
        architecture: 'Django REST Framework backend paired with React frontend, automated M-Pesa Daraja STK push and C2B payment reconciliation webhooks.',
        security: 'Encrypted transaction logging, OAuth/API token rotation, secure payload parsing, and strict transaction rollback logic.',
        metrics: '100% automated transaction verification rate with zero payment state discrepancies.',
        stack: ['Django', 'Python', 'React', 'PostgreSQL', 'M-Pesa Daraja API', 'RESTful APIs', 'Docker'],
      },
    },
    {
      id: 'self-hosted-infra',
      category: 'enterprise',
      period: '2024 — PRESENT',
      role: 'Infrastructure & Workflow Automation Engineer',
      organization: 'Self-Hosted Linux & Cloud Architecture',
      description: 'Configured and managed self-hosted Linux server infrastructure leveraging Docker containerization and n8n automated workflows for continuous system monitoring, isolated environment testing, and secure event-driven notification delivery.',
      badge: 'Cloud & Automation',
      hash: 'SHA256: 6a1f88...90de',
      status: 'SELF-HOSTED PROD',
      icon: 'server',
      specs: {
        architecture: 'Self-hosted Linux instances (Hetzner / Vercel / cPanel), Docker multi-container orchestrations, and event-driven n8n webhook automation pipelines.',
        security: 'Isolated container network sandboxes, hardened firewall configurations (UFW), SSL/TLS automated renewal, and CI/CD via GitHub Actions.',
        metrics: 'Continuous 24/7 uptime monitoring with automated fault alerting and isolated testing environments.',
        stack: ['Docker', 'Linux', 'n8n', 'Hetzner', 'GitHub Actions', 'CI/CD', 'Bash', 'PostgreSQL'],
      },
    },
    {
      id: 'harvard-cisco',
      category: 'security',
      period: '2025 // ACTIVE CREDENTIAL',
      role: 'Financial Systems Penetration Tester & Security Auditor',
      organization: 'Harvard CS50 // Cisco Cybersecurity Operations',
      description: 'Specialized in offensive security, vulnerability assessment, and defensive fortification of financial technology infrastructure. Auditing high-volume transactional APIs against zero-day exploits, cryptographic weaknesses, and broken access controls.',
      badge: 'Offensive Security',
      hash: 'SHA256: 7f813c...9e22',
      status: 'VERIFIED OFFENSIVE CERT',
      icon: 'shield',
      specs: {
        architecture: 'Simulated adversarial threat models mimicking advanced persistent threats (APTs) targeting transactional microservices and payment gateways.',
        security: 'Rigorous OWASP Top 10 compliance audits, cryptographic key lifecycle automation, and perimeter intrusion testing.',
        metrics: '100% test coverage against simulated financial API exploit vectors.',
        stack: ['Kali Linux', 'Burp Suite', 'Wireshark', 'Python Exploits', 'Zero-Trust Networks'],
      },
    },
    {
      id: 'zetech-research',
      category: 'research',
      period: '2024 — PRESENT',
      role: 'Distributed Systems & Low-Level Computing Researcher',
      organization: 'Zetech University // Systems & Networks Research',
      description: 'Conducting applied systems research into concurrent algorithmic processing, memory-safe data structures, secure database internals, and zero-overhead network protocol implementations.',
      badge: 'Systems Research',
      hash: 'SHA256: 3c1a9e...8f04',
      status: 'ACTIVE SYSTEMS LAB',
      icon: 'server',
      specs: {
        architecture: 'Benchmarking concurrent B-Tree index traversal algorithms and cache-coherent hash partitions under distributed workloads.',
        security: 'Formal verification of memory safety boundaries, buffer overflow protections, and cryptographically secure entropy pools.',
        metrics: 'O(log n) optimization guarantees, zero heap corruption tolerances.',
        stack: ['C/C++', 'Python Sockets', 'Computer Architecture', 'Distributed Systems', 'Algorithms'],
      },
    },
    {
      id: 'pyscanx-cryptolockerx',
      category: 'security',
      period: '2024 — PRESENT',
      role: 'Offensive Security Researcher & Tooling Architect',
      organization: 'Zero-Trust Open Source Labs',
      description: 'Authored PyScanX (high-performance multi-threaded network reconnaissance engine with dynamic banner grabbing) and CryptoLockerX (sandboxed educational simulation analyzing modern cryptographic ransomware vectors).',
      badge: 'Kernel & Tooling',
      hash: 'SHA256: 5e6b88...a210',
      status: 'OPEN SOURCE PRODUCTION',
      icon: 'terminal',
      specs: {
        architecture: 'Multi-threaded non-blocking I/O socket workers executing asynchronous SYN/TCP scans across CIDR blocks with structured JSON telemetry.',
        security: 'Configurable stealth profiles, TCP evasion techniques, and automated vulnerability signatures for SIEM ingestion.',
        metrics: 'Reconnaissance completed on 1,000+ ports in <3.2s with zero thread starvation.',
        stack: ['Python 3', 'Socket Concurrency', 'Network Protocols', 'Threat Simulation', 'JSON Telemetry'],
      },
    },
    {
      id: 'enterprise-deployments',
      category: 'enterprise',
      period: '2024 — PRESENT',
      role: 'Principal Production Architect & Full-Stack Engineer',
      organization: 'Commercial Deployments & Client Ventures',
      description: 'Architected and deployed full-scale commercial platforms including FAMALCOLLECTIONS enterprise e-commerce platform with Supabase authentication and ENKANASA-COW agricultural enterprise platform with automated Daraja mobile payment reconciliation.',
      badge: 'Enterprise Deployments',
      hash: 'SHA256: 4a9d21...fe39',
      status: 'LIVE COMMERCE & ERP',
      icon: 'globe',
      specs: {
        architecture: 'Micro-frontend React architecture paired with PostgreSQL schema migrations, Row-Level Security (RLS), and automated webhook handlers.',
        security: 'Strict JWT session revocation, CSRF guards, and secure encrypted Daraja API key management.',
        metrics: 'Zero transactional discrepancies across live mobile payment reconciliations.',
        stack: ['React', 'TypeScript', 'PostgreSQL', 'Supabase RLS', 'Daraja M-Pesa API', 'Tailwind CSS'],
      },
    },
    {
      id: 'defense-advocate',
      category: 'security',
      period: '2024 — PRESENT',
      role: 'Zero-Trust Architect & Cyber Defense Advocate',
      organization: 'Industry Security Credentials & Developer Networks',
      description: 'Promoting proactive application defense, zero-trust credentialing, and secure software development lifecycle (SSDLC) practices across modern software engineering teams.',
      badge: 'Defense Leadership',
      hash: 'SHA256: 18dfbb...23c7',
      status: 'CONTINUOUS ACCREDITATION',
      icon: 'shield',
      specs: {
        architecture: 'Standardizing security checklists and automated CI/CD static code vulnerability linting.',
        security: 'Principles of least privilege (PoLP), encrypted credential storage, and vulnerability mitigation protocols.',
        metrics: 'Audited and established security standards across 15+ production repositories.',
        stack: ['Ethical Hacking', 'SSDLC', 'CI/CD Security', 'Threat Assessment', 'Zero-Trust Architecture'],
      },
    },
  ];

  const categories = [
    { id: 'all', label: 'All Protocols' },
    { id: 'fintech', label: 'Fintech & Trading' },
    { id: 'security', label: 'Offensive Security' },
    { id: 'enterprise', label: 'Enterprise Systems' },
    { id: 'research', label: 'Applied Research' },
  ];

  const filteredMilestones = activeCategory === 'all'
    ? timelineMilestones
    : timelineMilestones.filter((m) => m.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up section heading
      gsap.fromTo(
        '#experience .gsap-fade-up',
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#experience',
            start: 'top 85%',
          },
        }
      );

      // Stagger timeline cards upward
      const elements = gsap.utils.toArray<HTMLElement>('#experience .gsap-stagger');
      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#experience .timeline',
              start: 'top 85%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [activeCategory]);

  const toggleExpand = (id: string) => {
    if (playTick) playTick();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderIcon = (icon: Milestone['icon']) => {
    switch (icon) {
      case 'cpu':
        return <Cpu size={16} className="text-[var(--accent-blue)]" />;
      case 'shield':
        return <ShieldCheck size={16} className="text-[var(--accent-green)]" />;
      case 'terminal':
        return <Terminal size={16} className="text-[var(--accent-green)]" />;
      case 'server':
        return <Server size={16} className="text-[var(--accent-blue)]" />;
      case 'globe':
      default:
        return <Globe size={16} className="text-[var(--text-primary)]" />;
    }
  };

  return (
    <section id="experience" className="timeline-section relative py-24 border-t border-[var(--border-color)]">
      <div className="section-container">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="section-heading gsap-fade-up">
              <span className="code-text">03.</span> Trajectory &amp; Milestones
            </h2>
            <p className="text-xs md:text-sm font-mono text-[var(--text-muted)] mt-1">
              Engineered systems, real-time trading architectures, and zero-trust security postures.
            </p>
          </div>

          {/* Interactive Protocol Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  if (playTick) playTick();
                  setActiveCategory(cat.id);
                }}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[var(--accent-blue)] text-[var(--bg-main)] font-bold shadow-md'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Connected Track */}
        <div className="timeline">
          {filteredMilestones.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="timeline-item data-card gsap-stagger transition-all duration-200"
                onMouseEnter={() => playTick && playTick()}
              >
                {/* Connected Dot Node */}
                <div className="timeline-dot" />

                <div className="timeline-content">
                  {/* Top Header: Period, Status, Hash & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-[var(--bg-panel)] border border-[var(--border-color)]">
                        {renderIcon(item.icon)}
                      </div>
                      <p className="timeline-date code-text text-xs font-mono text-[var(--accent-green)] font-semibold tracking-wider">
                        {item.period}
                      </p>
                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-[var(--text-muted)]">
                        <Activity size={10} className="text-[var(--accent-green)] animate-pulse" />
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden md:inline font-mono text-[10px] text-[var(--text-muted)]">
                        {item.hash}
                      </span>
                      <span className="data-badge text-[10px] uppercase font-bold tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg md:text-xl font-heading font-black text-[var(--text-primary)] mb-1 tracking-tight">
                    {item.role}
                  </h3>

                  {/* Organization & Entity */}
                  <h4 className="timeline-company text-sm font-mono text-[var(--accent-blue)] mb-3 font-semibold">
                    {item.organization}
                  </h4>

                  {/* Core Description */}
                  <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Expandable Architecture Drawer Toggle */}
                  <div className="border-t border-[var(--border-color)] pt-3">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-blue)] hover:text-[var(--accent-green)] transition-colors"
                    >
                      <Lock size={12} />
                      <span>{isExpanded ? '[-] HIDE ARCHITECTURE & TELEMETRY SPECS' : '[+] REVEAL ARCHITECTURE & TELEMETRY SPECS'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {/* Collapsible Architecture Specs Drawer */}
                    {isExpanded && (
                      <div className="mt-3 p-3.5 rounded bg-[var(--bg-panel)] border border-[var(--border-color)] space-y-3 animate-in fade-in zoom-in-98 duration-200">
                        <div>
                          <div className="text-[11px] font-mono text-[var(--text-primary)] font-bold flex items-center gap-1.5 mb-1">
                            <CheckCircle2 size={13} className="text-[var(--accent-green)]" />
                            <span>System Architecture &amp; Dataflow</span>
                          </div>
                          <p className="text-xs text-[var(--text-muted)] font-mono leading-relaxed pl-5">
                            {item.specs.architecture}
                          </p>
                        </div>

                        <div>
                          <div className="text-[11px] font-mono text-[var(--text-primary)] font-bold flex items-center gap-1.5 mb-1">
                            <CheckCircle2 size={13} className="text-[var(--accent-green)]" />
                            <span>Security Hardening &amp; Threat Defense</span>
                          </div>
                          <p className="text-xs text-[var(--text-muted)] font-mono leading-relaxed pl-5">
                            {item.specs.security}
                          </p>
                        </div>

                        <div>
                          <div className="text-[11px] font-mono text-[var(--text-primary)] font-bold flex items-center gap-1.5 mb-1">
                            <CheckCircle2 size={13} className="text-[var(--accent-green)]" />
                            <span>Verification Telemetry &amp; Latency</span>
                          </div>
                          <p className="text-xs text-[var(--text-muted)] font-mono leading-relaxed pl-5">
                            {item.specs.metrics}
                          </p>
                        </div>

                        {/* Technology Stack Pills */}
                        <div className="pt-2 border-t border-[var(--border-color)] flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mr-1">
                            Tech Stack:
                          </span>
                          {item.specs.stack.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
