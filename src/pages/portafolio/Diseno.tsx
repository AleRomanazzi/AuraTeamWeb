import { useState, useMemo } from 'react';
import type { DisenoFilter } from '../../data/content';
import { disenoImages, DISENO_FILTERS } from '../../data/content';
import DisenoGrid from '../../components/DisenoGrid';
import FilterChips from '../../components/FilterChips';

export default function Diseno() {
  const [filter, setFilter] = useState<DisenoFilter | 'todos'>('todos');

  const filtered = useMemo(
    () => filter === 'todos'
      ? disenoImages
      : disenoImages.filter(img => img.filter === filter),
    [filter],
  );

  return (
    <>
      <FilterChips
        filters={DISENO_FILTERS}
        active={filter}
        onChange={v => setFilter(v as DisenoFilter | 'todos')}
      />
      <DisenoGrid key={filter} images={filtered} />
    </>
  );
}
