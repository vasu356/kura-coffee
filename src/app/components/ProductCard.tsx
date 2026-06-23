import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductCardProps {
  id: string;
  name: string;
  origin: string;
  varietal: string;
  process: string;
  tastingNotes: string;
  price: number;
  weight: string;
  image: string;
  imageHover: string;
  badge?: string | null;
}

export function ProductCard({ id, name, origin, varietal, process, tastingNotes, price, weight, image, imageHover, badge }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/shop/${id}`} className="block">
        <div className="aspect-[3/4] bg-secondary mb-6 overflow-hidden rounded-sm relative">
          <ImageWithFallback
            src={isHovered ? imageHover : image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-700"
          />
          {badge && (
            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.15em] bg-accent text-white px-2.5 py-1 font-medium">
              {badge}
            </span>
          )}
        </div>

        <div className="space-y-2 mb-4">
          <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
            {origin}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
            {varietal} · {process}
          </p>
          <p className="italic text-[15px] text-foreground/65 leading-[1.7]">{tastingNotes}</p>
        </div>
      </Link>

      <div className="flex items-center justify-between pt-1">
        <span className="text-[16px] font-medium">₹{price} / {weight}</span>
        <button
          onClick={handleAdd}
          className={`inline-flex items-center gap-1.5 text-[13px] transition-colors ${added ? 'text-accent' : 'hover:text-accent'}`}
        >
          {added ? 'Added ✓' : <>Add to cart <ArrowRight size={13} /></>}
        </button>
      </div>
    </div>
  );
}
