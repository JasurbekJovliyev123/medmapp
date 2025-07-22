import React from 'react'
import './test.css'
import doctor5 from '../../assets/images/doctor5.jpg'
const Test = () => {
  return (
    <section className="try-now-section-v2">
  <div className="container">
    <div className="try-now-content-v2">
      {/* Chap ustun: Sarlavha va Rasm */}
      <div className="try-now-left-col">
        <h2 className="section-title-left">Hozir sinab ko'ring</h2>
        <p className="section-subtitle-left">
          Sog'liqni saqlash bo'yicha ehtiyojlaringiz uchun tez va ishonchli yechimlar.
        </p>
        <div className="doctor-image-wrapper">
          <img src={doctor5} alt="Shifokor maslahat bermoqda" />
          <div className="decorative-shape shape-1"></div>
          <div className="decorative-shape shape-2"></div>
        </div>
      </div>
      <div className="try-now-right-col">
        <div className="try-now-options-v2">
          <div className="option-card-v2">
            <div className="option-icon-v2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-video">
                <path d="m22 8-6 4 6 4V8Z" />
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
              </svg>
            </div>
            <div className="option-text-v2">
              <h3>Onlayn shifokor maslahatini oling</h3>
              <p>Uyingizdan chiqmasdan turib, tajribali shifokorlar bilan bog'laning.</p>
            </div>
            <a href="#" className="option-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-arrow-right">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="option-card-v2 active">
            <div className="option-icon-v2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-file-text">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </div>
            <div className="option-text-v2">
              <h3>Ikkinchi fikrni oling</h3>
              <p>Hisobotlaringizni yuboring va bepul mutaxassis fikrini oling.</p>
              <button className="chat-button-v2">
                Sog'liqni saqlash mutaxassisi bilan chat
              </button>
            </div>
          </div>
          <div className="option-card-v2">
            <div className="option-icon-v2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-gem">
                <path d="M6 3h12l4 6-10 13L2 9Z" />
                <path d="M12 22V9" />
                <path d="m3.29 9 8.71 13 8.71-13" />
              </svg>
            </div>
            <div className="option-text-v2">
              <h3>Sog'lomlashtirish xizmatlari</h3>
              <p>Jahon darajasidagi sog'lomlashtirish markazlarida dam oling.</p>
              <div className="phone-input-group-v2">
                <input type="text" placeholder="Mobil raqam..." />
                <button className="notify-button-v2">So'rov yuborish</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Test
