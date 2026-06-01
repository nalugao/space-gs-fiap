import RefHero from '../components/referencias/RefHero'
import RefSection from '../components/referencias/RefSection'
import './referencias.css'
import { SECTIONS } from "../data/refData";


const Referencias = () => {
  return (
    <div className="page">
      <RefHero />
      <div className="content">
        {SECTIONS.map((section) => (
          <RefSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}

export default Referencias