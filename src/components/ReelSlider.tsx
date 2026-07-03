import { useRef, useEffect } from 'react';

interface Reel { brand: string; platform: 'instagram' | 'tiktok'; src: string; alt: string; }

const ITEM_W = 200;
const GAP = 12;
const SPEED = 0.55;

export default function ReelSlider({ reels }: { reels: Reel[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const animRef = useRef<number>(0);
  const draggingRef = useRef(false);
  const pausedRef = useRef(false);
  const lastXRef = useRef(0);

  const SET_W = reels.length * (ITEM_W + GAP);
  const items = [...reels, ...reels, ...reels];

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
        {items.map((reel, i) => (
          <div
            key={i}
            style={{
              width: `${ITEM_W}px`,
              flexShrink: 0,
              aspectRatio: '9/16',
              borderRadius: '14px',
              overflow: 'hidden',
              background: '#0b1221',
            }}
          >
            <img
              src={reel.src}
              alt={reel.alt}
              draggable={false}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                pointerEvents: 'none',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
