import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutGazetteProps {
  playTick?: () => void;
  onOpenCvModal?: () => void;
}

export const AboutGazette: React.FC<AboutGazetteProps> = ({ playTick, onOpenCvModal }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Column (Text) Fade Up
      gsap.fromTo(
        '.gazette-content',
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gazette-content',
            start: 'top 85%',
          },
        }
      );

      // Right Column (Image) Slide In
      gsap.fromTo(
        '.gazette-image',
        { x: 50, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gazette-layout',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section relative py-24 border-t border-[var(--border-color)]">
      <div className="section-container">
        <div className="gazette-layout">
          {/* Gazette Text Column */}
          <div className="gazette-content">
            <p className="gazette-issue code-text">ISSUE: NO. 01 / FINTECH &amp; SECURITY ENGINEERING</p>
            <h2 className="gazette-headline">
              THE ARCHITECT: <br /> WHO IS ISAAC?
            </h2>
            <div className="gazette-text">
              <p>
                <span className="drop-cap">A</span>t the bleeding edge of the financial technology
                and cybersecurity sector, secure data streams and high-frequency algorithms dictate
                the market. Isaac, a highly driven software engineer and ethical hacker, has
                positioned himself precisely at this intersection. Specializing in building fast,
                impenetrable, and massively scalable applications, his work bridges the critical
                gap between complex raw data processing and pixel-perfect user interfaces.
              </p>
              <p>
                Currently engineering high-throughput production systems, Isaac architects software
                that handles real-time market data visualization and secure execution environments
                for high-frequency financial platforms like <strong>myelitetrader.com</strong>. His technological
                stack combines performant TypeScript ecosystems, low-latency Python data engines,
                and zero-trust SQL architectures.
              </p>

              {/* Futuristic Architecture Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-5 font-mono text-[11px]">
                <div className="p-2.5 rounded bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="text-[var(--accent-green)] font-bold mb-0.5">01. SUB-10MS LATENCY</div>
                  <div className="text-[var(--text-muted)] text-[10px]">Real-time WebSocket market depth telemetry</div>
                </div>
                <div className="p-2.5 rounded bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="text-[var(--accent-blue)] font-bold mb-0.5">02. ZERO-TRUST CORE</div>
                  <div className="text-[var(--text-muted)] text-[10px]">Adversarial threat modeling &amp; penetration testing</div>
                </div>
                <div className="p-2.5 rounded bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="text-[var(--text-primary)] font-bold mb-0.5">03. ACID RESILIENCE</div>
                  <div className="text-[var(--text-muted)] text-[10px]">Automated reconciliation &amp; distributed scale</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="btn-generate-cv"
                  className="btn btn-primary magnetic-btn hover-sound inline-flex items-center gap-2"
                  onClick={() => {
                    if (playTick) playTick();
                    if (onOpenCvModal) onOpenCvModal();
                  }}
                >
                  &gt; GENERATE_CV.exe
                </button>
                <a
                  href="#experience"
                  onClick={() => playTick && playTick()}
                  className="btn btn-secondary hover-sound inline-flex items-center gap-2 text-xs font-mono"
                >
                  &gt; VIEW_MILESTONES.sh
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image with Cyber Hologram Scanner & HUD Overlays */}
          <div className="gazette-image">
            <div className="image-wrapper frameless-mask relative group">
              {/* Laser Scanline */}
              <div className="cyber-scanner-line" />

              {/* Corner Telemetry HUD Badges */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-[var(--border-color)] text-[10px] font-mono text-[var(--accent-green)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-ping" />
                <span>OPERATOR // SILISIL_ISAAC</span>
              </div>

              <div className="absolute bottom-3 right-3 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-[var(--border-color)] text-[10px] font-mono text-[var(--text-muted)]">
                <span>CLEARANCE: ROOT // ZERO-TRUST</span>
              </div>

              <img
                src="/assets/isaac.jpeg"
                alt="Silisil Isaac Tapara - Secure Software Engineer & Ethical Hacker"
                className="profile-img-fluid theme-target-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGazette;
