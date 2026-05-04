/* Línea de tiempo del portfolio — usuario navega por meses */
function LineaTiempo() {
  const [activo, setActivo] = useState(4);

  const proyectos = [
    { mes: 'Mar', año: '2023', img: 'img/10-mesa-comedor-natural.png', titulo: 'Mesa Lenga', cliente: 'Casa Reñaca', tipo: 'Mesa de comedor', madera: 'Lenga clara · 200 × 90 cm', nota: 'Primera pieza con lenga seleccionada del sur.' },
    { mes: 'Jul', año: '2023', img: 'img/03-mesa-centro-bloque.png', titulo: 'Bloque Macizo', cliente: 'Depto. Vitacura', tipo: 'Mesa de centro', madera: 'Mañío en cubos · 120 × 70 cm', nota: 'Encargo que definió la firma del bloque.' },
    { mes: 'Nov', año: '2023', img: 'img/05-mesa-cristal-base-madera.png', titulo: 'Mesa Cruz', cliente: 'Casa Lo Barnechea', tipo: 'Mesa auxiliar', madera: 'Roble + cristal · 90 × 90 cm', nota: 'Tablero de cristal sobre cruz de roble macizo.' },
    { mes: 'Feb', año: '2024', img: 'img/04-restaurante-mesones.png', titulo: 'Sora Restaurant', cliente: 'Sora · Providencia', tipo: 'Proyecto comercial', madera: 'Raulí natural · 12 piezas', nota: 'Doce mesas con bases torneadas. 6 semanas de taller.' },
    { mes: 'May', año: '2024', img: 'img/06-vanity-fluted.png', titulo: 'Vanity Línea', cliente: 'Casa Chicureo', tipo: 'Mueble de baño', madera: 'Roble americano · 180 × 55 cm', nota: 'Estriado vertical con tolerancia de 0.5mm entre tablones.' },
    { mes: 'Ago', año: '2024', img: 'img/02-mesa-larga-restaurante.png', titulo: 'Mesón Foresta', cliente: 'Foresta Bistró', tipo: 'Mesón comercial', madera: 'Raulí + nogal · 420 × 80 cm', nota: 'Mesón de 4.20 m sin junta visible al centro.' },
    { mes: 'Oct', año: '2024', img: 'img/08-mesa-comedor-fluted-base.png', titulo: 'Mesa Estriada', cliente: 'Casa La Dehesa', tipo: 'Mesa de comedor', madera: 'Raulí + ébano · 240 × 100 cm', nota: 'Base estriada con incrustación negra.' },
    { mes: 'Ene', año: '2025', img: 'img/01-mesa-ovalada-negra.png', titulo: 'Mesa Bruna', cliente: 'Casa Las Condes', tipo: 'Mesa de comedor', madera: 'Roble ennegrecido · 280 × 110 cm', nota: 'Tablero ovalado con dos bases columnares fluted.' },
    { mes: 'Abr', año: '2025', img: 'img/07-sideboard-roble.png', titulo: 'Sideboard Cordillera', cliente: 'Casa Vitacura', tipo: 'Aparador', madera: 'Roble macizo · 320 × 90 cm', nota: 'Pieza más grande del año. Tres meses de fabricación.' },
    { mes: 'Jul', año: '2025', img: 'img/09-mesa-centro-negra-detalle.png', titulo: 'Centro Sombra', cliente: 'Loft Bellavista', tipo: 'Mesa de centro', madera: 'Roble ennegrecido · 140 × 80 cm', nota: 'Acabado ennegrecido con tinte natural.' },
    { mes: 'Oct', año: '2025', img: 'img/06-vanity-fluted.png', titulo: 'Vanity Doble', cliente: 'Casa Cachagua', tipo: 'Mueble de baño', madera: 'Roble americano · 240 × 55 cm', nota: 'Versión doble lavamanos del Vanity Línea.' },
    { mes: 'Feb', año: '2026', img: 'img/01-mesa-ovalada-negra.png', titulo: 'Mesa Aurora', cliente: 'Casa Zapallar', tipo: 'Mesa de comedor', madera: 'Roble ennegrecido · 320 × 120 cm', nota: 'Encargo más reciente. Variante de Bruna ampliada.' },
  ];

  const p = proyectos[activo];

  return (
    <section className="section linea-tiempo" id="archivo">
      <div className="shell">
        <div className="lt-head">
          <div>
            <div className="section-num"><span>03b — Archivo cronológico</span></div>
            <h2 className="display-m serif">Tres años, <em>un proyecto a la vez.</em></h2>
          </div>
          <p className="lt-lead">
            Cada mes una historia distinta. Click en cualquier mes para ver qué estábamos construyendo.
          </p>
        </div>

        {/* Vista del proyecto seleccionado */}
        <div className="lt-viewer">
          <div className="lt-img" key={activo}>
            <img src={p.img} alt={p.titulo} />
            <div className="lt-fecha mono">{p.mes} · {p.año}</div>
          </div>
          <div className="lt-info" key={`info-${activo}`}>
            <div className="mono lt-cliente">{p.cliente}</div>
            <h3 className="display-s serif">{p.titulo}</h3>
            <div className="lt-meta">
              <div className="lt-row">
                <span className="mono">Tipo</span>
                <span>{p.tipo}</span>
              </div>
              <div className="lt-row">
                <span className="mono">Madera</span>
                <span>{p.madera}</span>
              </div>
            </div>
            <p className="lt-nota">{p.nota}</p>
            <div className="lt-counter mono">
              {String(activo + 1).padStart(2, '0')} / {String(proyectos.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Eje cronológico */}
        <div className="lt-eje-wrap">
          <div className="lt-axis-line" />
          <div className="lt-eje">
            {proyectos.map((proy, i) => {
              const isFirstOfYear = i === 0 || proyectos[i-1].año !== proy.año;
              return (
                <button
                  key={i}
                  className={`lt-tick ${activo === i ? 'active' : ''}`}
                  onClick={() => setActivo(i)}
                  aria-label={`${proy.mes} ${proy.año} — ${proy.titulo}`}
                >
                  {isFirstOfYear && (
                    <span className="lt-año serif">{proy.año}</span>
                  )}
                  <span className="lt-tick-bar" />
                  <span className="lt-mes mono">{proy.mes}</span>
                  <span className="lt-tick-thumb">
                    <img src={proy.img} alt="" />
                  </span>
                </button>
              );
            })}
          </div>
          <div className="lt-controls">
            <button className="lt-nav" onClick={() => setActivo(Math.max(0, activo - 1))} disabled={activo === 0}>
              ← Anterior
            </button>
            <button className="lt-nav" onClick={() => setActivo(Math.min(proyectos.length - 1, activo + 1))} disabled={activo === proyectos.length - 1}>
              Siguiente →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ltStyles = `
.linea-tiempo { background: var(--ink); color: var(--bone); border-top: 1px solid var(--ink); }
.lt-head {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 60px;
}
.lt-head .section-num { color: rgba(245, 242, 236, 0.5); }
.lt-head .section-num::before { background: var(--bone); }
.lt-head h2 em { font-style: italic; color: var(--wood); }
.lt-lead { font-size: 15px; line-height: 1.55; color: rgba(245, 242, 236, 0.7); max-width: 360px; }

.lt-viewer {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 0;
  margin-bottom: 80px;
  border: 1px solid rgba(245, 242, 236, 0.14);
}
.lt-img {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--ink-soft);
  animation: ltFade 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.lt-img img { width: 100%; height: 100%; object-fit: cover; }
.lt-fecha {
  position: absolute;
  top: 18px; left: 18px;
  background: var(--bone);
  color: var(--ink);
  padding: 8px 14px;
  font-size: 11px;
  letter-spacing: 0.18em;
}
.lt-info {
  padding: 48px 44px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  background: var(--ink-soft);
  animation: ltFade 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) 0.05s both;
}
.lt-cliente { color: rgba(245, 242, 236, 0.5); }
.lt-info h3 { font-size: 44px; }
.lt-meta {
  display: flex; flex-direction: column;
  border-top: 1px solid rgba(245, 242, 236, 0.14);
  border-bottom: 1px solid rgba(245, 242, 236, 0.14);
  margin-top: 8px;
}
.lt-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(245, 242, 236, 0.08);
  font-size: 14px;
  align-items: baseline;
}
.lt-row:last-child { border-bottom: none; }
.lt-row .mono { color: rgba(245, 242, 236, 0.5); }
.lt-nota {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(245, 242, 236, 0.78);
  font-style: italic;
  font-family: var(--serif);
  font-size: 17px;
  letter-spacing: -0.005em;
}
.lt-counter {
  position: absolute;
  bottom: 24px; right: 28px;
  color: rgba(245, 242, 236, 0.4);
}

@keyframes ltFade {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Eje */
.lt-eje-wrap {
  position: relative;
  padding: 32px 0 0;
}
.lt-axis-line {
  position: absolute;
  top: 70px; left: 0; right: 0;
  height: 1px;
  background: rgba(245, 242, 236, 0.18);
}
.lt-eje {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 4px;
  position: relative;
}
.lt-tick {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 0 12px;
  background: transparent;
  cursor: pointer;
  transition: all 0.4s ease;
}
.lt-año {
  font-size: 22px;
  letter-spacing: -0.01em;
  color: var(--wood);
  margin-bottom: 8px;
  height: 26px;
  line-height: 1;
}
.lt-tick:not(:first-of-type) .lt-año { margin-left: -8px; }
.lt-tick-bar {
  width: 1px;
  height: 28px;
  background: rgba(245, 242, 236, 0.4);
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
}
.lt-mes {
  font-size: 10px;
  letter-spacing: 0.16em;
  color: rgba(245, 242, 236, 0.55);
  transition: color 0.3s ease;
}
.lt-tick-thumb {
  position: absolute;
  bottom: -88px;
  left: 50%;
  transform: translateX(-50%) scale(0.6);
  opacity: 0;
  pointer-events: none;
  width: 72px; height: 72px;
  overflow: hidden;
  border: 1px solid rgba(245, 242, 236, 0.3);
  background: var(--ink-soft);
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.lt-tick-thumb img { width: 100%; height: 100%; object-fit: cover; }

.lt-tick:hover .lt-tick-bar { background: var(--wood); height: 36px; }
.lt-tick:hover .lt-mes { color: var(--bone); }
.lt-tick:hover .lt-tick-thumb { opacity: 1; transform: translateX(-50%) scale(1); }

.lt-tick.active .lt-tick-bar { background: var(--wood); height: 44px; width: 2px; }
.lt-tick.active .lt-mes { color: var(--wood); font-weight: 500; }
.lt-tick.active .lt-año { color: var(--wood); }

.lt-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 140px;
  padding-top: 24px;
  border-top: 1px solid rgba(245, 242, 236, 0.14);
}
.lt-nav {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bone);
  padding: 12px 0;
  transition: color 0.3s ease;
}
.lt-nav:disabled { color: rgba(245, 242, 236, 0.25); cursor: not-allowed; }
.lt-nav:not(:disabled):hover { color: var(--wood); }

@media (max-width: 980px) {
  .lt-head { grid-template-columns: 1fr; gap: 24px; }
  .lt-viewer { grid-template-columns: 1fr; }
  .lt-info { padding: 32px 24px; }
  .lt-eje { grid-template-columns: repeat(6, 1fr); gap: 2px; }
  .lt-tick-thumb { display: none; }
  .lt-controls { margin-top: 60px; }
}
@media (max-width: 540px) {
  .lt-eje { grid-template-columns: repeat(4, 1fr); }
  .lt-año { font-size: 16px; }
}
`;
