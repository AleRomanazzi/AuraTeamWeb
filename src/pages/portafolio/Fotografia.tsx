import { useState, useMemo } from 'react';
import type { FotoFilter } from '../../data/content';
import { fotografiaImages, FOTO_FILTERS } from '../../data/content';
import PortfolioGrid from '../../components/PortfolioGrid';
import FilterChips from '../../components/FilterChips';

export default function Fotografia() {
  const [filter, setFilter] = useState<FotoFilter | 'todos'>('todos');

  const filtered = useMemo(
    () => filter === 'todos'
      ? fotografiaImages
      : fotografiaImages.filter(img => img.filter === filter),
    [filter],
  );

  return (
    <>
      <FilterChips
        filters={FOTO_FILTERS}
        active={filter}
        onChange={v => setFilter(v as FotoFilter | 'todos')}
      />
      <PortfolioGrid key={filter} images={filtered} />
    </>
  );
}
