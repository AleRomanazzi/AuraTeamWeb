import { useRef, useEffect } from 'react';

interface Logo { name: string; url: string; }

const ITEM_W = 164;
const GAP = 12;
const SPEED = 0.55;

export default function LogoSlider({ logos }: { logos: Logo[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const animRef = useRef<number>(0);
  const draggingRef = useRef(false);
  const pausedRef = useRef(false);
  const lastXRef = useRef(0);

  const SET_W = logos.length * (ITEM_W + GAP);
  // Triple so there's always content visible on both sides during drag
  const items = [...logos, ...logos, ...logos];

  useEffect(() => {
    const tick = () => {
      if (!draggingRef.current && !pausedRef.current) {
        posRef.current -= SPEED;
        if (posRef.current <= -SET_W) posRef.current += SET_W;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [SET_W]);

  const dragStart = (x: number) => {
    draggingRef.current = true;
    lastXRef.current = x;
  };

  const dragMove = (x: number) => {
    if (!draggingRef.current) return;
    posRef.current += x - lastXRef.current;
    lastXRef.current = x;
    if (posRef.current > 0) posRef.current -= SET_W;
    if (posRef.current < -SET_W * 2) posRef.current += SET_W;
  };

  const dragEnd = () => { draggingRef.current = false; };

  return (
    <div
      style={{ overflow: 'hidden', position: 'relative', cursor: 'grab' }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; draggingRef.current = false; }}
    >
      {/* Fade edges */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, #060b14 0%, transparent 100px, transparent calc(100% - 100px), #060b14 100%)',
      }} />

      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: `${GAP}px`,
          width: 'max-content',
          userSelect: 'none',
          willChange: 'transform',
          paddingBlock: '4px',
        }}
        onMouseDown={e => { dragStart(e.clientX); e.currentTarget.style.cursor = 'grabbing'; }}
        onMouseMove={e => dragMove(e.clientX)}
        onMouseUp={e => { dragEnd(); e.currentTarget.style.cursor = 'grab'; }}
        onTouchStart={e => dragStart(e.touches[0].clientX)}
        onTouchMove={e => dragMove(e.touches[0].clientX)}
        onTouchEnd={dragEnd}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            style={{
              width: `${ITEM_W}px`,
              flexShrink: 0,
              background: '#ffffff',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '14px',
              padding: '1.25rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              minHeight: '160px',
              transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 2px rgba(37,99,235,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
            }}
          >
            <img
              src={logo.url}
              alt={logo.name}
              draggable={false}
              style={{ height: '96px', width: 'auto', objectFit: 'contain', maxWidth: '140px', pointerEvents: 'none' }}
            />
            <span style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#1e3a5f',
              textAlign: 'center',
            }}>
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
