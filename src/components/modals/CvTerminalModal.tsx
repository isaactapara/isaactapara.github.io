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
Full-Stack & Trading Systems Engineer | Security Specialist
=========================================================

> PROFESSIONAL SUMMARY
Results-driven Full-Stack Software Engineer specializing in scalable web architectures,
secure transactional payment flows, and high-performance trading platforms. Proven track record
architecting robust backend services, integrating secure API gateways (such as M-Pesa Daraja
and Deriv), and implementing strict data protection measures. Adept at bridging complex financial
logic with automated algorithms and clean, reactive multi-platform user experiences.

> CONTACT & CHANNELS
- Email: isaactapara@gmail.com
- Mobile / WhatsApp: +254 702 502 376
- Location: Nairobi, Kenya (Remote / Worldwide Ready)
- LinkedIn: linkedin.com/in/isaacktapara
- GitHub: github.com/isaactapara
- Portfolio: https://isaactapara.github.io

> TECHNICAL SKILLS
- Languages & Core: Python, JavaScript, TypeScript, C#, PHP
- Frontend & Multi-Platform: React, Astro, Tailwind CSS, HTML5/CSS3, Cross-Platform Desktop & Mobile Apps
- Backend & APIs: Node.js, Express, Django, RESTful APIs, Webhooks, Socket Architecture
- Databases & Cloud: PostgreSQL, Supabase, Docker, Linux, cPanel, Vercel, Hetzner, Git/GitHub Actions
- Security & FinTech: API Authentication/OAuth, Secure Payload Parsing, Payment Gateways (Daraja/M-Pesa),
  Trading Algorithm Automation, CI/CD Pipelines

> PROFESSIONAL & PROJECT EXPERIENCE
1. MyEliteTrader (myelitetrader.com) [Full-Stack & Trading Systems Engineer - Current]
   - Engineered online trading & analysis software designed for binary options and Deriv markets.
   - Deployed downloadable cross-platform applications across desktop and mobile ecosystems.
   - Developed algorithmic automation as a dynamic alternative to traditional trading bots.
   - Built specialized charting metrics tailored for complex rise/fall and over/under strategies.
   - Connected Deriv account authentication gates and Node.js/Express backend payment webhook parsing.

2. Regional Revenue & Transaction System [Backend & Payment Gateway Architect]
   - Designed comprehensive software architecture and data models using Django and React.
   - Streamlined localized digital payments, secure tracking, and automated M-Pesa Daraja flows.
   - Implemented strict transaction verification and asynchronous webhook reconciliations.

3. Self-Hosted Infrastructure, Automation & Security Engineering
   - Configured and managed self-hosted Linux server infrastructure (Hetzner, Docker, cPanel).
   - Engineered n8n automated workflows for continuous monitoring and event-driven notifications.
   - Built isolated testing environments and automated CI/CD deployment pipelines via GitHub Actions.

4. FAMALCOLLECTIONS [Live Production E-Commerce Platform]
   - Built full-featured e-commerce system with Supabase Auth, PostgreSQL, React Query.
   - Role-based access control (RBAC), inventory analytics, and automated reporting.

5. PyScanX & CryptoLockerX [Offensive Security & Reconnaissance Tooling]
   - Multi-threaded TCP port scanner with dynamic banner grabbing written in Python.
   - Sandboxed educational ransomware simulation analyzing cryptographic threat vectors.

> EDUCATION & CERTIFICATIONS
- B.S. Software Engineering — Zetech University (2024 — 2026)
  Specializing in Data Structures, Algorithms, Secure Database Systems, and Distributed Computing.
- Financial Systems Penetration Testing & Cybersecurity Operations — Harvard CS50 / Cisco (2025)
- Practical Ethical Hacking, Application Defense & Zero-Trust Architecture

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
    pdfContainer.id = 'executive-resume-pdf';
    pdfContainer.style.width = '794px';
    pdfContainer.style.padding = '36px 40px';
    pdfContainer.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
    pdfContainer.style.color = '#0f172a';
    pdfContainer.style.lineHeight = '1.45';
    pdfContainer.style.background = '#ffffff';
    pdfContainer.style.boxSizing = 'border-box';

    pdfContainer.innerHTML = `
      <div style="border-bottom: 2px solid #0f172a; padding-bottom: 14px; margin-bottom: 16px;">
        <h1 style="margin: 0 0 3px 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; color: #0f172a; text-transform: uppercase;">
          SILISIL ISAAC TAPARA
        </h1>
        <div style="font-size: 12.5px; font-weight: 600; color: #0284c7; margin-bottom: 8px;">
          Secure Software Engineer &bull; Real-Time Trading Systems &bull; Full-Stack Architect
        </div>
        <div style="font-size: 10.5px; color: #475569; display: flex; flex-wrap: wrap; gap: 12px; font-family: monospace;">
          <span><strong>Email:</strong> isaactapara@gmail.com</span>
          <span><strong>Phone:</strong> +254 702 502 376</span>
          <span><strong>Location:</strong> Nairobi, Kenya (Worldwide Remote)</span>
          <span><strong>Portfolio:</strong> https://isaactapara.github.io</span>
          <span><strong>GitHub:</strong> github.com/isaactapara</span>
          <span><strong>LinkedIn:</strong> linkedin.com/in/isaacktapara</span>
        </div>
      </div>

      <!-- Professional Summary -->
      <div style="margin-bottom: 16px;">
        <h2 style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin: 0 0 5px 0;">
          Professional Summary
        </h2>
        <p style="font-size: 10.5px; color: #334155; margin: 0; line-height: 1.5;">
          High-caliber Systems &amp; Security Engineer specializing in high-throughput financial trading software, low-latency market depth telemetry, and offensive zero-trust infrastructure. Proven track record architecting and deploying scalable production platforms (fintech, e-commerce, enterprise ERP) coupled with custom multi-threaded Python reconnaissance engines. Driven by an offensive security mindset: engineering software that is impervious to modern threat vectors.
        </p>
      </div>

      <!-- Core Technical Skills -->
      <div style="margin-bottom: 16px;">
        <h2 style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin: 0 0 5px 0;">
          Core Technical Skills
        </h2>
        <div style="font-size: 10.5px; color: #334155; line-height: 1.55;">
          <div><strong>Languages &amp; Core:</strong> TypeScript, JavaScript (ES6+), Python 3, SQL, C/C++, HTML5, CSS3</div>
          <div><strong>Web &amp; Frameworks:</strong> React 19, Vite, Next.js, WebSockets, Tailwind CSS, Node.js, Express, GSAP</div>
          <div><strong>Databases &amp; Architecture:</strong> PostgreSQL, Supabase RLS, Microservices, ACID Transaction Compliance, REST APIs</div>
          <div><strong>Cybersecurity &amp; Tools:</strong> Kali Linux, Wireshark, Burp Suite, Network Reconnaissance (PyScanX), OWASP Top 10, Port Scanning, Git, Docker, Linux SysAdmin</div>
        </div>
      </div>

      <!-- Professional Experience & Deployments -->
      <div style="margin-bottom: 16px;">
        <h2 style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin: 0 0 6px 0;">
          Professional Experience &amp; Production Deployments
        </h2>

        <div style="margin-bottom: 9px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-size: 11.5px; font-weight: 700; color: #0f172a;">Lead Full-Stack Developer &mdash; Real-Time Trading Engines</span>
            <span style="font-size: 10px; font-weight: 600; color: #0284c7; font-family: monospace;">CURRENT // PRODUCTION</span>
          </div>
          <div style="font-size: 10.5px; font-weight: 600; color: #475569; margin-bottom: 2px;">myelitetrader.com</div>
          <ul style="font-size: 10px; color: #334155; margin: 0; padding-left: 16px; line-height: 1.45;">
            <li>Architecting high-throughput financial trading systems and real-time market depth telemetry interfaces.</li>
            <li>Engineered sub-millisecond WebSocket data pipelines streaming live candlestick aggregations and concurrent order books with &lt;12ms latency.</li>
            <li>Hardened execution sandboxes against session-hijacking, API rate-limiting throttling, and algorithmic slippage vulnerabilities.</li>
          </ul>
        </div>

        <div style="margin-bottom: 9px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-size: 11.5px; font-weight: 700; color: #0f172a;">Offensive Security Researcher &amp; Tooling Architect</span>
            <span style="font-size: 10px; font-weight: 600; color: #0284c7; font-family: monospace;">2024 &mdash; PRESENT</span>
          </div>
          <div style="font-size: 10.5px; font-weight: 600; color: #475569; margin-bottom: 2px;">Zero-Trust Open Source Labs (PyScanX &amp; CryptoLockerX)</div>
          <ul style="font-size: 10px; color: #334155; margin: 0; padding-left: 16px; line-height: 1.45;">
            <li>Authored PyScanX: Multi-threaded TCP network reconnaissance engine with dynamic banner grabbing scanning 1,000+ ports in &lt;3.2s.</li>
            <li>Authored CryptoLockerX: Sandboxed educational ransomware simulator analyzing modern cryptographic threat vectors.</li>
          </ul>
        </div>

        <div style="margin-bottom: 9px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-size: 11.5px; font-weight: 700; color: #0f172a;">Principal Production Architect &mdash; Commercial Deployments</span>
            <span style="font-size: 10px; font-weight: 600; color: #0284c7; font-family: monospace;">2024 &mdash; PRESENT</span>
          </div>
          <div style="font-size: 10.5px; font-weight: 600; color: #475569; margin-bottom: 2px;">Enterprise Client Ventures (FAMALCOLLECTIONS &amp; ENKANASA-COW)</div>
          <ul style="font-size: 10px; color: #334155; margin: 0; padding-left: 16px; line-height: 1.45;">
            <li>Delivered FAMALCOLLECTIONS: Full-featured e-commerce platform with Supabase authentication and PostgreSQL Row-Level Security.</li>
            <li>Delivered ENKANASA-COW: Commercial dairy enterprise platform in Narok County with automated Daraja mobile payment reconciliation.</li>
          </ul>
        </div>
      </div>

      <!-- Education & Specialized Research -->
      <div>
        <h2 style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin: 0 0 6px 0;">
          Education &amp; Specialized Research
        </h2>

        <div style="margin-bottom: 6px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-size: 11.5px; font-weight: 700; color: #0f172a;">B.S. Software Engineering &mdash; Distributed Systems &amp; Low-Level Computing</span>
            <span style="font-size: 10px; font-weight: 600; color: #0284c7; font-family: monospace;">2024 &mdash; 2026</span>
          </div>
          <div style="font-size: 10.5px; color: #475569;">Zetech University // Systems &amp; Networks Research Lab</div>
          <div style="font-size: 10px; color: #64748b;">Specializing in concurrent algorithmic processing, memory-safe data structures, secure database internals, and distributed microservices.</div>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-size: 11.5px; font-weight: 700; color: #0f172a;">Financial Systems Penetration Testing &amp; Cybersecurity Operations</span>
            <span style="font-size: 10px; font-weight: 600; color: #0284c7; font-family: monospace;">2025</span>
          </div>
          <div style="font-size: 10.5px; color: #475569;">Harvard CS50 // Cisco Cybersecurity Operations</div>
          <div style="font-size: 10px; color: #64748b;">Offensive security testing, vulnerability assessment, zero-day threat modeling, and transactional API hardening.</div>
        </div>
      </div>
    `;

    document.body.appendChild(pdfContainer);

    const opt = {
      margin: [0.35, 0.4, 0.35, 0.4] as [number, number, number, number],
      filename: 'Silisil_Isaac_Tapara_Software_Engineer_CV.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
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
