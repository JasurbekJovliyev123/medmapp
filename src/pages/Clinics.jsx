import React from 'react'
import './clinik.css'
import amrita from '../assets/images/1.jpg'
const Clinics = () => {
  return (
    <div>
      <section className="page-hero-creative">
  <div className="container">
    <h1>Eng Yaxshi Klinikalarni Toping</h1>
    <p>
      Dunyoning yetakchi shifoxonalari orasidan o'zingizga mosini tanlang va sog'ligingizga sarmoya kiriting.
    </p>
  </div>
  <div className="wave-shape"></div>
      </section>

     <section className="clinics-list-section">
  <div className="container">
    <div className="filters-section">
      <div className="filters-container">
        <div className="filter-group">
          <select id="filter-specialty" aria-label="Yo'nalish bo'yicha filtr">
            <option value="all">Barcha yo'nalishlar</option>
            <option value="kardiologiya">Kardiologiya</option>
            <option value="onkologiya">Onkologiya</option>
            <option value="nevrologiya">Nevrologiya</option>
          </select>
        </div>
        <div className="filter-group">
          <select id="filter-country" aria-label="Davlat bo'yicha filtr">
            <option value="all">Barcha davlatlar</option>
            <option value="hindiston">Hindiston</option>
            <option value="turkiya">Turkiya</option>
          </select>
        </div>
        <div className="filter-group">
          <select id="filter-city" aria-label="Shahar bo'yicha filtr">
            <option value="all">Barcha shaharlar</option>
            <option value="faridabad">Faridabad</option>
            <option value="dehli">Dehli</option>
          </select>
        </div>
      </div>
    </div>

    <p id="clinics-count" style={{ textAlign: "center", marginBottom: "2rem" }}></p>

    <div className="clinics-grid" id="clinics-grid">
      <div
        className="clinic-card-item"
        data-specialty="kardiologiya,onkologiya,nevrologiya"
        data-country="hindiston"
        data-city="faridabad"
        data-href="Amrita-hospital.html"
      >
        <img
          src={amrita}
          alt="Amrita Hospital binosi"
          className="card-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/007BFF/FFFFFF?text=Amrita";
          }}
        />
        <div className="card-content">
          <h3>Amrita Hospital, Faridabad</h3>
          <p className="location">
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
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Faridabad, Hindiston
          </p>
          <div className="card-footer">
            <span className="accreditation">NABH</span>
            <span className="details-link">Batafsil →</span>
          </div>
        </div>
      </div>
    </div>
  </div>
     </section>

    </div>
  )
}

export default Clinics
