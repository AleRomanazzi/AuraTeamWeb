import { portfolioVideos } from '../data/content';

export default function VideoGallery() {
  const { featured, shorts } = portfolioVideos;

  return (
    <div>
      {/* Featured horizontal video 16:9 */}
      <div style={{
        position: 'relative',
        aspectRatio: '16/9',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#0b1221',
        marginBottom: '0.75rem',
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        <iframe
          src={`https://www.youtube.com/embed/${featured.id}?rel=0`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          title={featured.title}
        />
      </div>

      {/* Shorts grid 9:16 */}
      <div className="shorts-grid">
        {shorts.map((short) => (
          <div
            key={short.id}
            style={{
              position: 'relative',
              aspectRatio: '9/16',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#0b1221',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${short.id}?rel=0`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              title={short.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
