import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { saveLead, isValidEmail } from "../../data/formStorage";

export default function NewsletterForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
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

    saveLead("kessler_newsletter", formData);

    setFeedback({
      type: "success",
      message: t("sucessoNewsletter"),
    });

    setFormData({
      nome: "",
      email: "",
      autorizacao: false,
    });

    setErrors({});
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="newsletter-nome">{t("nome")} *</label>
        <input
          id="newsletter-nome"
          name="nome"
          type="text"
          placeholder={t("placeholderNome")}
          value={formData.nome}
          onChange={handleChange}
          className={errors.nome ? "input-error" : ""}
        />
      </div>

      <div className="form-group">
        <label htmlFor="newsletter-email">{t("email")} *</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder={t("placeholderEmail")}
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
      </div>

      <label
        className={
          errors.autorizacao
            ? "checkbox-group checkbox-error"
            : "checkbox-group"
        }
        htmlFor="newsletter-autorizacao"
      >
        <input
          id="newsletter-autorizacao"
          name="autorizacao"
          type="checkbox"
          checked={formData.autorizacao}
          onChange={handleChange}
        />
        <span>{t("autorizoNewsletter")} *</span>
      </label>

      <button type="submit" className="primary-button">
        {t("btnAssinar")} →
      </button>

      {feedback && (
        <p className={`form-feedback ${feedback.type}`}>
          {feedback.message}
        </p>
      )}
    </form>
  );
}