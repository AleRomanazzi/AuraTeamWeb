import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { FotoImage } from '../data/content';
import { cloudUrl } from '../data/content';

const PAGE_SIZE = 20;

interface Props {
  images: FotoImage[];
}

export default function PortfolioGrid({ images }: Props) {
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
          <div className="portfolio-masonry">
            {shown.map((img, i) => (
              <div key={img.id} style={{ breakInside: 'avoid', marginBottom: '8px' }}>
                <div
                  className="portfolio-item"
                  style={{ borderRadius: '10px', position: 'relative' }}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={cloudUrl(img.id, 800)}
                    srcSet={`${cloudUrl(img.id, 400)} 400w, ${cloudUrl(img.id, 800)} 800w, ${cloudUrl(img.id, 1200)} 1200w`}
                    sizes="(max-width: 420px) 100vw, (max-width: 900px) 50vw, 33vw"
                    alt={img.alt}
                    loading={i < 6 ? 'eager' : 'lazy'}
                    fetchPriority={i === 0 ? 'high' : 'auto'}
                    style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                  />
                  <div className="overlay" style={{ borderRadius: '10px' }}>
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
        .portfolio-masonry {
          column-count: 3;
          column-gap: 8px;
        }
        @media (max-width: 767px) {
          .portfolio-masonry { column-count: 2; }
        }
        @media (max-width: 420px) {
          .portfolio-masonry { column-count: 1; }
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
