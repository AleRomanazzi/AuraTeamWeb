import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
import { portfolioImages } from '../data/content';

export default function PortfolioGrid() {
  const [index, setIndex] = useState(-1);

  const slides = portfolioImages.map(img => ({ src: img.src, alt: img.alt }));

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '0.75rem',
      }}>
        {portfolioImages.map((img, i) => (
          <div
            key={i}
            className="portfolio-item"
            style={{
              borderRadius: '12px',
              position: 'relative',
              aspectRatio: '4/3',
              background: '#0b1221',
            }}
            onClick={() => setIndex(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '12px',
              }}
              loading="lazy"
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

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(6,11,20,0.97)' },
        }}
      />
    </>
  );
}
