import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import type { DisenoFilter } from '../../data/content';
import { disenoImages, DISENO_FILTERS } from '../../data/content';
import DisenoGrid from '../../components/DisenoGrid';
import FilterChips from '../../components/FilterChips';

const BASE = '/portafolio/diseno';

export default function Diseno() {
  const { filtro } = useParams();
  const navigate = useNavigate();

  const isValid = !filtro || DISENO_FILTERS.some(f => f.value === filtro && f.value !== 'todos');
  const filter = (filtro ?? 'todos') as DisenoFilter | 'todos';

  const filtered = useMemo(
    () => filter === 'todos'
      ? disenoImages
      : disenoImages.filter(img => img.filter === filter),
    [filter],
  );

  if (!isValid) return <Navigate to={BASE} replace />;

  return (
    <>
      <FilterChips
        filters={DISENO_FILTERS}
        active={filter}
        onChange={v => navigate(v === 'todos' ? BASE : `${BASE}/${v}`, { replace: true })}
      />
      <DisenoGrid key={filter} images={filtered} />
    </>
  );
}
