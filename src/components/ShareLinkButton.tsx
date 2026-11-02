import { useState } from 'react';

interface Props {
  /** Texto que acompaña al link cuando se usa el menú nativo de compartir (mobile). */
  title?: string;
}

/**
 * Copia la URL actual al portapapeles. En dispositivos con Web Share API
 * (celulares) abre el menú nativo para mandar el link por WhatsApp, IG, etc.
 */
export default function ShareLinkButton({ title = 'Portafolio AuraTeam' }: Props) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const url = window.location.href;

    const canNativeShare =
      typeof navigator.share === 'function' &&
      window.matchMedia('(pointer: coarse)').matches;

    if (canNativeShare) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (err) {
        // El usuario canceló el menú: no hacemos nada más.
        if (err instanceof DOMException && err.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback para navegadores sin Clipboard API (o sin HTTPS).
      const input = document.createElement('textarea');
      input.value = url;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-live="polite"
      title="Copiar link de esta sección"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.5rem 1rem',
        borderRadius: '100px',
        border: copied ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.12)',
        background: copied ? 'rgba(34,197,94,0.12)' : 'transparent',
        color: copied ? '#4ade80' : '#94a3b8',
        fontSize: '0.8rem',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 600,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',
      }}
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )}
      {copied ? '¡Link copiado!' : 'Compartir'}
    </button>
  );
}
