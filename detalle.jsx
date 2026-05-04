/* Sección "Detalle obsesivo" — diptico de imagen + texto */
function Detalle() {
  return (
    <section className="section detalle">
      <div className="detalle-marquee">
        <div className="marquee">
          <div className="marquee-track">
            <span><span className="serif"><em>Roble</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Raulí</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Lenga</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Mañío</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Nogal</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Ennegrecido</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Roble</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Raulí</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Lenga</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Mañío</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Nogal</em></span><span className="dot"></span></span>
            <span><span className="serif"><em>Ennegrecido</em></span><span className="dot"></span></span>
          </div>
        </div>
      </div>

      <div className="shell">
        <div className="det-grid">
          <div className="det-img det-1">
            <img src="img/06-vanity-fluted.png" alt="Detalle ranurado" />
            <div className="det-tag mono">Detalle ranurado · 3mm</div>
          </div>
          <div className="det-text">
            <div className="section-num"><span>02b — Detalle obsesivo</span></div>
            <h2 className="display-m serif">Lo que <em>no se ve</em> también está pensado.</h2>
            <p>
              Cada ranura, cada ensamble, cada veta. Trabajamos con tolerancias menores a un milímetro porque la diferencia entre un buen mueble y uno excelente está en lo que descubres a los meses, cuando pasas la mano y todavía está perfecto.
            </p>
            <div className="det-list">
              <div className="det-row"><span className="mono">01</span><span>Ensambles tradicionales — caja y espiga, cola de milano</span></div>
              <div className="det-row"><span className="mono">02</span><span>Aceites naturales — sin barnices plásticos</span></div>
              <div className="det-row"><span className="mono">03</span><span>Madera secada al aire por 18 meses mínimo</span></div>
              <div className="det-row"><span className="mono">04</span><span>Fierros y herrajes hechos por herrero local</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const detalleStyles = `
.detalle { background: var(--bone); border-top: 1px solid var(--line); padding-top: 0; }
.detalle-marquee { margin-bottom: clamp(60px, 10vh, 120px); }
.detalle .marquee { border-top: none; }
.detalle .marquee-track em { color: var(--green); font-style: italic; }

.det-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding-bottom: 60px;
}
.det-img {
  position: relative;
  aspect-ratio: 4/5;
  overflow: hidden;
  background: var(--ink);
}
.det-img img { width: 100%; height: 100%; object-fit: cover; }
.det-tag {
  position: absolute;
  bottom: 16px; left: 16px;
  background: var(--bone);
  padding: 8px 12px;
  font-size: 10px;
  letter-spacing: 0.16em;
}
.det-text h2 { margin: 16px 0 24px; }
.det-text h2 em { font-style: italic; color: var(--green); }
.det-text p { font-size: 16px; line-height: 1.65; color: var(--ink-soft); max-width: 480px; }
.det-list {
  margin-top: 40px;
  display: flex; flex-direction: column;
  border-top: 1px solid var(--line);
}
.det-row {
  display: grid;
  grid-template-columns: 40px 1fr;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
  align-items: baseline;
  gap: 16px;
  font-size: 14px;
}
.det-row .mono { color: var(--green); }

@media (max-width: 820px) {
  .det-grid { grid-template-columns: 1fr; gap: 40px; }
}
`;
