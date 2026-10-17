import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { ExternalLink, Github, Shield, Globe, Terminal } from 'lucide-react';
import { projects } from '../../data/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

interface ProjectsDeckProps {
  playTick?: () => void;
}

export const ProjectsDeck: React.FC<ProjectsDeckProps> = ({ playTick }) => {
  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'cybersecurity':
        return <Shield className="accent-icon text-[var(--accent-green)]" size={24} />;
      case 'web':
        return <Globe className="accent-icon text-[var(--accent-blue)]" size={24} />;
      default:
        return <Terminal className="accent-icon text-[var(--text-primary)]" size={24} />;
    }
  };

  return (
    <section id="projects" className="projects-section relative py-24 border-t border-[var(--border-color)] overflow-hidden">
      <div className="section-container">
        {/* Section Heading */}
        <h2 className="section-heading">
          <span className="code-text">02.</span> Core Systems &amp; Deployments
        </h2>

        <div className="projects-layout">
          {/* Huge Background Watermark Text */}
          <div className="projects-bg-text neumorphic-text" aria-hidden="true">
            ARTISTRY
          </div>

          {/* 3D Stacked Deck Swiper */}
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="project-swiper"
            cardsEffect={{
              perSlideOffset: 14,
              perSlideRotate: 4,
              rotate: true,
              slideShadows: true,
            }}
            onSlideChange={() => playTick && playTick()}
          >
            {projects.map((proj) => (
              <SwiperSlide key={proj.id} className="project-card data-card">
                <div className="card-image-wrapper">
                  <img
                    src={proj.images[0] || '/assets/isaac.jpeg'}
                    alt={proj.title}
                    className="card-image"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="data-badge uppercase text-[10px]">
                      {proj.category}
                    </span>
                  </div>
                </div>

                <div className="card-content">
                  <div className="project-header flex items-center gap-3 mb-2">
                    {getProjectIcon(proj.category)}
                    <h3 className="project-title font-heading font-bold text-xl text-[var(--text-primary)]">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="project-desc text-xs sm:text-sm text-[var(--text-muted)] line-clamp-3 mb-4 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="tech-stack flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.slice(0, 5).map((t, i) => (
                      <span key={i} className="data-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links flex items-center justify-between pt-3 border-t border-[var(--border-color)] mt-auto">
                    {proj.githubUrl && proj.githubUrl !== '#' ? (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => playTick && playTick()}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-[var(--text-muted)]">Proprietary</span>
                    )}

                    {proj.liveUrl ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => playTick && playTick()}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-green)] hover:underline"
                      >
                        <ExternalLink size={14} />
                        <span>Access Platform</span>
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-[var(--accent-green)]">
                        Status: {proj.status}
                      </span>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Swipe Hint */}
        <div className="text-center mt-6">
          <p className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
            &lt; SWIPE / DRAG 3D DECK TO CYCLE ARCHITECTURES &gt;
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDeck;
