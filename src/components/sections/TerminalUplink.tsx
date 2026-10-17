import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Terminal as TerminalIcon, 
  RefreshCw, 
  ShieldAlert, 
  ArrowRight, 
  KeyRound, 
  Flame, 
  Copy, 
  Check, 
  Zap,
  Lock,
  CornerDownLeft
} from 'lucide-react';

interface TerminalUplinkProps {
  onHackEasterEgg: () => void;
  playTick?: () => void;
  onSetTheme?: (theme: 'dark' | 'light' | 'cyber' | 'synthwave' | 'brutalist') => void;
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
  'WEBSOCKET',
  'TELEMETRY',
  'ZERO_TRUST',
];

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

const COMMAND_LIST = [
  'help',
  'bio',
  'fintech',
  'security',
  'pyscanx',
  'ping',
  'sign',
  'verify',
  'theme',
  'hack',
  'clear',
  'contact',
];

interface LogEntry {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}

export const TerminalUplink: React.FC<TerminalUplinkProps> = ({
  onHackEasterEgg,
  playTick,
  onSetTheme,
}) => {
  const [activeTab, setActiveTab] = useState<'cli' | 'hack' | 'signer'>('cli');

  // --- CLI Mode State ---
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [cliLogs, setCliLogs] = useState<LogEntry[]>([
    { type: 'output', content: '================================================================' },
    { type: 'output', content: 'SILISIL ISAAC TAPARA // MAINFRAME TERMINAL v4.2.0 [x86_64-linux]' },
    { type: 'output', content: 'SYSTEM: Zero-Trust Node | REAL-TIME TRADING & OFFENSIVE DEFENSE' },
    { type: 'output', content: "Type 'help' to inspect command directory or press TAB for autocomplete." },
    { type: 'output', content: '================================================================' },
  ]);
  const terminalScrollRef = useRef<HTMLDivElement | null>(null);
  const cliInputRef = useRef<HTMLInputElement | null>(null);

  // --- Hack Game State ---
  const [gameState, setGameState] = useState<'idle' | 'active' | 'hacked'>('idle');
  const [playerName, setPlayerName] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [typedChars, setTypedChars] = useState('');
  const [wordsCompleted, setWordsCompleted] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // --- Cryptographic Signer State ---
  const [signerText, setSignerText] = useState('VERIFIED_CONTRACT // ZERO-TRUST ACCESS AUTHORIZED');
  const [signedBlock, setSignedBlock] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Auto-scroll CLI logs
  useEffect(() => {
    if (activeTab === 'cli' && terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [cliLogs, activeTab]);

  // Generate SHA-256 Hash
  const generateSimulatedHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    return `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b78${hex}`;
  };

  // Generate PGP Signed Block
  const handleGenerateSignature = useCallback((inputMessage?: string) => {
    const textToSign = inputMessage || signerText || 'ZERO-TRUST DEPLOYMENT VERIFICATION';
    const timestamp = new Date().toISOString();
    const sha = generateSimulatedHash(textToSign + timestamp);

    const block = `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256
Timestamp: ${timestamp}
Signer: SILISIL ISAAC TAPARA <isaactapara@gmail.com>
Fingerprint: 4E9A 8F21 C73B 0092 11E5 6F8A 3B1D 9940
Status: [VERIFIED AUTHENTIC // ZERO-TRUST ZERO-DAY MITIGATED]

${textToSign}
-----BEGIN PGP SIGNATURE-----
Version: OpenPGP.js v5.1.0 // Mainframe Zero-Trust Engine
Comment: https://isaactapara.github.io

wsFcBAEBCAAQBQJmz1aKCRD4mEvhxzsAkgAARzAP/12n4hQW5l4r9pG9a2kL
${sha.slice(0, 48)}
${sha.slice(48)}==
=9k0A
-----END PGP SIGNATURE-----`;

    setSignedBlock(block);
    return block;
  }, [signerText]);

  useEffect(() => {
    handleGenerateSignature();
  }, [handleGenerateSignature]);

  // Copy signed block to clipboard
  const handleCopySignature = () => {
    if (playTick) playTick();
    navigator.clipboard.writeText(signedBlock);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // CLI Command Parser
  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    if (playTick) playTick();
    setCliHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newLogs: LogEntry[] = [
      ...cliLogs,
      { type: 'input', content: `isaac@mainframe:~$ ${trimmed}` },
    ];

    switch (cmd) {
      case 'help':
        newLogs.push({
          type: 'output',
          content: `AVAILABLE COMMAND DIRECTORY:
  bio           - Display Isaac's engineering background and credentials
  fintech       - Real-time trading engines & myelitetrader.com telemetry
  security      - Penetration testing & offensive security research
  pyscanx <ip>  - Run multi-threaded socket reconnaissance engine
  ping <host>   - Transmit ICMP echo telemetry packets
  sign <text>   - Generate OpenPGP cryptographic signature block
  verify        - Verify system integrity and TLS 1.3 zero-trust seals
  theme <name>  - Switch theme (dark, light, cyber, synthwave, brutalist)
  hack          - Launch high-speed Mainframe Security Override bypass
  clear         - Clear terminal screen buffer
  contact       - Reveal communication channels and GPG public key`,
        });
        break;

      case 'bio':
        newLogs.push({
          type: 'output',
          content: `SILISIL ISAAC TAPARA
----------------------------------------------------------------
Role:        Secure Software Engineer & Ethical Hacker
Specialties: Real-Time Trading Engines | Low-Latency Telemetry | Zero-Trust Kernels
Location:    Kenya (Worldwide / Remote Ready)
Email:       isaactapara@gmail.com
GitHub:      github.com/isaactapara`,
        });
        break;

      case 'fintech':
        newLogs.push({
          type: 'output',
          content: `FINTECH & TRADING INFRASTRUCTURE (myelitetrader.com)
----------------------------------------------------------------
Architecture: Sub-millisecond WebSocket market depth datafeed
Visualizer:   Reactive candlestick engine & live order book streams
Security:     Zero-trust execution sandboxes & rate-limiting throttling
SLA Uptime:   99.98% availability guarantee`,
        });
        break;

      case 'security':
        newLogs.push({
          type: 'output',
          content: `OFFENSIVE SECURITY & DEFENSIVE TOOLING
----------------------------------------------------------------
Certifications: Harvard CS50 & Cisco Cybersecurity Operations (2025)
Core Focus:     OWASP Top 10 | Penetration Testing | Zero-Day Threat Modeling
Tooling:        PyScanX (Multi-threaded port scanner) | CryptoLockerX (Sandbox)
Methodology:    Adversarial simulation & principle of least privilege (PoLP)`,
        });
        break;

      case 'pyscanx': {
        const target = args[0] || '127.0.0.1';
        newLogs.push({
          type: 'output',
          content: `[+] PyScanX v2.4 initialized against target: ${target}
[+] Spawning 32 concurrent socket workers...
[+] PORT 22/tcp   [OPEN]   OpenSSH 8.9p1 (Ubuntu Linux)
[+] PORT 80/tcp   [OPEN]   nginx/1.22.0 (Reverse Proxy)
[+] PORT 443/tcp  [OPEN]   HTTPS / TLS 1.3 (Zero-Trust Verified)
[+] PORT 5432/tcp [OPEN]   PostgreSQL 16 (Row-Level Security Active)
[+] PORT 8080/tcp [OPEN]   WebSocket Trading Gateway (myelitetrader)
[+] Scan complete: 1,024 ports scanned in 1.84s. Zero thread starvation.`,
        });
        break;
      }

      case 'ping': {
        const host = args[0] || 'myelitetrader.com';
        newLogs.push({
          type: 'output',
          content: `PING ${host} (104.21.48.21): 56 data bytes
64 bytes from 104.21.48.21: icmp_seq=0 ttl=57 time=8.24 ms
64 bytes from 104.21.48.21: icmp_seq=1 ttl=57 time=7.92 ms
64 bytes from 104.21.48.21: icmp_seq=2 ttl=57 time=8.11 ms
--- ${host} ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss
round-trip min/avg/max = 7.92/8.09/8.24 ms`,
        });
        break;
      }

      case 'sign': {
        const message = args.join(' ') || 'AUTHENTICATED ZERO-TRUST DIRECTIVE';
        const block = handleGenerateSignature(message);
        newLogs.push({
          type: 'success',
          content: block,
        });
        break;
      }

      case 'verify':
        newLogs.push({
          type: 'success',
          content: `[+] ZERO-TRUST INTEGRITY VERIFIED
    Certificate: SHA256: 4e9a8f21c73b009211e56f8a3b1d9940
    Issuer:      SILISIL ISAAC TAPARA (Authorized Root Signer)
    Status:      ACTIVE // 0 VULNERABILITIES DETECTED`,
        });
        break;

      case 'theme': {
        const targetTheme = (args[0] || '').toLowerCase() as 'dark' | 'light' | 'cyber' | 'synthwave' | 'brutalist';
        if (['dark', 'light', 'cyber', 'synthwave', 'brutalist'].includes(targetTheme) && onSetTheme) {
          onSetTheme(targetTheme);
          newLogs.push({
            type: 'success',
            content: `[+] Theme successfully overridden to: ${targetTheme.toUpperCase()}`,
          });
        } else {
          newLogs.push({
            type: 'error',
            content: "Usage: theme [dark | light | cyber | synthwave | brutalist]",
          });
        }
        break;
      }

      case 'hack':
      case 'override':
        setActiveTab('hack');
        newLogs.push({
          type: 'output',
          content: '[+] Switching interface to Mainframe Hack Override...',
        });
        break;

      case 'contact':
        newLogs.push({
          type: 'output',
          content: `UPLINK CHANNELS:
  Email:    isaactapara@gmail.com
  WhatsApp: +254 702 502 376
  LinkedIn: linkedin.com/in/isaacktapara
  GitHub:   github.com/isaactapara`,
        });
        break;

      case 'clear':
        setCliLogs([]);
        setCliInput('');
        return;

      default:
        newLogs.push({
          type: 'error',
          content: `zsh: command not found: ${cmd}. Type 'help' for command directory.`,
        });
        break;
    }

    setCliLogs(newLogs);
    setCliInput('');
  };

  // Autocomplete & History Navigation
  const handleCliKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(cliInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cliHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cliHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setCliInput(cliHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cliHistory.length) {
        setHistoryIndex(-1);
        setCliInput('');
      } else {
        setHistoryIndex(nextIndex);
        setCliInput(cliHistory[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = cliInput.trim().toLowerCase();
      if (!current) return;
      const match = COMMAND_LIST.find((c) => c.startsWith(current));
      if (match) {
        setCliInput(match + ' ');
      }
    }
  };

  // --- Hack Game Handlers ---
  const getNextWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * WORD_BANK.length);
    return WORD_BANK[randomIndex];
  }, []);

  const startHackGame = () => {
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
      if (gameState !== 'active' || activeTab !== 'hack') return;

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
    [gameState, activeTab, currentWord, typedChars, wordsCompleted, startTime, getNextWord, onHackEasterEgg, playTick]
  );

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (activeTab === 'hack' && gameState === 'active') {
        if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
          return;
        }
        handleKeyInput(e.key);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [activeTab, gameState, handleKeyInput]);

  return (
    <section id="uplink" className="relative py-24 border-t border-[var(--border-color)]">
      <div className="section-container">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="section-heading">
              <span className="code-text">04.</span> Terminal Uplink &amp; Mainframe Test
            </h2>
            <p className="text-xs md:text-sm font-mono text-[var(--text-muted)] mt-1">
              Interactive cyber shell, cryptographic PGP signature verification, and mainframe override protocol.
            </p>
          </div>

          {/* 3-Mode Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
            <button
              onClick={() => {
                if (playTick) playTick();
                setActiveTab('cli');
                setTimeout(() => cliInputRef.current?.focus(), 50);
              }}
              className={`px-3 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 transition-all ${
                activeTab === 'cli'
                  ? 'bg-[var(--accent-blue)] text-[var(--bg-main)] font-bold shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <TerminalIcon size={14} />
              <span>Interactive CLI</span>
            </button>

            <button
              onClick={() => {
                if (playTick) playTick();
                setActiveTab('hack');
              }}
              className={`px-3 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 transition-all ${
                activeTab === 'hack'
                  ? 'bg-[var(--accent-blue)] text-[var(--bg-main)] font-bold shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Flame size={14} className="text-[var(--accent-green)]" />
              <span>Hack Override</span>
            </button>

            <button
              onClick={() => {
                if (playTick) playTick();
                setActiveTab('signer');
              }}
              className={`px-3 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 transition-all ${
                activeTab === 'signer'
                  ? 'bg-[var(--accent-blue)] text-[var(--bg-main)] font-bold shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <KeyRound size={14} />
              <span>Digital Signer</span>
            </button>
          </div>
        </div>

        {/* Outer Game / Terminal Container */}
        <div className="game-container">
          {/* Top Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs border-b border-[var(--border-color)] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-ping" />
              <span className="text-[var(--text-muted)]">NODE:</span>
              <span className="text-[var(--accent-blue)] font-bold">ISAAC_TAPARA_MAINFRAME</span>
              <span className="hidden sm:inline text-[var(--text-muted)]">| TLS_1.3 // ZERO-TRUST</span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <div>
                LATENCY: <span className="text-[var(--accent-green)] font-bold">&lt;10ms</span>
              </div>
              <div>
                CIPHER: <span className="text-[var(--text-primary)] font-bold">AES-256-GCM</span>
              </div>
            </div>
          </div>

          {/* ================= TAB 1: INTERACTIVE CLI ================= */}
          {activeTab === 'cli' && (
            <div 
              className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg p-4 font-mono text-xs min-h-[420px] flex flex-col justify-between"
              onClick={() => cliInputRef.current?.focus()}
            >
              {/* Output Scroll Area */}
              <div ref={terminalScrollRef} className="overflow-y-auto max-h-[340px] space-y-1.5 pr-2">
                {cliLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed whitespace-pre-wrap ${
                      log.type === 'input'
                        ? 'text-[var(--accent-green)] font-bold'
                        : log.type === 'error'
                        ? 'text-red-400'
                        : log.type === 'success'
                        ? 'text-[var(--accent-green)]'
                        : 'text-[var(--text-primary)]'
                    }`}
                  >
                    {log.content}
                  </div>
                ))}
              </div>

              {/* Prompt Input Line */}
              <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-color)] mt-3">
                <span className="text-[var(--accent-green)] font-bold flex items-center gap-1">
                  <span>isaac@mainframe:~$</span>
                </span>
                <input
                  ref={cliInputRef}
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  onKeyDown={handleCliKeyDown}
                  placeholder="Type a command (e.g. 'help', 'bio', 'fintech', 'pyscanx', 'sign') & press Enter..."
                  className="flex-1 bg-transparent text-[var(--text-primary)] outline-none border-none font-mono text-xs placeholder:text-[var(--text-muted)]"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => executeCommand(cliInput)}
                  className="px-2 py-1 rounded bg-[var(--bg-panel)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent-blue)]"
                  title="Execute command"
                >
                  <CornerDownLeft size={12} />
                </button>
              </div>

              <div className="text-[10px] text-[var(--text-muted)] pt-2 flex items-center justify-between">
                <span>Tip: Press [TAB] to autocomplete commands, [UP/DOWN] for history.</span>
                <span>Type &apos;hack&apos; to trigger speed override.</span>
              </div>
            </div>
          )}

          {/* ================= TAB 2: HACK OVERRIDE TYPING TEST ================= */}
          {activeTab === 'hack' && (
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-3">
                <div>
                  WORDS: <span className="text-[var(--accent-green)] font-bold">{wordsCompleted} / 5</span>
                </div>
                <div>
                  SPEED: <span className="text-[var(--text-primary)] font-bold">{wpm} WPM</span>
                </div>
              </div>

              <div className="game-screen">
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

                <div className="game-screen-content">
                  {gameState === 'idle' && (
                    <div className="max-w-md w-full flex flex-col items-center">
                      <TerminalIcon size={36} className="text-[var(--accent-green)] mb-3" />
                      <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-2">
                        Enter Hacker Call-Sign
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] font-mono mb-4 text-center">
                        Authenticate operator identity and type 5 high-security keywords to trigger the Mainframe Override.
                      </p>
                      <div className="flex w-full gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="e.g. CIPHER_01"
                          value={playerName}
                          onChange={(e) => setPlayerName(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && startHackGame()}
                          className="flex-1 bg-[var(--bg-card)] border border-[var(--border-color)] px-3 py-2 text-sm font-mono text-[var(--text-primary)] rounded outline-none focus:border-[var(--accent-blue)]"
                        />
                        <button
                          onClick={startHackGame}
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
                        CURRENT TARGET KEYWORD ({typedChars.length}/{currentWord.length}):
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
                        Zero-trust clearance granted to Operator <strong className="text-[var(--text-primary)]">{playerName}</strong>. 
                        Cyber system telemetry has been recorded in the session log.
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
              <div className="game-keyboard mt-4">
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

              <div className="text-center font-mono text-[11px] text-[var(--text-muted)] mt-2">
                (Type using your physical keyboard or tap the 3D reactive keys above)
              </div>
            </div>
          )}

          {/* ================= TAB 3: DIGITAL SIGNER ================= */}
          {activeTab === 'signer' && (
            <div className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg p-5 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2">
                  <Lock size={16} className="text-[var(--accent-green)]" />
                  <span className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    Cryptographic Digital Signature Generator (OpenPGP / SHA-256)
                  </span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)]">
                  NON-REPUDIATION GUARANTEED
                </span>
              </div>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Type any contract statement, security requirement, or verification note below to cryptographically sign it with Isaac Tapara&apos;s Zero-Trust public fingerprint:
              </p>

              {/* Input for custom signature text */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[var(--text-primary)] uppercase">
                  Statement / Token to Sign:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={signerText}
                    onChange={(e) => setSignerText(e.target.value)}
                    placeholder="e.g. NON-DISCLOSURE_AGREEMENT // PROJECT_ALPHA_VERIFIED"
                    className="flex-1 bg-[var(--bg-card)] border border-[var(--border-color)] px-3 py-2 rounded text-xs font-mono text-[var(--text-primary)] outline-none focus:border-[var(--accent-blue)]"
                  />
                  <button
                    onClick={() => {
                      if (playTick) playTick();
                      handleGenerateSignature();
                    }}
                    className="btn btn-primary text-xs font-mono flex items-center gap-1.5"
                  >
                    <Zap size={14} />
                    <span>SIGN_NOW</span>
                  </button>
                </div>
              </div>

              {/* Verified PGP Certificate Block */}
              <div className="relative">
                <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] mb-1">
                  <span>CRYPTOGRAPHIC CERTIFICATE OUTPUT:</span>
                  <button
                    onClick={handleCopySignature}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--bg-panel)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] hover:border-[var(--accent-green)] hover:text-[var(--accent-green)] transition-all"
                  >
                    {isCopied ? <Check size={12} className="text-[var(--accent-green)]" /> : <Copy size={12} />}
                    <span>{isCopied ? 'COPIED TO CLIPBOARD' : 'COPY SIGNATURE BLOCK'}</span>
                  </button>
                </div>

                <pre className="p-4 rounded bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--accent-green)] overflow-x-auto text-[11px] leading-relaxed selection:bg-[var(--accent-blue)] selection:text-[var(--bg-main)]">
                  {signedBlock}
                </pre>
              </div>

              <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
                <span>Fingerprint: 4E9A 8F21 C73B 0092 11E5 6F8A 3B1D 9940</span>
                <span>SHA-256 RFC 4880 Standard</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TerminalUplink;
