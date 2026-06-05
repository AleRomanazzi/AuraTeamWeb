import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import LogoSlider from '../components/LogoSlider';
import {
  hero,
  servicesIntro,
  serviceCards,
  clientLogos,
  portfolioSection,
  portfolioImages,
  ctaSection,
} from '../data/content';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
      <div style={{ width: '24px', height: '1px', background: '#2563eb' }} />
      <span style={{
        fontFamily: "'Roboto', sans-serif",
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#3b82f6',
      }}>
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 2rem',
      }}>
        {/* Multi-layer atmospheric glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 85% 70% at 50% 15%, rgba(37,99,235,0.16) 0%, transparent 60%),
            radial-gradient(ellipse 45% 55% at 5% 90%, rgba(129,140,248,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 30% 35% at 95% 65%, rgba(37,99,235,0.07) 0%, transparent 55%)
          `,
          pointerEvents: 'none',
        }} />
        {/* Grid dots */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          pointerEvents: 'none',
        }} />
        {/* Scroll indicator — right side */}
        <div style={{
          position: 'absolute',
          right: '2rem',
          bottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          pointerEvents: 'none',
        }}>
          <span style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: '0.65rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(148,163,184,0.5)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}>
            Scroll
          </span>
          <div style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, rgba(37,99,235,0.6) 0%, rgba(37,99,235,0.1) 100%)',
            borderRadius: '1px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '40%',
              background: 'rgba(96,165,250,0.9)',
              borderRadius: '1px',
              animation: 'scrollDot 1.8s ease-in-out infinite',
            }} />
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', paddingTop: '80px' }}>

          <SectionLabel>Agencia creativa · La Rioja, Argentina</SectionLabel>

          {/* Stacked headline — 2 lines */}
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              lineHeight: 0.88,
              marginTop: '0.75rem',
              marginBottom: '0',
            }}
          >
            {/* Line 1: "Presencia Online" — solid white */}
            <span style={{
              display: 'block',
              fontSize: 'clamp(2rem, 10vw, 9rem)',
              color: '#f8fafc',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              Presencia Online
            </span>
            {/* Line 2: "Profesional" — gradient, scaled to match line 1 width */}
            <span style={{
              display: 'block',
              fontSize: 'clamp(2.5rem, 14vw, 13rem)',
              background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 45%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              Profesional
            </span>
          </h1>

          {/* Subheadline + buttons */}
          <div style={{ marginTop: '1.25rem' }}>
            <p
              className="animate-fade-up delay-200"
              style={{
                color: '#94a3b8',
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                lineHeight: '1.7',
                marginBottom: '2rem',
                maxWidth: '480px',
                opacity: 0,
              }}
            >
              {hero.subheadline}
            </p>
            <div
              className="animate-fade-up delay-300"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', opacity: 0 }}
            >
              <Link
                to="/contacto"
                className="glow-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  color: '#fff',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 600,
                  fontSize: '1rem',
                  letterSpacing: '0.02em',
                  padding: '0.875rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                Hablemos
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link
                to={hero.cta.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'transparent',
                  color: '#94a3b8',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: '1rem',
                  padding: '0.875rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.color = '#e2e8f0';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#94a3b8';
                }}
              >
                {hero.cta.label}
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel>Servicios</SectionLabel>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
            <h2 style={{
              fontFamily: "'League Gothic', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '0.03em',
              color: '#f1f5f9',
              marginBottom: '1rem',
              lineHeight: 1.1,
            }}>
              {servicesIntro.heading}
            </h2>
            <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', letterSpacing: '0.01em' }}>
              {servicesIntro.paragraph}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '1.25rem' }}>
            {serviceCards.map((card, i) => (
              <ServiceCard key={i} {...card} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ─────────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel>Clientes</SectionLabel>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'League Gothic', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '0.03em',
              color: '#f1f5f9',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
            }}>
              Marcas que confiaron en nosotros
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', letterSpacing: '0.01em', maxWidth: '440px', margin: '0 auto', lineHeight: '1.8' }}>
              Empresas y proyectos que eligieron a Aura para potenciar su presencia.
            </p>
          </div>

          <LogoSlider logos={clientLogos} />

          {/* Stats — fila horizontal debajo de las marcas */}
          <div
            className="stats-row"
            style={{
              display: 'flex',
              marginTop: '3.5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
            {[
              { value: '12+', label: 'Marcas confiaron en nosotros' },
              { value: '2025', label: 'Desde' },
              { value: '3', label: 'Especialidades' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`stat-item stat-item-${i}`}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  paddingRight: '2rem',
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  paddingLeft: i > 0 ? '2rem' : '0',
                }}
              >
                <div style={{ fontFamily: "'League Gothic', sans-serif", fontSize: '2.8rem', color: '#f1f5f9', lineHeight: 1, letterSpacing: '0.03em' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#475569', fontSize: '0.78rem', marginTop: '0.4rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel>Portafolio</SectionLabel>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
            <h2 style={{
              fontFamily: "'League Gothic', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '0.03em',
              color: '#f1f5f9',
              marginBottom: '1rem',
              lineHeight: 1.1,
            }}>
              {portfolioSection.heading}
            </h2>
            <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', letterSpacing: '0.01em' }}>
              {portfolioSection.paragraph}
            </p>
          </div>

          {/* Masonry-style grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gap: '0.75rem',
          }}
            className="portfolio-home-grid"
          >
            {portfolioImages.map((img, i) => (
              <div
                key={i}
                className="portfolio-item"
                style={{
                  borderRadius: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#0b1221',
                  gridColumn: i === 0 ? 'span 2' : undefined,
                  aspectRatio: i === 0 ? '16/9' : '4/3',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              to="/portafolio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#3b82f6',
                fontFamily: "'League Gothic', sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                border: '1px solid rgba(37,99,235,0.3)',
                padding: '0.65rem 1.5rem',
                borderRadius: '8px',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(37,99,235,0.1)';
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)';
              }}
            >
              Ver portafolio completo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            borderRadius: '24px',
            padding: 'clamp(2.5rem, 5vw, 5rem)',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(29,78,216,0.06) 50%, rgba(6,11,20,0) 100%)',
            border: '1px solid rgba(37,99,235,0.15)',
            textAlign: 'center',
          }}>
            {/* Glow */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '400px',
              background: 'radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <h2 style={{
              fontFamily: "'League Gothic', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '0.03em',
              color: '#f8fafc',
              marginBottom: '1.25rem',
              lineHeight: 1.1,
              position: 'relative',
            }}>
              {ctaSection.heading}
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              lineHeight: '1.8',
              letterSpacing: '0.01em',
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
              position: 'relative',
            }}>
              {ctaSection.text}
            </p>
            <Link
              to={ctaSection.cta.href}
              className="glow-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff',
                fontFamily: "'League Gothic', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.02em',
                padding: '0.9rem 2.25rem',
                borderRadius: '8px',
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              {ctaSection.cta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
        @media (max-width: 640px) {
          .portfolio-home-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .portfolio-home-grid > div:first-child {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 520px) {
          .stats-row {
            flex-direction: column !important;
          }
          .stat-item {
            flex: none !important;
            padding: 1rem 0 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            text-align: left !important;
          }
          .stat-item-2 {
            border-bottom: none;
          }
        }
      `}</style>
    </>
  );
}
