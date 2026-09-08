import { useReveal } from '@/hooks/useReveal';
import { featuredDishes } from '@/data/menu';

export default function Featured() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-24 md:py-32 bg-ink-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <p className="font-script text-saffron-400 text-2xl mb-2">Taste the Difference</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 mb-4">
            Our Signature Dishes
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider w-16" />
            <div className="w-2 h-2 rounded-full bg-saffron-400" />
            <div className="gold-divider w-16" />
          </div>
        </div>

        {/* Featured dishes */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''} group`}
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 shadow-2xl shadow-black/40">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4 px-4 py-1.5 glass-card rounded-full">
                  <span className="font-script text-saffron-400 text-lg">{dish.tagline}</span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-saffron-500 flex items-center justify-center shadow-lg">
                  <span className="font-serif font-bold text-cream-50 text-sm">{dish.price}</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-cream-50 mb-3 group-hover:text-saffron-400 transition-colors">
                {dish.name}
              </h3>
              <p className="text-cream-100/60 leading-relaxed text-sm">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
