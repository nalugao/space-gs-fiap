import { Link } from "react-router-dom";
import './referencias.css'

const REFS = [
  {
    source: "NASA — 1978",
    title: "Kessler & Cour-Palais: Collision Frequency of Artificial Satellites",
  },
  {
    source: "ESA Space Debris Office",
    title: "Annual Space Environment Report 2024 — LEO population statistics",
  },
  {
    source: "BryceTech",
    title: "Global Space Insurance Market — valuations e projeções 2024–2030",
  },
  {
    source: "SpaceX Transporter",
    title: "Rideshare pricing: US$5.500/kg para LEO — referência de CapEx de lançamento",
  },
];

const Referencias = () => {
  return (
    <section className="ks-section">
      <p className="section-label">04 — Referências</p>
      <h2 className="section-title">
        Base<br />Científica
      </h2>
      <div className="linha" />
      <p className="section-body">
        Nosso modelo é fundamentado em estudos da NASA, ESA e literatura
        acadêmica de astrodinâmica.
      </p>

      <div className="refGrid">
        {REFS.map((ref) => (
          <div key={ref.source} className="refCard">
            <div className="refSource">{ref.source}</div>
            <div className="refTitle">{ref.title}</div>
          </div>
        ))}
      </div>

      <Link to="/referencias">
        <button className="btn-outline">Ver todas as referências →</button>
      </Link>
    </section>
  );
}
export default Referencias