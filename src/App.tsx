import { useState, useCallback } from 'react';
import { useTheme } from './hooks/useTheme';
import { useSound } from './hooks/useSound';
import MatrixRain from './components/background/MatrixRain';
import GlitchOverlay from './components/background/GlitchOverlay';
import SoundToggle from './components/common/SoundToggle';
import Marquee from './components/common/Marquee';
import SmoothScroll from './components/ui/SmoothScroll';
import BootTerminal from './components/sections/BootTerminal';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutGazette from './components/sections/AboutGazette';
import ProjectsDeck from './components/sections/ProjectsDeck';
import Experience from './components/sections/Experience';
import TerminalUplink from './components/sections/TerminalUplink';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CvTerminalModal from './components/modals/CvTerminalModal';

export function App() {
  const { theme, setTheme } = useTheme();
  const { soundEnabled, toggleSound, playTick, playGlitchSound } = useSound();

  const [isBooted, setIsBooted] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isGlitchActive, setIsGlitchActive] = useState(false);

  // Easter egg handler when 5 words are typed in Terminal Uplink
  const handleMainframeHack = useCallback(() => {
    setIsGlitchActive(true);
    playGlitchSound();
    setTheme('cyber');

    setTimeout(() => {
      setIsGlitchActive(false);
    }, 2500);
  }, [playGlitchSound, setTheme]);

  return (
    <SmoothScroll>
      {/* Background Matrix Rain Procedural Canvas */}
      <MatrixRain />

      {/* Mainframe Hack Chromatic Aberration Glitch Overlay */}
      <GlitchOverlay active={isGlitchActive} />

      {/* Initial Terminal Diagnostics Boot Screen */}
      {!isBooted && (
        <BootTerminal
          onComplete={() => setIsBooted(true)}
          playTick={playTick}
        />
      )}

      {/* Main Portfolio Wrapper */}
      <div className="relative min-h-screen text-[var(--text-primary)] selection:bg-[var(--accent-green)] selection:text-[var(--bg-main)]">
        {/* Navigation & Header */}
        <Navbar
          currentTheme={theme}
          onSelectTheme={setTheme}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          playTick={playTick}
        />

        {/* Core Layout Sections */}
        <main>
          <Hero
            playTick={playTick}
            onOpenCvModal={() => setIsCvModalOpen(true)}
          />

          <Marquee />

          <AboutGazette
            playTick={playTick}
            onOpenCvModal={() => setIsCvModalOpen(true)}
          />

          <ProjectsDeck playTick={playTick} />

          <Experience playTick={playTick} />

          <TerminalUplink
            onHackEasterEgg={handleMainframeHack}
            playTick={playTick}
            onSetTheme={setTheme}
          />

          <Contact playTick={playTick} />
        </main>

        {/* Brutalist Footer */}
        <Footer
          playTick={playTick}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* Floating Sound Toggle */}
        <SoundToggle
          soundEnabled={soundEnabled}
          onToggle={toggleSound}
          onTick={playTick}
        />

        {/* Fullscreen CV Stream Terminal & PDF Generator Modal */}
        <CvTerminalModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
          playTick={playTick}
        />
      </div>
    </SmoothScroll>
  );
}

export default App;
