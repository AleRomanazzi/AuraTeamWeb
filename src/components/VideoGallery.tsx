import { useState } from 'react';
import type { PortfolioVideo } from '../data/content';
import { portfolioVideos } from '../data/content';

function PlayButton() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(6,11,20,0.35)',
      transition: 'background 0.2s',
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'rgba(37,99,235,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 32px rgba(37,99,235,0.5)',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
    </div>
  );
}

function VideoCard({ video, featured }: { video: PortfolioVideo; featured?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div>
      <div
        style={{
          position: 'relative',
          aspectRatio: featured ? '16/9' : '9/16',
          borderRadius: featured ? '16px' : '12px',
          overflow: 'hidden',
          background: '#0b1221',
          border: '1px solid rgba(255,255,255,0.06)',
          cursor: playing ? 'default' : 'pointer',
        }}
        onClick={() => { if (!playing) setPlaying(true); }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={video.title}
          />
        ) : (
          <>
            <img
              src={thumb}
              alt={`Miniatura — ${video.title}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
            <PlayButton />
          </>
        )}
      </div>

      <div style={{ marginTop: '0.75rem' }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#3b82f6',
          marginBottom: '0.3rem',
        }}>
          {video.badge} · {video.client}
        </span>
        <p style={{
          fontSize: featured ? '1rem' : '0.85rem',
          fontWeight: 600,
          color: '#e2e8f0',
          lineHeight: 1.4,
        }}>
          {video.title}
        </p>
        {featured && (
          <p style={{
            fontSize: '0.85rem',
            color: '#64748b',
            marginTop: '0.4rem',
            lineHeight: 1.6,
          }}>
            {video.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function VideoGallery() {
  const featured = portfolioVideos.find(v => v.featured)!;
  const shorts = portfolioVideos.filter(v => !v.featured);

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <VideoCard video={featured} featured />
      </div>
      <div className="shorts-grid">
        {shorts.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
