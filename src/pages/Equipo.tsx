import TeamCard from '../components/TeamCard';
import ServicesDetail from '../components/ServicesDetail';
import { teamMembers, workingMethod, teamGroupPhoto } from '../data/content';
import { Link } from 'react-router-dom';

export default function Equipo() {
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
              Las personas detrás de Aura
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
            Nuestro equipo
          </h1>
          <p
            className="animate-fade-up delay-200"
            style={{
              color: '#94a3b8',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              lineHeight: '1.8',
              letterSpacing: '0.01em',
              maxWidth: '580px',
              margin: '0 auto',
              opacity: 0,
            }}
          >
            Un equipo multidisciplinario con pasión por la creatividad, la tecnología y la comunicación.
          </p>
        </div>
      </section>

      {/* Team cards */}
      <section style={{ padding: '2rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '1.25rem' }}>
            {teamMembers.map((member, i) => (
              <TeamCard key={i} member={member} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* Group photo */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            aspectRatio: '21/9',
            background: '#0b1221',
          }}>
            <img
              src={teamGroupPhoto}
              alt="Equipo Aura"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                display: 'block',
              }}
            />
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(6,11,20,0.75) 0%, rgba(6,11,20,0.1) 50%, transparent 100%)',
            }} />
            {/* Caption */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '20px', height: '1px', background: '#2563eb' }} />
                <span style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#3b82f6',
                }}>
                  Aura Team · La Rioja, Argentina
                </span>
              </div>
              <p style={{
                fontFamily: "'League Gothic', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                color: '#f1f5f9',
              }}>
                Tres disciplinas, un solo equipo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: "'League Gothic', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              letterSpacing: '0.03em',
              color: '#f1f5f9',
              marginBottom: '0.75rem',
            }}>
              Lo que ofrecemos
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '480px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.05rem', letterSpacing: '0.01em' }}>
              Cada integrante aporta su especialidad para entregar resultados completos e integrados.
            </p>
          </div>
          <ServicesDetail />
        </div>
      </section>

      {/* Working method */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            borderRadius: '24px',
            padding: 'clamp(2rem, 4vw, 4rem)',
            background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(6,11,20,0) 100%)',
            border: '1px solid rgba(37,99,235,0.12)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}>
            <div>
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
                  Metodología
                </span>
              </div>
              <h2 style={{
                fontFamily: "'League Gothic', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
              letterSpacing: '0.03em',
                color: '#f1f5f9',
                lineHeight: 1.2,
              }}>
                {workingMethod.heading}
              </h2>
            </div>
            <div>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem', letterSpacing: '0.01em', marginBottom: '1.75rem' }}>
                {workingMethod.text}
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
                  fontSize: '0.9rem',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                Contactanos
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
