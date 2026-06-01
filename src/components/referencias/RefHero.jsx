import "./refHero.css";

export default function RefHero() {
  return (
    <header className="ref-hero">
      <div className="ref-hero-inner">
        <p className="ref-hero-label">04 — Referências</p>
        <h1 className="ref-hero-title">
          Base<br /><span className="ref-hero-accent">Científica</span>
        </h1>
        <div className="ref-hero-divider" />
        <p className="ref-hero-description">
          Todos os dados do Kessler Shield foram verificados contra fontes primárias —
          agências espaciais, corretores especializados e literatura acadêmica revisada por pares.
          Números incorretos foram corrigidos e sinalizados.
        </p>
        <div className="ref-hero-tags">
          <span className="ref-hero-tag">ESA</span>
          <span className="ref-hero-tag">NASA</span>
          <span className="ref-hero-tag">Seradata</span>
          <span className="ref-hero-tag">SpaceX</span>
          <span className="ref-hero-tag">Journal of Geophysical Research</span>
        </div>
      </div>
    </header>
  );
}