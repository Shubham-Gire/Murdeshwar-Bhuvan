import { MapPin, Phone, Clock, Facebook, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-ink-950 border-t border-ink-700/50 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full border-2 border-saffron-400 flex items-center justify-center">
                <span className="font-serif text-saffron-400 text-xl font-bold">M</span>
              </div>
              <div className="leading-none">
                <p className="font-serif text-xl font-bold text-cream-50">Murdeshwar</p>
                <p className="font-script text-saffron-400 text-sm -mt-0.5">Bhuvan</p>
              </div>
            </div>
            <p className="text-cream-100/50 text-sm leading-relaxed mb-5">
              Authentic South Indian cuisine in the heart of Karvenagar, Pune.
              Serving tradition on a plate since 1998.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ink-800 hover:bg-saffron-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-cream-100/70" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ink-800 hover:bg-saffron-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-cream-100/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-cream-50 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Menu', href: '#menu' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Visit Us', href: '#location' },
                { label: 'Reservations', href: '#reservation' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-100/50 hover:text-saffron-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-cream-50 mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron-400 flex-shrink-0 mt-0.5" />
                <span className="text-cream-100/50 text-sm leading-relaxed">
                  Vikas Mitra Mandal Chowk, Karvenagar, Pune, Maharashtra 411052
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <a href="tel:+919145555666" className="text-cream-100/50 text-sm hover:text-saffron-400 transition-colors">
                  +91 91455 55666
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-saffron-400 flex-shrink-0 mt-0.5" />
                <span className="text-cream-100/50 text-sm">
                  Mon–Thu: 8 AM – 10:30 PM<br />
                  Fri–Sat: 7:30 AM – 11 PM<br />
                  Sun: 7:30 AM – 10:30 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-bold text-cream-50 mb-5">Stay Updated</h4>
            <p className="text-cream-100/50 text-sm leading-relaxed mb-4">
              Subscribe to receive fresh deals, seasonal specials & festival offers.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-ink-800/50 border border-ink-600/50 rounded-full pl-5 pr-14 py-3 text-cream-50 placeholder-cream-100/30 text-sm focus:outline-none focus:border-saffron-400/50 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-saffron-500 hover:bg-saffron-600 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4 text-cream-50" />
              </button>
            </form>
            {subscribed && (
              <p className="text-leaf-400 text-sm mt-3 animate-fade-in">Thank you for subscribing!</p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-100/40 text-sm">
            © {new Date().getFullYear()} Murdeshwar Bhuvan. All rights reserved.
          </p>
          <p className="text-cream-100/40 text-sm font-script text-saffron-400/60">
            Made with love in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
