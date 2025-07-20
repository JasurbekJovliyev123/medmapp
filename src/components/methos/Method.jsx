import React from "react";
import './method.css'
import buyrak from '../../assets/images/buyrak.jpg'
import burun from '../../assets/images/burun.jpg'
import miya from '../../assets/images/miya.jpg'
const TreatmentSection = () => {
  return (
    <section className="find-treatment-section">
      <h2 className="section-title">Davolash usulingizni tanlang</h2>
      <div className="treatment-grid">
        {/* 1 - Buyrak */}
        <div className="treatment-card">
          <img src={buyrak} alt="Health Check up" />
          <div className="treatment-card-content">
            <h3>Buyrak transplatatsiyasi</h3>
            <div className="rating">
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} filled />
              ))}
              <StarIcon filled={false} />
              <span>4.0</span>
            </div>
            <InfoBlock icon="map-pin" text="Mumbay Markaziy shifoxonasi, Hindiston" />
            <InfoBlock icon="calendar" text="3 Kun" />
            <InfoBlock icon="user" text="Dr. Ayman Hameed Ali" />
            <div className="treatment-price">
              Paket narxi: <span style={{ color: "black" }}>$3000</span>
            </div>
            <ExploreButton />
          </div>
        </div>

        {/* 2 - Burun */}
        <div className="treatment-card">
          <img src={burun} alt="5 Day Relaxation" />
          <div className="treatment-card-content">
            <h3>Burun operatsiyasi</h3>
            <div className="rating">
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} filled />
              ))}
              <StarIcon filled={false} />
              <span>4.5</span>
            </div>
            <InfoBlock icon="map-pin" text="Dehli Markaziy shifoxonasi, Hindiston" />
            <InfoBlock icon="calendar" text="3 Kun" />
            <InfoBlock icon="user" text="Dr. Suraj Munjal" />
            <div className="treatment-price">
              Paket narxi: <span style={{ color: "black" }}>$2000</span>
            </div>
            <ExploreButton />
          </div>
        </div>

        {/* 3 - Miya */}
        <div className="treatment-card">
          <img src={miya} alt="Brain Tumor Surgery" />
          <div className="treatment-card-content">
            <h3>Miya shishi jarrohligi</h3>
            <div className="rating">
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} filled />
              ))}
              <StarIcon filled={false} />
              <span>4.0</span>
            </div>
            <InfoBlock icon="map-pin" text="Hindiston Markaziy shifoxonasi, Hindiston" />
            <InfoBlock icon="calendar" text="3 Kun" />
            <InfoBlock icon="user" text="Prof. S. Natarajan" />
            <div className="treatment-price">
              Paket narxi: <span style={{ color: "black" }}>$1300</span>
            </div>
            <ExploreButton />
          </div>
        </div>
      </div>
    </section>
  );
};

const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-star"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const InfoBlock = ({ icon, text }) => {
  const icons = {
    "map-pin": (
      <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-map-pin" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    calendar: (
      <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-calendar" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    user: (
      <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-user" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  };

  return (
    <div className="treatment-info">
      {icons[icon]}
      {text}
    </div>
  );
};

const ExploreButton = () => (
  <a href="#" className="explore-button">
    Davolash usulini tanlash
    <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </a>
);

export default TreatmentSection;
