import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { journalPosts } from '../data';

export function JournalPost() {
  const { id } = useParams();
  const post = journalPosts.find((p) => p.id === id);
  if (!post) return <Navigate to="/journal" replace />;

  const others = journalPosts.filter((p) => p.id !== id).slice(0, 2);

  // Convert markdown-lite content to paragraphs
  const paragraphs = post.content
    .trim()
    .split('\n\n')
    .filter(Boolean)
    .map((block) => block.trim());

  return (
    <div className="pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="px-6 md:px-10 py-6 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} /> Back to Journal
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="px-6 md:px-10 py-16">
        <div className="max-w-[760px] mx-auto">
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-5 text-muted-foreground font-medium">
              {post.category} · {post.date} · {post.readTime}
            </p>
            <h1
              className="text-4xl md:text-5xl font-light leading-[1.15] mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {post.title}
            </h1>
            <p className="text-[19px] text-foreground/70 leading-[1.8] italic">{post.excerpt}</p>
          </div>

          <div className="aspect-[16/9] bg-muted mb-12 overflow-hidden rounded-sm">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-[18px] leading-[1.85] text-foreground/80">
            {paragraphs.map((block, i) => {
              if (block.startsWith('**') && block.endsWith('**')) {
                return (
                  <h3
                    key={i}
                    className="text-2xl font-light pt-4"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {block.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              return <p key={i}>{block.replace(/\*\*/g, '')}</p>;
            })}
          </div>
        </div>
      </article>

      {/* More posts */}
      <div className="px-6 md:px-10 py-20 border-t border-border/40 bg-secondary/30">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light mb-12" style={{ fontFamily: 'var(--font-serif)' }}>
            More from the journal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {others.map((p) => (
              <Link to={`/journal/${p.id}`} key={p.id} className="group block">
                <div className="aspect-[4/3] bg-muted mb-5 overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] mb-2 text-muted-foreground font-medium">
                  {p.category} · {p.date}
                </p>
                <h3 className="text-xl font-light group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-[14px] hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-0.5"
            >
              All journal entries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
