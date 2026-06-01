import RefHero from "../components/referencias/RefHero";
import RefSection from "../components/referencias/RefSection";
import { useLanguage } from "../components/context/LanguageContext";
import { getSections } from "../data/refData";
import "./referencias.css";

const Referencias = () => {
  const { language } = useLanguage();

  const sections = getSections(language);

  return (
    <div className="page">
      <RefHero />

      <div className="content">
        {sections.map((section) => (
          <RefSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Referencias;