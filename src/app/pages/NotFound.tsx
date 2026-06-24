import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <div style={{ background: 'var(--section-a)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', paddingTop: 68 }}>
      <div style={{ textAlign: 'center', maxWidth: 440 }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 120, lineHeight: 1, color: 'var(--section-c)', fontWeight: 400, marginBottom: 0 }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 400, lineHeight: 1.2, marginBottom: 16, marginTop: -8 }}>
          This page does not exist.
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: 36 }}>
          But the coffee does. Head back and find something worth brewing.
        </p>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent)', color: '#fff', padding: '13px 28px', fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', textDecoration: 'none' }}>
          Back to home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
