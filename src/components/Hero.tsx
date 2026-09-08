import { Star, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { heroImage } from '@/data/menu';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Masala dosa with chutneys and sambar"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-saffron-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-leaf-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-saffron-400 text-saffron-400" />
            ))}
          </div>
          <span className="text-sm text-cream-100/90 font-medium">4.8 · 317 Google Reviews</span>
        </div>

        <p className="font-script text-saffron-400 text-3xl md:text-4xl mb-3 animate-fade-up">
          Welcome to
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream-50 text-shadow-lg mb-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Murdeshwar Bhuvan
        </h1>

        <p className="text-lg md:text-xl text-cream-100/80 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Authentic South Indian flavors served with love in the heart of Karvenagar, Pune.
          From crispy dosas to cloud-soft idlis — taste the tradition in every bite.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <a
            href="#menu"
            className="group flex items-center gap-3 px-8 py-4 bg-saffron-500 hover:bg-saffron-600 text-cream-50 font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-saffron-500/30 hover:scale-105"
          >
            <UtensilsCrossed className="w-5 h-5" />
            Explore Our Menu
          </a>
          <a
            href="#reservation"
            className="px-8 py-4 border-2 border-cream-100/30 hover:border-saffron-400 text-cream-50 font-semibold rounded-full transition-all duration-300 hover:bg-cream-50/5"
          >
            Book a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-100/50 hover:text-saffron-400 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
