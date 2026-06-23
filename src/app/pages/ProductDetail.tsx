import { useParams, Link, Navigate } from 'react-router';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Thermometer, Droplets, Mountain } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { products } from '../data';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/shop" replace />;

  const related = products.filter((p) => p.id !== id).slice(0, 3);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="px-6 md:px-10 py-6 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} /> Back to Shop
          </Link>
        </div>
      </div>

      {/* Product */}
      <div className="px-6 md:px-10 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-secondary overflow-hidden rounded-sm">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-secondary overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={product.imageHover}
                    alt={`${product.name} beans`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-secondary overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={product.farmImage}
                    alt={`${product.name} farm`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              {product.badge && (
                <span className="text-[11px] uppercase tracking-[0.2em] bg-accent text-white px-3 py-1.5 font-medium inline-block">
                  {product.badge}
                </span>
              )}

              <div>
                <h1
                  className="text-4xl md:text-5xl font-light mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {product.name}
                </h1>
                <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {product.varietal} · {product.process} · {product.roastLevel} Roast
                </p>
              </div>

              <p className="italic text-[18px] text-foreground/70 leading-[1.7]">{product.tastingNotes}</p>

              <p className="text-[17px] leading-[1.8] text-foreground/80">{product.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/40">
                {[
                  { icon: MapPin, label: 'Origin', value: product.origin },
                  { icon: Mountain, label: 'Altitude', value: product.altitude },
                  { icon: Droplets, label: 'Process', value: product.process },
                  { icon: Thermometer, label: 'Roast', value: product.roastLevel },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label}>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1 flex items-center gap-1.5">
                      <Icon size={11} /> {label}
                    </p>
                    <p className="text-[15px] font-medium">{value}</p>
                  </div>
                ))}
              </div>

              {/* Price + Add */}
              <div className="space-y-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                    ₹{product.price}
                  </span>
                  <span className="text-[14px] text-muted-foreground">/ {product.weight}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border/60">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="px-3 py-2 text-lg hover:bg-secondary transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 text-[15px] min-w-[40px] text-center">{qty}</span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="px-3 py-2 text-lg hover:bg-secondary transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-3.5 font-medium tracking-wide text-[15px] transition-all inline-flex items-center justify-center gap-2 ${
                      added
                        ? 'bg-green-700 text-white'
                        : 'bg-accent text-white hover:bg-accent/90'
                    }`}
                  >
                    {added ? 'Added to Cart ✓' : <><span>Add to Cart</span> <ArrowRight size={16} /></>}
                  </button>
                </div>
              </div>

              <p className="text-[13px] text-muted-foreground">
                Free shipping on orders above ₹999. Ships within 7 days of roasting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="px-6 md:px-10 py-20 border-t border-border/40 bg-secondary/30">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light mb-12" style={{ fontFamily: 'var(--font-serif)' }}>
            You might also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {related.map((p) => (
              <Link to={`/shop/${p.id}`} key={p.id} className="group block">
                <div className="aspect-[3/4] bg-secondary mb-5 overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-light mb-1 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                  {p.name}
                </h3>
                <p className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground mb-2">{p.varietal} · {p.process}</p>
                <p className="text-[15px]">₹{p.price} / {p.weight}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
