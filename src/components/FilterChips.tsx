import ShareLinkButton from './ShareLinkButton';

interface Filter {
  value: string;
  label: string;
}

interface Props {
  filters: Filter[];
  active: string;
  onChange: (value: string) => void;
}

export default function FilterChips({ filters, active, onChange }: Props) {
  const activeLabel = filters.find(f => f.value === active)?.label;

  return (
    <div style={{
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: '1.75rem',
    }}>
      {filters.map(f => {
        const isActive = active === f.value;
        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            aria-pressed={isActive}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '100px',
              border: isActive
                ? '1px solid #3b82f6'
                : '1px solid rgba(255,255,255,0.12)',
              background: isActive
                ? 'rgba(37,99,235,0.15)'
                : 'transparent',
              color: isActive ? '#3b82f6' : '#94a3b8',
              fontSize: '0.8rem',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {f.label}
          </button>
        );
      })}
      <div style={{ marginLeft: 'auto' }}>
        <ShareLinkButton
          title={activeLabel && active !== 'todos' ? `AuraTeam — ${activeLabel}` : 'Portafolio AuraTeam'}
        />
      </div>
    </div>
  );
}
