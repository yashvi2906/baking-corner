import React, { useState, useEffect, useRef } from 'react';
import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar       from './components/Navbar.jsx';
import Hero         from './components/Hero.jsx';
import About        from './components/About.jsx';
import Products     from './components/Products.jsx';
import Gallery      from './components/Gallery.jsx';
import WhyUs        from './components/WhyUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact      from './components/Contact.jsx';
import Footer       from './components/Footer.jsx';

/* ── WhatsApp SVG ─────────────────────────────────────────────── */
const WaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function App() {
  const [loading, setLoading]       = useState(true);
  const dotRef                      = useRef(null);
  const ringRef                     = useRef(null);

  /* ── Loading timer ─────────────────────────────────────────── */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2700);
    return () => clearTimeout(t);
  }, []);

  /* ── Custom cursor (RAF lerp for ring lag) ─────────────────── */
  useEffect(() => {
    if (window.innerWidth < 768) return;

    let tx = -200, ty = -200;
    let cx = -200, cy = -200;
    let raf;

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [data-hover]');
      dotRef.current?.classList.toggle('hovered', !!interactive);
      ringRef.current?.classList.toggle('hovered', !!interactive);
    };

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.left = tx + 'px';
        dotRef.current.style.top  = ty + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = cx + 'px';
        ringRef.current.style.top  = cy + 'px';
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="grain">
      {/* Custom cursor — hidden on mobile via CSS */}
      <div ref={dotRef}  className="cursor-dot  hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />

      {/* Loading splash */}
      <LoadingScreen isVisible={loading} />

      {/* Sticky WhatsApp bubble */}
      <a
        href="https://wa.me/917874791943"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Order on WhatsApp"
      >
        <WaIcon />
      </a>

      {/* Page */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}