import { useReveal } from '@/hooks/useReveal';
import { galleryImages } from '@/data/menu';

export default function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-ink-900 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-14`}>
          <p className="font-script text-saffron-400 text-2xl mb-2">A Feast for the Eyes</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 mb-4">
            Our Gallery
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider w-16" />
            <div className="w-2 h-2 rounded-full bg-saffron-400" />
            <div className="gold-divider w-16" />
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} ${visible ? 'visible' : ''} group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className={`w-full ${i === 0 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48 md:h-64'} object-cover group-hover:scale-110 transition-transform duration-700`}
              />
              <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/40 transition-colors duration-500 flex items-end p-5">
                <p className="text-cream-50 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {img.alt}
                </p>
              </div>
              {/* Decorative border */}
              <div className="absolute inset-2 rounded-xl border border-cream-50/0 group-hover:border-cream-50/20 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
