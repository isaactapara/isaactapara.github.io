import React from 'react';

interface MarqueeProps {
  items?: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({
  items = [
    'Secure Architecture',
    'Ethical Hacking',
    'Full-Stack Innovation',
    'Cyber Defense',
    'Fintech Systems',
    'Scalable Solutions',
  ],
}) => {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-inner">
        {items.map((item, idx) => (
          <React.Fragment key={`m1-${idx}`}>
            <span>{item}</span>
            <span className="marquee-outline">{item}</span>
          </React.Fragment>
        ))}
        {items.map((item, idx) => (
          <React.Fragment key={`m2-${idx}`}>
            <span>{item}</span>
            <span className="marquee-outline">{item}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
