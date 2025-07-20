import { useRef } from 'react';
import './hospital.css';
import hospital1 from '../../assets/images/hospital1.png'
import hospital2 from '../../assets/images/hospital2.png'
import hospital from '../../assets/images/hospital.jpg'
const hospitals = [
  { id: 1, name: "Fortis Hospital, Noida", city: "Delhi / NCR", image: hospital1 },
  { id: 2, name: "Fortis Escorts Heart Institute", city: "New Delhi", image: hospital2 },
  { id: 3, name: "Fortis Vasant Kunj", city: "New Delhi", image: hospital },
  { id: 4, name: "Fortis Memorial Research Institute", city: "Gurgaon", image: hospital1},
  { id: 5, name: "Apollo Hospitals", city: "Chennai", image: hospital2 },
];

const HospitalCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="popular-hospitals-section">
      <div className="section-header-with-nav">
        <h2 className="section-title">Mashhur Klinikalar</h2>
        <a href="#" className="view-all-link">Hammasini ko‘rish</a>
      </div>

      <div className="hospital-carousel-container">
        <button className="nav-button" id="prevHospital" onClick={scrollLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="hospital-carousel" ref={carouselRef}>
          {hospitals.map((h) => (
            <div key={h.id} className="hospital-card-wrapper">
              <div className="hospital-card">
                <img src={h.image} alt={h.name} />
                <div className="hospital-card-content">
                  <h3>{h.name}</h3>
                  <p>{h.city}</p>
                  <a href="#" className="view-details">
                    Batafsil ko‘rish
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="m12 5 7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button" id="nextHospital" onClick={scrollRight}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HospitalCarousel;
