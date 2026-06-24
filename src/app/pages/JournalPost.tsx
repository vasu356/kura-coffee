import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { journalPosts } from '../data';

export function JournalPost() {
  const { id } = useParams();
  const post = journalPosts.find(p => p.id === id);
  if (!post) return <Navigate to="/journal" replace />;
  const others = journalPosts.filter(p => p.id !== id).slice(0, 2);

  const blocks = post.content.trim().split('\n\n').filter(Boolean).map(b => b.trim());

  return (
    <div>
      {/* Header — dark */}
      <div style={{ background: '#1C1410', paddingTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 32px' }}>
          <Link to="/journal" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(250,248,245,0.5)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Back to Journal
          </Link>
        </div>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '24px 32px 64px' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.4)', marginBottom: 20, fontWeight: 500 }}>
            {post.category} · {post.date} · {post.readTime}
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,4vw,52px)', color: '#FAF8F5', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>
        </div>
        <div style={{ height: 3, background: 'var(--accent)' }} />
      </div>

      {/* Hero image — section-b */}
      <div style={{ background: 'var(--section-b)', padding: '48px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)' }}>
            <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <p style={{ fontStyle: 'italic', fontSize: 18, lineHeight: 1.75, color: 'var(--muted-foreground)', marginTop: 32, textAlign: 'center' }}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Article body — section-a */}
      <article style={{ background: 'var(--section-a)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '64px 32px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {blocks.map((block, i) => {
            if (block.startsWith('**') && block.endsWith('**')) {
              return <h3 key={i} style={{ fontFamily: 'var(--font-serif)', fontSize: 24, lineHeight: 1.3, marginTop: 48, marginBottom: 16, color: 'var(--foreground)' }}>
                {block.replace(/\*\*/g, '')}
              </h3>;
            }
            return <p key={i} style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted-foreground)', marginBottom: 24, fontWeight: 300 }}>
              {block.replace(/\*\*/g, '')}
            </p>;
          })}
        </div>
      </article>

      {/* More posts — section-c */}
      <div style={{ background: 'var(--section-c)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '64px 32px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, marginBottom: 40 }}>More from the journal</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 40 }} className="grid-1-on-mobile">
            {others.map(p => (
              <Link to={`/journal/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} className="group">
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)', marginBottom: 16 }}>
                  <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 8, fontWeight: 500 }}>
                  {p.category} · {p.date}
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.25 }}
                  className="group-hover:text-accent transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <Link to="/journal" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--accent)', fontWeight: 500, textDecoration: 'none' }}>
              All journal entries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
