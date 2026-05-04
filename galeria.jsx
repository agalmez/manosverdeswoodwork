/* Galería de proyectos — grid editorial con focus */
function Galeria() {
  const [focus, setFocus] = useState(null);

  const projects = [
    { src: 'img/01-mesa-ovalada-negra.png', titulo: 'Mesa Bruna', tipo: 'Mesa de comedor', medidas: '280 × 110 cm', madera: 'Roble ennegrecido', año: '2025', span: 'span-tall' },
    { src: 'img/06-vanity-fluted.png', titulo: 'Vanity Línea', tipo: 'Mueble de baño', medidas: '180 × 55 cm', madera: 'Roble americano', año: '2024', span: 'span-wide' },
    { src: 'img/03-mesa-centro-bloque.png', titulo: 'Bloque Macizo', tipo: 'Mesa de centro', medidas: '120 × 70 cm', madera: 'Mañío en cubos', año: '2024', span: '' },
    { src: 'img/07-sideboard-roble.png', titulo: 'Sideboard Cordillera', tipo: 'Aparador', medidas: '320 × 90 cm', madera: 'Roble macizo', año: '2025', span: 'span-tall' },
    { src: 'img/02-mesa-larga-restaurante.png', titulo: 'Mesón Foresta', tipo: 'Mesón comercial', medidas: '420 × 80 cm', madera: 'Raulí + nogal', año: '2024', span: 'span-wide' },
    { src: 'img/08-mesa-comedor-fluted-base.png', titulo: 'Mesa Estriada', tipo: 'Mesa de comedor', medidas: '240 × 100 cm', madera: 'Raulí + ébano', año: '2024', span: '' },
    { src: 'img/10-mesa-comedor-natural.png', titulo: 'Mesa Lenga', tipo: 'Mesa de comedor', medidas: '200 × 90 cm', madera: 'Lenga clara', año: '2023', span: '' },
    { src: 'img/05-mesa-cristal-base-madera.png', titulo: 'Mesa Cruz', tipo: 'Mesa auxiliar', medidas: '90 × 90 cm', madera: 'Roble + cristal', año: '2025', span: '' },
    { src: 'img/04-restaurante-mesones.png', titulo: 'Sora Restaurant', tipo: 'Proyecto comercial', medidas: '12 piezas', madera: 'Raulí natural', año: '2024', span: 'span-wide' },
    { src: 'img/09-mesa-centro-negra-detalle.png', titulo: 'Centro Sombra', tipo: 'Mesa de centro', medidas: '140 × 80 cm', madera: 'Roble ennegrecido', año: '2025', span: '' },
  ];

  return (
    <section className="section galeria" id="galeria">
      <div className="shell">
        <div className="gal-head">
          <div>
            <div className="section-num"><span>03 — Archivo de proyectos</span></div>
            <h2 className="display-m serif">Cada pieza, <em>un encargo.</em></h2>
          </div>
          <p className="gal-lead">
            Selección de proyectos entregados entre 2023 y 2026. Click en cualquiera para ver detalles del encargo.
          </p>
        </div>

        <div className="gal-grid">
          {projects.map((p, i) => (
            <button
              key={i}
              className={`gal-item ${p.span}`}
              onClick={() => setFocus(p)}
            >
              <div className="gal-img">
                <img src={p.src} alt={p.titulo} loading="lazy" />
                <div className="gal-overlay">
                  <div className="gal-meta">
                    <div className="mono">{String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</div>
                    <div className="mono">{p.año}</div>
                  </div>
                  <div className="gal-info">
                    <div className="serif gal-title">{p.titulo}</div>
                    <div className="mono">{p.tipo}</div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {focus && (
        <div className="gal-modal" onClick={() => setFocus(null)}>
          <div className="gal-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="gal-close" onClick={() => setFocus(null)}>✕ Cerrar</button>
            <div className="gal-modal-img">
              <img src={focus.src} alt={focus.titulo} />
            </div>
            <div className="gal-modal-info">
              <div className="mono" style={{color: 'var(--muted)'}}>{focus.tipo} · {focus.año}</div>
              <h3 className="display-s serif">{focus.titulo}</h3>
              <dl className="gal-specs">
                <div><dt className="mono">Medidas</dt><dd>{focus.medidas}</dd></div>
                <div><dt className="mono">Madera</dt><dd>{focus.madera}</dd></div>
                <div><dt className="mono">Tipo</dt><dd>{focus.tipo}</dd></div>
              </dl>
              <a href="#brief" className="btn btn-solid" onClick={() => setFocus(null)}>
                Quiero algo similar <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const galeriaStyles = `
.galeria { background: var(--bone); border-top: 1px solid var(--line); }
.gal-head {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 60px;
}
.gal-head h2 em { font-style: italic; color: var(--green); }
.gal-lead { font-size: 15px; line-height: 1.55; color: var(--ink-soft); max-width: 360px; }

.gal-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 280px;
  gap: 16px;
}
.gal-item {
  position: relative;
  display: block;
  padding: 0;
  background: var(--ink);
  overflow: hidden;
  cursor: pointer;
  text-align: left;
}
.gal-item.span-tall { grid-row: span 2; }
.gal-item.span-wide { grid-column: span 2; }

.gal-img {
  position: relative;
  width: 100%; height: 100%;
  overflow: hidden;
}
.gal-img img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.2, 0.7, 0.2, 1);
  filter: brightness(0.96);
}
.gal-item:hover .gal-img img { transform: scale(1.06); filter: brightness(1.0); }

.gal-overlay {
  position: absolute;
  inset: 0;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--bone);
  background: linear-gradient(180deg, rgba(26,24,21,0.0) 0%, rgba(26,24,21,0.0) 50%, rgba(26,24,21,0.78) 100%);
  transition: background 0.5s ease;
}
.gal-item:hover .gal-overlay {
  background: linear-gradient(180deg, rgba(26,24,21,0.2) 0%, rgba(26,24,21,0.4) 50%, rgba(26,24,21,0.85) 100%);
}
.gal-meta {
  display: flex;
  justify-content: space-between;
  color: rgba(245, 242, 236, 0.85);
  font-size: 10px;
  letter-spacing: 0.16em;
}
.gal-info { display: flex; flex-direction: column; gap: 4px; }
.gal-title { font-size: 22px; line-height: 1.05; }
.gal-info .mono { font-size: 10px; color: rgba(245, 242, 236, 0.7); }

/* Modal */
.gal-modal {
  position: fixed; inset: 0;
  background: rgba(26, 24, 21, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.gal-modal-inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  background: var(--bone);
  position: relative;
}
.gal-close {
  position: absolute;
  top: 16px; right: 16px;
  z-index: 2;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: var(--bone);
  padding: 8px 12px;
  border: 1px solid var(--line);
}
.gal-close:hover { background: var(--ink); color: var(--bone); }
.gal-modal-img { background: var(--ink); overflow: hidden; }
.gal-modal-img img { width: 100%; height: 100%; object-fit: cover; min-height: 500px; }
.gal-modal-info { padding: 60px 40px; display: flex; flex-direction: column; gap: 24px; align-self: center; }
.gal-specs {
  display: flex; flex-direction: column; gap: 12px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 20px 0;
  margin-top: 8px;
}
.gal-specs > div { display: grid; grid-template-columns: 100px 1fr; gap: 16px; align-items: baseline; }
.gal-specs dt { color: var(--muted); }
.gal-specs dd { font-family: var(--serif); font-size: 18px; }

@media (max-width: 1024px) {
  .gal-grid { grid-template-columns: repeat(2, 1fr); }
  .gal-item.span-wide { grid-column: span 2; }
  .gal-item.span-tall { grid-row: span 2; }
}
@media (max-width: 820px) {
  .gal-head { grid-template-columns: 1fr; gap: 24px; }
  .gal-modal-inner { grid-template-columns: 1fr; max-height: 95vh; overflow-y: auto; }
  .gal-modal-img img { min-height: 280px; max-height: 50vh; }
  .gal-modal-info { padding: 32px 24px; }
  .gal-modal { padding: 16px; }
}
`;
