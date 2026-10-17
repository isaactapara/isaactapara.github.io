import React from 'react';

interface GlitchOverlayProps {
  active: boolean;
}

export const GlitchOverlay: React.FC<GlitchOverlayProps> = ({ active }) => {
  return (
    <div
      id="glitch-overlay"
      className={active ? 'active' : ''}
      aria-hidden="true"
    />
  );
};

export default GlitchOverlay;
