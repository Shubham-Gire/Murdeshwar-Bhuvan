import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Featured from '@/components/Featured';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Featured />
        <Menu />
        <Gallery />
        <Location />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
