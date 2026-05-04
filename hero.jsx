/* Hero cinematográfico con mosaico */
const { useState, useEffect, useRef } = React;

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMove = (e) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('mousemove', onMove); };
  }, []);

  const parallax = (depth) => `translate3d(${(mouse.x - 0.5) * depth}px, ${(mouse.y - 0.5) * depth - scrollY * (depth / 80)}px, 0)`;

  return (
    <section className="hero">
      {/* Background mosaic */}
      <div className="hero-mosaic" aria-hidden>
        <div className="hm-cell hm-1" style={{ transform: parallax(20) }}>
          <img src="img/01-mesa-ovalada-negra.png" alt="" />
        </div>
        <div className="hm-cell hm-2" style={{ transform: parallax(34) }}>
          <img src="img/06-vanity-fluted.png" alt="" />
        </div>
        <div className="hm-cell hm-3" style={{ transform: parallax(14) }}>
          <img src="img/03-mesa-centro-bloque.png" alt="" />
        </div>
        <div className="hm-cell hm-4" style={{ transform: parallax(40) }}>
          <img src="img/07-sideboard-roble.png" alt="" />
        </div>
        <div className="hm-cell hm-5" style={{ transform: parallax(24) }}>
          <img src="img/10-mesa-comedor-natural.png" alt="" />
        </div>
      </div>

      {/* Foreground content */}
      <div className="hero-content">
        <div className="hero-meta">
          <div className="mono">Taller de muebles a medida</div>
          <div className="mono">Chile · Est. 2018</div>
        </div>

        <h1 className="hero-title serif">
          <span className="line line-1">Madera que</span>
          <span className="line line-2"><em>habita</em> el</span>
          <span className="line line-3">espacio.</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-lead">
            Diseñamos y fabricamos piezas únicas — mesas, vanities, mesones y muebles de autor — para casas, restaurantes y proyectos arquitectónicos. Cada encargo nace de un boceto y termina en tu lugar.
          </p>
          <div className="hero-actions">
            <a href="#configurador" className="btn btn-solid">
              Diseña tu pieza <span className="arrow">→</span>
            </a>
            <a href="#galeria" className="btn btn-ghost">
              Ver proyectos <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="mono">Scroll</div>
          <div className="scroll-line"><div className="scroll-dot" /></div>
        </div>
      </div>

      {/* Side index */}
      <div className="hero-sideindex">
        <span>01 / Madera</span>
        <span>02 / Diseño</span>
        <span>03 / A medida</span>
      </div>
    </section>
  );
}

const heroStyles = `
.hero {
  position: relative;
  min-height: 100vh;
  background: var(--ink);
  color: var(--bone);
  overflow: hidden;
  padding: 120px var(--gutter) 60px;
}
.hero-mosaic {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hm-cell {
  position: absolute;
  overflow: hidden;
  filter: brightness(0.85) saturate(0.95);
  will-change: transform;
}
.hm-cell img {
  width: 100%; height: 100%; object-fit: cover;
}
.hm-1 { top: 8%;  right: -4%; width: 38%;  height: 52%; }
.hm-2 { top: 56%; left: -2%;  width: 22%;  height: 32%; }
.hm-3 { top: 12%; left: 18%;  width: 16%;  height: 22%; opacity: 0.95; }
.hm-4 { bottom: 4%; right: 8%; width: 24%; height: 28%; }
.hm-5 { top: 38%;  left: 38%; width: 18%;  height: 22%; opacity: 0.7; }

.hero-mosaic::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 50%, transparent 0%, rgba(26, 24, 21, 0.35) 70%),
    linear-gradient(180deg, rgba(26, 24, 21, 0.15) 0%, rgba(26, 24, 21, 0.7) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: var(--max);
  margin: 0 auto;
  height: calc(100vh - 180px);
  min-height: 620px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 40px;
}

.hero-meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(245, 242, 236, 0.7);
  padding-top: 24px;
}

.hero-title {
  align-self: center;
  font-size: clamp(64px, 13vw, 220px);
  line-height: 0.86;
  letter-spacing: -0.04em;
  font-weight: 400;
}
.hero-title .line {
  display: block;
  overflow: hidden;
}
.hero-title em {
  font-style: italic;
  color: var(--wood);
  position: relative;
  text-shadow: 0 2px 24px rgba(0,0,0,0.4);
}
.hero-title .line { text-shadow: 0 2px 30px rgba(0,0,0,0.5); }
.hero-title .line-2 { padding-left: clamp(40px, 12vw, 220px); }
.hero-title .line-3 { padding-left: clamp(80px, 24vw, 440px); }

.hero-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: end;
  border-top: 1px solid rgba(245, 242, 236, 0.18);
  padding-top: 32px;
}
.hero-lead {
  font-size: 15px;
  line-height: 1.6;
  max-width: 460px;
  color: rgba(245, 242, 236, 0.82);
}
.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.hero-actions .btn-solid { background: var(--bone); color: var(--ink); border-color: var(--bone); }
.hero-actions .btn-solid:hover { background: var(--wood); color: var(--ink); border-color: var(--wood); }
.hero-actions .btn-ghost { color: var(--bone); }
.hero-actions .btn-ghost:hover { background: var(--bone); color: var(--ink); }

.hero-scroll {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 242, 236, 0.6);
}
.scroll-line {
  width: 1px; height: 36px;
  background: rgba(245, 242, 236, 0.25);
  position: relative;
  overflow: hidden;
}
.scroll-dot {
  position: absolute; top: 0; left: 0;
  width: 1px; height: 12px;
  background: var(--bone);
  animation: scrollDot 1.8s ease-in-out infinite;
}
@keyframes scrollDot {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(300%); }
}

.hero-sideindex {
  position: absolute;
  right: var(--gutter);
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  transform-origin: right center;
  display: flex;
  gap: 32px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(245, 242, 236, 0.4);
  z-index: 3;
}

@media (max-width: 820px) {
  .hero-bottom { grid-template-columns: 1fr; gap: 24px; }
  .hero-actions { justify-content: flex-start; }
  .hero-sideindex { display: none; }
  .hero-title .line-2 { padding-left: 24px; }
  .hero-title .line-3 { padding-left: 60px; }
}
`;
