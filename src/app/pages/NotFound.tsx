import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-6 font-medium">
          404
        </p>
        <h1 className="text-5xl font-light mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
          This page doesn't exist.
        </h1>
        <p className="text-[17px] text-foreground/65 leading-[1.8] mb-10">
          But the coffee does. Head back and find something worth brewing.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 hover:bg-accent/90 transition-all font-medium tracking-wide text-[15px]"
        >
          Back to home <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
