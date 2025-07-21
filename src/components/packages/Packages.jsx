import { useRef } from 'react';
import './packages.css';
import visit from '../../assets/images/visit.jpg';
import doctor6 from '../../assets/images/doctor6.jpg';
import doctor1 from '../../assets/images/doctors1.jpg';
import doctor3 from '../../assets/images/doctors3.png';
import hospital from '../../assets/images/hospital.jpg';
import hospital1 from '../../assets/images/hospital1.png';
import hospital2 from '../../assets/images/hospital2.png';
import room from '../../assets/images/room.jpg';
import dehli from '../../assets/images/Dehli.jpg';
import chennai from '../../assets/images/Chennai.jpg';

const Packages = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  const packages = [
    {
      id: 1,
      city: 'Mumbay',
      price: 1500,
      visit: visit,
      doctor: doctor6,
      hospital: hospital,
      stay: room,
    },
    {
      id: 2,
      city: 'Dehli',
      price: 1800,
      visit: dehli,
      doctor: doctor1,
      hospital: hospital1,
      stay: room,
    },
    {
      id: 3,
      city: 'Chennai',
      price: 2500,
      visit: chennai,
      doctor: doctor3,
      hospital: hospital2,
      stay: room,
    },
  ];

  return (
    <section className="most-popular-destinations-section container">
      <div className="section-header-with-nav">
        <h2 className="section-title">Eng mashhur shaharlar</h2>
        <div className="nav-buttons">
          <button className="nav-button" onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path d="m15 18-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="nav-button" onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="destination-carousel" ref={carouselRef}>
        {packages.map((p) => (
          <div key={p.id} className="destination-card-full">
            <div className="destination-card-header">
              <img src="https://flagcdn.com/w160/in.png" alt="India flag" />
              <h3>{p.city}</h3>
            </div>
            <div className="destination-card-images-grid">
              <div className="destination-card-image-item">
                <img src={p.visit} alt="Visit" />
                <span>Tashrif buyurish joylari</span>
              </div>
              <div className="destination-card-image-item">
                <img src={p.doctor} alt="Doctor" />
                <span>Shifokorlar</span>
              </div>
              <div className="destination-card-image-item">
                <img src={p.hospital} alt="Hospital" />
                <span>Kasalxonalar</span>
              </div>
              <div className="destination-card-image-item">
                <img src={p.stay} alt="Stay" />
                <span>Yashash</span>
              </div>
            </div>
            <div className="destination-card-footer">
              <span className="price">
                Paket narxi:<br />
                <span style={{ color: 'black' }}>${p.price} USD</span>
              </span>
              <a href="#" className="explore-button">
                Batafsil
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m12 5 7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
