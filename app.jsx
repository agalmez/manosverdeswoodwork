/* Mount + glue */
const { createRoot } = ReactDOM;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        <span className="mark"></span>
        <span>Manos Verdes</span>
      </a>
      <div className="nav-links">
        <a href="#manifiesto">Manifiesto</a>
        <a href="#galeria">Proyectos</a>
        <a href="#configurador">Configurador</a>
        <a href="#proceso">Proceso</a>
        <a href="#contacto">Contacto</a>
      </div>
      <a href="#brief" className="nav-cta">Solicitar brief</a>
    </nav>
  );
}

function MarqueeBand() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span><span className="serif"><em>Mesas a medida</em></span><span className="dot"></span></span>
        <span><span className="serif"><em>Vanities únicos</em></span><span className="dot"></span></span>
        <span><span className="serif"><em>Mesones comerciales</em></span><span className="dot"></span></span>
        <span><span className="serif"><em>Madera maciza chilena</em></span><span className="dot"></span></span>
        <span><span className="serif"><em>Mesas a medida</em></span><span className="dot"></span></span>
        <span><span className="serif"><em>Vanities únicos</em></span><span className="dot"></span></span>
        <span><span className="serif"><em>Mesones comerciales</em></span><span className="dot"></span></span>
        <span><span className="serif"><em>Madera maciza chilena</em></span><span className="dot"></span></span>
      </div>
    </div>
  );
}

function App() {
  // reveal-on-scroll
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <MarqueeBand />
        <Manifiesto />
        <Detalle />
        <Galeria />
        <LineaTiempo />
        <Configurador />
        <Proceso />
        <Brief />
      </main>
      <Footer />

      {/* Inject all styles */}
      <style dangerouslySetInnerHTML={{ __html: heroStyles + manifiestoStyles + detalleStyles + galeriaStyles + ltStyles + cfgStyles + procStyles }} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
