import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutGazetteProps {
  playTick?: () => void;
  onOpenCvModal?: () => void;
}

export const AboutGazette: React.FC<AboutGazetteProps> = ({ playTick, onOpenCvModal }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Column (Text) Fade Up
      gsap.fromTo(
        '.gazette-content',
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gazette-content',
            start: 'top 85%',
          },
        }
      );

      // Right Column (Image) Slide In
      gsap.fromTo(
        '.gazette-image',
        { x: 50, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gazette-layout',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section relative py-24 border-t border-[var(--border-color)]">
      <div className="section-container">
        <div className="gazette-layout">
          {/* Gazette Text Column */}
          <div className="gazette-content">
            <p className="gazette-issue code-text">ISSUE: NO. 01 / FINTECH &amp; SECURITY ENGINEERING</p>
            <h2 className="gazette-headline">
              THE ARCHITECT: <br /> WHO IS ISAAC?
            </h2>
            <div className="gazette-text">
              <p>
                <span className="drop-cap">A</span>t the bleeding edge of the financial technology
                and cybersecurity sector, secure data streams and high-frequency algorithms dictate
                the market. Isaac, a highly driven software engineer and ethical hacker, has
                positioned himself precisely at this intersection. Specializing in building fast,
                impenetrable, and massively scalable applications, his work bridges the critical
                gap between complex raw data processing and pixel-perfect user interfaces.
              </p>
              <p>
                Currently engineering the future across production systems, Isaac architects robust
                software that handles real-time market data visualization and secure execution
                environments. His technological stack leans heavily into performant JavaScript and
                TypeScript ecosystems, Python data pipelines, and highly secure SQL architectures.
              </p>
              <br />
              <button
                id="btn-generate-cv"
                className="btn btn-primary magnetic-btn hover-sound inline-flex items-center gap-2"
                onClick={() => {
                  if (playTick) playTick();
                  if (onOpenCvModal) onOpenCvModal();
                }}
              >
                &gt; GENERATE_CV.exe
              </button>
            </div>
          </div>

          {/* Profile Image with Fluid Blur Mask */}
          <div className="gazette-image">
            <div className="image-wrapper frameless-mask">
              <img
                src="/assets/isaac.jpg"
                alt="Isaac Profile"
                className="profile-img-fluid theme-target-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGazette;
