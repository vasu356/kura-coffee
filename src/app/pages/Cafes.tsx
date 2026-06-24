import { ArrowRight, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

const cafeDetails = [
  { name: 'Bloom Espresso', city: 'Bangalore', address: '12 Indiranagar 100 Feet Road, Bangalore 560038', description: 'A light-filled espresso bar in the heart of Indiranagar. They serve our Chikmagalur Estate as a pour-over alongside a rotating espresso menu.', image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { name: 'Araku House', city: 'Hyderabad', address: '45 Jubilee Hills, Road No. 36, Hyderabad 500033', description: 'A specialty cafe with a focus on Indian single-origins. They champion our Araku Valley Reserve and host monthly cupping sessions.', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { name: 'The Filter', city: 'Chennai', address: '8 Khader Nawaz Khan Road, Nungambakkam, Chennai 600006', description: 'A Chennai institution bridging traditional filter coffee culture with specialty. Our house lot is on permanent rotation here.', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
];

const others = [
  { name: 'Pressed', city: 'Mumbai' }, { name: 'Origin Bar', city: 'Delhi' }, { name: 'Third Wave', city: 'Pune' },
];

export function Cafes() {
  return (
    <div>
      {/* Header — dark */}
      <div style={{ background: '#1C1410', paddingTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 56px' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.4)', marginBottom: 16, fontWeight: 500 }}>Wholesale</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,5vw,64px)', color: '#FAF8F5', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.08, marginBottom: 16 }}>
            Cafes we roast for.
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(250,248,245,0.5)', maxWidth: 480, lineHeight: 1.75 }}>
            Pour-over and espresso bars across India brewing Kura. Want to serve our coffee? We would love to hear from you.
          </p>
        </div>
        <div style={{ height: 3, background: 'var(--accent)' }} />
      </div>

      {/* Cafe list — alternating section-a / section-b */}
      {cafeDetails.map((cafe, i) => (
        <div key={cafe.name} style={{ background: i % 2 === 0 ? 'var(--section-a)' : 'var(--section-b)', borderBottom: '1px solid rgba(28,20,16,0.09)', padding: '72px 32px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }} className="grid-1-on-mobile">
            <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 2, background: 'var(--muted)' }}>
              <ImageWithFallback src={cafe.image} alt={cafe.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ direction: 'ltr' }} />
            </div>
            <div style={{ direction: 'ltr' }}>
              <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={10} /> {cafe.city}
              </p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 30, lineHeight: 1.2, marginBottom: 8 }}>{cafe.name}</h2>
              <p style={{ fontSize: 13, color: 'var(--muted-foreground)', marginBottom: 20, letterSpacing: '0.01em' }}>{cafe.address}</p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--muted-foreground)' }}>{cafe.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Others strip — section-c */}
      <div style={{ background: 'var(--section-c)', borderTop: '1px solid rgba(28,20,16,0.1)', padding: '56px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 32, fontWeight: 500 }}>And also</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 64px' }}>
            {others.map(cafe => (
              <div key={cafe.name}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22 }}>{cafe.name}</p>
                <p style={{ fontSize: 12, color: 'var(--muted-foreground)', letterSpacing: '0.05em' }}>{cafe.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wholesale CTA — dark */}
      <div style={{ background: '#1C1410', borderTop: '3px solid var(--accent)', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.35)', marginBottom: 20, fontWeight: 500 }}>Wholesale</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px,3vw,40px)', color: '#FAF8F5', fontWeight: 400, lineHeight: 1.2, marginBottom: 20 }}>
            Want to serve Kura at your cafe?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(250,248,245,0.5)', lineHeight: 1.8, marginBottom: 36 }}>
            We work with a small number of cafes that share our approach to coffee. We offer wholesale pricing, staff training, and ongoing support.
          </p>
          <a href="mailto:wholesale@kuracoffee.in" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent)', color: '#fff', padding: '13px 28px', fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', textDecoration: 'none' }}>
            Get in touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
