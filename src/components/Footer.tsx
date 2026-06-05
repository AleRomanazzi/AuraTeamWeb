import { Link } from 'react-router-dom';
import { footer, nav } from '../data/content';

export default function Footer() {
  return (
    <footer style={{ background: '#030710', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <img
              src={footer.logo}
              alt="AuraTeam"
              style={{ height: '40px', width: 'auto', marginBottom: '1rem', objectFit: 'contain' }}
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = 'none';
                const text = document.createElement('span');
                text.textContent = 'AuraTeam';
                text.style.cssText = "font-family:'League Gothic',sans-serif;font-weight:800;font-size:1.3rem;color:#fff;";
                el.parentNode?.insertBefore(text, el.nextSibling);
              }}
            />
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.6', maxWidth: '240px' }}>
              Agencia creativa especializada en producción audiovisual, desarrollo web y comunicación digital.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "'League Gothic',sans-serif", fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '1rem' }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'League Gothic',sans-serif", fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '1rem' }}>
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href={`mailto:${footer.email}`}
                style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                {footer.email}
              </a>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.5' }}>
                {footer.address}
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <p style={{ color: '#374151', fontSize: '0.8rem' }}>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
