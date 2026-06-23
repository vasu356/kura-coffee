import { Link } from 'react-router';
import { Instagram, Youtube } from 'lucide-react';
import { Divider } from '../Divider';

export function Footer() {
  return (
    <footer className="border-t border-border/40 pt-4 pb-12 px-6 md:px-10 bg-background">
      <Divider />
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-16 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="text-3xl font-medium mb-3 block"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Kura
            </Link>
            <p className="text-[14px] text-muted-foreground leading-[1.7]">
              Small-batch specialty coffee.
              <br />
              Roasted in Chennai.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-[14px] tracking-wider uppercase text-foreground/60">Shop</h4>
            <ul className="space-y-3 text-[14px] text-muted-foreground">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Coffee</Link></li>
              <li><Link to="/subscriptions" className="hover:text-accent transition-colors">Subscriptions</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Brewing Equipment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-[14px] tracking-wider uppercase text-foreground/60">Learn</h4>
            <ul className="space-y-3 text-[14px] text-muted-foreground">
              <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Farms</Link></li>
              <li><Link to="/cafes" className="hover:text-accent transition-colors">Brewing Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-[14px] tracking-wider uppercase text-foreground/60">Company</h4>
            <ul className="space-y-3 text-[14px] text-muted-foreground">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/cafes" className="hover:text-accent transition-colors">Wholesale</Link></li>
              <li><a href="mailto:hello@kuracoffee.in" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-[14px] tracking-wider uppercase text-foreground/60">Connect</h4>
            <ul className="space-y-3 text-[14px] text-muted-foreground">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">YouTube</a></li>
              <li><a href="mailto:hello@kuracoffee.in" className="hover:text-accent transition-colors">hello@kuracoffee.in</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-[13px] text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© 2026 Kura Coffee. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-accent transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-accent transition-colors">Terms</Link>
            <span>FSSAI Lic. No. 12345678901234</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
