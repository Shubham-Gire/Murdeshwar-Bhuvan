import { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle2, Send } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Reservation() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
    }, 4000);
  };

  const inputClass =
    'w-full bg-ink-900/50 border border-ink-600/50 rounded-xl px-4 py-3.5 text-cream-50 placeholder-cream-100/30 focus:outline-none focus:border-saffron-400/60 focus:ring-1 focus:ring-saffron-400/30 transition-all';

  return (
    <section id="reservation" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/9619560/pexels-photo-9619560.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-sm" />
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto px-6">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-12`}>
          <p className="font-script text-saffron-400 text-2xl mb-2">Book Your Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 mb-4">
            Reserve a Table
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-divider w-16" />
            <div className="w-2 h-2 rounded-full bg-saffron-400" />
            <div className="gold-divider w-16" />
          </div>
          <p className="text-cream-100/60 max-w-xl mx-auto">
            Whether it's a family breakfast, a quick lunch, or a cozy dinner — we'll have your table ready.
            Walk-ins are always welcome too!
          </p>
        </div>

        {submitted ? (
          <div className={`reveal reveal-delay-1 ${visible ? 'visible' : ''} glass-card rounded-2xl p-12 text-center`}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-leaf-500/15 mb-6">
              <CheckCircle2 className="w-10 h-10 text-leaf-400" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-cream-50 mb-3">Reservation Received!</h3>
            <p className="text-cream-100/60 text-lg">
              Thank you, {form.name || 'friend'}! We'll call you shortly to confirm your table.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`reveal reveal-delay-1 ${visible ? 'visible' : ''} glass-card rounded-2xl p-8 md:p-10 space-y-5`}
          >
            <div className="grid md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="relative">
                <label className="block text-sm text-cream-100/60 mb-2 font-medium">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-100/30" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={`${inputClass} pl-12`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-sm text-cream-100/60 mb-2 font-medium">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-100/30" />
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 ..."
                    className={`${inputClass} pl-12`}
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-cream-100/60 mb-2 font-medium">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-100/30" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={`${inputClass} pl-12`}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* Date */}
              <div>
                <label className="block text-sm text-cream-100/60 mb-2 font-medium">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-100/30 z-10" />
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={`${inputClass} pl-12`}
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm text-cream-100/60 mb-2 font-medium">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-100/30 z-10" />
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className={`${inputClass} pl-12`}
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm text-cream-100/60 mb-2 font-medium">Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-100/30 z-10" />
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className={`${inputClass} pl-12 appearance-none cursor-pointer`}
                  >
                    {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                      <option key={n} value={n} className="bg-ink-900">
                        {n} {n === '1' ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-saffron-500 hover:bg-saffron-600 text-cream-50 font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-saffron-500/30 hover:scale-[1.02]"
            >
              <Send className="w-5 h-5" />
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
