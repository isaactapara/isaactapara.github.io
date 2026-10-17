import React from 'react';

interface ExperienceProps {
  playTick?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ playTick }) => {
  const timelineMilestones = [
    {
      period: '2024 — PRESENT',
      role: 'Software Engineering Degree Candidate',
      organization: 'Zetech University',
      description: 'Specializing in computer architecture, distributed systems, web architectures, and algorithms. High academic focus on systems security.',
      badge: 'Academic',
    },
    {
      period: '2024 — PRESENT',
      role: 'Offensive Security Researcher & Tooling Architect',
      organization: 'Independent / Open Source',
      description: 'Authored PyScanX (multi-threaded network reconnaissance), CryptoLockerX (sandboxed educational simulation), and custom Python network audit scripts.',
      badge: 'Security',
    },
    {
      period: '2024',
      role: 'Full-Stack Production Architect',
      organization: 'Client Deployments & Ventures',
      description: 'Delivered production platforms including FAMALCOLLECTIONS e-commerce system with Supabase auth and ENKANASA-COW dairy ecosystem.',
      badge: 'Production',
    },
    {
      period: '2024',
      role: 'Cybersecurity Certifications & Community',
      organization: 'Industry Credentials',
      description: 'Continuous credentialing in ethical hacking, penetration testing principles, and promoting cyber awareness across developer communities.',
      badge: 'Credentials',
    },
  ];

  return (
    <section id="experience" className="relative py-24 border-t border-[var(--border-color)]">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="code-text">03.</span> Trajectory &amp; Milestones
        </h2>

        <div className="timeline">
          {timelineMilestones.map((item, index) => (
            <div
              key={index}
              className="timeline-item data-card"
              onMouseEnter={() => playTick && playTick()}
            >
              <div className="timeline-dot" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-[var(--accent-green)] font-semibold tracking-wider">
                  {item.period}
                </span>
                <span className="data-badge text-[10px] uppercase">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-heading font-bold text-[var(--text-primary)] mb-1">
                {item.role}
              </h3>

              <div className="text-sm font-mono text-[var(--accent-blue)] mb-3">
                {item.organization}
              </div>

              <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
