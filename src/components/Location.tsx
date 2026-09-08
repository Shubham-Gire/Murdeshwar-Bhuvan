import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const hours = [
  { day: 'Monday', time: '8:00 AM – 10:30 PM' },
  { day: 'Tuesday', time: '8:00 AM – 10:30 PM' },
  { day: 'Wednesday', time: '8:00 AM – 10:30 PM' },
  { day: 'Thursday', time: '8:00 AM – 10:30 PM' },
  { day: 'Friday', time: '8:00 AM – 11:00 PM' },
  { day: 'Saturday', time: '7:30 AM – 11:00 PM' },
  { day: 'Sunday', time: '7:30 AM – 10:30 PM' },
];

export default function Location() {
  const { ref, visible } = useReveal();
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section id="location" className="relative py-24 md:py-32 bg-ink-950 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <p className="font-script text-saffron-400 text-2xl mb-2">Come Visit Us</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 mb-4">
            Find Us in Karvenagar
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider w-16" />
            <div className="w-2 h-2 rounded-full bg-saffron-400" />
            <div className="gold-divider w-16" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className={`reveal ${visible ? 'visible' : ''} relative rounded-2xl overflow-hidden shadow-2xl h-[450px] lg:h-full min-h-[400px]`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.8161057!3d18.4891071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfdd063e6e61%3A0xb3128b621bc3c7bd!2sFRQ8%2BJCG%20Hingne%20Budrukh%2C%20Karvenagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.9) contrast(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Murdeshwar Bhuvan location map"
            />
          </div>

          {/* Info cards */}
          <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''} flex flex-col gap-6`}>
            {/* Address */}
            <div className="glass-card rounded-2xl p-8 hover:border-saffron-400/40 transition-colors">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-saffron-500/15 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-saffron-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-cream-50 mb-2">Our Address</h3>
                  <p className="text-cream-100/60 leading-relaxed">
                    Vikas Mitra Mandal Chowk, Karvenagar<br />
                    Hingne Budrukh, Pune<br />
                    Maharashtra 411052, India
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=18.4891071,73.8161057"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-saffron-400 hover:text-saffron-300 text-sm font-medium transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card rounded-2xl p-8 hover:border-saffron-400/40 transition-colors">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-saffron-500/15 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-saffron-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-cream-50 mb-4">Opening Hours</h3>
                  <ul className="space-y-2">
                    {hours.map((h) => (
                      <li
                        key={h.day}
                        className={`flex justify-between text-sm py-1.5 px-3 rounded-lg transition-colors ${
                          h.day === today
                            ? 'bg-saffron-500/10 text-saffron-300 font-semibold'
                            : 'text-cream-100/60'
                        }`}
                      >
                        <span>{h.day}{h.day === today && ' · Today'}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-2xl p-8 hover:border-saffron-400/40 transition-colors">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-saffron-500/15 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-saffron-400" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-cream-50 mb-2">Contact Us</h3>
                  <a href="tel:+919145555666" className="text-cream-100/60 hover:text-saffron-400 transition-colors text-lg">
                    +91 91455 55666
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
