import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface Props {
  id: string; name: string; origin: string; varietal: string; process: string;
  tastingNotes: string; price: number; weight: string; image: string; imageHover: string;
  badge?: string | null;
}

export function ProductCard({ id, name, origin, varietal, process, tastingNotes, price, weight, image, imageHover, badge }: Props) {
  const [hovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link to={`/shop/${id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)', marginBottom: 20, position: 'relative' }}>
          <ImageWithFallback
            src={hovered ? imageHover : image}
            alt={name}
            className="w-full h-full object-cover"
            style={{ transition: 'all 0.65s ease' }}
          />
          {badge && (
            <span style={{
              position: 'absolute', top: 12, left: 12,
              fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
              background: 'var(--accent)', color: '#fff', padding: '5px 10px', fontWeight: 600,
            }}>{badge}</span>
          )}
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, lineHeight: 1.2, marginBottom: 6 }}>{origin}</h3>
        <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 8, fontWeight: 500 }}>
          {varietal} · {process}
        </p>
        <p style={{ fontStyle: 'italic', fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: 16 }}>{tastingNotes}</p>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 15, fontWeight: 500 }}>₹{price} <span style={{ fontWeight: 300, color: 'var(--muted-foreground)' }}>/ {weight}</span></span>
        <button
          onClick={(e) => { e.preventDefault(); setAdded(true); setTimeout(() => setAdded(false), 1600); }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, letterSpacing: '0.05em', color: added ? 'var(--accent)' : 'var(--foreground)',
            background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)',
            transition: 'color 0.2s', padding: 0,
          }}>
          {added ? 'Added ✓' : <><span>Add to cart</span><ArrowRight size={12} /></>}
        </button>
      </div>
    </div>
  );
}
