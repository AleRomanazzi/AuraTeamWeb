import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  instagram: string | null;
  linkedin: string | null;
  photo?: string;
  photoAction?: string;
}

export default function TeamCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  const [hovered, setHovered] = useState(false);
  const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div
      className="glass-card animate-fade-up"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
    >
      {/* Photo section */}
      {member.photo ? (
        <div
          style={{
            position: 'relative',
            aspectRatio: '3/4',
            overflow: 'hidden',
            background: '#0b1221',
            cursor: 'default',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Frontal photo */}
          <img
            src={member.photo}
            alt={member.name}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              transition: 'opacity 0.5s ease',
              opacity: hovered && member.photoAction ? 0 : 1,
            }}
          />
          {/* Action photo */}
          {member.photoAction && (
            <img
              src={member.photoAction}
              alt={`${member.name} en acción`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                transition: 'opacity 0.5s ease',
                opacity: hovered ? 1 : 0,
              }}
            />
          )}
          {/* Gradient overlay at bottom */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(6,11,20,0.85) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />
          {/* Role badge over photo */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
          }}>
            <span style={{
              display: 'inline-block',
              fontFamily: "'Roboto', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#93c5fd',
              background: 'rgba(37,99,235,0.18)',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: '4px',
              padding: '0.25rem 0.6rem',
            }}>
              {member.role}
            </span>
          </div>
          {/* Hover hint */}
          {member.photoAction && (
            <div style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              opacity: hovered ? 0 : 0.5,
              transition: 'opacity 0.3s ease',
            }}>
              <div style={{
                background: 'rgba(6,11,20,0.6)',
                backdropFilter: 'blur(4px)',
                borderRadius: '6px',
                padding: '0.3rem 0.5rem',
                fontSize: '0.65rem',
                color: '#94a3b8',
                fontFamily: "'Roboto', sans-serif",
                whiteSpace: 'nowrap',
              }}>
                hover →
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Fallback avatar when no photo */
        <div style={{
          aspectRatio: '3/4',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(129,140,248,0.08))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563eb, #818cf8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'League Gothic', sans-serif",
            fontWeight: 800,
            fontSize: '1.6rem',
            color: '#fff',
          }}>
            {initials}
          </div>
        </div>
      )}

      {/* Info section */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
        <div>
          <h3 style={{
            fontFamily: "'League Gothic', sans-serif",
            fontWeight: 700,
            fontSize: '1.2rem',
            color: '#f1f5f9',
            marginBottom: '0.15rem',
          }}>
            {member.name}
          </h3>
          {!member.photo && (
            <span style={{ fontSize: '0.8rem', color: '#3b82f6', fontWeight: 500 }}>
              {member.role}
            </span>
          )}
        </div>

        <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.75', flex: 1 }}>
          {member.bio}
        </p>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#64748b',
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: 500,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f472b6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#64748b',
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: 500,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0ea5e9')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
