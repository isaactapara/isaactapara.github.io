import React, { useEffect, useState } from 'react';

interface BootTerminalProps {
  onComplete: () => void;
  playTick?: () => void;
}

export const BootTerminal: React.FC<BootTerminalProps> = ({ onComplete, playTick }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isFading, setIsFading] = useState(false);

  const bootMessages = [
    '> init secure connection...',
    '> loading security_modules: ISAAC_TAPARA_DEV',
    '> verifying cryptonet data streams... [OK]',
    '> compiling brutalist UI components... [OK]',
    '> access granted. initializing portfolio mainframe.',
  ];

  useEffect(() => {
    // Lock scroll during boot
    document.body.style.overflow = 'hidden';

    let currentLine = 0;

    const pushNextLine = () => {
      if (currentLine < bootMessages.length) {
        setLines((prev) => [...prev, bootMessages[currentLine]]);
        if (playTick) playTick();
        currentLine++;
        const delay = 250 + Math.random() * 200;
        setTimeout(pushNextLine, delay);
      } else {
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            document.body.style.overflow = '';
            onComplete();
          }, 800);
        }, 600);
      }
    };

    const initialTimeout = setTimeout(pushNextLine, 300);

    return () => {
      clearTimeout(initialTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      document.body.style.overflow = '';
      onComplete();
    }, 300);
  };

  return (
    <div
      id="terminal-boot"
      onClick={handleSkip}
      style={{
        opacity: isFading ? 0 : 1,
        pointerEvents: isFading ? 'none' : 'all',
      }}
      title="Click anywhere to skip"
    >
      <div className="terminal-content max-w-2xl mx-auto w-full">
        {lines.map((line, idx) => (
          <p key={idx} className="font-mono text-[var(--accent-green)] text-base md:text-lg mb-2">
            {line}
          </p>
        ))}
        {!isFading && (
          <div className="flex items-center gap-2 mt-4 text-xs text-[var(--text-muted)] opacity-60">
            <span className="cursor">_</span>
            <span>(Press anywhere to skip boot sequence)</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BootTerminal;
