import { useState } from 'react';
import { Flame, Star, Sparkles, UtensilsCrossed } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { menuData } from '@/data/menu';

const tagStyles: Record<string, { bg: string; text: string; border: string; icon: typeof Flame }> = {
  signature: { bg: 'bg-saffron-500/10', text: 'text-saffron-700', border: 'border-saffron-400/40', icon: Star },
  spicy: { bg: 'bg-chili-500/10', text: 'text-chili-600', border: 'border-chili-400/40', icon: Flame },
  new: { bg: 'bg-leaf-500/10', text: 'text-leaf-700', border: 'border-leaf-400/40', icon: Sparkles },
  popular: { bg: 'bg-cream-400/20', text: 'text-ink-700', border: 'border-cream-400/50', icon: Star },
};

export default function Menu() {
  const { ref, visible } = useReveal();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="relative py-24 md:py-32 parchment-bg text-ink-900 overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-saffron-400/25 m-8 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-saffron-400/25 m-8 rounded-br-2xl" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h60v60H0z\' fill=\'none\'/%3E%3Cpath d=\'M30 0v60M0 30h60\' stroke=\'%238c7a5e\' stroke-width=\'0.5\'/%3E%3C/svg%3E")',
      }} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-14`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-saffron-500/8 border border-saffron-400/20 mb-5">
            <UtensilsCrossed className="w-4 h-4 text-saffron-600" />
            <span className="text-sm font-semibold text-saffron-700 tracking-wide uppercase">Our Menu</span>
          </div>
          <p className="font-script text-saffron-600 text-2xl mb-2">Crafted with</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            Tradition &amp; Care
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-saffron-400 to-transparent" />
            <div className="w-2.5 h-2.5 rounded-full bg-saffron-500" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-saffron-400 to-transparent" />
          </div>
          <p className="text-ink-500 max-w-2xl mx-auto leading-relaxed">
            Every dish is prepared fresh to order using traditional methods and the finest ingredients.
            Stone-ground batters, hand-pounded spices, and recipes perfected over generations.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`reveal reveal-delay-1 ${visible ? 'visible' : ''} flex flex-wrap justify-center gap-3 mb-12`}>
          {menuData.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`px-7 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-400 ${
                activeCategory === i
                  ? 'bg-ink-900 text-cream-50 shadow-xl shadow-ink-900/20 scale-105'
                  : 'bg-white/60 text-ink-500 hover:bg-white hover:text-ink-700 border border-ink-200/50'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl font-bold text-ink-900 mb-2">
              {menuData[activeCategory].title}
            </h3>
            <p className="text-ink-400 italic">{menuData[activeCategory].subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-2">
            {menuData[activeCategory].items.map((item, i) => {
              const tag = item.tag ? tagStyles[item.tag] : null;
              const TagIcon = tag?.icon;
              return (
                <div
                  key={item.name}
                  className="group flex items-start gap-4 py-5 px-4 -mx-4 rounded-xl hover:bg-white/40 transition-all duration-300"
                  style={{ animation: `fadeUp 0.5s ease-out ${i * 0.06}s both` }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <h4 className="font-serif text-lg font-semibold text-ink-800 group-hover:text-saffron-700 transition-colors duration-300">
                        {item.name}
                      </h4>
                      {tag && TagIcon && (
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${tag.bg} ${tag.text} ${tag.border}`}>
                          <TagIcon className="w-2.5 h-2.5" />
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>
                  </div>
                  {/* Dotted leader */}
                  <div className="hidden sm:flex flex-1 mt-3 border-b border-dotted border-ink-300/50" />
                  <div className="flex items-end pb-1">
                    <span className="font-serif text-lg font-bold text-saffron-600 group-hover:text-saffron-700 whitespace-nowrap transition-colors">
                      {item.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink-900 hover:bg-ink-800 text-cream-50 font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-ink-900/30 hover:scale-105"
          >
            Reserve Your Table
          </a>
        </div>
      </div>
    </section>
  );
}
