import { serviciosPage } from '../data/content';

const categoryIcons: Record<string, string> = {
  'Fotografía y diseño multimedia': '📸',
  'Desarrollo web': '🌐',
  'Comunicación y gestión': '📣',
};

export default function ServicesDetail() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {serviciosPage.map((group, gi) => (
        <div key={gi}>
          {/* Category heading */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <span style={{
              width: '44px',
              height: '44px',
              background: 'rgba(37,99,235,0.1)',
              border: '1px solid rgba(37,99,235,0.2)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.3rem',
              flexShrink: 0,
            }}>
              {categoryIcons[group.category] ?? '✦'}
            </span>
            <h3 style={{
              fontFamily: "'League Gothic', sans-serif",
              fontWeight: 700,
              fontSize: '1.6rem',
              letterSpacing: '0.02em',
              color: '#f1f5f9',
            }}>
              {group.category}
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px, 100%), 1fr))', gap: '1rem' }}>
            {group.items.map((item, ii) => (
              <div
                key={ii}
                className="glass-card"
                style={{
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#2563eb',
                  marginBottom: '0.25rem',
                }} />
                <h4 style={{
                  fontFamily: "'League Gothic', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  letterSpacing: '0.02em',
                  color: '#e2e8f0',
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', letterSpacing: '0.01em' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
