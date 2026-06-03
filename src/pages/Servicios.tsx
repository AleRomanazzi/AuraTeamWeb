import ServicesDetail from '../components/ServicesDetail';
import { Link } from 'react-router-dom';

export default function Servicios() {
  return (
    <>
      {/* Page header */}
      <section style={{
        padding: '8rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#2563eb' }} />
            <span style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#3b82f6',
            }}>
              Lo que hacemos
            </span>
            <div style={{ width: '24px', height: '1px', background: '#2563eb' }} />
          </div>

          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
              color: '#f8fafc',
              lineHeight: 1.05,
              letterSpacing: '0.03em',
              marginBottom: '1.25rem',
              opacity: 0,
            }}
          >
            Nuestros servicios
          </h1>
          <p
            className="animate-fade-up delay-200"
            style={{
              color: '#64748b',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              lineHeight: '1.8',
              letterSpacing: '0.01em',
              maxWidth: '580px',
              margin: '0 auto',
              opacity: 0,
            }}
          >
            Soluciones creativas para cada etapa de tu proyecto — desde la imagen hasta la comunicación digital.
          </p>
        </div>
      </section>

      {/* Services content */}
      <section style={{ padding: '2rem 1.5rem 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ServicesDetail />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(6,11,20,0) 100%)',
            border: '1px solid rgba(37,99,235,0.15)',
            borderRadius: '20px',
            padding: '3rem',
          }}>
            <h2 style={{ fontFamily: "'League Gothic',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '0.03em', color: '#f1f5f9', marginBottom: '1rem' }}>
              ¿Te interesa algún servicio?
            </h2>
            <p style={{ color: '#64748b', marginBottom: '1.75rem', maxWidth: '480px', margin: '0 auto 1.75rem', lineHeight: '1.8', fontSize: '1.05rem', letterSpacing: '0.01em' }}>
              Contactanos y te armamos una propuesta a medida según tus objetivos.
            </p>
            <Link
              to="/contacto"
              className="glow-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff',
                fontFamily: "'League Gothic', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '0.8rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Contáctanos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
