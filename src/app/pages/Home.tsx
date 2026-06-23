import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Divider } from '../components/Divider';
import { products, journalPosts } from '../data';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-end justify-start">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1670758611084-e216510c5433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Coffee cherries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 mb-6 font-medium">
            Single-origin · Small-batch · Chennai
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-[1.08] text-white font-light max-w-4xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Indian coffee, roasted to taste like where it came from.
          </h1>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 text-[15px] hover:bg-accent/90 transition-all font-medium tracking-wide"
            >
              Shop the harvest <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[15px] text-white/80 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-0.5"
            >
              Read our origin story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Current Harvest */}
      <section id="shop" className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">
              This month's harvest
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Single-origin lots from this year's crop, available while stocks last.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-[15px] hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-0.5"
            >
              View all coffees <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-secondary/40">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="aspect-[3/4] bg-muted overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722962883757-4ca3c1c9df56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Coffee farm worker"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-7">
              <h2
                className="text-4xl md:text-5xl leading-[1.2] font-light"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                We started Kura because we couldn't find Indian coffee we were proud to serve.
              </h2>

              <div className="space-y-5 text-[18px] leading-[1.8] text-foreground/80">
                <p>
                  India has been growing exceptional coffee for over a century, but most of it gets
                  shipped abroad as commodity beans. The best lots — the ones with distinct flavors
                  that tell you where they're from — rarely make it to local roasters.
                </p>
                <p>
                  We work directly with small farms in Chikmagalur, Coorg, and Araku Valley. We
                  roast weekly in Chennai and ship within seven days of roasting.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[15px] hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-0.5"
              >
                More about the people we work with <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
              From farm to your filter.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {[
              {
                step: '01',
                title: 'Sourced from named farms',
                desc: 'Every bag lists the farm, the varietal, and the processing method. We visit the estates, meet the farmers, and taste the lots before we buy.',
                img: 'https://images.unsplash.com/photo-1629008642899-178df6fc5f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
              },
              {
                step: '02',
                title: 'Roasted weekly in small batches',
                desc: 'We roast to bring out the coffee\'s natural flavors — not to mask them. Light to medium roasts that let the origin shine through.',
                img: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
              },
              {
                step: '03',
                title: 'Shipped within 7 days of roasting',
                desc: 'Coffee starts losing its best flavors about two weeks after roasting. We ship fast so you get it at its peak.',
                img: 'https://images.unsplash.com/photo-1587955245893-389f2215c6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="aspect-square bg-secondary mb-7 overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-medium">
                  {item.step}
                </div>
                <h3 className="text-2xl mb-3 font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h3>
                <p className="leading-[1.8] text-[16px] text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Subscriptions */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-secondary/40">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="aspect-square bg-muted overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565273975221-fe8dc98dba50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Coffee bags"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">
                  Coffee Subscription
                </p>
                <h2 className="text-4xl md:text-5xl leading-[1.2] font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                  Or let us pick. A different lot every month.
                </h2>
              </div>

              <p className="text-[18px] leading-[1.8] text-foreground/80">
                125g, 250g, or 500g — every two or four weeks
              </p>

              <div>
                <p className="text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                  From ₹720/month
                </p>
                <ul className="space-y-3 text-[16px] leading-[1.8]">
                  {['Free shipping', 'Skip or cancel anytime', 'Member-only single lots'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/subscriptions"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 hover:bg-accent/90 transition-all font-medium tracking-wide text-[15px]"
              >
                Start a subscription <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">
                The Journal
              </p>
              <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                Notes from the roastery.
              </h2>
            </div>
            <Link
              to="/journal"
              className="hidden md:inline-flex items-center gap-2 text-[14px] hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-0.5"
            >
              All entries <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {journalPosts.map((post) => (
              <Link to={`/journal/${post.id}`} key={post.id} className="group cursor-pointer block">
                <div className="aspect-[4/3] bg-muted mb-6 overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] mb-3 text-muted-foreground font-medium">
                  {post.category} · {post.date}
                </p>
                <h3 className="text-xl mb-3 leading-snug font-light hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                  {post.title}
                </h3>
                <p className="text-[15px] text-foreground/60 leading-[1.7]">{post.excerpt}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-[14px] hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-0.5"
            >
              Read all journal entries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-28 px-6 md:px-10 bg-foreground text-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl mb-5 font-light"
            style={{ fontFamily: 'var(--font-serif)', color: '#F5F1EB' }}
          >
            Get a note when a new lot lands.
          </h2>
          <p className="text-[17px] mb-10 leading-[1.8] opacity-70" style={{ color: '#F5F1EB' }}>
            About once a month. No spam, no sales emails — just new harvests, brewing notes, and the occasional recipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-transparent border border-white/25 focus:border-white/60 outline-none transition-colors text-[16px] placeholder:text-white/40"
              style={{ color: '#F5F1EB' }}
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-accent text-white hover:bg-accent/90 transition-all font-medium tracking-wide text-[15px] whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
