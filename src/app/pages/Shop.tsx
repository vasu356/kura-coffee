import { useState } from 'react';
import { Link } from 'react-router';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { products } from '../data';

const ROASTS = ['Light', 'Medium-Light', 'Medium'];
const PROCESSES = ['Washed', 'Natural', 'Honey'];

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      padding: '7px 16px', fontSize: 12, letterSpacing: '0.05em', cursor: 'pointer',
      fontFamily: 'var(--font-sans)', fontWeight: active ? 500 : 300,
      background: active ? 'var(--foreground)' : 'transparent',
      color: active ? 'var(--section-a)' : 'var(--foreground)',
      border: '1px solid rgba(28,20,16,0.25)', transition: 'all 0.2s',
    }}>
      {label}
    </button>
  );
}

export function Shop() {
  const [roast, setRoast] = useState('');
  const [process, setProcess] = useState('');

  const filtered = products.filter(p =>
    (!roast || p.roastLevel === roast) && (!process || p.process === process)
  );

  return (
    <div>
      {/* Page header — section-dark */}
      <div style={{ background: '#1C1410', paddingTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 56px' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.4)', marginBottom: 16, fontWeight: 500 }}>
            Current Harvest · 2025–26
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,5vw,64px)', color: '#FAF8F5', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.08 }}>
            Shop
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(250,248,245,0.55)', maxWidth: 480, lineHeight: 1.75 }}>
            Single-origin lots sourced directly from farms in Chikmagalur, Coorg, and Araku Valley.
          </p>
        </div>
        {/* Accent stripe */}
        <div style={{ height: 3, background: 'var(--accent)' }} />
      </div>

      {/* Filters — section-b */}
      <div style={{ background: 'var(--section-b)', borderBottom: '1px solid rgba(28,20,16,0.1)', padding: '20px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginRight: 8, fontWeight: 500 }}>Filter:</span>
          {ROASTS.map(r => <FilterChip key={r} label={r} active={roast === r} onClick={() => setRoast(roast === r ? '' : r)} />)}
          <span style={{ width: 1, height: 20, background: 'rgba(28,20,16,0.15)', margin: '0 4px' }} />
          {PROCESSES.map(p => <FilterChip key={p} label={p} active={process === p} onClick={() => setProcess(process === p ? '' : p)} />)}
          {(roast || process) && (
            <button onClick={() => { setRoast(''); setProcess(''); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, letterSpacing: '0.05em', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', marginLeft: 8 }}>
              <X size={11} /> Clear
            </button>
          )}
          <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--muted-foreground)' }}>{filtered.length} coffees</span>
        </div>
      </div>

      {/* Grid — section-a */}
      <div style={{ background: 'var(--section-a)', padding: '64px 32px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted-foreground)' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 24, marginBottom: 12 }}>No coffees match that filter.</p>
              <button onClick={() => { setRoast(''); setProcess(''); }} style={{ fontSize: 13, color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Clear filters</button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 48 }}>
              {filtered.map(p => (
                <ShopCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Banner — section-c */}
      <div style={{ background: 'var(--section-c)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '64px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 16, fontWeight: 500 }}>
          Never run out
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, marginBottom: 24, lineHeight: 1.2 }}>Prefer a subscription?</h2>
        <Link to="/subscriptions" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--accent)', color: '#fff', padding: '13px 28px',
          fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', textDecoration: 'none',
        }}>
          See subscription plans
        </Link>
      </div>
    </div>
  );
}

function ShopCard({ product }: { product: typeof products[0] }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Link to={`/shop/${product.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)', marginBottom: 18, position: 'relative' }}>
          <ImageWithFallback src={hovered ? product.imageHover : product.image} alt={product.name}
            className="w-full h-full object-cover" style={{ transition: 'all 0.65s' }} />
          {product.badge && (
            <span style={{ position: 'absolute', top: 12, left: 12, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--accent)', color: '#fff', padding: '5px 10px', fontWeight: 600 }}>
              {product.badge}
            </span>
          )}
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.2, marginBottom: 6 }}>{product.name}</h3>
        <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 8, fontWeight: 500 }}>
          {product.varietal} · {product.process}
        </p>
        <p style={{ fontStyle: 'italic', fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: 14 }}>{product.tastingNotes}</p>
      </Link>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 15, fontWeight: 500 }}>₹{product.price}<span style={{ fontWeight: 300, color: 'var(--muted-foreground)', fontSize: 13 }}> / {product.weight}</span></span>
        <button onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1600); }}
          style={{ fontSize: 12, color: added ? 'var(--accent)' : 'var(--foreground)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'color 0.2s' }}>
          {added ? 'Added ✓' : 'Add to cart →'}
        </button>
      </div>
    </div>
  );
}
