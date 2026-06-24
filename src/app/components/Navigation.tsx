import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const links = [
    { label: 'Shop', to: '/shop' },
    { label: 'Subscriptions', to: '/subscriptions' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Cafes', to: '/cafes' },
  ];

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
          background: transparent ? 'transparent' : 'rgba(250,248,245,0.97)',
          backdropFilter: transparent ? 'none' : 'blur(12px)',
          borderBottom: transparent ? '1px solid transparent' : '1px solid rgba(28,20,16,0.1)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 26,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: transparent ? '#FAF8F5' : 'var(--foreground)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
          >
            Kura
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  color: transparent
                    ? (location.pathname === link.to ? '#ffffff' : 'rgba(250,248,245,0.75)')
                    : (location.pathname === link.to ? 'var(--accent)' : 'var(--foreground)'),
                  borderBottom: location.pathname === link.to && !transparent ? '1px solid var(--accent)' : '1px solid transparent',
                  paddingBottom: 2,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Link
              to="/shop"
              aria-label="Cart"
              style={{ position: 'relative', color: transparent ? '#FAF8F5' : 'var(--foreground)', transition: 'color 0.2s' }}
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
              <span style={{
                position: 'absolute', top: -8, right: -8,
                width: 16, height: 16,
                background: 'var(--accent)', color: '#fff',
                fontSize: 9, fontWeight: 600,
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>2</span>
            </Link>
            <button
              aria-label="Account"
              style={{ color: transparent ? '#FAF8F5' : 'var(--foreground)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
            >
              <User size={20} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden"
              style={{ color: transparent ? '#FAF8F5' : 'var(--foreground)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed', inset: 0, zIndex: 90,
          background: 'var(--background)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 32,
              fontWeight: 400,
              color: location.pathname === link.to ? 'var(--accent)' : 'var(--foreground)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
