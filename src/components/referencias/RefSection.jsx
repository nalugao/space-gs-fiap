import { useState } from "react";
import RefArticle from "./RefArticle";
import "./refSection.css";

export default function RefSection({ section }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`ref-section ${open ? "ref-section-open" : ""}`}>
      <button
        className="ref-section-header"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <div className="ref-section-left">
          <p className="ref-section-label">{section.label}</p>
          <h2 className="ref-section-title">{section.title}</h2>
          <p className="ref-section-intro">{section.intro}</p>
        </div>
        <span className={`ref-section-chevron ${open ? "ref-section-chevron-open" : ""}`}>›</span>
      </button>

      {open && (
        <div className="ref-section-body">
          <div className="ref-section-articles">
            {section.articles.map((article) => (
              <RefArticle key={article.id} article={article} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}