import { useState } from 'react';

const WA_NUMBER = '5493804363100';
const WA_HREF = `https://wa.me/${WA_NUMBER}`;

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.75rem',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}
        className="wa-wrapper"
      >
        {/* Tooltip — appears to the left on hover */}
        <span
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 600,
            fontSize: '0.82rem',
            color: '#e2e8f0',
            background: 'rgba(6,11,20,0.9)',
            border: '1px solid rgba(37,99,235,0.3)',
            borderRadius: '6px',
            padding: '0.35rem 0.7rem',
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(8px)',
            pointerEvents: 'none',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(6px)',
          }}
          className="wa-tooltip"
        >
          Escribinos por WhatsApp
        </span>

        {/* Button — always a perfect circle */}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="wa-float"
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            color: '#fff',
            textDecoration: 'none',
            boxShadow: hovered
              ? '0 8px 32px rgba(37,99,235,0.55), 0 2px 8px rgba(0,0,0,0.3)'
              : '0 4px 20px rgba(37,99,235,0.35), 0 2px 8px rgba(0,0,0,0.2)',
            transition: 'box-shadow 0.25s ease, transform 0.2s ease',
            transform: hovered ? 'translateY(-2px) scale(1.06)' : 'translateY(0) scale(1)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,99,235,0.35), 0 2px 8px rgba(0,0,0,0.2); }
          50%       { box-shadow: 0 4px 30px rgba(37,99,235,0.6),  0 2px 8px rgba(0,0,0,0.2); }
        }
        .wa-float {
          animation: wa-pulse 2.8s ease-in-out infinite;
        }
        .wa-float:hover {
          animation: none;
        }
        @media (max-width: 767px) {
          .wa-wrapper {
            bottom: 1.25rem !important;
            right: 1.25rem !important;
          }
          .wa-float {
            width: 46px !important;
            height: 46px !important;
          }
          .wa-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
