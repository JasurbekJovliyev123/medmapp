import './tratments.css'
const TreatmentsSection = () => {
  return (
    <>
      <section className="page-hero-creative">
        <div className="container">
          <h1>Ilg'or Davolash Usullari</h1>
          <p>Jahon standartlariga mos keluvchi eng zamonaviy davolash usullari bilan tanishing.</p>
        </div>
        <div className="wave-shape"></div>
      </section>

      <section className="treatments-main-section">
        <div className="treatments-container">
          <div className="treatments-grid">
            
            {/* Davolash usuli kartasi 1 */}
            <div className="treatment-card">
              <img
                src="https://placehold.co/600x400/007BFF/FFFFFF?text=Angioplastika"
                alt="Angioplastika"
                className="treatment-card-image"
              />
              <div className="treatment-card-content">
                <h3>Angioplastika va Stentlash</h3>
                <p>
                  Yurak qon tomirlarini kengaytirish va qon oqimini tiklash uchun
                  qo'llaniladigan minimal invaziv muolaja. Bu usul yurak xuruji
                  xavfini kamaytiradi.
                </p>
                <div className="treatment-card-footer">
                  <a href="pricing.html" className="details-link">
                    Narxlarni ko'rish →
                  </a>
                </div>
              </div>
            </div>

            {/* Davolash usuli kartasi 2 */}
            <div className="treatment-card">
              <img
                src="https://placehold.co/600x400/20c997/FFFFFF?text=Tizza+almashtirish"
                alt="Tizza bo'g'imini almashtirish"
                className="treatment-card-image"
              />
              <div className="treatment-card-content">
                <h3>Tizza bo'g'imini almashtirish</h3>
                <p>
                  Artirit yoki jarohat tufayli shikastlangan tizza bo'g'imini
                  sun'iy implant bilan almashtirish. Bu harakat erkinligini
                  tiklaydi va og'riqni yo'qotadi.
                </p>
                <div className="treatment-card-footer">
                  <a href="pricing.html" className="details-link">
                    Narxlarni ko'rish →
                  </a>
                </div>
              </div>
            </div>

            {/* Davolash usuli kartasi 3 */}
            <div className="treatment-card">
              <img
                src="https://placehold.co/600x400/6f42c1/FFFFFF?text=Kimyoterapiya"
                alt="Kimyoterapiya"
                className="treatment-card-image"
              />
              <div className="treatment-card-content">
                <h3>Kimyoterapiya</h3>
                <p>
                  Saraton hujayralarini yo'q qilish yoki ularning o'sishini
                  sekinlashtirish uchun maxsus dori-darmonlardan foydalanish.
                  Davolash rejasi individual tuziladi.
                </p>
                <div className="treatment-card-footer">
                  <a href="pricing.html" className="details-link">
                    Narxlarni ko'rish →
                  </a>
                </div>
              </div>
            </div>

            {/* Yana kartalar shu yerga qo'shiladi */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentsSection;
