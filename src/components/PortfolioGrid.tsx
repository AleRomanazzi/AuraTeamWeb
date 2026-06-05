import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
import { portfolioImages } from '../data/content';

export default function PortfolioGrid() {
  const [index, setIndex] = useState(-1);
  const slides = portfolioImages.map(img => ({ src: img.src, alt: img.alt }));

  return (
    <>
      <div className="portfolio-masonry">
        {portfolioImages.map((img, i) => (
          <div
            key={i}
            style={{ breakInside: 'avoid', marginBottom: '8px' }}
          >
            <div
              className="portfolio-item"
              style={{ borderRadius: '10px', position: 'relative' }}
              onClick={() => setIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                loading="lazy"
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
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(6,11,20,0.97)' } }}
      />
    </>
  );
}
