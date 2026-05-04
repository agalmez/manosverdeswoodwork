/* Configurador interactivo — el corazón del sitio */
function Configurador() {
  const [tipo, setTipo] = useState('mesa-comedor');
  const [madera, setMadera] = useState('roble');
  const [acabado, setAcabado] = useState('natural');
  const [base, setBase] = useState('fluted');
  const [largo, setLargo] = useState(220);
  const [ancho, setAncho] = useState(100);

  const tipos = {
    'mesa-comedor':  { label: 'Mesa de comedor', tiempo: '6–8 sem', precioBase: 1450 },
    'mesa-centro':   { label: 'Mesa de centro',  tiempo: '4–5 sem', precioBase: 680  },
    'vanity':        { label: 'Vanity de baño',  tiempo: '5–7 sem', precioBase: 980  },
    'meson':         { label: 'Mesón / barra',   tiempo: '7–10 sem', precioBase: 1850 },
  };

  const maderas = {
    'roble':   { label: 'Roble americano', mult: 1.0,  color: '#C8A77A' },
    'rauli':   { label: 'Raulí nativo',     mult: 1.1,  color: '#A87752' },
    'lenga':   { label: 'Lenga clara',      mult: 0.95, color: '#D9B58A' },
    'manio':   { label: 'Mañío macizo',     mult: 1.2,  color: '#8A6A47' },
  };

  const acabados = {
    'natural':    { label: 'Natural / aceitado', filter: 'none' },
    'ennegrecido':{ label: 'Ennegrecido',         filter: 'brightness(0.18) saturate(0.4)' },
    'ahumado':    { label: 'Ahumado oscuro',      filter: 'brightness(0.55) saturate(0.7) hue-rotate(-10deg)' },
    'cera-clara': { label: 'Cera clara',          filter: 'brightness(1.12) saturate(0.85)' },
  };

  const bases = {
    'fluted':  'Fluted (estriada)',
    'bloque':  'Bloque macizo',
    'cruz':    'Cruz de madera',
    'patin':   'Patín metálico',
  };

  // precio estimado: base × área-factor × madera-mult
  const tipoData = tipos[tipo];
  const areaFactor = (largo * ancho) / (220 * 100);
  const precio = Math.round(tipoData.precioBase * areaFactor * maderas[madera].mult / 10) * 10;
  const precioMax = Math.round(precio * 1.35 / 10) * 10;

  const woodColor = maderas[madera].color;
  const acabadoFilter = acabados[acabado].filter;

  // Preview SVG dinámico
  const renderPreview = () => {
    const w = 480, h = 320;
    const tableW = Math.min(380, 140 + largo * 0.9);
    const tableH = Math.min(80, 40 + ancho * 0.2);

    if (tipo === 'mesa-comedor' || tipo === 'meson') {
      const cx = w / 2, topY = h * 0.45;
      return (
        <svg viewBox={`0 0 ${w} ${h}`} className="cfg-svg">
          {/* sombra */}
          <ellipse cx={cx} cy={h - 30} rx={tableW * 0.5} ry={8} fill="rgba(0,0,0,0.18)" />
          {/* tablero */}
          <g style={{ filter: acabadoFilter }}>
            <rect x={cx - tableW/2} y={topY} width={tableW} height={tableH * 0.35} fill={woodColor} />
            <rect x={cx - tableW/2} y={topY} width={tableW} height={4} fill="rgba(255,255,255,0.18)" />
            <rect x={cx - tableW/2} y={topY + tableH * 0.32} width={tableW} height={3} fill="rgba(0,0,0,0.25)" />
            {/* base */}
            {base === 'fluted' && (
              <>
                {[0, 1].map(i => (
                  <g key={i}>
                    <rect x={cx - tableW * 0.32 + i * tableW * 0.5 - 28} y={topY + tableH * 0.35} width={56} height={120} fill={woodColor} />
                    {Array.from({length: 12}).map((_, j) => (
                      <rect key={j} x={cx - tableW * 0.32 + i * tableW * 0.5 - 26 + j * 4.5} y={topY + tableH * 0.35} width={2} height={120} fill="rgba(0,0,0,0.28)" />
                    ))}
                  </g>
                ))}
              </>
            )}
            {base === 'bloque' && (
              <>
                <rect x={cx - tableW * 0.32 - 24} y={topY + tableH * 0.35} width={48} height={120} fill={woodColor} />
                <rect x={cx + tableW * 0.32 - 24} y={topY + tableH * 0.35} width={48} height={120} fill={woodColor} />
              </>
            )}
            {base === 'cruz' && (
              <>
                <rect x={cx - tableW * 0.34} y={topY + tableH * 0.35 + 40} width={tableW * 0.68} height={14} fill={woodColor} transform={`rotate(8 ${cx} ${topY + tableH * 0.35 + 47})`} />
                <rect x={cx - tableW * 0.34} y={topY + tableH * 0.35 + 40} width={tableW * 0.68} height={14} fill={woodColor} transform={`rotate(-8 ${cx} ${topY + tableH * 0.35 + 47})`} />
                <rect x={cx - tableW * 0.32} y={topY + tableH * 0.35} width={20} height={120} fill={woodColor} />
                <rect x={cx + tableW * 0.32 - 20} y={topY + tableH * 0.35} width={20} height={120} fill={woodColor} />
              </>
            )}
            {base === 'patin' && (
              <>
                <rect x={cx - tableW * 0.36} y={topY + tableH * 0.35 + 100} width={tableW * 0.72} height={6} fill="#1A1815" />
                <rect x={cx - tableW * 0.34} y={topY + tableH * 0.35} width={6} height={108} fill="#1A1815" />
                <rect x={cx + tableW * 0.34 - 6} y={topY + tableH * 0.35} width={6} height={108} fill="#1A1815" />
              </>
            )}
          </g>
          {/* dim lines */}
          <g stroke="#1A1815" strokeWidth="0.6" opacity="0.5">
            <line x1={cx - tableW/2} y1={topY - 20} x2={cx + tableW/2} y2={topY - 20} />
            <line x1={cx - tableW/2} y1={topY - 24} x2={cx - tableW/2} y2={topY - 16} />
            <line x1={cx + tableW/2} y1={topY - 24} x2={cx + tableW/2} y2={topY - 16} />
          </g>
          <text x={cx} y={topY - 26} textAnchor="middle" fontFamily="var(--mono)" fontSize="9" letterSpacing="2" fill="#1A1815">{largo} CM</text>
        </svg>
      );
    }

    if (tipo === 'mesa-centro') {
      return (
        <svg viewBox={`0 0 ${w} ${h}`} className="cfg-svg">
          <ellipse cx={w/2} cy={h - 30} rx={tableW * 0.45} ry={6} fill="rgba(0,0,0,0.18)" />
          <g style={{ filter: acabadoFilter }}>
            <rect x={w/2 - tableW * 0.42} y={h * 0.55} width={tableW * 0.84} height={70} fill={woodColor} />
            <rect x={w/2 - tableW * 0.42} y={h * 0.55} width={tableW * 0.84} height={6} fill="rgba(255,255,255,0.2)" />
            {/* wood grain */}
            {Array.from({length: 5}).map((_, i) => (
              <rect key={i} x={w/2 - tableW * 0.42} y={h * 0.55 + 12 + i * 12} width={tableW * 0.84} height={1} fill="rgba(0,0,0,0.18)" />
            ))}
          </g>
        </svg>
      );
    }

    if (tipo === 'vanity') {
      return (
        <svg viewBox={`0 0 ${w} ${h}`} className="cfg-svg">
          <g style={{ filter: acabadoFilter }}>
            <rect x={w/2 - tableW * 0.45} y={h * 0.4} width={tableW * 0.9} height={150} fill={woodColor} />
            {/* fluted front */}
            {Array.from({length: 26}).map((_, i) => (
              <rect key={i} x={w/2 - tableW * 0.43 + i * (tableW * 0.86 / 26)} y={h * 0.42} width={1.5} height={140} fill="rgba(0,0,0,0.28)" />
            ))}
            <rect x={w/2 - tableW * 0.45} y={h * 0.4} width={tableW * 0.9} height={6} fill="rgba(255,255,255,0.2)" />
          </g>
          {/* sink */}
          <ellipse cx={w/2} cy={h * 0.4 - 4} rx={50} ry={10} fill="#EDE8DE" />
        </svg>
      );
    }
  };

  // brief para WhatsApp
  const briefMsg = `Hola Manos Verdes 👋\n\nQuiero cotizar:\n• Tipo: ${tipoData.label}\n• Medidas: ${largo} × ${ancho} cm\n• Madera: ${maderas[madera].label}\n• Acabado: ${acabados[acabado].label}\n• Base: ${bases[base]}\n\nEstimado de referencia: USD ${precio.toLocaleString()}–${precioMax.toLocaleString()}`;

  return (
    <section className="section configurador" id="configurador">
      <div className="shell">
        <div className="cfg-head">
          <div className="section-num"><span>04 — Configurador en vivo</span></div>
          <h2 className="display-l serif">
            Diseña tu pieza,<br/><em>nosotros la hacemos.</em>
          </h2>
          <p className="cfg-lead">
            Ajusta tipo, madera, acabado y dimensiones. El preview cambia en tiempo real y obtienes un estimado de precio + tiempo de fabricación.
          </p>
        </div>

        <div className="cfg-grid">
          {/* preview */}
          <div className="cfg-preview">
            <div className="cfg-canvas">
              {renderPreview()}
              <div className="cfg-grid-bg" />
            </div>
            <div className="cfg-readout">
              <div className="readout-row">
                <span className="mono">Tipo</span>
                <span className="serif">{tipoData.label}</span>
              </div>
              <div className="readout-row">
                <span className="mono">Madera</span>
                <span className="serif">{maderas[madera].label}</span>
              </div>
              <div className="readout-row">
                <span className="mono">Acabado</span>
                <span className="serif">{acabados[acabado].label}</span>
              </div>
              <div className="readout-row">
                <span className="mono">Base</span>
                <span className="serif">{bases[base]}</span>
              </div>
              <div className="readout-row">
                <span className="mono">Medidas</span>
                <span className="serif">{largo} × {ancho} cm</span>
              </div>
            </div>
          </div>

          {/* controles */}
          <div className="cfg-controls">
            <div className="cfg-group">
              <div className="cfg-label mono">01 — Tipo de pieza</div>
              <div className="cfg-options">
                {Object.entries(tipos).map(([k, v]) => (
                  <button key={k} className={`cfg-opt ${tipo === k ? 'active' : ''}`} onClick={() => setTipo(k)}>
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="cfg-group">
              <div className="cfg-label mono">02 — Madera</div>
              <div className="cfg-swatches">
                {Object.entries(maderas).map(([k, v]) => (
                  <button key={k} className={`cfg-swatch ${madera === k ? 'active' : ''}`} onClick={() => setMadera(k)}>
                    <span className="swatch-color" style={{ background: v.color }} />
                    <span>{v.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="cfg-group">
              <div className="cfg-label mono">03 — Acabado</div>
              <div className="cfg-options">
                {Object.entries(acabados).map(([k, v]) => (
                  <button key={k} className={`cfg-opt ${acabado === k ? 'active' : ''}`} onClick={() => setAcabado(k)}>
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="cfg-group">
              <div className="cfg-label mono">04 — Base / estructura</div>
              <div className="cfg-options">
                {Object.entries(bases).map(([k, v]) => (
                  <button key={k} className={`cfg-opt ${base === k ? 'active' : ''}`} onClick={() => setBase(k)}>
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="cfg-group">
              <div className="cfg-label mono">05 — Dimensiones</div>
              <div className="cfg-slider">
                <div className="slider-head">
                  <span>Largo</span>
                  <span className="serif">{largo} cm</span>
                </div>
                <input type="range" min="80" max="400" step="10" value={largo} onChange={(e) => setLargo(+e.target.value)} />
              </div>
              <div className="cfg-slider">
                <div className="slider-head">
                  <span>Ancho</span>
                  <span className="serif">{ancho} cm</span>
                </div>
                <input type="range" min="60" max="160" step="5" value={ancho} onChange={(e) => setAncho(+e.target.value)} />
              </div>
            </div>

            <div className="cfg-summary">
              <div className="sum-row">
                <span className="mono">Tiempo estimado</span>
                <span className="serif">{tipoData.tiempo}</span>
              </div>
              <div className="sum-row sum-price">
                <span className="mono">Estimado de referencia</span>
                <span className="serif sum-amount">USD {precio.toLocaleString()}–{precioMax.toLocaleString()}</span>
              </div>
              <p className="sum-note mono">* Estimado para referencia. Cotización final tras revisar planos y selección de madera.</p>
              <a
                className="btn btn-solid cfg-cta"
                href={`https://wa.me/56993231651?text=${encodeURIComponent(briefMsg)}`}
                target="_blank"
                rel="noopener"
              >
                Enviar brief por WhatsApp <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#brief">
                O completar formulario detallado <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const cfgStyles = `
.configurador { background: var(--ink); color: var(--bone); border-top: 1px solid var(--ink); }
.cfg-head { max-width: 760px; margin-bottom: 60px; }
.cfg-head .section-num { color: rgba(245, 242, 236, 0.5); }
.cfg-head .section-num::before { background: var(--bone); }
.cfg-head h2 em { font-style: italic; color: var(--wood); }
.cfg-lead {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(245, 242, 236, 0.75);
  max-width: 480px;
  margin-top: 24px;
}

.cfg-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: start;
}

.cfg-preview { position: sticky; top: 100px; }
.cfg-canvas {
  position: relative;
  background: var(--bone);
  aspect-ratio: 4/3;
  overflow: hidden;
}
.cfg-svg { width: 100%; height: 100%; }
.cfg-grid-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(to right, rgba(26,24,21,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(26,24,21,0.05) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.cfg-readout {
  background: var(--ink-soft);
  border: 1px solid rgba(245, 242, 236, 0.1);
  margin-top: 16px;
  padding: 20px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 32px;
}
.readout-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.readout-row .mono { color: rgba(245, 242, 236, 0.5); font-size: 9px; letter-spacing: 0.16em; }
.readout-row .serif { font-size: 16px; }

.cfg-controls { display: flex; flex-direction: column; gap: 36px; }
.cfg-group { display: flex; flex-direction: column; gap: 14px; }
.cfg-label {
  color: rgba(245, 242, 236, 0.5);
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(245, 242, 236, 0.14);
}

.cfg-options { display: flex; flex-wrap: wrap; gap: 8px; }
.cfg-opt {
  padding: 12px 18px;
  border: 1px solid rgba(245, 242, 236, 0.22);
  font-family: var(--sans);
  font-size: 13px;
  color: var(--bone);
  transition: all 0.3s ease;
}
.cfg-opt:hover { border-color: var(--bone); }
.cfg-opt.active {
  background: var(--bone);
  color: var(--ink);
  border-color: var(--bone);
}

.cfg-swatches { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.cfg-swatch {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid rgba(245, 242, 236, 0.22);
  font-size: 13px;
  color: var(--bone);
  transition: all 0.3s ease;
}
.cfg-swatch .swatch-color {
  width: 22px; height: 22px;
  display: inline-block;
  flex-shrink: 0;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.2);
}
.cfg-swatch:hover { border-color: var(--bone); }
.cfg-swatch.active { background: var(--bone); color: var(--ink); border-color: var(--bone); }

.cfg-slider { display: flex; flex-direction: column; gap: 10px; }
.slider-head {
  display: flex; justify-content: space-between; align-items: baseline;
  font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: rgba(245, 242, 236, 0.7);
}
.slider-head .serif { font-family: var(--serif); font-size: 22px; letter-spacing: -0.01em; text-transform: none; color: var(--bone); }

.cfg-slider input[type="range"] {
  -webkit-appearance: none; appearance: none;
  width: 100%; height: 1px;
  background: rgba(245, 242, 236, 0.3);
  outline: none;
}
.cfg-slider input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 18px; height: 18px;
  background: var(--wood);
  cursor: pointer;
  border: 2px solid var(--ink);
  box-shadow: 0 0 0 1px var(--wood);
}
.cfg-slider input[type="range"]::-moz-range-thumb {
  width: 18px; height: 18px;
  background: var(--wood);
  cursor: pointer;
  border: 2px solid var(--ink);
}

.cfg-summary {
  margin-top: 20px;
  padding: 28px;
  background: var(--green-deep);
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sum-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(245, 242, 236, 0.14);
}
.sum-row .mono { color: rgba(245, 242, 236, 0.6); }
.sum-row .serif { font-size: 22px; }
.sum-price .sum-amount { font-size: 30px; color: var(--wood); }
.sum-note { font-size: 9px; color: rgba(245, 242, 236, 0.5); line-height: 1.5; }
.cfg-cta { background: var(--wood); border-color: var(--wood); color: var(--ink); margin-top: 8px; justify-content: center; }
.cfg-cta:hover { background: var(--bone); border-color: var(--bone); color: var(--ink); }
.cfg-summary .btn-ghost { color: var(--bone); border-color: rgba(245, 242, 236, 0.4); justify-content: center; }
.cfg-summary .btn-ghost:hover { background: var(--bone); color: var(--ink); }

@media (max-width: 980px) {
  .cfg-grid { grid-template-columns: 1fr; }
  .cfg-preview { position: relative; top: 0; }
  .cfg-readout { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .cfg-readout { grid-template-columns: 1fr; }
  .cfg-swatches { grid-template-columns: 1fr; }
}
`;
