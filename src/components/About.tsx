import { Leaf, Heart, Award } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { aboutImage, interiorImage } from '@/data/menu';

const stats = [
  { icon: Award, value: '25+', label: 'Years of Tradition' },
  { icon: Heart, value: '4.8', label: 'Google Rating' },
  { icon: Leaf, value: '100%', label: 'Pure Vegetarian' },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-ink-900 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,#cda475_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className={`reveal ${visible ? 'visible' : ''} relative`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={aboutImage}
                alt="Cozy restaurant interior"
                referrerPolicy="no-referrer"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
            </div>

            {/* Floating second image */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-ink-900 hidden sm:block">
              <img
                src={interiorImage}
                alt="Restaurant ambiance"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <div className="absolute -top-6 -left-6 glass-card rounded-2xl p-5 text-center">
              <p className="font-script text-saffron-400 text-2xl leading-none">Since</p>
              <p className="font-serif text-4xl font-bold text-cream-50">1998</p>
            </div>
          </div>

          {/* Text content */}
          <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
            <p className="font-script text-saffron-400 text-2xl mb-3">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 mb-6 leading-tight">
              A Taste of South India<br />in the Heart of Pune
            </h2>
            <div className="gold-divider w-24 mb-6" />
            <p className="text-cream-100/70 leading-relaxed mb-5 text-lg">
              For over two decades, Murdeshwar Bhuvan has been a beloved fixture in Karvenagar,
              serving authentic South Indian cuisine made from recipes passed down through generations.
            </p>
            <p className="text-cream-100/60 leading-relaxed mb-8">
              Every morning, our kitchen comes alive with the aroma of freshly ground batter, the
              sizzle of dosas on cast-iron tawas, and the gentle steam of idlis rising in their molds.
              We believe good food begins with good ingredients — which is why we stone-grind our
              batters daily, source our spices from the gardens of Karnataka, and never take shortcuts.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-saffron-500/10 border border-saffron-500/20 mb-3">
                    <stat.icon className="w-6 h-6 text-saffron-400" />
                  </div>
                  <p className="font-serif text-3xl font-bold text-cream-50">{stat.value}</p>
                  <p className="text-sm text-cream-100/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
