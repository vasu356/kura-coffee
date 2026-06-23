import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { subscriptionPlans } from '../data';
import { ImageWithFallback } from '../components/ImageWithFallback';

const faqs = [
  {
    q: 'How does the subscription work?',
    a: 'We send you a different single-origin lot each period. You choose the size and frequency, and we pick the best lot available from the current harvest.',
  },
  {
    q: 'Can I skip or pause a delivery?',
    a: 'Yes — skip any delivery with 5 days notice. Pause for up to 3 months with no penalty.',
  },
  {
    q: 'What if I don\'t like the coffee I receive?',
    a: 'Email us within 7 days and we\'ll send a replacement at no cost.',
  },
  {
    q: 'Do subscribers get access to special lots?',
    a: 'Yes. Some micro-lots are too small to sell publicly — they go to subscribers first, if at all.',
  },
];

export function Subscriptions() {
  const [open, setOpen] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>('regular');

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="relative h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1565273975221-fe8dc98dba50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Coffee subscription"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-10 pb-16 max-w-[1200px] mx-auto w-full">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 mb-4 font-medium">Coffee Subscription</p>
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-serif)' }}>
            Let us pick. A different lot every month.
          </h1>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">Choose a plan</p>
            <h2 className="text-4xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
              Simple pricing. No lock-in.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`border p-8 cursor-pointer transition-all relative ${
                  selectedPlan === plan.id
                    ? 'border-foreground bg-background shadow-sm'
                    : 'border-border/50 hover:border-foreground/40'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 text-[10px] uppercase tracking-[0.2em] bg-accent text-white px-3 py-1">
                    Most Popular
                  </span>
                )}

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-light mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                      {plan.name}
                    </h3>
                    <p className="text-[13px] text-muted-foreground">{plan.size} · {plan.frequency}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                      selectedPlan === plan.id ? 'border-accent bg-accent' : 'border-border/60'
                    }`}
                  >
                    {selectedPlan === plan.id && <Check size={11} className="text-white" strokeWidth={3} />}
                  </div>
                </div>

                <p className="text-[15px] text-foreground/70 mb-6 leading-[1.7]">{plan.description}</p>

                <p className="text-3xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                  ₹{plan.price.toLocaleString('en-IN')}
                  <span className="text-[14px] text-muted-foreground font-normal">/period</span>
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-14 border-y border-border/40 mb-14">
            {[
              { title: 'Free shipping', desc: 'Every delivery, no minimum.' },
              { title: 'Skip anytime', desc: 'Need a break? Pause with one click.' },
              { title: 'Member lots', desc: 'Exclusive access to micro-lots before anyone else.' },
            ].map((b) => (
              <div key={b.title}>
                <h4 className="text-[17px] font-medium mb-2">{b.title}</h4>
                <p className="text-[15px] text-foreground/65 leading-[1.7]">{b.desc}</p>
              </div>
            ))}
          </div>

          <button
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 hover:bg-accent/90 transition-all font-medium tracking-wide text-[16px]"
          >
            Start a subscription <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-10 bg-secondary/40">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl font-light mb-14" style={{ fontFamily: 'var(--font-serif)' }}>
            Frequently asked.
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-border/40 last:border-b">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6 hover:text-accent transition-colors group"
                >
                  <span className="text-[17px] font-medium group-hover:text-accent">{faq.q}</span>
                  <span className="text-xl text-muted-foreground flex-shrink-0 mt-0.5">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                {open === i && (
                  <p className="pb-6 text-[16px] leading-[1.8] text-foreground/70">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
