import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

const team = [
  { name: 'Arjun Singh', role: 'Head Roaster', bio: 'Eight years at specialty roasters in Melbourne and Berlin before coming home to Chennai. Roasts every batch personally.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
  { name: 'Priya Nair', role: 'Co-founder, Sourcing', bio: 'Visits every farm we buy from. Speaks Kannada and Telugu — which matters more than any cupping score when building relationships with farmers.', image: 'https://images.unsplash.com/photo-1494790108755-2616b2e6ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
  { name: 'Karthik Menon', role: 'Co-founder, Operations', bio: 'Handles everything that is not roasting or sourcing — which turns out to be a lot. Also makes an excellent filter coffee.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
];

const farms = [
  { name: 'Venkatesh Estate', region: 'Chikmagalur, Karnataka', detail: 'Third-generation farm at 1,200m. Growing since 1961. No synthetic inputs, shade-grown under native trees.', image: 'https://images.unsplash.com/photo-1629008642899-178df6fc5f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { name: 'Devara Farms', region: 'Coorg, Karnataka', detail: 'A 28-acre family operation in the Western Ghats. Known for natural-processed Chandragiri and a faint cardamom note in their lots.', image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { name: 'Araku Cooperative', region: 'Araku Valley, Andhra Pradesh', detail: 'A tribal-led cooperative of 80+ smallholder farmers at 1,100m. One of India\'s most underrated coffee regions.', image: 'https://images.unsplash.com/photo-1680381615265-6cce996f6e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
];

export function About() {
  return (
    <div>
      {/* Hero — dark */}
      <section style={{ position: 'relative', height: '65vh', minHeight: 480, display: 'flex', alignItems: 'flex-end', paddingTop: 68 }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <ImageWithFallback src="https://images.unsplash.com/photo-1722962883757-4ca3c1c9df56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920" alt="Coffee farm" className="w-full h-full object-cover" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,12,8,0.85) 0%, rgba(20,12,8,0.35) 60%, rgba(20,12,8,0.15) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 32px 64px', width: '100%' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.5)', marginBottom: 16, fontWeight: 500 }}>Our Story</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px,5vw,60px)', color: '#FAF8F5', fontWeight: 400, lineHeight: 1.12, maxWidth: 700, letterSpacing: '-0.02em' }}>
            We started Kura because we couldn't find Indian coffee we were proud to serve.
          </h1>
        </div>
      </section>

      {/* Story text — section-a */}
      <section style={{ background: 'var(--section-a)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          {[
            'India is among the world\'s great coffee-producing countries. Arabica grown in the Western Ghats — in Coorg, Chikmagalur, and Araku — has been winning international cupping competitions for years. And yet, for most of the country, "Indian coffee" still means a dark, bitter commodity blend.',
            'We started Kura in 2022 to change that. Not to import a trend from Portland or Melbourne, but to take something India already has — exceptional coffee, grown with care, in specific places — and put it in front of people who would appreciate it.',
            'We buy directly from named farms, pay above market price for lots worth buying, roast in small batches, and ship within a week of roasting. No middlemen, no warehouses, no stale beans.',
            'The name Kura comes from the Tamil word for "speak" — as in, letting the coffee speak for where it came from.',
          ].map((para, i) => (
            <p key={i} style={{ fontSize: 18, lineHeight: 1.9, color: i === 0 ? 'var(--foreground)' : 'var(--muted-foreground)', marginBottom: 24, fontWeight: i === 0 ? 400 : 300 }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Farms — alternating section-b / section-c */}
      <section style={{ borderTop: '1px solid rgba(28,20,16,0.1)' }}>
        <div style={{ background: 'var(--section-b)', padding: '64px 32px 40px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 16, fontWeight: 500 }}>The Farms</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: 1.18, marginBottom: 0 }}>The people we work with.</h2>
          </div>
        </div>
        {farms.map((farm, i) => (
          <div key={farm.name} style={{ background: i % 2 === 0 ? 'var(--section-b)' : 'var(--section-c)', borderTop: '1px solid rgba(28,20,16,0.08)', padding: '64px 32px' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }} className="grid-1-on-mobile">
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 2 }}>
                <ImageWithFallback src={farm.image} alt={farm.name} className="w-full h-full object-cover" style={{ direction: 'ltr' }} />
              </div>
              <div style={{ direction: 'ltr' }}>
                <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, fontWeight: 500 }}>{farm.region}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, lineHeight: 1.2, marginBottom: 16 }}>{farm.name}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--muted-foreground)' }}>{farm.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Team — section-a */}
      <section style={{ background: 'var(--section-a)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 16, fontWeight: 500 }}>The Team</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: 1.18, marginBottom: 56 }}>The people behind the bag.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 48 }} className="grid-1-on-mobile">
            {team.map(person => (
              <div key={person.name}>
                <div style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)', marginBottom: 20, filter: 'grayscale(1)', transition: 'filter 0.5s' }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(1)')}>
                  <ImageWithFallback src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, marginBottom: 4 }}>{person.name}</h3>
                <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, fontWeight: 500 }}>{person.role}</p>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted-foreground)' }}>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section style={{ background: '#1C1410', borderTop: '3px solid var(--accent)', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#FAF8F5', fontWeight: 400 }}>
            Ready to taste where it is from?
          </h2>
          <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent)', color: '#fff', padding: '13px 28px', fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', textDecoration: 'none' }}>
            Shop the harvest <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
