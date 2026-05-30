import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ isVisible }) {
  const [letters] = useState(['B','a','k','i','n','g',' ','C','o','r','n','e','r']);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    setShown(0);
    let i = 0;
    const t = setInterval(() => {
      i++;
      setShown(i);
      if (i >= letters.length) clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, [isVisible]);

  return (
    <div className={`loading-screen ${isVisible ? '' : 'hidden'}`}>
      {/* Decorative ring */}
      <div style={{
        position: 'absolute',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        border: '1px solid rgba(201,148,74,0.15)',
        animation: 'rotateSlow 20s linear infinite',
      }} />
      <div style={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '1px solid rgba(201,148,74,0.1)',
        animation: 'rotateSlow 14s linear infinite reverse',
      }} />

      {/* Brand name */}
      <div style={{ textAlign: 'center', zIndex: 10 }}>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
          fontWeight: 300,
          letterSpacing: '0.12em',
          color: '#FAF7F2',
          marginBottom: '0.4rem',
          minHeight: '1.2em',
        }}>
          {letters.slice(0, shown).map((l, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                animation: 'slideUp 0.4s ease forwards',
                opacity: 0,
              }}
            >
              {l === ' ' ? '\u00A0' : l}
            </span>
          ))}
        </h1>

        <p style={{
          fontFamily: 'Jost, system-ui, sans-serif',
          fontSize: '0.65rem',
          fontWeight: 400,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(201,148,74,0.7)',
          animation: 'fadeIn 1s ease 0.8s both',
        }}>
          Handcrafted Happiness
        </p>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '160px',
      }}>
        <div style={{
          height: '1px',
          background: 'rgba(255,255,255,0.08)',
          width: '100%',
          overflow: 'hidden',
        }}>
          <div className="loading-bar" style={{ width: 0 }} />
        </div>
      </div>
    </div>
  );
}