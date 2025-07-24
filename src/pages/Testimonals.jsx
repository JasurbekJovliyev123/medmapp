import React from 'react'
import './testimonals.css'
const Testimonals = () => {
  return (
    <div>
      <section className="hero-testimonials">
          <div className="hero-content1">
            <h1>Sog'ayish Yo'li Haqiqatdir</h1>
            <p>
              Bizning bemorlarimizning MedMapp orqali sog'liqqa qaytish yo'lidagi
              ilhomlantiruvchi hikoyalari bilan tanishing.
            </p>
            <div className="trust-stats">
              <div className="stat-item">
                <span className="stat-number">1,000+</span>
                <span className="stat-label">Mamnun Bemorlar</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Ijobiy Fikrlar</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Mamlakatdan Bemorlar</span>
              </div>
            </div>
          </div>
      </section>

        <section className="testimonials-section">
            <div className="container">
              <div className="testimonials-grid">

                {/* Hikoya Karta 1 */}
                <div className="testimonial-card">
                  <div
                    className="testimonial-video"
                    data-video-url="https://www.youtube.com/embed/GpGugHf003c"
                  >
                    <img
                      src="https://placehold.co/600x440/007BFF/FFFFFF?text=Video+Hikoya"
                      alt="Bemor video hikoyasi"
                      className="thumbnail"
                    />
                    <div className="play-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="verified-badge">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Tasdiqlangan
                    </div>
                    <blockquote className="quote-section">
                      "MedMapp jamoasiga chuqur minnatdorchiligimni bildiraman. Ular nafaqat eng
                      yaxshi klinikani topishga yordam berishdi, balki butun safar davomida meni
                      qo'llab-quvvatlashdi."
                    </blockquote>
                    <div className="patient-info">
                      <img
                        src="https://placehold.co/120x120/333333/FFFFFF?text=A.V."
                        alt="Ali Valiyev"
                        className="patient-photo"
                      />
                      <div className="patient-details">
                        <h4>Ali Valiyev</h4>
                        <p>Buyrak transplantatsiyasi, Amrita Hospital</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hikoya Karta 2 */}
                <div className="testimonial-card">
                  <div className="card-content">
                    <div className="verified-badge">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Tasdiqlangan
                    </div>
                    <blockquote className="quote-section">
                      "Yuragimdagi muammo tufayli juda xavotirda edim. MedMapp menga Hindistondagi eng yaxshi kardiologlardan birini topishga yordam berdi. Natijalardan juda mamnunman!"
                    </blockquote>
                    <div className="patient-info">
                      <img
                        src="https://placehold.co/120x120/20c997/FFFFFF?text=N.K."
                        alt="Nodira Karimova"
                        className="patient-photo"
                      />
                      <div className="patient-details">
                        <h4>Nodira Karimova</h4>
                        <p>Yurak klapanini almashtirish, Fortis Escorts</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boshqa kartalar ham shu formatda qo'shiladi */}

              </div>
            </div>
        </section>

{/* ### HIKOYANGIZNI ULASHING CTA ### */}
        <section className="share-story-cta">
          <div className="container">
            <h2>Sizning ham hikoyangiz bormi?</h2>
            <p>
              Agar siz ham MedMapp orqali shifo topgan bo'lsangiz, o'z hikoyangizni biz bilan
              ulashing va boshqalarga ilhom bering.
            </p>
            <a href="#" className="btn-share">
              Hikoyangizni Yuboring
            </a>
          </div>
        </section>

    </div>
  )
}

export default Testimonals
