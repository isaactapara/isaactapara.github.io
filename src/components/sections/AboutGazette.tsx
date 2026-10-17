import React from 'react';
import { Shield, Zap } from 'lucide-react';

interface AboutGazetteProps {
  playTick?: () => void;
}

export const AboutGazette: React.FC<AboutGazetteProps> = ({ playTick }) => {
  return (
    <section id="about" className="relative py-24 border-t border-[var(--border-color)]">
      <div className="section-container">
        {/* Section Heading */}
        <div className="gazette-issue text-[var(--accent-green)]">
          &gt; DISPATCH: ISSUE 01 // ARCHITECTURAL DOSSIER // VOL 2026
        </div>
        <h2 className="section-heading">
          <span className="code-text">01.</span> Editorial Dossier
        </h2>

        {/* Gazette Layout: 3fr (Text) : 2fr (Avatar & Stats) */}
        <div className="gazette-layout">
          {/* Left Column: Gazette Newspaper Story */}
          <div className="gazette-left">
            <h3 className="gazette-headline font-heading font-black">
              Engineering with an Offensive Security Mindset.
            </h3>

            <div className="gazette-text">
              <p>
                <span className="drop-cap">M</span>y journey in software engineering ignited with a deep curiosity 
                about digital infrastructure, attack vectors, and resilient engineering. Currently pursuing Software Engineering 
                at Zetech University, I specialize in combining modern, high-performance web development with the rigorous 
                discipline of cybersecurity and ethical hacking.
              </p>

              <p>
                Rather than treating security as a post-deployment checklist, every system I architect embeds defensive controls 
                from inception. From multi-threaded TCP reconnaissance engines like <strong>PyScanX</strong> to end-to-end 
                production platforms like <strong>FAMALCOLLECTIONS</strong> and <strong>ENKANASA-COW</strong>, I build software that 
                withstands adversarial stress while delivering seamless user experiences.
              </p>

              <p>
                My technical philosophy is defined by rapid iteration, deep protocol comprehension, and building tools that 
                empower local and global communities. Whether auditing network vulnerabilities, structuring resilient 
                PostgreSQL data tiers, or composing responsive React interfaces, precision and reliability remain absolute.
              </p>
            </div>

            {/* Core Values Bento Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[var(--border-color)]">
              <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--bg-card)]">
                <div className="flex items-center gap-2 mb-2 text-[var(--accent-blue)]">
                  <Shield size={18} />
                  <span className="font-mono text-sm font-bold">Zero-Trust Security</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Offensive penetration testing and strict authorization protocols embedded in every line of code.
                </p>
              </div>

              <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--bg-card)]">
                <div className="flex items-center gap-2 mb-2 text-[var(--accent-green)]">
                  <Zap size={18} />
                  <span className="font-mono text-sm font-bold">Performance & Scale</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Asynchronous processing, lightweight bundles, and high-throughput backend integrations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Fluid Blur Hover Reveal Image */}
          <div className="gazette-right flex flex-col gap-6">
            <div
              className="gazette-image-box h-[440px] w-full"
              onMouseEnter={() => playTick && playTick()}
            >
              <img
                src="/assets/isaac.jpg"
                alt="Silisil Isaac Tapara"
                className="fluid-blur-image"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-[var(--bg-panel)] backdrop-blur-md border border-[var(--border-color)] z-10">
                <div className="text-xs font-mono text-[var(--accent-green)]">
                  &gt; SUBJECT: SILISIL ISAAC TAPARA
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)]">
                  STATUS: VERIFIED SEC_ENGINEER // ZETECH UNIV
                </div>
              </div>
            </div>

            {/* Quick Metrics Panel */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-card)] text-center">
                <div className="text-2xl font-heading font-black text-[var(--text-primary)]">4+</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Live Systems</div>
              </div>
              <div className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-card)] text-center">
                <div className="text-2xl font-heading font-black text-[var(--accent-green)]">15+</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Tech Stacks</div>
              </div>
              <div className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-card)] text-center">
                <div className="text-2xl font-heading font-black text-[var(--accent-blue)]">100%</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Security Focus</div>
              </div>
              <div className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-card)] text-center">
                <div className="text-2xl font-heading font-black text-[var(--text-primary)]">2026</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Active Cycle</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGazette;
