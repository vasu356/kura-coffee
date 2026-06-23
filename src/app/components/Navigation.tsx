import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Subscriptions', to: '/subscriptions' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Cafes', to: '/cafes' },
  ];

  const isTransparent = isHome && !scrolled && !isMobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent border-transparent'
            : 'bg-background/96 backdrop-blur-md border-b border-border/50'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link
            to="/"
            className={`text-3xl tracking-tight font-medium transition-colors ${isTransparent ? 'text-white' : ''}`}
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Kura
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover:text-accent ${
                  isTransparent ? 'text-white/85 hover:text-white' : ''
                } ${location.pathname === link.to ? 'text-accent' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link
              to="/shop"
              className={`relative transition-colors hover:text-accent ${isTransparent ? 'text-white' : ''}`}
              aria-label="Cart"
            >
              <ShoppingCart size={21} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                2
              </span>
            </Link>
            <button
              className={`transition-colors hover:text-accent ${isTransparent ? 'text-white' : ''}`}
              aria-label="Account"
            >
              <User size={21} strokeWidth={1.5} />
            </button>
            <button
              className={`md:hidden transition-colors hover:text-accent ${isTransparent ? 'text-white' : ''}`}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-md md:hidden pt-24 px-8 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8" style={{ fontFamily: 'var(--font-serif)' }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-2xl hover:text-accent transition-colors ${
                location.pathname === link.to ? 'text-accent' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
