import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface SoundToggleProps {
  soundEnabled: boolean;
  onToggle: () => void;
  onTick?: () => void;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ soundEnabled, onToggle, onTick }) => {
  return (
    <button
      id="sound-toggle"
      onClick={() => {
        onToggle();
        if (onTick) onTick();
      }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] flex items-center justify-center shadow-lg hover:border-[var(--accent-blue)] transition-all duration-300 hover:scale-105"
      title={soundEnabled ? 'Mute Interface Audio' : 'Unmute Interface Audio'}
      aria-label="Sound Toggle"
    >
      {soundEnabled ? (
        <Volume2 size={20} className="text-[var(--accent-green)]" />
      ) : (
        <VolumeX size={20} className="text-[var(--text-muted)]" />
      )}
    </button>
  );
};

export default SoundToggle;
