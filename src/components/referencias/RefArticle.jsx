import "./refArticle.css";

export default function RefArticle({ article }) {
  return (
    <article className="ref-card">
      <div className="ref-card-top">
        <span className="ref-card-tag">{article.tag}</span>
      </div>

      <h3 className="ref-card-title">{article.title}</h3>
      <p className="ref-card-summary">{article.summary}</p>

      {article.stats.length > 0 && (
        <div className="ref-card-stats">
          {article.stats.map((stat) => (
            <div key={stat.label} className="ref-card-stat">
              <span className="ref-card-stat-value">{stat.value}</span>
              <span className="ref-card-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {article.correction && (
        <div className="ref-card-correction">
          <div className="ref-card-correction-row">
            <span className="ref-card-badge-old">dado anterior</span>
            <span className="ref-card-old">{article.correction.errado}</span>
          </div>
          <div className="ref-card-correction-row">
            <span className="ref-card-badge-new">corrigido</span>
            <span className="ref-card-new">{article.correction.correto}</span>
          </div>
        </div>
      )}

      <a href={article.url} target="_blank" rel="noopener noreferrer" className="ref-card-link">
        <span className="ref-card-link-source">{article.source}</span>
        <span className="ref-card-link-arrow">↗</span>
      </a>
    </article>
  );
}