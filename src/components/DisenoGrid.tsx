import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { DisenoImage } from '../data/content';
import { cloudUrl } from '../data/content';

const PAGE_SIZE = 20;

interface Props {
  images: DisenoImage[];
}

export default function DisenoGrid({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shown = images.slice(0, visible);
  const slides = images.map(img => ({
    src: cloudUrl(img.id, 2000),
    alt: img.alt,
  }));

  return (
    <>
      {images.length === 0 ? (
        <p style={{ color: '#64748b', textAlign: 'center', padding: '4rem 0' }}>
          No hay imágenes en esta categoría.
        </p>
      ) : (
        <>
          <div className="diseno-grid">
            {shown.map((img, i) => (
              <div
                key={img.id}
                className="diseno-item portfolio-item"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={cloudUrl(img.id, 600)}
                  srcSet={`${cloudUrl(img.id, 400)} 400w, ${cloudUrl(img.id, 600)} 600w`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  alt={img.alt}
                  loading={i < 8 ? 'eager' : 'lazy'}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
                <div className="overlay" style={{ borderRadius: '12px' }}>
                  <span style={{
                    color: '#fff',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                    Ver en grande
                  </span>
                </div>
              </div>
            ))}
          </div>

          {visible < images.length && (
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <button
                onClick={() => setVisible(v => v + PAGE_SIZE)}
                className="glow-btn"
                style={{
                  background: 'rgba(37,99,235,0.1)',
                  border: '1px solid rgba(37,99,235,0.4)',
                  color: '#3b82f6',
                  padding: '0.75rem 2rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                }}
              >
                Cargar más ({images.length - visible} restantes)
              </button>
            </div>
          )}
        </>
      )}

      <style>{`
        .diseno-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .diseno-item {
          aspect-ratio: 4/5;
          border-radius: 12px;
          overflow: hidden;
          background: #0b1221;
          cursor: pointer;
          position: relative;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .diseno-item img {
          transition: transform 0.4s ease;
        }
        .diseno-item:hover img {
          transform: scale(1.04);
        }
        @media (max-width: 1024px) {
          .diseno-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .diseno-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(6,11,20,0.97)' } }}
      />
    </>
  );
}
