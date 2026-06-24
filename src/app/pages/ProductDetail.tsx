import { useParams, Link, Navigate } from 'react-router';
import { useState } from 'react';
import { ArrowLeft, MapPin, Thermometer, Droplets, Mountain } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { products } from '../data';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/shop" replace />;
  const images = [product.image, product.imageHover, product.farmImage];
  const related = products.filter(p => p.id !== id).slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: 'var(--section-b)', borderBottom: '1px solid rgba(28,20,16,0.1)', padding: '0 32px', paddingTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 0' }}>
          <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Back to Shop
          </Link>
        </div>
      </div>

      {/* Product — section-a */}
      <div style={{ background: 'var(--section-a)', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }} className="grid-1-on-mobile">
          {/* Images */}
          <div>
            <div style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)', marginBottom: 12 }}>
              <ImageWithFallback src={images[activeImg]} alt={product.name} className="w-full h-full object-cover" style={{ transition: 'all 0.4s' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
              {images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)} style={{
                  aspectRatio: '1/1', overflow: 'hidden', borderRadius: 2,
                  background: 'var(--muted)', border: '2px solid',
                  borderColor: activeImg === i ? 'var(--accent)' : 'transparent',
                  cursor: 'pointer', padding: 0, transition: 'border-color 0.2s',
                }}>
                  <ImageWithFallback src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            {product.badge && (
              <span style={{ display: 'inline-block', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', background: 'var(--accent)', color: '#fff', padding: '5px 12px', fontWeight: 600, marginBottom: 24 }}>
                {product.badge}
              </span>
            )}
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 400, lineHeight: 1.1, marginBottom: 12, letterSpacing: '-0.01em' }}>
              {product.name}
            </h1>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 24, fontWeight: 500 }}>
              {product.varietal} · {product.process} · {product.roastLevel} Roast
            </p>
            <p style={{ fontStyle: 'italic', fontSize: 18, color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: 24 }}>
              {product.tastingNotes}
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--muted-foreground)', marginBottom: 32 }}>{product.description}</p>

            {/* Specs grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: '24px 0', borderTop: '1px solid rgba(28,20,16,0.1)', borderBottom: '1px solid rgba(28,20,16,0.1)', marginBottom: 32 }}>
              {[
                { Icon: MapPin, label: 'Origin', value: product.origin },
                { Icon: Mountain, label: 'Altitude', value: product.altitude },
                { Icon: Droplets, label: 'Process', value: product.process },
                { Icon: Thermometer, label: 'Roast', value: product.roastLevel },
              ].map(({ Icon, label, value }) => (
                <div key={label}>
                  <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 4, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Icon size={10} /> {label}
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 500 }}>{value}</p>
                </div>
              ))}
            </div>

            {/* Price + qty */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 36 }}>₹{product.price}</span>
              <span style={{ fontSize: 14, color: 'var(--muted-foreground)' }}>/ {product.weight}</span>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(28,20,16,0.2)' }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 40, height: 48, background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--foreground)' }}>−</button>
                <span style={{ width: 36, textAlign: 'center', fontSize: 15 }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ width: 40, height: 48, background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--foreground)' }}>+</button>
              </div>
              <button
                onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2000); }}
                style={{
                  flex: 1, height: 48, background: added ? '#2d6a4f' : 'var(--accent)', color: '#fff',
                  border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em',
                  fontFamily: 'var(--font-sans)', transition: 'background 0.25s',
                }}>
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
            </div>
            <p style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>Free shipping above ₹999. Ships within 7 days of roasting.</p>
          </div>
        </div>
      </div>

      {/* Related — section-b */}
      <div style={{ background: 'var(--section-b)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '64px 32px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, marginBottom: 40 }}>You might also like</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }} className="grid-1-on-mobile">
            {related.map(p => (
              <Link to={`/shop/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} className="group">
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)', marginBottom: 16 }}>
                  <ImageWithFallback src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 6 }} className="group-hover:text-accent transition-colors">{p.name}</h3>
                <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 4, fontWeight: 500 }}>{p.varietal} · {p.process}</p>
                <p style={{ fontSize: 14, fontWeight: 500 }}>₹{p.price} / {p.weight}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
