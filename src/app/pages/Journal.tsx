import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { journalPosts } from '../data';

export function Journal() {
  const [featured, ...rest] = journalPosts;
  return (
    <div>
      {/* Header — dark */}
      <div style={{ background: '#1C1410', paddingTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 56px' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.4)', marginBottom: 16, fontWeight: 500 }}>The Journal</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,5vw,64px)', color: '#FAF8F5', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.08 }}>
            Notes from the roastery.
          </h1>
        </div>
        <div style={{ height: 3, background: 'var(--accent)' }} />
      </div>

      {/* Featured — section-b */}
      <div style={{ background: 'var(--section-b)', padding: '72px 32px', borderBottom: '1px solid rgba(28,20,16,0.1)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Link to={`/journal/${featured.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="grid-1-on-mobile group">
            <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)' }}>
              <ImageWithFallback src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20, fontWeight: 500 }}>
                Featured · {featured.category} · {featured.date}
              </p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px,3vw,38px)', lineHeight: 1.2, marginBottom: 16 }}
                className="group-hover:text-accent transition-colors">{featured.title}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted-foreground)', marginBottom: 28 }}>{featured.excerpt}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>
                Read article <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Grid — section-a */}
      <div style={{ background: 'var(--section-a)', padding: '72px 32px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: 48 }}>
            {rest.map(post => (
              <Link to={`/journal/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} className="group">
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)', marginBottom: 20 }}>
                  <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 10, fontWeight: 500 }}>
                  {post.category} · {post.date} · {post.readTime}
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.25, marginBottom: 10 }}
                  className="group-hover:text-accent transition-colors">{post.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--muted-foreground)' }}>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA — section-c */}
      <div style={{ background: 'var(--section-c)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '64px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, marginBottom: 8 }}>Want more?</h2>
        <p style={{ fontSize: 15, color: 'var(--muted-foreground)', marginBottom: 24 }}>Get new articles in your inbox when they drop.</p>
        <div style={{ display: 'flex', maxWidth: 380, margin: '0 auto' }}>
          <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: '12px 16px', background: 'rgba(28,20,16,0.06)', border: '1px solid rgba(28,20,16,0.2)', borderRight: 'none', fontSize: 14, fontFamily: 'var(--font-sans)', outline: 'none' }} />
          <button style={{ padding: '12px 20px', background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-sans)' }}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
