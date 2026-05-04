/* Sección Manifiesto / Sobre */
function Manifiesto() {
  return (
    <section className="section manifiesto" id="manifiesto">
      <div className="shell">
        <div className="section-num"><span>02 — El taller</span></div>

        <div className="manif-grid">
          <div className="manif-text">
            <h2 className="display-l serif">
              Manos que dan<br/>
              <em>vida</em> a la<br/>
              madera.
            </h2>
          </div>

          <div className="manif-side">
            <p className="manif-lead">
              En Manos Verdes Woodwork creemos que un mueble no se compra: <em>se proyecta.</em> Cada pieza nace de una conversación, se diseña a la medida exacta de tu espacio, y se construye con maderas nobles seleccionadas una a una.
            </p>
            <p className="manif-lead">
              Trabajamos para hogares que valoran el detalle bien resuelto y para restaurantes, oficinas y comercios que necesitan ambientes con identidad. Nuestra firma: <em>el listón vertical</em>, las uniones limpias, y el acabado que invita a tocar.
            </p>
            <div className="manif-stats">
              <div className="stat">
                <div className="stat-num serif">240+</div>
                <div className="stat-label mono">Piezas entregadas</div>
              </div>
              <div className="stat">
                <div className="stat-num serif">8</div>
                <div className="stat-label mono">Años de oficio</div>
              </div>
              <div className="stat">
                <div className="stat-num serif">100%</div>
                <div className="stat-label mono">Maderas chilenas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="manif-pillars">
          <div className="pillar">
            <div className="pillar-num mono">i</div>
            <h3 className="serif">Madera maciza, no chapeada</h3>
            <p>Trabajamos solo con madera sólida — roble, raulí, lenga, mañío. Cada pieza envejece, no se descascara.</p>
          </div>
          <div className="pillar">
            <div className="pillar-num mono">ii</div>
            <h3 className="serif">Diseño antes de cortar</h3>
            <p>Cada encargo parte con bocetos a mano y planos 3D. No improvisamos sobre la pieza — la pensamos.</p>
          </div>
          <div className="pillar">
            <div className="pillar-num mono">iii</div>
            <h3 className="serif">Garantía sin letra chica</h3>
            <p>Diez años sobre estructura. Si algo falla, lo arreglamos en tu casa o en el taller. Sin discusión.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const manifiestoStyles = `
.manifiesto { background: var(--bone); border-top: 1px solid var(--line); }
.manif-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 80px;
  align-items: start;
  padding-bottom: 100px;
}
.manif-text h2 em { font-style: italic; color: var(--green); }
.manif-side {
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.manif-lead {
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 420px;
}
.manif-lead em { font-style: italic; color: var(--green); font-family: var(--serif); font-size: 1.08em; }
.manif-lead + .manif-lead { padding-top: 20px; border-top: 1px solid var(--line); }
.manif-stats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  border-top: 1px solid var(--line);
  padding-top: 32px;
}
.stat-num { font-size: 44px; line-height: 1; margin-bottom: 8px; }
.stat-label { color: var(--muted); }

.manif-pillars {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  border-top: 1px solid var(--line);
}
.pillar {
  padding: 40px 32px 40px 0;
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.pillar:last-child { border-right: none; padding-right: 0; }
.pillar:not(:first-child) { padding-left: 32px; }
.pillar-num {
  font-style: italic;
  font-family: var(--serif);
  font-size: 14px;
  text-transform: lowercase;
  letter-spacing: 0;
  color: var(--green);
}
.pillar h3 { font-size: 24px; line-height: 1.1; }
.pillar p { font-size: 14px; line-height: 1.55; color: var(--ink-soft); }

@media (max-width: 820px) {
  .manif-grid { grid-template-columns: 1fr; gap: 40px; }
  .manif-pillars { grid-template-columns: 1fr; }
  .pillar { border-right: none; border-bottom: 1px solid var(--line); padding: 32px 0 !important; }
  .manif-stats { grid-template-columns: 1fr; gap: 16px; }
}
`;
