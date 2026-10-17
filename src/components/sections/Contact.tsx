import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Clock, Send, Github, Linkedin, Twitter } from 'lucide-react';
import MagneticButton from '../common/MagneticButton';

interface ContactProps {
  playTick?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ playTick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playTick) playTick();

    const mailto = `mailto:isaactapara@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Uplink] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `OPERATOR: ${formData.name}\nEMAIL: ${formData.email}\n\nTRANSMISSION:\n${formData.message}`
    )}`;

    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'PRIMARY COMM',
      value: 'isaactapara@gmail.com',
      href: 'mailto:isaactapara@gmail.com',
      badge: 'Email',
    },
    {
      icon: MessageCircle,
      title: 'FAST DISPATCH',
      value: '+254 702 502 376',
      href: 'https://wa.me/254702502376',
      badge: 'WhatsApp',
    },
    {
      icon: MapPin,
      title: 'BASE OF OPERATIONS',
      value: 'Kenya (Remote / Global)',
      href: '#',
      badge: 'Timezone: UTC+3',
    },
    {
      icon: Clock,
      title: 'TRANSMISSION SLA',
      value: 'Under 24 Hours Response',
      href: '#',
      badge: 'Active',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/isaactapara', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/isaacktapara/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/254702502376', label: 'WhatsApp' },
    { icon: Twitter, href: 'https://x.com/ToxicWarlord2', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-24 border-t border-[var(--border-color)]">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="code-text">05.</span> Initialize Transmission
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[var(--text-primary)] mb-4">
                Let's Build Something Resilient.
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8">
                Available for software engineering contracts, systems security consulting, 
                high-performance web architecture, and full-stack development projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
                {contactCards.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    onClick={() => playTick && playTick()}
                    className="p-4 rounded border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-blue)] transition-colors block group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-green)]">
                        <c.icon size={14} />
                        <span>{c.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {c.badge}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                      {c.value}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <div className="text-xs font-mono text-[var(--text-muted)] mb-3 uppercase tracking-wider">
                COMMUNICATION NETWORKS
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <MagneticButton key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playTick && playTick()}
                      className="icon-link"
                      aria-label={s.label}
                      title={s.label}
                    >
                      <s.icon size={18} />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Cyber Floating Label Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--border-color)]">
                <span className="text-xs font-mono text-[var(--accent-blue)]">&gt; SECURE_CONTACT_SOCKET</span>
                <span className="text-[10px] font-mono text-[var(--accent-green)]">TLS_1.3 // ENCRYPTED</span>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded bg-[rgba(0,255,65,0.1)] border border-[var(--accent-green)] text-xs font-mono text-[var(--accent-green)]">
                  ✓ DISPATCH READY: Opening local mail client with pre-formatted transmission headers.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="floating-label-group">
                    <input
                      type="text"
                      name="name"
                      id="form-name"
                      required
                      placeholder=" "
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="form-name">Your Call-Sign / Name</label>
                  </div>

                  <div className="floating-label-group">
                    <input
                      type="email"
                      name="email"
                      id="form-email"
                      required
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="form-email">Your Electronic Mail</label>
                  </div>
                </div>

                <div className="floating-label-group">
                  <input
                    type="text"
                    name="subject"
                    id="form-subject"
                    required
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label htmlFor="form-subject">Subject Matter / Directive</label>
                </div>

                <div className="floating-label-group">
                  <textarea
                    name="message"
                    id="form-message"
                    required
                    placeholder=" "
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <label htmlFor="form-message">Transmission Payload / Message</label>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">
                    * Payload routed directly to Isaac Tapara
                  </div>

                  <MagneticButton>
                    <button
                      type="submit"
                      className="btn btn-primary font-mono text-xs uppercase tracking-wider flex items-center gap-2"
                    >
                      <Send size={14} />
                      <span>Transmit Message</span>
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
