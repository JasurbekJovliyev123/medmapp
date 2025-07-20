  import React from 'react'
  import './price.css'
  const Prices = () => {
    return (
      <div>
                <section className="lowest-quotes-section">
                <h2 className="section-title">Kafolatlangan eng arzon narxlar</h2>
                <p className="section-subtitle">
                  Biz doimiy ravishda davolash sifatini pasaytirmasdan yaxshiroq narxlar va
                  alternativalar bo'yicha muzokaralar olib boramiz. Bizning narxlarimiz
                  doimiy ravishda past.
                </p>

          <div className="quotes-grid">
            {/* Tizzani almashtirish */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bone"><path d="M15.5 20a4.5 4.5 0 0 1-7 0"/><path d="M8.5 4a4.5 4.5 0 0 1 7 0"/><path d="M12.5 12a2.5 2.5 0 0 1-1 0"/><path d="M8.5 12H4a2.5 2.5 0 0 1 0-5h4.5"/><path d="M15.5 12H20a2.5 2.5 0 0 0 0-5h-4.5"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Tizzani almashtirish</h3>
                <p>Boshlanish narxi <strong>$4000</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Son suyagini almashtirish */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bone"><path d="M15.5 20a4.5 4.5 0 0 1-7 0"/><path d="M8.5 4a4.5 4.5 0 0 1 7 0"/><path d="M12.5 12a2.5 2.5 0 0 1-1 0"/><path d="M8.5 12H4a2.5 2.5 0 0 1 0-5h4.5"/><path d="M15.5 12H20a2.5 2.5 0 0 0 0-5h-4.5"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Son suyagini almashtirish</h3>
                <p>Boshlanish narxi <strong>$5500</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Miya shishi */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.993.295M12 5a3 3 0 1 1 5.993.295M15 13a3 3 0 1 0-5.993.295M15 13a3 3 0 1 1 5.993.295M9 13a3 3 0 1 0-5.993.295M9 13a3 3 0 1 1 5.993.295M17.5 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M17.5 17.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M6.5 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M6.5 17.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M12 5V2"/><path d="M12 21v-3"/><path d="m15 13 2.5-1.5"/><path d="m9 13-2.5-1.5"/><path d="m15 13 2.5 1.5"/><path d="m9 13-2.5 1.5"/><path d="m17.5 8.5-2.5 1.5"/><path d="m6.5 8.5 2.5 1.5"/><path d="m17.5 17.5-2.5-1.5"/><path d="m6.5 17.5 2.5-1.5"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Miya shishi</h3>
                <p>Boshlanish narxi <strong>$5000</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Yurak jarrohligi */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.7-1 2.1 4.4 3.2-7.4H22"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Yurak jarrohligi</h3>
                <p>Boshlanish narxi <strong>$4500</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Valfni almashtirish */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-crack"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><path d="m16 14-4-4-4 4"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Valfni almashtirish</h3>
                <p>Boshlanish narxi <strong>$9500</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Ko'krak bezi saratoni */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ribbon"><path d="M12.5 13.63a2 2 0 0 1-3 0Z"/><path d="M15.03 8.37a6 6 0 0 1 4.6-4.23l-1.5-2.88-1.08 1.1a4 4 0 0 0-5.1-5.1L10.86.14 8 .61a6 6 0 0 0 4.23 4.6l-2.88 1.5 1.1 1.08a4 4 0 0 1 5.1 5.1l-1.1 1.08 2.88 1.5a6 6 0 0 0-4.6 4.23l1.5 2.88 1.08-1.1a4 4 0 0 1 5.1 5.1l1.08 1.1-1.5 2.88a6 6 0 0 1-4.23-4.6l-1.5-2.88-1.08 1.1a4 4 0 0 0-5.1-5.1l-1.08-1.1 1.5-2.88a6 6 0 0 0 4.6-4.23Z"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Ko'krak bezi saratoni</h3>
                <p>Boshlanish narxi <strong>$5500</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* O'pka saratoni */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lungs"><path d="M12 21c-4 0-7-2-7-6V9c0-4.5 3-6 6-6h2c3 0 6 1.5 6 6v6c0 4-3 6-7 6Z"/><path d="M8 14v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4"/><path d="M12 9v12"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>O'pka saratoni</h3>
                <p>Boshlanish narxi <strong>$5500</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Rinoplastika */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Rinoplastika</h3>
                <p>Boshlanish narxi <strong>$1800</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Ko'krak implantlari */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ribbon"><path d="M12.5 13.63a2 2 0 0 1-3 0Z"/><path d="M15.03 8.37a6 6 0 0 1 4.6-4.23l-1.5-2.88-1.08 1.1a4 4 0 0 0-5.1-5.1L10.86.14 8 .61a6 6 0 0 0 4.23 4.6l-2.88 1.5 1.1 1.08a4 4 0 0 1 5.1 5.1l-1.1 1.08 2.88 1.5a6 6 0 0 0-4.6 4.23l1.5 2.88 1.08-1.1a4 4 0 0 1 5.1 5.1l1.08 1.1-1.5 2.88a6 6 0 0 1-4.23-4.6l-1.5-2.88-1.08 1.1a4 4 0 0 0-5.1-5.1l-1.08-1.1 1.5-2.88a6 6 0 0 0 4.6-4.23Z"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Ko'krak implantlari</h3>
                <p>Boshlanish narxi <strong>$2750</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Soch ko'chirish */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-cog"><circle cx="18" cy="15" r="3"/><path d="M19.34 18.34 22 21"/><path d="m22 15-2.66-2.66"/><path d="m15 22 2.66-2.66"/><path d="m18 12 2.66 2.66"/><path d="M12 20a8 8 0 0 0 3.3-15.7"/><path d="M5 20a8 8 0 0 1 10-7.72"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Soch ko'chirish</h3>
                <p>Boshlanish narxi <strong>$1400</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Bachadon bo'yni saratoni */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dna"><path d="M4 14.5A3.5 3.5 0 0 1 7.5 11H11a3.5 3.5 0 0 1 3.5 3.5v0A3.5 3.5 0 0 1 11 18H7.5a3.5 3.5 0 0 1-3.5-3.5Z"/><path d="M20 9.5A3.5 3.5 0 0 0 16.5 6H13a3.5 3.5 0 0 0-3.5 3.5v0A3.5 3.5 0 0 0 13 13h3.5a3.5 3.5 0 0 0 3.5-3.5Z"/><path d="M11 11v7"/><path d="M13 6v7"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Bachadon bo'yni saratoni</h3>
                <p>Boshlanish narxi <strong>$4500</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>

            {/* Gisterektomiya */}
            <div className="quote-card">
              <div className="quote-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-plus"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v8"/><path d="M16 12H8"/></svg>
              </div>
              <div className="quote-text-content">
                <h3>Gisterektomiya</h3>
                <p>Boshlanish narxi <strong>$3000</strong></p>
                <a href="#">Batafsil</a>
              </div>
            </div>
          </div>

          <div className="quotes-actions">
            <button className="quote-button-get">Ro'yxatdan o'tish</button>
            <button className="quote-button-chat">Aloqa</button>
          </div>
        </section>
          
      </div>

    )
  }
  
  export default Prices
  