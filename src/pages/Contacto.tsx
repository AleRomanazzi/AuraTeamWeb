import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { contactPage } from '../data/content';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = 'El nombre es requerido';
    if (!form.email.trim()) e.email = 'El email es requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido';
    if (!form.mensaje.trim()) e.mensaje = 'El mensaje es requerido';
    return e;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSending(true);
    setSendError('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.nombre,
          from_email: form.email,
          reply_to: form.email,
          message: form.mensaje,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
    } catch {
      setSendError('Hubo un error al enviar el mensaje. Intentá de nuevo.');
    } finally {
      setSending(false);
    }
  }

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${hasError ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '10px',
    padding: '0.85rem 1rem',
    color: '#e2e8f0',
    fontSize: '0.95rem',
    fontFamily: "'Roboto', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s ease',
  });

  return (
    <>
      {/* Header */}
      <section style={{
        padding: '8rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#2563eb' }} />
            <span style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#3b82f6',
            }}>
              Hablemos
            </span>
            <div style={{ width: '24px', height: '1px', background: '#2563eb' }} />
          </div>
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
              color: '#f8fafc',
              lineHeight: 1.05,
              letterSpacing: '0.03em',
              marginBottom: '1rem',
              opacity: 0,
            }}
          >
            {contactPage.heading}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '1rem 1.5rem 6rem' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Form column */}
          <div>
            {sent ? (
              <div
                className="animate-fade-up glass-card"
                style={{
                  borderRadius: '20px',
                  padding: '3rem',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(34,197,94,0.12)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '1.75rem',
                }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: "'League Gothic',sans-serif", fontWeight: 700, fontSize: '1.6rem', letterSpacing: '0.02em', color: '#f1f5f9', marginBottom: '0.75rem' }}>
                  ¡Mensaje enviado!
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.7' }}>
                  Gracias por escribirnos. Te contactaremos a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h2 style={{ fontFamily: "'League Gothic',sans-serif", fontWeight: 700, fontSize: '1.8rem', letterSpacing: '0.02em', color: '#f1f5f9', marginBottom: '0.25rem' }}>
                  Envianos un mensaje
                </h2>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))}
                    style={inputStyle(!!errors.nombre)}
                    onFocus={e => (e.target.style.borderColor = 'rgba(37,99,235,0.5)')}
                    onBlur={e => (e.target.style.borderColor = errors.nombre ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)')}
                  />
                  {errors.nombre && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.nombre}</p>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    style={inputStyle(!!errors.email)}
                    onFocus={e => (e.target.style.borderColor = 'rgba(37,99,235,0.5)')}
                    onBlur={e => (e.target.style.borderColor = errors.email ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)')}
                  />
                  {errors.email && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.email}</p>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Contanos sobre tu proyecto..."
                    value={form.mensaje}
                    rows={5}
                    onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
                    style={{ ...inputStyle(!!errors.mensaje), resize: 'vertical', minHeight: '120px' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(37,99,235,0.5)')}
                    onBlur={e => (e.target.style.borderColor = errors.mensaje ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)')}
                  />
                  {errors.mensaje && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.mensaje}</p>}
                </div>

                {sendError && (
                  <p style={{ color: '#f87171', fontSize: '0.875rem', textAlign: 'center' }}>{sendError}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="glow-btn"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    color: '#fff',
                    fontFamily: "'League Gothic', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '0.875rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: sending ? 'not-allowed' : 'pointer',
                    opacity: sending ? 0.7 : 1,
                    letterSpacing: '0.02em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'opacity 0.2s',
                  }}
                >
                  {sending ? 'Enviando...' : 'Enviar'}
                  {!sending && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontFamily: "'League Gothic',sans-serif", fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.02em', color: '#f1f5f9', marginBottom: '1.25rem' }}>
                Información de contacto
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(37,99,235,0.1)',
                    border: '1px solid rgba(37,99,235,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.9rem',
                  }}>
                    ✉
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#475569', marginBottom: '0.15rem', fontWeight: 600, letterSpacing: '0.05em' }}>EMAIL</p>
                    <a
                      href={`mailto:${contactPage.email}`}
                      style={{ color: '#94a3b8', fontSize: '1rem', letterSpacing: '0.01em', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      {contactPage.email}
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(37,99,235,0.1)',
                    border: '1px solid rgba(37,99,235,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.9rem',
                  }}>
                    📍
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#475569', marginBottom: '0.15rem', fontWeight: 600, letterSpacing: '0.05em' }}>DIRECCIÓN</p>
                    <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', letterSpacing: '0.01em' }}>{contactPage.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
              aspectRatio: '4/3',
            }}>
              <iframe
                src={contactPage.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación AuraTeam"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
