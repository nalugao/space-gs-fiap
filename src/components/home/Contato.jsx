import { Link } from "react-router-dom";
import './contato.css';

const Contato = () => {
  return (
    <section className="ks-section">
      <p className="section-label">05 — Contato</p>
      <h2 className="section-title">
        Faça Parte<br />da Missão
      </h2>
      <div className="linha" />
      <p className="section-body">
        Seja um design partner, apoie com doação ou acompanhe o desenvolvimento
        do projeto.
      </p>

      <div className="contRow">
        <div className="contCard">
          <div className="cardTitle">Newsletter</div>
          <div className="cardDesc">
            Receba atualizações sobre o projeto, lançamentos e resultados das
            missões.
          </div>
          <Link to="/contato">
            <button className="btn-outline" style={{ fontSize: "11px", padding: "8px 18px" }}>
              Assinar →
            </button>
          </Link>
        </div>

        <div className="contCard">
          <div className="cardTitle">Investir na causa</div>
          <div className="cardDesc">
            Seja um design partner ou apoiador da nossa fase de demonstração
            orbital.
          </div>
          <Link to="/contato">
            <button className="btn-primary" style={{ fontSize: "11px", padding: "8px 18px" }}>
              Entrar em contato →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contato