import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Terminal, Palette } from 'lucide-react';
import { Theme, THEMES } from '../../hooks/useTheme';

interface NavbarProps {
  currentTheme: Theme;
  onSelectTheme: (theme: Theme) => void;
  onOpenCvModal: () => void;
  playTick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTheme,
  onSelectTheme,
  onOpenCvModal,
  playTick,
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '01. About', href: '#about', id: 'about' },
    { label: '02. Systems', href: '#projects', id: 'projects' },
    { label: '03. Experience', href: '#experience', id: 'experience' },
    { label: '04. Uplink', href: '#uplink', id: 'uplink' },
    { label: '05. Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'uplink', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (playTick) playTick();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-[var(--bg-panel)] border-b border-[var(--border-color)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo with Animated Gradient Shine */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center font-mono font-bold text-sm tracking-wider text-[var(--text-primary)] group-hover:border-[var(--accent-blue)] transition-all">
              IT
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight text-[var(--text-primary)]">
                SILISIL ISAAC
              </span>
              <span className="text-xs font-mono text-[var(--accent-green)] tracking-widest">
                TAPARA // ENG
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  onMouseEnter={() => playTick && playTick()}
                  className={`hover-sound text-sm font-mono tracking-wide transition-colors ${
                    isActive
                      ? 'text-[var(--accent-blue)] font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-4">
            {/* CV Modal Trigger */}
            <button
              onClick={() => {
                if (playTick) playTick();
                onOpenCvModal();
              }}
              onMouseEnter={() => playTick && playTick()}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[var(--accent-green)] text-xs font-mono text-[var(--accent-green)] hover:bg-[var(--accent-green)] hover:text-[var(--bg-main)] transition-all duration-200"
              title="Open Terminal CV & PDF Compiler"
            >
              <Terminal size={14} />
              <span>&gt; GENERATE_CV.exe</span>
            </button>

            {/* 5-Theme Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  if (playTick) playTick();
                  setIsThemeOpen((prev) => !prev);
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-blue)] transition-colors"
                title="Change Theme (5 Styles Available)"
              >
                <Palette size={14} className="text-[var(--accent-blue)]" />
                <span className="capitalize hidden lg:inline">{currentTheme}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${isThemeOpen ? 'rotate-180' : ''}`} />
              </button>

              {isThemeOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-color)] mb-1">
                    Select Theme Engine
                  </div>
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        onSelectTheme(t.id);
                        if (playTick) playTick();
                        setIsThemeOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs font-mono flex items-center justify-between hover:bg-[var(--bg-panel)] transition-colors ${
                        currentTheme === t.id
                          ? 'text-[var(--accent-blue)] font-bold bg-[var(--bg-panel)]'
                          : 'text-[var(--text-primary)]'
                      }`}
                    >
                      <span>{t.label}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded border border-[var(--border-color)] text-[var(--text-muted)]">
                        {t.badge}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                if (playTick) playTick();
                setIsMobileMenuOpen(true);
              }}
              className="md:hidden p-2 text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          backgroundColor: 'var(--bg-main)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'all' : 'none',
          transition: 'var(--transition)',
        }}
      >
        <button
          onClick={() => {
            if (playTick) playTick();
            setIsMobileMenuOpen(false);
          }}
          className="mobile-close-btn"
          aria-label="Close Mobile Menu"
        >
          <X size={32} />
        </button>

        <div className="mobile-nav text-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover-sound block text-3xl font-heading font-bold mb-6 text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              if (playTick) playTick();
              setIsMobileMenuOpen(false);
              onOpenCvModal();
            }}
            className="mt-4 px-6 py-3 rounded border border-[var(--accent-green)] text-sm font-mono text-[var(--accent-green)] inline-flex items-center gap-2"
          >
            <Terminal size={16} />
            <span>&gt; GENERATE_CV.exe</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
