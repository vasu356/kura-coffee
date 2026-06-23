import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

const team = [
  {
    name: 'Arjun Singh',
    role: 'Head Roaster',
    bio: 'Arjun spent eight years at specialty roasters in Melbourne and Berlin before coming home to Chennai. He roasts every batch personally and takes it personally when a lot doesn\'t hit the notes it should.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    name: 'Priya Nair',
    role: 'Co-founder, Sourcing',
    bio: 'Priya visits every farm we buy from. She speaks Kannada and Telugu, which matters more than any cupping score when you\'re trying to build a relationship with a farmer who\'s been growing coffee for forty years.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b2e6ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    name: 'Karthik Menon',
    role: 'Co-founder, Operations',
    bio: 'Karthik handles everything that isn\'t roasting or sourcing — which turns out to be a lot. He also makes an excellent filter coffee, though he\'d never admit he prefers it to a V60.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
];

const farms = [
  {
    name: 'Venkatesh Estate',
    region: 'Chikmagalur, Karnataka',
    detail: 'Third-generation farm at 1,200m. The Venkatesh family has been growing coffee since 1961. They use no synthetic inputs, and the shade-grown trees are older than anyone can remember.',
    image: 'https://images.unsplash.com/photo-1629008642899-178df6fc5f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  },
  {
    name: 'Devara Farms',
    region: 'Coorg, Karnataka',
    detail: 'A 28-acre family operation in the Western Ghats, known for natural-processed Chandragiri. The Devara family grows cardamom alongside their coffee, which might explain the faint spice note in their lots.',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  },
  {
    name: 'Araku Cooperative',
    region: 'Araku Valley, Andhra Pradesh',
    detail: 'A tribal-led cooperative of 80+ smallholder farmers at 1,100m. The Araku Valley is one of India\'s least-known and most distinctive coffee regions. We\'re proud to be among the few roasters working directly with these farmers.',
    image: 'https://images.unsplash.com/photo-1680381615265-6cce996f6e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  },
];

export function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1722962883757-4ca3c1c9df56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Coffee farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-10 pb-16 max-w-[1200px] mx-auto w-full">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 mb-4 font-medium">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight max-w-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
            We started Kura because we couldn't find Indian coffee we were proud to serve.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg space-y-6 text-[18px] leading-[1.85] text-foreground/80">
            <p>
              India is among the world's great coffee-producing countries. Arabica grown in the Western Ghats, in the mist-covered hills of Coorg and Chikmagalur and Araku, has been winning international cupping competitions for years. And yet, for most of the country, "Indian coffee" still means a dark, bitter commodity blend — the kind that gets used as a base for filter coffee sachets.
            </p>
            <p>
              We started Kura in 2022 to change that. Not to import a trend from Portland or Melbourne, but to take something India already has — exceptional coffee, grown with care, in specific places — and put it in front of people who would appreciate it.
            </p>
            <p>
              Our approach is simple: buy directly from named farms, pay above the market price for lots worth buying, roast in small batches to bring out the bean's character rather than hide it, and ship within a week of roasting. No middlemen, no warehouses, no stale beans.
            </p>
            <p>
              The name Kura comes from the Tamil word for "speak" — as in, letting the coffee speak for where it came from. That's what we're trying to do.
            </p>
          </div>
        </div>
      </section>

      {/* Farms */}
      <section className="py-24 px-6 md:px-10 bg-secondary/40">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">The Farms</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
              The people we work with.
            </h2>
          </div>

          <div className="space-y-20">
            {farms.map((farm, i) => (
              <div
                key={farm.name}
                className={`grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center ${
                  i % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}
              >
                <div className={`aspect-[4/3] bg-muted overflow-hidden rounded-sm ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                  <ImageWithFallback
                    src={farm.image}
                    alt={farm.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-medium">
                    {farm.region}
                  </p>
                  <h3 className="text-3xl font-light mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
                    {farm.name}
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-foreground/75">{farm.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">The Team</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
              The people behind the bag.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {team.map((person) => (
              <div key={person.name}>
                <div className="aspect-square bg-secondary mb-6 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500">
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-light mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{person.name}</h3>
                <p className="text-[12px] uppercase tracking-[0.15em] text-accent mb-4 font-medium">{person.role}</p>
                <p className="text-[15px] leading-[1.8] text-foreground/70">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10 bg-foreground">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-serif)', color: '#F5F1EB' }}>
            Ready to taste where it's from?
          </h2>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 hover:bg-accent/90 transition-all font-medium tracking-wide text-[15px] whitespace-nowrap"
          >
            Shop the harvest <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
