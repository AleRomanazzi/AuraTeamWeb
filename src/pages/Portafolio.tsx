import { NavLink, Outlet } from 'react-router-dom';

const TABS = [
  { path: 'fotografia',  label: 'Fotografía' },
  { path: 'diseno',      label: 'Diseño Gráfico' },
  { path: 'audiovisual', label: 'Audiovisual' },
];

export default function Portafolio() {
  return (
    <>
      {/* Page header */}
      <section style={{
        padding: 'clamp(5.5rem, 12vw, 8rem) 1.5rem clamp(2rem, 5vw, 3rem)',
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
              color: '#94a3b8',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              lineHeight: '1.8',
              letterSpacing: '0.01em',
              maxWidth: '580px',
              margin: '0 auto',
              opacity: 0,
            }}
          >
            Videos, fotografía y diseño que hablan por sí solos. Hacé clic en cualquier pieza para verla en detalle.
          </p>
        </div>
      </section>

      {/* Tab navigation */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          gap: '0',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}>
          {TABS.map(tab => (
            <NavLink
              key={tab.path}
              to={`/portafolio/${tab.path}`}
              style={({ isActive }) => ({
                padding: '0.9rem 1.5rem',
                fontSize: '0.875rem',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: isActive ? '#3b82f6' : '#64748b',
                borderBottom: isActive ? '2px solid #3b82f6' : '2px solid transparent',
                textDecoration: 'none',
                transition: 'color 0.2s',
                marginBottom: '-1px',
                whiteSpace: 'nowrap',
              })}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
        <div className="tab-bar-fade" />
      </div>

      {/* Sub-page */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem 6rem' }}>
        <Outlet />
      </div>
    </>
  );
}
