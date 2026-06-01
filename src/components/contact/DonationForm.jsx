import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { saveLead, isValidEmail } from "../../data/formStorage";

export default function DonationForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoInteresse: "",
    valor: "",
    mensagem: "",
    autorizacao: false,
  });

  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.nome.trim()) newErrors.nome = true;
    if (!formData.email.trim() || !isValidEmail(formData.email)) newErrors.email = true;
    if (!formData.telefone.trim()) newErrors.telefone = true;
    if (!formData.tipoInteresse) newErrors.tipoInteresse = true;
    if (!formData.mensagem.trim()) newErrors.mensagem = true;
    if (!formData.autorizacao) newErrors.autorizacao = true;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      setFeedback({
        type: "error",
        message: t("erroCampos"),
      });
      return;
    }

    saveLead("kessler_donations", formData);

    setFeedback({
      type: "success",
      message: t("sucessoDoacao"),
    });

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      tipoInteresse: "",
      valor: "",
      mensagem: "",
      autorizacao: false,
    });

    setErrors({});
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="donation-nome">{t("nome")} *</label>
          <input
            id="donation-nome"
            name="nome"
            type="text"
            placeholder={t("placeholderNome")}
            value={formData.nome}
            onChange={handleChange}
            className={errors.nome ? "input-error" : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="donation-email">{t("email")} *</label>
          <input
            id="donation-email"
            name="email"
            type="email"
            placeholder={t("placeholderEmail")}
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="donation-telefone">{t("telefone")} *</label>
          <input
            id="donation-telefone"
            name="telefone"
            type="tel"
            placeholder={t("placeholderTelefone")}
            value={formData.telefone}
            onChange={handleChange}
            className={errors.telefone ? "input-error" : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="donation-tipo">{t("tipoInteresse")} *</label>
          <select
            id="donation-tipo"
            name="tipoInteresse"
            value={formData.tipoInteresse}
            onChange={handleChange}
            className={errors.tipoInteresse ? "input-error" : ""}
          >
            <option value="">{t("selecioneOpcao")}</option>
            <option value="doacao">{t("opcaoDoacao")}</option>
            <option value="investidor">{t("opcaoInvestidor")}</option>
            <option value="design-partner">{t("opcaoDesignPartner")}</option>
            <option value="parceria">{t("opcaoParceria")}</option>
            <option value="apoio-tecnico">{t("opcaoApoioTecnico")}</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="donation-valor">{t("valor")}</label>
        <input
          id="donation-valor"
          name="valor"
          type="text"
          placeholder={t("placeholderValor")}
          value={formData.valor}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="donation-mensagem">{t("mensagem")} *</label>
        <textarea
          id="donation-mensagem"
          name="mensagem"
          placeholder={t("placeholderMensagem")}
          value={formData.mensagem}
          onChange={handleChange}
          className={errors.mensagem ? "input-error" : ""}
        />
      </div>

      <label
        className={
          errors.autorizacao
            ? "checkbox-group checkbox-error"
            : "checkbox-group"
        }
        htmlFor="donation-autorizacao"
      >
        <input
          id="donation-autorizacao"
          name="autorizacao"
          type="checkbox"
          checked={formData.autorizacao}
          onChange={handleChange}
        />
        <span>{t("autorizoContato")} *</span>
      </label>

      <button type="submit" className="primary-button">
        {t("btnEnviarInteresse")} →
      </button>

      {feedback && (
        <p className={`form-feedback ${feedback.type}`}>
          {feedback.message}
        </p>
      )}
    </form>
  );
}