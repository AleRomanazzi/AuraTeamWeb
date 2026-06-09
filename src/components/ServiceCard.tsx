import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
  icon: string;
  delay?: number;
}

export default function ServiceCard({ title, description, cta, icon, delay = 0 }: ServiceCardProps) {
  return (
    <div
      className="glass-card animate-fade-up"
      style={{
        borderRadius: '16px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
    >
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '12px',
        background: 'rgba(37,99,235,0.12)',
        border: '1px solid rgba(37,99,235,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: "'League Gothic', sans-serif",
        fontWeight: 700,
        fontSize: '1.4rem',
        letterSpacing: '0.02em',
        color: '#f1f5f9',
        lineHeight: 1.3,
      }}>
        {title}
      </h3>

      <p style={{
        color: '#94a3b8',
        fontSize: '1rem',
        lineHeight: '1.75',
        letterSpacing: '0.01em',
        flex: 1,
      }}>
        {description}
      </p>

      <Link
        to={cta.href}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: '#3b82f6',
          fontWeight: 600,
          fontSize: '0.95rem',
          textDecoration: 'none',
          transition: 'gap 0.2s ease, color 0.2s ease',
          fontFamily: "'Roboto', sans-serif",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.gap = '0.7rem';
          e.currentTarget.style.color = '#60a5fa';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.gap = '0.4rem';
          e.currentTarget.style.color = '#3b82f6';
        }}
      >
        {cta.label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
}
