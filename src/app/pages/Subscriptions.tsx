import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { subscriptionPlans } from '../data';

const faqs = [
  { q: 'How does the subscription work?', a: 'We send a different single-origin lot each period. You choose size and frequency; we pick the best lot from the current harvest.' },
  { q: 'Can I skip or pause a delivery?', a: 'Yes — skip any delivery with 5 days notice. Pause for up to 3 months with no penalty.' },
  { q: "What if I don't like the coffee?", a: "Email us within 7 days and we'll send a replacement at no cost." },
  { q: 'Do subscribers get access to special lots?', a: 'Yes. Some micro-lots are too small to sell publicly — they go to subscribers first, if at all.' },
  { q: 'When am I charged?', a: 'On signup for the first period, then automatically on each renewal date. Cancel anytime.' },
];

export function Subscriptions() {
  const [selected, setSelected] = useState('regular');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero — dark */}
      <section style={{ position: 'relative', height: '55vh', minHeight: 440, display: 'flex', alignItems: 'flex-end', paddingTop: 68 }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <ImageWithFallback src="https://images.unsplash.com/photo-1565273975221-fe8dc98dba50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920" alt="Coffee subscription" className="w-full h-full object-cover" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,12,8,0.9) 0%, rgba(20,12,8,0.4) 60%, rgba(20,12,8,0.15) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 32px 64px', width: '100%' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.5)', marginBottom: 16, fontWeight: 500 }}>Coffee Subscription</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px,5vw,60px)', color: '#FAF8F5', fontWeight: 400, lineHeight: 1.1, maxWidth: 640, letterSpacing: '-0.02em' }}>
            Let us pick. A different lot every month.
          </h1>
        </div>
      </section>
      <div style={{ height: 3, background: 'var(--accent)' }} />

      {/* Plans — section-a */}
      <section style={{ background: 'var(--section-a)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 16, fontWeight: 500 }}>Choose a plan</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: 1.18 }}>Simple pricing. No lock-in.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 56 }} className="grid-1-on-mobile">
            {subscriptionPlans.map(plan => (
              <div key={plan.id} onClick={() => setSelected(plan.id)} style={{
                padding: '32px 28px', cursor: 'pointer', position: 'relative',
                border: `2px solid ${selected === plan.id ? 'var(--accent)' : 'rgba(28,20,16,0.15)'}`,
                background: selected === plan.id ? 'rgba(181,98,62,0.04)' : 'transparent',
                transition: 'all 0.2s',
              }}>
                {plan.popular && (
                  <span style={{ position: 'absolute', top: -12, left: 24, fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', background: 'var(--accent)', color: '#fff', padding: '4px 12px', fontWeight: 600 }}>
                    Most Popular
                  </span>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 400, marginBottom: 4 }}>{plan.name}</h3>
                    <p style={{ fontSize: 12, color: 'var(--muted-foreground)', letterSpacing: '0.04em' }}>{plan.size} · {plan.frequency}</p>
                  </div>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${selected === plan.id ? 'var(--accent)' : 'rgba(28,20,16,0.25)'}`, background: selected === plan.id ? 'var(--accent)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4, transition: 'all 0.2s' }}>
                    {selected === plan.id && <Check size={12} color="#fff" strokeWidth={3} />}
                  </div>
                </div>
                <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: 24 }}>{plan.description}</p>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 30 }}>
                  ₹{plan.price.toLocaleString('en-IN')}
                  <span style={{ fontSize: 14, color: 'var(--muted-foreground)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>/period</span>
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, padding: '40px 0', borderTop: '1px solid rgba(28,20,16,0.1)', borderBottom: '1px solid rgba(28,20,16,0.1)', marginBottom: 40 }} className="grid-1-on-mobile">
            {[
              { title: 'Free shipping', desc: 'Every delivery, no minimum.' },
              { title: 'Skip anytime', desc: 'One click to pause or skip.' },
              { title: 'Member lots', desc: 'Early access to micro-lot releases.' },
            ].map(b => (
              <div key={b.title}>
                <div style={{ width: 32, height: 2, background: 'var(--accent)', marginBottom: 16 }} />
                <h4 style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>{b.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent)', color: '#fff', padding: '14px 32px', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', fontFamily: 'var(--font-sans)', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#9E4E2B')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}>
            Start subscription <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* FAQ — section-b */}
      <section style={{ background: 'var(--section-b)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,3.5vw,40px)', lineHeight: 1.18, marginBottom: 48 }}>Frequently asked.</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(28,20,16,0.12)', ...(i === faqs.length - 1 ? { borderBottom: '1px solid rgba(28,20,16,0.12)' } : {}) }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
                <span style={{ fontSize: 16, fontWeight: 400, color: 'var(--foreground)' }}>{faq.q}</span>
                <span style={{ fontSize: 22, color: 'var(--accent)', flexShrink: 0, lineHeight: 1 }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <p style={{ paddingBottom: 20, fontSize: 15, lineHeight: 1.8, color: 'var(--muted-foreground)' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial — section-c */}
      <section style={{ background: 'var(--section-c)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px,2.5vw,28px)', fontStyle: 'italic', lineHeight: 1.5, color: 'var(--foreground)', marginBottom: 20 }}>
            "I get something different every month. My weekday mornings are now something I actually look forward to."
          </p>
          <p style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted-foreground)', fontWeight: 500 }}>
            Meera R. — Regular subscriber since 2023
          </p>
        </div>
      </section>
    </div>
  );
}
