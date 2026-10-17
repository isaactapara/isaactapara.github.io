import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light' | 'cyber' | 'synthwave' | 'brutalist';

export interface ThemeOption {
  id: Theme;
  label: string;
  badge: string;
}

export const THEMES: ThemeOption[] = [
  { id: 'dark', label: 'Dark (Neumorphic)', badge: 'Default' },
  { id: 'light', label: 'Light (Editorial)', badge: 'Paper' },
  { id: 'cyber', label: 'Cyber (Hacker)', badge: 'Matrix' },
  { id: 'synthwave', label: 'Neon (Synthwave)', badge: 'Retro' },
  { id: 'brutalist', label: 'OLED (Brutalist)', badge: 'Pure' },
];

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme;
    if (saved && ['dark', 'light', 'cyber', 'synthwave', 'brutalist'].includes(saved)) {
      return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return { theme, setTheme, themes: THEMES };
}
