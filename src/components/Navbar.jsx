import React, { useState, useEffect } from 'react';
import { IMAGES } from '../config/images.js';

const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Products',    href: '#products' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Why Us',      href: '#why-us' },
  { label: 'Contact',     href: '#contact' },
];

/* ── SVG Icons ─────────────────────────────────────────────────── */
const IgIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="3"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

const WaIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      {/* ── Desktop / Sticky bar ─────────────────────────────── */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-2.5 z-10">
            <img
              src={IMAGES.logo}
              alt="Baking Corner"
              className="h-9 w-auto object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '1.35rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: scrolled ? '#3D1F0D' : '#3D1F0D',
              lineHeight: 1,
            }}>
              Baking Corner
            </span>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-link"
                style={{ color: scrolled ? '#3D1F0D' : '#3D1F0D' }}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right actions — desktop */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://www.instagram.com/baking__corner22"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#3D1F0D', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9944A'}
              onMouseLeave={e => e.currentTarget.style.color = '#3D1F0D'}
              aria-label="Instagram"
            >
              <IgIcon />
            </a>
            <a
              href="https://wa.me/917874791943"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem' }}
            >
              Order Now
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 z-[300]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: menuOpen ? '#FAF7F2' : '#3D1F0D',
              transition: 'transform 0.35s ease, opacity 0.35s ease, background 0.35s ease',
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }}/>
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: menuOpen ? '#FAF7F2' : '#3D1F0D',
              transition: 'opacity 0.35s ease, background 0.35s ease',
              opacity: menuOpen ? 0 : 1,
            }}/>
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: menuOpen ? '#FAF7F2' : '#3D1F0D',
              transition: 'transform 0.35s ease, background 0.35s ease',
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }}/>
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ───────────────────────────── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {/* Decorative orb */}
        <div style={{
          position: 'absolute', width: '320px', height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,148,74,0.12) 0%, transparent 70%)',
          top: '-80px', right: '-80px', pointerEvents: 'none',
        }}/>

        <nav className="flex flex-col items-center gap-2">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className="mobile-nav-link"
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6 mt-10">
          <a
            href="https://www.instagram.com/baking__corner22"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(250,247,242,0.6)' }}
          >
            <IgIcon />
          </a>
          <a
            href="https://wa.me/917874791943"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: '0.72rem' }}
          >
            Order on WhatsApp
          </a>
        </div>

        <p style={{
          position: 'absolute', bottom: '2rem',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '0.85rem', fontStyle: 'italic',
          color: 'rgba(201,148,74,0.5)',
        }}>
          Made with Love & Frosting
        </p>
      </div>
    </>
  );
}