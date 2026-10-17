import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

interface FooterProps {
  playTick?: () => void;
  onOpenCvModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ playTick, onOpenCvModal }) => {
  const scrollToTop = () => {
    if (playTick) playTick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[var(--border-color)] py-12 bg-[var(--bg-main)]">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6 py-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-heading font-black text-lg text-[var(--text-primary)] tracking-tight">
            SILISIL ISAAC TAPARA
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)] mt-1">
            Secure Software Engineer &amp; Ethical Hacker // Zetech University
          </div>
          <div className="text-[10px] font-mono text-[var(--accent-green)] mt-2">
            © 2026 ALL RIGHTS RESERVED // VERIFIED ZERO-TRUST DEPLOYMENT
          </div>
        </div>

        <div className="flex items-center gap-4">
          {onOpenCvModal && (
            <button
              onClick={() => {
                if (playTick) playTick();
                onOpenCvModal();
              }}
              className="px-3 py-1.5 rounded border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-green)] hover:text-[var(--accent-green)] transition-colors flex items-center gap-1.5"
            >
              <Terminal size={14} />
              <span>CV.exe</span>
            </button>
          )}

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] flex items-center justify-center transition-colors"
            title="Return to top"
            aria-label="Return to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
