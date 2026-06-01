import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../components/context/LanguageContext";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">KS</span>
          <span className="logo-text">Kessler Shield</span>
        </NavLink>

        <button
          className={menuOpen ? "menu-button active" : "menu-button"}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={menuOpen ? "navbar-menu open" : "navbar-menu"}>
          <NavLink to="/" onClick={closeMenu}>
            {t("navInicio")}
          </NavLink>

          <NavLink to="/solucao" onClick={closeMenu}>
            {t("navSolucao")}
          </NavLink>

          <NavLink to="/financeiro" onClick={closeMenu}>
            {t("navFinanceiro")}
          </NavLink>

          <NavLink to="/referencias" onClick={closeMenu}>
            {t("navReferencias")}
          </NavLink>

          <NavLink to="/contato" onClick={closeMenu}>
            {t("navContato")}
          </NavLink>

          <div className="language-switch" aria-label="Selecionar idioma">
            <span className="language-icon">🌐</span>

            <button
              type="button"
              className={language === "PT" ? "language-option active" : "language-option"}
              onClick={() => changeLanguage("PT")}
            >
              PT
            </button>

            <span className="language-divider">/</span>

            <button
              type="button"
              className={language === "EN" ? "language-option active" : "language-option"}
              onClick={() => changeLanguage("EN")}
            >
              EN
            </button>
          </div>

          <NavLink
            to="/contato#doacao"
            className="navbar-cta"
            onClick={closeMenu}
          >
            {t("navInvestir")} →
          </NavLink>
        </div>
      </nav>
    </header>
  );
}