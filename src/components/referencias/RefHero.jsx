import { useLanguage } from "../context/LanguageContext";
import "./refHero.css";

export default function RefHero() {
  const { t } = useLanguage();

  return (
    <header className="ref-hero">
      <div className="ref-hero-inner">
        <p className="ref-hero-label">{t("refHeroLabel")}</p>

        <h1 className="ref-hero-title">
          {t("refHeroTitleBase")}
          <br />
          <span className="ref-hero-accent">
            {t("refHeroTitleAccent")}
          </span>
        </h1>

        <div className="ref-hero-divider" />

        <p className="ref-hero-description">
          {t("refHeroDescription")}
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