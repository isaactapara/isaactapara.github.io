import React, { useEffect, useRef } from 'react';

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cw = (canvas.width = window.innerWidth);
    let ch = (canvas.height = window.innerHeight);

    const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]=/*-+!#';
    const fontSize = 14;
    let columns = Math.floor(cw / fontSize);
    let drops = Array.from({ length: columns }, () => Math.random() * ch);

    const handleResize = () => {
      if (!canvas) return;
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
      columns = Math.floor(cw / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * ch);
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, cw, ch);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > ch && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="network-canvas" aria-hidden="true" />;
};

export default MatrixRain;
