'use client';

import { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Blurred circle cursor */}
      <div
        className="fixed pointer-events-none z-9999 w-8 h-8 rounded-full bg-cyan-400"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(8px)',
        }}
      />
    </>
  );
}
