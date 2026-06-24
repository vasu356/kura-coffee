import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Navigation } from '../Navigation';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
