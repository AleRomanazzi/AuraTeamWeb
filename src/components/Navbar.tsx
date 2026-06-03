import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nav } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(6,11,20,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <div className="navbar-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <nav className="navbar-nav" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: '72px' }}>
          {/* Logo — columna izquierda */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', minWidth: 0 }}>
            <img
              src={nav.logo}
              alt="AuraTeam"
              className="navbar-logo-img"
              style={{ height: '56px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </Link>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}
            className="hidden-mobile">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: location.pathname === link.href ? '#60a5fa' : '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    paddingBottom: '2px',
                    borderBottom: location.pathname === link.href ? '1px solid #60a5fa' : '1px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger — columna derecha */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', flexShrink: 0 }}>
            <Link
              to={nav.cta.href}
              className="glow-btn hidden-mobile"
              style={{
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.02em',
                padding: '0.5rem 1.25rem',
                borderRadius: '6px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {nav.cta.label}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="show-mobile"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '24px',
                    height: '2px',
                    background: '#e2e8f0',
                    borderRadius: '1px',
                    transition: 'all 0.3s ease',
                    transform:
                      open && i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                      : open && i === 1 ? 'scaleX(0)'
                      : open && i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                      : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '400px' : '0',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
          background: 'rgba(6,11,20,0.97)',
          borderTop: open ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <ul style={{ listStyle: 'none', padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  fontFamily: "'League Gothic', sans-serif",
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: location.pathname === link.href ? '#60a5fa' : '#e2e8f0',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li style={{ paddingTop: '0.75rem' }}>
            <Link
              to={nav.cta.href}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '0.65rem 1.5rem',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              {nav.cta.label}
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .navbar-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .navbar-nav {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            height: 64px !important;
            width: 100% !important;
          }
          .navbar-logo-img {
            height: 44px !important;
            max-width: 130px;
          }
        }
      `}</style>
    </header>
  );
}
