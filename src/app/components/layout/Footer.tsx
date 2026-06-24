import { Link } from 'react-router';
import { Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: '#1C1410', color: '#FAF8F5' }}>
      {/* Top border stripe */}
      <div style={{ height: 3, background: 'var(--accent)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: 28, color: '#FAF8F5', textDecoration: 'none', display: 'block', marginBottom: 12 }}>
              Kura
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(250,248,245,0.55)', marginBottom: 20 }}>
              Small-batch specialty<br />coffee. Roasted in Chennai.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {[Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" style={{ color: 'rgba(250,248,245,0.45)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,248,245,0.45)')}>
                  <Icon size={17} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {[
            { heading: 'Shop', links: [['All Coffee', '/shop'], ['Subscriptions', '/subscriptions']] },
            { heading: 'Learn', links: [['Journal', '/journal'], ['Our Farms', '/about']] },
            { heading: 'Company', links: [['About', '/about'], ['Wholesale', '/cafes']] },
          ].map(col => (
            <div key={col.heading}>
              <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.35)', marginBottom: 20, fontWeight: 500 }}>
                {col.heading}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(([label, to]) => (
                  <Link key={label} to={to} style={{ fontSize: 13, color: 'rgba(250,248,245,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FAF8F5')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,248,245,0.6)')}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(250,248,245,0.1)', paddingTop: 28, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(250,248,245,0.3)' }}>© 2026 Kura Coffee. All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'rgba(250,248,245,0.3)' }}>FSSAI Lic. No. 12345678901234</p>
        </div>
      </div>
    </footer>
  );
}
