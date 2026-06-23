import { useState } from 'react';
import { ArrowRight, SlidersHorizontal, X } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { products } from '../data';
import { Link } from 'react-router';

const ROAST_LEVELS = ['All', 'Light', 'Medium-Light', 'Medium'];
const PROCESSES = ['All', 'Washed', 'Natural', 'Honey'];

export function Shop() {
  const [roastFilter, setRoastFilter] = useState('All');
  const [processFilter, setProcessFilter] = useState('All');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = products.filter((p) => {
    const roastOk = roastFilter === 'All' || p.roastLevel === roastFilter;
    const processOk = processFilter === 'All' || p.process === processFilter;
    return roastOk && processOk;
  });

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <div className="px-6 md:px-10 py-16 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">
            Current Harvest · 2025–26
          </p>
          <h1 className="text-5xl md:text-6xl font-light mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
            Shop
          </h1>
          <p className="text-[18px] text-foreground/70 leading-[1.7] max-w-xl">
            Single-origin lots sourced directly from farms in Chikmagalur, Coorg, and Araku Valley. Roasted weekly in Chennai.
          </p>
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="px-6 md:px-10 py-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Filter bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <p className="text-[14px] text-muted-foreground">{filtered.length} coffees</p>
            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => setFiltersOpen((v) => !v)}
                className="inline-flex items-center gap-2 text-[13px] border border-border/60 px-3 py-1.5 hover:border-foreground/40 transition-colors"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>
              {ROAST_LEVELS.filter((r) => r !== 'All').map((r) => (
                <button
                  key={r}
                  onClick={() => setRoastFilter(roastFilter === r ? 'All' : r)}
                  className={`text-[12px] px-3 py-1.5 border transition-colors ${
                    roastFilter === r
                      ? 'bg-foreground text-background border-foreground'
                      : 'border-border/60 hover:border-foreground/40'
                  }`}
                >
                  {r}
                </button>
              ))}
              {PROCESSES.filter((p) => p !== 'All').map((p) => (
                <button
                  key={p}
                  onClick={() => setProcessFilter(processFilter === p ? 'All' : p)}
                  className={`text-[12px] px-3 py-1.5 border transition-colors ${
                    processFilter === p
                      ? 'bg-foreground text-background border-foreground'
                      : 'border-border/60 hover:border-foreground/40'
                  }`}
                >
                  {p}
                </button>
              ))}
              {(roastFilter !== 'All' || processFilter !== 'All') && (
                <button
                  onClick={() => { setRoastFilter('All'); setProcessFilter('All'); }}
                  className="inline-flex items-center gap-1 text-[12px] text-muted-foreground hover:text-accent transition-colors"
                >
                  <X size={12} /> Clear
                </button>
              )}
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filtered.map((product) => (
              <ShopCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopCard({ product }: { product: typeof products[0] }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/shop/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-secondary mb-5 overflow-hidden rounded-sm relative">
          <ImageWithFallback
            src={hovered ? product.imageHover : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.15em] bg-accent text-white px-2.5 py-1 font-medium">
              {product.badge}
            </span>
          )}
        </div>

        <div className="space-y-1.5 mb-4">
          <h3 className="text-[17px] font-light" style={{ fontFamily: 'var(--font-serif)' }}>
            {product.name}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            {product.varietal} · {product.process}
          </p>
          <p className="italic text-[14px] text-foreground/60 leading-[1.7]">{product.tastingNotes}</p>
        </div>
      </Link>

      <div className="flex items-center justify-between">
        <span className="text-[16px] font-medium">₹{product.price} / {product.weight}</span>
        <button
          onClick={handleAdd}
          className={`inline-flex items-center gap-1.5 text-[13px] transition-colors ${
            added ? 'text-accent' : 'hover:text-accent'
          }`}
        >
          {added ? 'Added ✓' : <>Add to cart <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" /></>}
        </button>
      </div>
    </div>
  );
}
