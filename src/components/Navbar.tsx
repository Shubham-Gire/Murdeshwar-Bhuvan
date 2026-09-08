import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/95 backdrop-blur-md py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full border-2 border-saffron-400 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
            <span className="font-serif text-saffron-400 text-xl font-bold">M</span>
          </div>
          <div className="leading-none">
            <p className="font-serif text-xl font-bold tracking-wide text-cream-50">Murdeshwar</p>
            <p className="font-script text-saffron-400 text-sm -mt-0.5">Bhuvan</p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-cream-100/80 hover:text-saffron-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-saffron-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919145555666"
            className="flex items-center gap-2 text-cream-100/80 hover:text-saffron-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+91 91455 55666</span>
          </a>
          <a
            href="#reservation"
            className="px-6 py-2.5 bg-saffron-500 hover:bg-saffron-600 text-cream-50 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-saffron-500/30 hover:scale-105"
          >
            Reserve a Table
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-cream-50 p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 bg-ink-950/98 backdrop-blur-md flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-cream-100/80 hover:text-saffron-400 transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="mt-2 px-6 py-3 bg-saffron-500 text-cream-50 text-center font-semibold rounded-full"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </header>
  );
}
