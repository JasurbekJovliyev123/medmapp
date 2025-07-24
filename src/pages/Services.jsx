import React from 'react';
import './services.css';

const ServicesPage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Bizning To'liq Xizmatlarimiz</h1>
          <p>
            Biz shunchaki davolanishni tashkil qilmaymiz, biz sizning to'liq sog'ayish yo'lingizda ishonchli hamrohingiz bo'lamiz.
          </p>
          <a href="#services-process" className="chat-button">
            Xizmatlar bilan tanishish
          </a>
        </div>
      </section>

      <section className="how-we-work-section" id="services-process">
        <div className="container">
          <h2 className="section-title">Sog'ayish Sari Yo'lingiz</h2>
          <p className="section-subtitle">
            Bizning g'amxo'rligimiz sizning sayohatingizning har bir bosqichini qamrab oladi.
          </p>

          <div className="how-we-work-content">
            <div className="timeline">
              {/* Step 1 */}
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-card">
                  <div className="card-icon icon-blue">
                    {/* Icon 1 */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 14 2 2 4-4"/></svg>
                  </div>
                  <div className="card-text">
                    <h3>Sayohatdan Oldingi Bepul Xizmatlar</h3>
                    <ul className="service-details-list">
                      <li>Tibbiy hisobotlaringiz asosida klinikalardan xulosa va narx takliflari.</li>
                      <li>Eng yaxshi shifokor va klinikani tanlashda yordam.</li>
                      <li>Shifokor bilan video-maslahat tashkil etish.</li>
                      <li>Tibbiy viza uchun kerakli hujjatlar tayyorlash.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-card">
                  <div className="card-icon icon-green">
                    {/* Icon 2 */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.7-1 2.1 4.4 3.2-7.4H22"/></svg>
                  </div>
                  <div className="card-text">
                    <h3>Sayohat Davomidagi Qo'llab-quvvatlash</h3>
                    <ul className="service-details-list">
                      <li>Aeroportdan kutib olish va transfer xizmati.</li>
                      <li>Shifokor bilan muloqotda tarjimon xizmati.</li>
                      <li>Klinikaga yaqin turar joy band qilish.</li>
                      <li>24/7 savollarga yordam va aloqa.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-card">
                  <div className="card-icon icon-orange">
                    {/* Icon 3 */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div className="card-text">
                    <h3>Sayohatdan Keyingi G'amxo'rlik</h3>
                    <ul className="service-details-list">
                      <li>Onlayn kuzatuvlar tashkil etish.</li>
                      <li>Tarjima qilingan tibbiy xulosalar.</li>
                      <li>Dori-darmonlar va davolash kurslari bo‘yicha maslahat.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="services-footer">
            <p className="services-note highlight">
              Unutmang, bizning barcha tashkiliy xizmatlarimiz siz uchun mutlaqo <span className="text-green">BEPUL!</span>
            </p>
            <p className="services-note sub">
              Bu sizning klinika hisobingizni oshirmaydi. Biz hamkor klinikalardan marketing xizmatlari uchun haq olamiz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
