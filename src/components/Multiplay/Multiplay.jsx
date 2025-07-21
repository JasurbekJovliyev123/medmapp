import './multiplay.css'
import { specialties } from '../../constans';
const MultiSpecialtySection = () => {
  return (
    <section className="multi-specialty-section" id="category">
      <h2 className="section-title">Ko'p tarmoqli tibbiy yordam</h2>
      <p className="section-subtitle">
        Soch ko‘chirishdan tortib, yurak transplantatsiyasigacha bo‘lgan barcha tibbiy ehtiyojlaringizni qoplaymiz.
      </p>
      <div className="specialty-grid">
        {specialties.map((item, idx) => (
          <div key={idx} className="specialty-card">
            <div className="icon-wrapper" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
            <div className="text-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default MultiSpecialtySection;
