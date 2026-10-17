import React, { useState, useEffect, useRef } from 'react';
import { Download, Terminal } from 'lucide-react';
import html2pdf from 'html2pdf.js';

interface CvTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  playTick?: () => void;
}

const RAW_CV_DATA = `=========================================================
SILISIL ISAAC TAPARA // CURRICULUM VITAE
Secure Software Engineer | Ethical Hacker | Full-Stack Architect
=========================================================

> SUMMARY
High-caliber Systems & Security Engineer specializing in high-throughput trading software,
low-latency market data visualization, and offensive zero-trust infrastructure. Proven track record
architecting and deploying scalable production platforms (fintech, e-commerce, enterprise ERP)
coupled with custom multi-threaded Python reconnaissance engines. Driven by an offensive security
mindset: engineering software that is impervious to modern threat vectors.

> CONTACT & CHANNELS
- Email: isaactapara@gmail.com
- Mobile / WhatsApp: +254 702 502 376
- Location: Kenya (Remote / Worldwide Ready)
- LinkedIn: linkedin.com/in/isaacktapara
- GitHub: github.com/isaactapara
- Portfolio: https://isaactapara.github.io

> CORE TECHNICAL SKILLS
- Languages: TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3
- Web & Frontend: React 19, Vite, Next.js, Tailwind CSS, Radix UI, Framer Motion, GSAP
- Backend & DB: Node.js, Express, Python Sockets, PostgreSQL, Supabase, REST APIs
- Cybersecurity & Tools: Kali Linux, Wireshark, Port Scanning, Banner Grabbing,
  Vulnerability Assessment, Git, Docker, Linux SysAdmin

> KEY PRODUCTION PLATFORMS & PROJECTS
1. FAMALCOLLECTIONS [Live E-Commerce Platform]
   - Built full-featured e-commerce system with Supabase Auth, PostgreSQL, React Query.
   - Real-time analytics, inventory management, role-based access control.
   - GitHub: github.com/isaactapara/FAMALCOLLECTIONS

2. ENKANASA-COW [Enterprise Dairy Platform]
   - Commercial platform for dairy operations in Narok County, Kenya.
   - Modern React, TypeScript, responsive branding and catalog showcase.
   - GitHub: github.com/isaactapara/ENKANASA-COW

3. ESHIPA-AFRICA [Non-Profit Empowerment Platform]
   - Community portal combating GBV and empowering youth.
   - WCAG-compliant accessible architecture with EmailJS integrations.
   - GitHub: github.com/isaactapara/ESHIPA-AFRICA

4. PyScanX [Network Reconnaissance Engine]
   - Multi-threaded TCP port scanner with dynamic banner grabbing written in Python.
   - Stealth scan profiles and structured JSON reporting.
   - GitHub: github.com/isaactapara/PyScanx

5. CryptoLockerX [Educational Ransomware Simulator]
   - Sandboxed demonstration tool built for controlled academic security exercises.

> PROFESSIONAL EXPERIENCE & ROLES
- Software Developer — myelitetrader.com (Current)
  Developing high-performance trading software. Focused on real-time market data visualization,
  secure execution environments, and scalable full-stack architectures.

> EDUCATION & CERTIFICATIONS
- Bachelor of Science in Software Engineering — Zetech University (2024 — 2026)
  Specializing in Data Structures, Algorithms, Secure Database Systems, and Advanced Web Technologies.
- Cyber Security Certifications — Harvard CS50 / Cisco (2025)
  Focused on penetration testing and securing applications against financial sector vulnerabilities.
- Practical Ethical Hacking & Network Defense Certifications
- High-Performance Web Architecture Studies

=========================================================
[TRANSMISSION END: ROOT_VERIFIED]
`;

export const CvTerminalModal: React.FC<CvTerminalModalProps> = ({
  isOpen,
  onClose,
  playTick,
}) => {
  const [streamedText, setStreamedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const streamRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setStreamedText('');
      setIsFinished(false);
      return;
    }

    let charIndex = 0;
    const totalChars = RAW_CV_DATA.length;

    const interval = setInterval(() => {
      charIndex += 4;
      if (charIndex >= totalChars) {
        setStreamedText(RAW_CV_DATA);
        setIsFinished(true);
        clearInterval(interval);
      } else {
        setStreamedText(RAW_CV_DATA.slice(0, charIndex));
        if (charIndex % 32 === 0 && playTick) {
          playTick();
        }
      }

      if (streamRef.current) {
        streamRef.current.scrollTop = streamRef.current.scrollHeight;
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isOpen, playTick]);

  const handleDownloadPdf = () => {
    if (playTick) playTick();
    setIsExporting(true);

    const pdfContainer = document.createElement('div');
    pdfContainer.style.padding = '35px';
    pdfContainer.style.fontFamily = 'Helvetica, Arial, sans-serif';
    pdfContainer.style.color = '#111';
    pdfContainer.style.lineHeight = '1.5';
    pdfContainer.style.background = '#ffffff';

    const formattedHtml = RAW_CV_DATA
      .replace(/=========================================================/g, '<hr style="margin: 15px 0; border: 1px solid #ddd;">')
      .replace(/> (SUMMARY|CONTACT & CHANNELS|CORE TECHNICAL SKILLS|KEY PRODUCTION PLATFORMS & PROJECTS|EDUCATION & CERTIFICATIONS)/g, 
        (_, title) => `<h3 style="color:#0f172a; border-bottom: 2px solid #0f172a; padding-bottom:4px; margin-top:20px; font-size:14px; text-transform:uppercase;">${title}</h3>`
      )
      .replace(/SILISIL ISAAC TAPARA \/\/ CURRICULUM VITAE/g, '<h1 style="margin:0; font-size:24px; color:#0f172a;">SILISIL ISAAC TAPARA</h1>')
      .replace(/Secure Software Engineer \| Ethical Hacker \| Full-Stack Architect/g, '<h4 style="margin:4px 0 0 0; color:#475569; font-weight:normal; font-size:13px;">Secure Software Engineer | Ethical Hacker | Full-Stack Architect</h4>')
      .replace(/\n/g, '<br>');

    pdfContainer.innerHTML = formattedHtml;
    document.body.appendChild(pdfContainer);

    const opt = {
      margin: 0.5,
      filename: 'Isaac_Tapara_Software_Engineer_CV.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const },
    };

    html2pdf()
      .set(opt)
      .from(pdfContainer)
      .save()
      .then(() => {
        document.body.removeChild(pdfContainer);
        setIsExporting(false);
      })
      .catch((err: unknown) => {
        console.error('PDF Export Error:', err);
        document.body.removeChild(pdfContainer);
        setIsExporting(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[85vh] rounded-lg border border-[var(--accent-green)] bg-[#030712] text-[var(--accent-green)] font-mono flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--accent-green)] bg-[#050b14]">
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Terminal size={16} />
            <span>&gt; ROOT_ACCESS_GRANTED // STREAMING_CV_STREAM</span>
          </div>

          <div className="flex items-center gap-3">
            {isFinished && (
              <button
                onClick={handleDownloadPdf}
                disabled={isExporting}
                className="px-3 py-1 rounded border border-[var(--accent-green)] text-xs font-mono text-[var(--accent-green)] hover:bg-[var(--accent-green)] hover:text-[#030712] transition-colors flex items-center gap-1.5"
              >
                <Download size={14} />
                <span>{isExporting ? 'COMPILING PDF...' : '> DOWNLOAD_PDF.exe'}</span>
              </button>
            )}

            <button
              onClick={() => {
                if (playTick) playTick();
                onClose();
              }}
              className="px-2 py-1 text-xs text-[var(--text-muted)] hover:text-white transition-colors"
            >
              [X] CLOSE
            </button>
          </div>
        </div>

        {/* Live Stream Terminal Output */}
        <div
          ref={streamRef}
          className="p-6 overflow-y-auto font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap selection:bg-[var(--accent-green)] selection:text-black"
        >
          {streamedText}
          {!isFinished && <span className="cursor ml-1">_</span>}
        </div>
      </div>
    </div>
  );
};

export default CvTerminalModal;
