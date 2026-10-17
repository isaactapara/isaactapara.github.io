import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, RefreshCw, ShieldAlert, ArrowRight } from 'lucide-react';

interface TerminalUplinkProps {
  onHackEasterEgg: () => void;
  playTick?: () => void;
}

const WORD_BANK = [
  'FIREWALL',
  'EXPLOIT',
  'CIPHER',
  'BUFFER',
  'PAYLOAD',
  'SOCKET',
  'KERNEL',
  'DAEMON',
  'PACKET',
  'RECON',
  'SYNTAX',
  'VECTOR',
];

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export const TerminalUplink: React.FC<TerminalUplinkProps> = ({
  onHackEasterEgg,
  playTick,
}) => {
  const [gameState, setGameState] = useState<'idle' | 'active' | 'hacked'>('idle');
  const [playerName, setPlayerName] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [typedChars, setTypedChars] = useState('');
  const [wordsCompleted, setWordsCompleted] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const getNextWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * WORD_BANK.length);
    return WORD_BANK[randomIndex];
  }, []);

  const startGame = () => {
    if (!playerName.trim()) return;
    if (playTick) playTick();
    setWordsCompleted(0);
    setWpm(0);
    setTypedChars('');
    const firstWord = getNextWord();
    setCurrentWord(firstWord);
    setStartTime(Date.now());
    setGameState('active');
  };

  const handleKeyInput = useCallback(
    (char: string) => {
      if (gameState !== 'active') return;

      const upperChar = char.toUpperCase();
      if (!upperChar.match(/^[A-Z]$/)) return;

      if (playTick) playTick();
      setActiveKey(upperChar);
      setTimeout(() => setActiveKey(null), 150);

      const targetChar = currentWord[typedChars.length];
      if (upperChar === targetChar) {
        const nextTyped = typedChars + upperChar;
        setTypedChars(nextTyped);

        if (nextTyped === currentWord) {
          const nextCompleted = wordsCompleted + 1;
          setWordsCompleted(nextCompleted);
          setTypedChars('');

          if (startTime) {
            const timeMinutes = Math.max((Date.now() - startTime) / 60000, 0.05);
            const calculatedWpm = Math.floor((nextCompleted * 6) / 5 / timeMinutes);
            setWpm(calculatedWpm);
          }

          if (nextCompleted >= 5) {
            setGameState('hacked');
            onHackEasterEgg();
          } else {
            setCurrentWord(getNextWord());
          }
        }
      }
    },
    [gameState, currentWord, typedChars, wordsCompleted, startTime, getNextWord, onHackEasterEgg, playTick]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      handleKeyInput(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyInput]);

  return (
    <section id="uplink" className="relative py-24 border-t border-[var(--border-color)]">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="code-text">04.</span> Terminal Uplink &amp; Mainframe Test
        </h2>

        <div className="game-container">
          {/* Top Status & Metrics Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs border-b border-[var(--border-color)] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--term-green)] animate-ping" />
              <span className="text-[var(--text-muted)]">PROTOCOL:</span>
              <span className="text-[var(--accent-blue)]">SEC_UPLINK_V2</span>
            </div>
            <div className="flex items-center gap-6">
              <div>
                WORDS: <span className="text-[var(--accent-green)] font-bold">{wordsCompleted} / 5</span>
              </div>
              <div>
                SPEED: <span className="text-[var(--text-primary)] font-bold">{wpm} WPM</span>
              </div>
            </div>
          </div>

          {/* Interactive Game Screen */}
          <div className="game-screen">
            {/* Background Cyber Carousel */}
            <div className="game-bg-carousel" aria-hidden="true">
              <div className="carousel-overlay" />
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
                alt="Cyber Matrix"
                className="carousel-img"
              />
              <img
                src="https://images.unsplash.com/photo-1558494949-efc0257bb3af?q=80&w=1200&auto=format&fit=crop"
                alt="Terminal Setup"
                className="carousel-img"
              />
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop"
                alt="Hacker Grid"
                className="carousel-img"
              />
            </div>

            {/* Screen Content */}
            <div className="game-screen-content">
              {gameState === 'idle' && (
                <div className="max-w-md w-full flex flex-col items-center">
                  <Terminal size={36} className="text-[var(--accent-green)] mb-3" />
                  <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-2">
                    Enter Hacker Call-Sign
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono mb-4 text-center">
                    Type 5 security keywords to breach the mainframe and trigger the Cyber Override.
                  </p>
                  <div className="flex w-full gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="e.g. CIPHER_01"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && startGame()}
                      className="flex-1 bg-[var(--bg-card)] border border-[var(--border-color)] px-3 py-2 text-sm font-mono text-[var(--text-primary)] rounded outline-none focus:border-[var(--accent-blue)]"
                    />
                    <button
                      onClick={startGame}
                      disabled={!playerName.trim()}
                      className="btn btn-primary text-xs font-mono disabled:opacity-50"
                    >
                      INITIALIZE
                    </button>
                  </div>
                </div>
              )}

              {gameState === 'active' && (
                <div className="flex flex-col items-center animate-in fade-in">
                  <div className="text-xs font-mono text-[var(--text-muted)] mb-2 tracking-widest">
                    CURRENT TARGET WORD ({typedChars.length}/{currentWord.length}):
                  </div>
                  <div className="word-target mb-4">
                    {currentWord.split('').map((char, i) => (
                      <span
                        key={i}
                        className={i < typedChars.length ? 'char-typed' : 'char-pending'}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-mono text-[var(--accent-green)]">
                    &gt; OPERATOR: {playerName} // TRANSMITTING KEYSTROKES...
                  </div>
                </div>
              )}

              {gameState === 'hacked' && (
                <div className="flex flex-col items-center text-center animate-in zoom-in-95">
                  <ShieldAlert size={48} className="text-[var(--accent-green)] mb-2 animate-bounce" />
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-[var(--accent-green)] mb-1">
                    MAINFRAME BREACHED!
                  </h3>
                  <p className="text-xs font-mono text-[var(--text-muted)] mb-4 max-w-sm">
                    Root access granted to Operator <strong className="text-[var(--text-primary)]">{playerName}</strong>. 
                    System theme automatically overridden to CYBER.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="#contact"
                      className="btn btn-primary text-xs font-mono flex items-center gap-2"
                    >
                      <span>Claim Clearance &amp; Contact</span>
                      <ArrowRight size={14} />
                    </a>
                    <button
                      onClick={() => setGameState('idle')}
                      className="btn btn-secondary text-xs font-mono flex items-center gap-1.5"
                    >
                      <RefreshCw size={12} />
                      <span>Re-Run</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3D Neumorphic On-Screen Keyboard */}
          <div className="game-keyboard mt-2">
            {KEYBOARD_ROWS.map((row, rowIdx) => (
              <div key={rowIdx} className="key-row">
                {row.map((k) => {
                  const isCurrentActive = activeKey === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => handleKeyInput(k)}
                      className={`key ${isCurrentActive ? 'active' : ''}`}
                      data-key={k.toLowerCase()}
                    >
                      {k}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="text-center font-mono text-[11px] text-[var(--text-muted)]">
            (Use your physical keyboard or tap the 3D keys above to authenticate)
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalUplink;
