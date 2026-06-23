import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { journalPosts } from '../data';

export function Journal() {
  const [featured, ...rest] = journalPosts;

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <div className="px-6 md:px-10 py-16 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">The Journal</p>
          <h1 className="text-5xl md:text-6xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
            Notes from the roastery.
          </h1>
        </div>
      </div>

      {/* Featured */}
      <div className="px-6 md:px-10 py-16 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto">
          <Link to={`/journal/${featured.id}`} className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-muted overflow-hidden rounded-sm">
              <ImageWithFallback
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">
                {featured.category} · {featured.date} · {featured.readTime}
              </p>
              <h2
                className="text-3xl md:text-4xl font-light mb-5 leading-snug group-hover:text-accent transition-colors"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {featured.title}
              </h2>
              <p className="text-[17px] leading-[1.8] text-foreground/70 mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-[14px] border-b border-foreground/20 group-hover:border-accent group-hover:text-accent transition-colors pb-0.5">
                Read article <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Rest */}
      <div className="px-6 md:px-10 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {rest.map((post) => (
              <Link to={`/journal/${post.id}`} key={post.id} className="group block">
                <div className="aspect-[4/3] bg-muted mb-6 overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] mb-3 text-muted-foreground font-medium">
                  {post.category} · {post.date} · {post.readTime}
                </p>
                <h3
                  className="text-xl mb-3 leading-snug font-light group-hover:text-accent transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {post.title}
                </h3>
                <p className="text-[15px] text-foreground/60 leading-[1.7]">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
