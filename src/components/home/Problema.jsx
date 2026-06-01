import { Link } from "react-router-dom";
import './problema.css'

const STATS = [
    { number: "27K+", label: "fragmentos rastreados em LEO" },
    { number: "500K", label: "objetos maiores que 1cm" },
    { number: "28km/s", label: "velocidade média de impacto" },
    { number: "$300M", label: "custo médio de um satélite segurado" },
];

const Problema = () => {
    return (
        <section className="ks-section">
            <p className="section-label">01 — O Problema</p>
            <h2 className="section-title">A Síndrome<br />de Kessler</h2>
            <div className="linha" />
            <p className="section-body">
                Em 1978, o cientista Donald Kessler previu um cenário catastrófico:
                colisões em cascata de detritos espaciais tornando a órbita terrestre
                permanentemente inacessível. Estamos chegando lá.
            </p>

            <div className="pbGrid">
                {STATS.map((stat) => (
                    <div key={stat.laber} className="pbStat">
                        <div className="statNumber">{stat.number}</div>
                        <div className="statLabel">{stat.label}</div>
                    </div>
                ))}
            </div>

            <Link to="/problema">
                <button className="btn-outline">Ver análise completa do problema →</button>
            </Link>
        </section>
    )
}

export default Problema