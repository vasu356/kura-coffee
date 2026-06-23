import { ArrowRight, MapPin } from 'lucide-react';
import { cafes } from '../data';
import { ImageWithFallback } from '../components/ImageWithFallback';

const cafeDetails = [
  {
    name: 'Bloom Espresso',
    city: 'Bangalore',
    address: '12 Indiranagar 100 Feet Road, Bangalore 560038',
    description: 'A light-filled espresso bar in the heart of Indiranagar. They serve our Chikmagalur Estate as a pour-over alongside a rotating espresso menu.',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  },
  {
    name: 'Araku House',
    city: 'Hyderabad',
    address: '45 Jubilee Hills, Road No. 36, Hyderabad 500033',
    description: 'A specialty café with a focus on Indian single-origins. They champion our Araku Valley Reserve and host monthly cupping sessions.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  },
  {
    name: 'The Filter',
    city: 'Chennai',
    address: '8 Khader Nawaz Khan Road, Nungambakkam, Chennai 600006',
    description: 'A Chennai institution that bridges traditional filter coffee culture with specialty. Our house lot is on permanent rotation here.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  },
];

export function Cafes() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <div className="px-6 md:px-10 py-16 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-muted-foreground font-medium">
            Wholesale
          </p>
          <h1 className="text-5xl md:text-6xl font-light mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
            Cafes we roast for.
          </h1>
          <p className="text-[18px] text-foreground/70 leading-[1.7] max-w-xl">
            Pour-overs and espresso bars across India brewing Kura. If you'd like to serve our coffee, we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Featured cafes */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-20">
            {cafeDetails.map((cafe, i) => (
              <div
                key={cafe.name}
                className={`grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center ${
                  i % 2 === 1 ? 'md:flex md:flex-row-reverse' : ''
                }`}
              >
                <div className="aspect-[4/3] bg-muted overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent mb-3 font-medium flex items-center gap-1.5">
                    <MapPin size={11} /> {cafe.city}
                  </p>
                  <h2 className="text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                    {cafe.name}
                  </h2>
                  <p className="text-[14px] text-muted-foreground mb-5">{cafe.address}</p>
                  <p className="text-[17px] leading-[1.8] text-foreground/75">{cafe.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* All cafes strip */}
          <div className="mt-24 pt-16 border-t border-border/40">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-10 text-muted-foreground font-medium">
              And also
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-5">
              {cafes.slice(3).map((cafe) => (
                <div key={cafe.name}>
                  <p className="text-xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>{cafe.name}</p>
                  <p className="text-[13px] text-muted-foreground">{cafe.city}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="py-24 px-6 md:px-10 bg-secondary/40">
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-4xl font-light mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
            Want to serve Kura at your café?
          </h2>
          <p className="text-[17px] leading-[1.8] text-foreground/70 mb-10">
            We work with a small number of cafés that share our approach to coffee. We offer wholesale pricing, staff training, and ongoing support. If that sounds like you, we'd love to talk.
          </p>
          <a
            href="mailto:wholesale@kuracoffee.in"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 hover:bg-accent/90 transition-all font-medium tracking-wide text-[15px]"
          >
            Get in touch <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
