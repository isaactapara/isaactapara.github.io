import React from 'react';
import { ArrowDown, Terminal, ArrowUpRight } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';
import MagneticButton from '../common/MagneticButton';

interface HeroProps {
  playTick?: () => void;
  onOpenCvModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ playTick, onOpenCvModal }) => {
  const phrases = [
    'Secure Software Engineer',
    'Ethical Hacker & Recon',
    'Full-Stack Developer',
    'Fintech & E-Commerce Systems',
  ];

  const typedRole = useTypewriter(phrases, 90, 45, 2200);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="section-container relative z-10 w-full text-center md:text-left flex flex-col justify-center">
        
        {/* Futuristic Live Telemetry Ticker HUD */}
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs mb-8 justify-center md:justify-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-ping" />
            <span className="text-[var(--text-muted)]">SYSTEM_STATUS:</span>
            <span className="text-[var(--accent-green)] font-semibold">ONLINE // VERIFIED</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)]">
            <span>FINTECH:</span>
            <span className="text-[var(--accent-blue)] font-bold">myelitetrader.com</span>
            <span className="text-[var(--accent-green)] font-mono">(&lt;10ms)</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)]">
            <span>DEFENSE:</span>
            <span className="text-[var(--text-primary)] font-bold">ZERO-TRUST KERNEL</span>
          </div>
        </div>

        {/* Massive Neumorphic Title */}
        <div className="mb-4">
          <h1 className="hero-title neumorphic-text text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-none select-none cursor-default">
            SILISIL ISAAC
          </h1>
          <h1 className="hero-title neumorphic-text text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-none select-none cursor-default mt-1">
            TAPARA
          </h1>
        </div>

        {/* Dynamic Typewriter Role */}
        <div className="font-mono text-xl sm:text-2xl md:text-3xl font-medium tracking-tight mt-6 mb-6 flex items-center justify-center md:justify-start">
          <span className="text-[var(--text-muted)] mr-2">&gt;</span>
          <span className="text-[var(--text-primary)] font-bold">{typedRole}</span>
          <span className="cursor ml-1">_</span>
        </div>

        {/* Bio Editorial Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-10 mx-auto md:mx-0">
          Systems &amp; Security Engineer specializing in real-time trading engines and low-latency distributed architectures. 
          Architecting robust production platforms with an offensive zero-trust mindset, bridging high-throughput data pipelines with resilient, fault-tolerant execution.
        </p>

        {/* CTA Magnetic Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <MagneticButton>
            <a
              href="#projects"
              onClick={() => playTick && playTick()}
              className="btn btn-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2"
            >
              <span>Explore Systems</span>
              <ArrowDown size={16} />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              onClick={() => playTick && playTick()}
              className="btn btn-secondary font-mono text-sm uppercase tracking-wider flex items-center gap-2"
            >
              <span>Initialize Uplink</span>
              <ArrowUpRight size={16} />
            </a>
          </MagneticButton>

          {onOpenCvModal && (
            <MagneticButton>
              <button
                onClick={() => {
                  if (playTick) playTick();
                  onOpenCvModal();
                }}
                className="btn btn-secondary font-mono text-sm tracking-wider flex items-center gap-2 border-[var(--accent-green)] text-[var(--accent-green)]"
              >
                <Terminal size={16} />
                <span>CV.exe</span>
              </button>
            </MagneticButton>
          )}
        </div>

        {/* Bottom Specs Micro-Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border-color)] grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-xs font-mono text-[var(--text-muted)]">CORE FOCUS</div>
            <div className="text-sm font-semibold font-mono text-[var(--text-primary)]">Full-Stack &amp; Security</div>
          </div>
          <div>
            <div className="text-xs font-mono text-[var(--text-muted)]">PRODUCTION APPS</div>
            <div className="text-sm font-semibold font-mono text-[var(--accent-green)]">4+ Deployed</div>
          </div>
          <div>
            <div className="text-xs font-mono text-[var(--text-muted)]">LOCATION</div>
            <div className="text-sm font-semibold font-mono text-[var(--text-primary)]">Kenya [UTC+3]</div>
          </div>
          <div>
            <div className="text-xs font-mono text-[var(--text-muted)]">AVAILABILITY</div>
            <div className="text-sm font-semibold font-mono text-[var(--accent-blue)]">Open for Contract/Full-time</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
