import PortfolioGrid from '../components/PortfolioGrid';
import VideoGallery from '../components/VideoGallery';

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
      <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
      <span style={{
        fontFamily: "'Roboto', sans-serif",
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#3b82f6',
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
    </div>
  );
}

export default function Portafolio() {
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
              Nuestro trabajo
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
            Portafolio
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
            Videos y fotografía que hablan por sí solos. Hacé clic en cualquier imagen para verla en detalle.
          </p>
        </div>
      </section>

      {/* Videos section */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel label="Videos" />
          <VideoGallery />
        </div>
      </section>

      {/* Photography section */}
      <section style={{ padding: '0 1.5rem 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel label="Fotografía" />
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
