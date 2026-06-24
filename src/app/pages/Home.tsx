import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { products, journalPosts } from '../data';
import { ProductCard } from '../components/ProductCard';

/* ---------- reusable primitives ---------- */
function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p style={{
      fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: light ? 'rgba(250,248,245,0.5)' : 'var(--muted-foreground)',
      marginBottom: 16, fontFamily: 'var(--font-sans)',
    }}>{children}</p>
  );
}

function SectionHead({ label, title, light = false }: { label: string; title: React.ReactNode; light?: boolean }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <Label light={light}>{label}</Label>
      <h2 style={{
        fontFamily: 'var(--font-serif)', fontWeight: 400,
        fontSize: 'clamp(32px, 4vw, 48px)',
        color: light ? '#FAF8F5' : 'var(--foreground)',
        lineHeight: 1.18, maxWidth: 680,
      }}>{title}</h2>
    </div>
  );
}

function Btn({ to, children, variant = 'filled' }: { to: string; children: React.ReactNode; variant?: 'filled' | 'ghost' | 'white' }) {
  const base: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    textDecoration: 'none', fontFamily: 'var(--font-sans)',
    fontSize: 13, fontWeight: 500, letterSpacing: '0.05em',
    transition: 'all 0.2s', cursor: 'pointer',
  };
  if (variant === 'filled') return (
    <Link to={to} style={{ ...base, background: 'var(--accent)', color: '#fff', padding: '13px 28px' }}
      onMouseEnter={e => (e.currentTarget.style.background = '#9E4E2B')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}>
      {children}
    </Link>
  );
  if (variant === 'white') return (
    <Link to={to} style={{ ...base, background: '#FAF8F5', color: '#1C1410', padding: '13px 28px' }}>
      {children}
    </Link>
  );
  return (
    <Link to={to} style={{ ...base, color: 'var(--foreground)', borderBottom: '1px solid rgba(28,20,16,0.25)', paddingBottom: 2 }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--foreground)')}>
      {children}
    </Link>
  );
}

/* ---------------------------------------- */

export function Home() {
  return (
    <div>

      {/* ── 1. HERO ── full-height, image behind nav ─────────────────────────── */}
      <section style={{ position: 'relative', height: '100svh', minHeight: 600, display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1670758611084-e216510c5433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Coffee cherries on a branch"
            className="w-full h-full object-cover"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,12,8,0.88) 0%, rgba(20,12,8,0.45) 50%, rgba(20,12,8,0.2) 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 32px 80px', width: '100%' }}>
          <Label light>Single-origin · Small-batch · Chennai</Label>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400,
            fontSize: 'clamp(42px, 6.5vw, 88px)',
            color: '#FAF8F5', lineHeight: 1.06,
            maxWidth: 820, marginBottom: 36, letterSpacing: '-0.02em',
          }}>
            Indian coffee, roasted to taste like where it came from.
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <Btn to="/shop" variant="filled">Shop the harvest <ArrowRight size={16} /></Btn>
            <Btn to="/about" variant="white">Our origin story <ArrowRight size={16} /></Btn>
          </div>
        </div>
      </section>

      {/* ── 2. CURRENT HARVEST ── section-a (warm white) ─────────────────────── */}
      <section style={{ background: 'var(--section-a)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHead
            label="This month's harvest"
            title="Single-origin lots from this year's crop, available while stocks last."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 40 }}>
            {products.slice(0, 3).map(p => <ProductCard key={p.id} {...p} />)}
          </div>
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <Btn to="/shop" variant="ghost">View all coffees <ArrowRight size={14} /></Btn>
          </div>
        </div>
      </section>

      {/* ── 3. STORY ── section-b (warm beige) with left image ───────────────── */}
      <section style={{ background: 'var(--section-b)', borderTop: '1px solid rgba(28,20,16,0.08)', borderBottom: '1px solid rgba(28,20,16,0.08)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="grid-1-on-mobile">
          <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: 2 }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1722962883757-4ca3c1c9df56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
              alt="Coffee farmer"
              className="w-full h-full object-cover"
              style={{ transition: 'transform 0.8s ease' }}
            />
          </div>
          <div>
            <Label>Our Story</Label>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: 1.18, marginBottom: 28, letterSpacing: '-0.01em' }}>
              We started Kura because we couldn't find Indian coffee we were proud to serve.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--muted-foreground)', marginBottom: 16 }}>
              India grows exceptional coffee — but most of the best lots get shipped abroad as commodity beans. We work directly with small farms in Chikmagalur, Coorg, and Araku Valley.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--muted-foreground)', marginBottom: 36 }}>
              We roast weekly in Chennai and ship within seven days of roasting. No warehouses, no stale beans.
            </p>
            <Btn to="/about" variant="ghost">More about who we work with <ArrowRight size={14} /></Btn>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ── section-a + ruled lines ────────────────────────────── */}
      <section style={{ background: 'var(--section-a)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHead label="Our Process" title="From farm to your filter." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid rgba(28,20,16,0.12)' }} className="grid-1-on-mobile">
            {[
              { step: '01', title: 'Sourced from named farms', body: 'Every bag names the farm, varietal, and process. We visit the estates and taste lots before we buy.', img: 'https://images.unsplash.com/photo-1629008642899-178df6fc5f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
              { step: '02', title: 'Roasted weekly in small batches', body: 'Light to medium roasts that let the origin speak. We never roast to hide a flavour.', img: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
              { step: '03', title: 'Shipped within 7 days of roasting', body: 'Coffee degrades fast. We ship at peak so you get it exactly right.', img: 'https://images.unsplash.com/photo-1587955245893-389f2215c6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600' },
            ].map((item, i) => (
              <div key={item.step} style={{ padding: '48px 40px 40px 0', borderRight: i < 2 ? '1px solid rgba(28,20,16,0.12)' : 'none', marginRight: i < 2 ? 40 : 0 }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 2, marginBottom: 28 }}>
                  <ImageWithFallback src={item.img} alt={item.title} className="w-full h-full object-cover" style={{ transition: 'transform 0.7s' }} />
                </div>
                <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, fontWeight: 500 }}>{item.step}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.25, marginBottom: 14 }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted-foreground)' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SUBSCRIPTIONS ── section-c (deeper tan) ───────────────────────── */}
      <section style={{ background: 'var(--section-c)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="grid-1-on-mobile">
          <div style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: 2 }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1565273975221-fe8dc98dba50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
              alt="Coffee subscription bags"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Label>Coffee Subscription</Label>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: 1.18, marginBottom: 24, letterSpacing: '-0.01em' }}>
              Or let us pick. A different lot every month.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--muted-foreground)', marginBottom: 28 }}>
              125g, 250g, or 500g — every two or four weeks
            </p>
            <div style={{ marginBottom: 36 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--foreground)', marginBottom: 20 }}>From ₹720/month</p>
              {['Free shipping on every delivery', 'Skip or cancel anytime, no penalty', 'Member-only single lots'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: 'var(--muted-foreground)' }}>{item}</span>
                </div>
              ))}
            </div>
            <Btn to="/subscriptions" variant="filled">Start a subscription <ArrowRight size={16} /></Btn>
          </div>
        </div>
      </section>

      {/* ── 6. JOURNAL ── section-b ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--section-b)', borderTop: '1px solid rgba(28,20,16,0.09)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 56 }}>
            <div>
              <Label>The Journal</Label>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: 1.18 }}>Notes from the roastery.</h2>
            </div>
            <Btn to="/journal" variant="ghost">All entries <ArrowRight size={14} /></Btn>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }} className="grid-1-on-mobile">
            {journalPosts.map(post => (
              <Link to={`/journal/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                className="group">
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 2, marginBottom: 20, background: 'var(--muted)' }}>
                  <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 10, fontWeight: 500 }}>
                  {post.category} · {post.date} · {post.readTime}
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.3, marginBottom: 10 }}
                  className="group-hover:text-accent transition-colors">{post.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--muted-foreground)' }}>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. NEWSLETTER ── dark section ────────────────────────────────────── */}
      <section style={{ background: '#1C1410', padding: '96px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.4)', marginBottom: 20, fontWeight: 500 }}>Stay in the loop</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,3.5vw,44px)', color: '#FAF8F5', lineHeight: 1.18, marginBottom: 16, letterSpacing: '-0.01em' }}>
            Get a note when a new lot lands.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,248,245,0.5)', marginBottom: 40 }}>
            About once a month. No spam — just new harvests, brewing notes, and the occasional farm visit story.
          </p>
          <div style={{ display: 'flex', maxWidth: 440, margin: '0 auto' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1, padding: '14px 18px', background: 'rgba(250,248,245,0.07)',
                border: '1px solid rgba(250,248,245,0.15)', borderRight: 'none',
                color: '#FAF8F5', fontSize: 14, fontFamily: 'var(--font-sans)', outline: 'none',
              }}
            />
            <button style={{
              padding: '14px 24px', background: 'var(--accent)', color: '#fff',
              border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.05em', fontFamily: 'var(--font-sans)',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#9E4E2B')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
