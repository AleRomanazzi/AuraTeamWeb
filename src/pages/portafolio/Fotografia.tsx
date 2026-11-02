import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import type { FotoFilter } from '../../data/content';
import { fotografiaImages, FOTO_FILTERS } from '../../data/content';
import PortfolioGrid from '../../components/PortfolioGrid';
import FilterChips from '../../components/FilterChips';

const BASE = '/portafolio/fotografia';

export default function Fotografia() {
  const { filtro } = useParams();
  const navigate = useNavigate();

  const isValid = !filtro || FOTO_FILTERS.some(f => f.value === filtro && f.value !== 'todos');
  const filter = (filtro ?? 'todos') as FotoFilter | 'todos';

  const filtered = useMemo(
    () => filter === 'todos'
      ? fotografiaImages
      : fotografiaImages.filter(img => img.filter === filter),
    [filter],
  );

  if (!isValid) return <Navigate to={BASE} replace />;

  return (
    <>
      <FilterChips
        filters={FOTO_FILTERS}
        active={filter}
        onChange={v => navigate(v === 'todos' ? BASE : `${BASE}/${v}`, { replace: true })}
      />
      <PortfolioGrid key={filter} images={filtered} />
    </>
  );
}
