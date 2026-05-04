/* Proceso (timeline horizontal) + Brief form + Footer */
function Proceso() {
  const steps = [
    { num: '01', title: 'Conversación', tiempo: '1–2 días', desc: 'Charla inicial por WhatsApp o en el taller. Entendemos el espacio, uso y referencias.' },
    { num: '02', title: 'Boceto + plano', tiempo: '5–7 días', desc: 'Bocetos a mano y planos 3D. Iteramos hasta que la pieza cuadra contigo.' },
    { num: '03', title: 'Madera y cotización', tiempo: '2–3 días', desc: 'Selección de tablones específicos. Cotización final con plazos firmes.' },
    { num: '04', title: 'Taller', tiempo: '4–8 sem', desc: 'Carpintería, ensamble, tratamiento. Te enviamos fotos del proceso cada semana.' },
    { num: '05', title: 'Entrega e instalación', tiempo: '1 día', desc: 'Llevamos, instalamos y dejamos lista la pieza en tu espacio.' },
  ];

  return (
    <section className="section proceso" id="proceso">
      <div className="shell">
        <div className="proc-head">
          <div className="section-num"><span>05 — De la idea a tu casa</span></div>
          <h2 className="display-m serif">El proceso, <em>sin sorpresas.</em></h2>
        </div>

        <div className="proc-timeline">
          <div className="proc-line" />
          {steps.map((s, i) => (
            <div className="proc-step reveal" key={i}>
              <div className="step-dot" />
              <div className="step-num mono">{s.num}</div>
              <h3 className="serif">{s.title}</h3>
              <div className="step-time mono">{s.tiempo}</div>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brief() {
  const [form, setForm] = useState({
    nombre: '', email: '', tipo: '', espacio: '', presupuesto: '', plazo: '', mensaje: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <section className="section brief" id="brief">
        <div className="shell">
          <div className="brief-success">
            <div className="section-num"><span>06 — Brief enviado</span></div>
            <h2 className="display-m serif">Recibido. <em>Te escribimos en 24h.</em></h2>
            <p>Mientras tanto, puedes adelantarnos referencias por WhatsApp.</p>
            <a href="https://wa.me/56993231651" className="btn btn-solid">
              Abrir WhatsApp <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section brief" id="brief">
      <div className="shell">
        <div className="brief-grid">
          <div className="brief-side">
            <div className="section-num"><span>06 — Brief de proyecto</span></div>
            <h2 className="display-m serif">Cuéntanos<br/>qué <em>imaginas.</em></h2>
            <p className="brief-lead">
              Más detallado que un mensaje de WhatsApp. Te respondemos en menos de 24 horas con bocetos preliminares.
            </p>
            <div className="brief-contact">
              <div className="bc-row">
                <span className="mono">WhatsApp</span>
                <a href="https://wa.me/56993231651">+56 9 9323 1651</a>
              </div>
              <div className="bc-row">
                <span className="mono">Instagram</span>
                <a href="https://instagram.com/manos_verde_woodwork" target="_blank" rel="noopener">@manos_verde_woodwork</a>
              </div>
              <div className="bc-row">
                <span className="mono">Taller</span>
                <span>Santiago, Chile · cita previa</span>
              </div>
            </div>
          </div>

          <form className="brief-form" onSubmit={handleSubmit}>
            <div className="bf-row">
              <label>
                <span className="mono">Nombre</span>
                <input type="text" required value={form.nombre} onChange={(e) => setForm({...form, nombre: e.target.value})} />
              </label>
              <label>
                <span className="mono">Email</span>
                <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
              </label>
            </div>

            <label>
              <span className="mono">Tipo de pieza</span>
              <select required value={form.tipo} onChange={(e) => setForm({...form, tipo: e.target.value})}>
                <option value="">— Selecciona —</option>
                <option>Mesa de comedor</option>
                <option>Mesa de centro</option>
                <option>Vanity / mueble de baño</option>
                <option>Mesón / proyecto comercial</option>
                <option>Sideboard / aparador</option>
                <option>Otro</option>
              </select>
            </label>

            <label>
              <span className="mono">Espacio donde irá</span>
              <input type="text" placeholder="ej: comedor 4×3m con piso de roble claro" value={form.espacio} onChange={(e) => setForm({...form, espacio: e.target.value})} />
            </label>

            <div className="bf-row">
              <label>
                <span className="mono">Presupuesto referencial</span>
                <select value={form.presupuesto} onChange={(e) => setForm({...form, presupuesto: e.target.value})}>
                  <option value="">—</option>
                  <option>Menos de USD 800</option>
                  <option>USD 800 – 1.500</option>
                  <option>USD 1.500 – 3.000</option>
                  <option>USD 3.000 – 6.000</option>
                  <option>Más de USD 6.000</option>
                </select>
              </label>
              <label>
                <span className="mono">Plazo deseado</span>
                <select value={form.plazo} onChange={(e) => setForm({...form, plazo: e.target.value})}>
                  <option value="">—</option>
                  <option>Lo antes posible</option>
                  <option>1–2 meses</option>
                  <option>3–4 meses</option>
                  <option>Sin apuro</option>
                </select>
              </label>
            </div>

            <label>
              <span className="mono">Cuéntanos más (referencias, ideas, contexto)</span>
              <textarea rows="5" value={form.mensaje} onChange={(e) => setForm({...form, mensaje: e.target.value})} />
            </label>

            <button type="submit" className="btn btn-solid bf-submit">
              Enviar brief <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-grid">
        <div>
          <div className="nav-logo" style={{color: 'var(--bone)', marginBottom: 24}}>
            <span className="mark" style={{background: 'var(--wood)'}}></span>
            <span>Manos Verdes</span>
          </div>
          <p style={{maxWidth: 360, color: 'rgba(245,242,236,0.65)', fontSize: 14, lineHeight: 1.55}}>
            Taller de muebles a medida en Chile. Madera maciza, diseño honesto, oficio humano.
          </p>
        </div>
        <div>
          <h4>Navegar</h4>
          <ul>
            <li><a href="#manifiesto">Manifiesto</a></li>
            <li><a href="#galeria">Proyectos</a></li>
            <li><a href="#configurador">Configurador</a></li>
            <li><a href="#proceso">Proceso</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://wa.me/56993231651">+56 9 9323 1651</a></li>
            <li><a href="https://instagram.com/manos_verde_woodwork" target="_blank" rel="noopener">Instagram</a></li>
            <li>Santiago, Chile</li>
          </ul>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>
            <li>Muebles a medida</li>
            <li>Proyectos comerciales</li>
            <li>Restauración</li>
            <li>Asesoría de diseño</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Manos Verdes Woodwork</span>
        <span>Hecho con madera y código</span>
      </div>
    </footer>
  );
}

const procStyles = `
.proceso { background: var(--bone-2); border-top: 1px solid var(--line); }
.proc-head { margin-bottom: 80px; max-width: 700px; }
.proc-head h2 em { font-style: italic; color: var(--green); }

.proc-timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  position: relative;
  padding-top: 32px;
}
.proc-line {
  position: absolute;
  top: 38px; left: 0; right: 0;
  height: 1px;
  background: var(--line-strong);
}
.proc-step {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  padding-right: 24px;
  padding-top: 20px;
}
.step-dot {
  position: absolute;
  top: -2px; left: 0;
  width: 12px; height: 12px;
  background: var(--ink);
  border-radius: 50%;
}
.step-num { color: var(--muted); margin-top: 4px; }
.proc-step h3 { font-size: 26px; line-height: 1.05; margin-top: 4px; }
.step-time { color: var(--green); padding: 4px 0; }
.proc-step p { font-size: 13px; line-height: 1.55; color: var(--ink-soft); }

@media (max-width: 820px) {
  .proc-timeline { grid-template-columns: 1fr; gap: 32px; }
  .proc-line { left: 6px; right: auto; top: 0; bottom: 0; width: 1px; height: auto; }
  .proc-step { padding-left: 32px; padding-top: 0; padding-right: 0; }
  .step-dot { left: 0; top: 6px; }
}

/* Brief */
.brief { background: var(--bone); border-top: 1px solid var(--line); }
.brief-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
.brief-side h2 { margin-top: 16px; }
.brief-side h2 em { font-style: italic; color: var(--green); }
.brief-lead { margin-top: 24px; font-size: 15px; line-height: 1.6; color: var(--ink-soft); max-width: 360px; }
.brief-contact {
  margin-top: 40px;
  border-top: 1px solid var(--line);
  display: flex; flex-direction: column;
}
.bc-row {
  display: grid; grid-template-columns: 100px 1fr;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
  font-size: 14px;
  align-items: baseline;
  gap: 16px;
}
.bc-row .mono { color: var(--muted); }
.bc-row a:hover { color: var(--green); }

.brief-form {
  background: var(--bone-2);
  padding: 40px;
  display: flex; flex-direction: column; gap: 22px;
  border: 1px solid var(--line);
}
.brief-form label { display: flex; flex-direction: column; gap: 6px; }
.brief-form .mono { color: var(--muted); }
.brief-form input, .brief-form select, .brief-form textarea {
  padding: 14px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line-strong);
  font-family: var(--serif);
  font-size: 18px;
  color: var(--ink);
  outline: none;
  transition: border-color 0.3s ease;
}
.brief-form input:focus, .brief-form select:focus, .brief-form textarea:focus {
  border-bottom-color: var(--green);
}
.brief-form textarea { font-family: var(--sans); font-size: 14px; line-height: 1.55; resize: vertical; }
.bf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.bf-submit { align-self: flex-start; margin-top: 8px; }

.brief-success { max-width: 720px; }
.brief-success h2 em { font-style: italic; color: var(--green); }
.brief-success p { margin: 24px 0; font-size: 16px; color: var(--ink-soft); }

@media (max-width: 820px) {
  .brief-grid { grid-template-columns: 1fr; gap: 40px; }
  .bf-row { grid-template-columns: 1fr; }
  .brief-form { padding: 28px 20px; }
}
`;
