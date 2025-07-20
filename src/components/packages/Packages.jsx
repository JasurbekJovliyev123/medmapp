import './packages.css'
import visit from '../../assets/images/visit.jpg'
import doctor6 from '../../assets/images/doctor6.jpg'
import doctor1 from '../../assets/images/doctors1.jpg'
import doctor3 from '../../assets/images/doctors3.png'
import hospital from '../../assets/images/hospital.jpg'
import hospital1 from '../../assets/images/hospital1.png'
import hospital2 from '../../assets/images/hospital2.png'
import room from '../../assets/images/room.jpg'
import dehli from '../../assets/images/Dehli.jpg'
import chennai from '../../assets/images/Chennai.jpg'
const Packages = () => {
  return (
    <section className="most-popular-destinations-section">
      <div className="section-header-with-nav">
        <h2 className="section-title">Eng mashhur shaharlar</h2>
        <div className="nav-buttons">
          <button className="nav-button" id="prevDestination">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="nav-button" id="nextDestination">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="destination-cards-grid">
        {/* Destination Card 1 */}
        <div className="destination-card-full">
          <div className="destination-card-header">
            <img src="https://flagcdn.com/w160/in.png" alt="Germany flag" />
            <h3>Mumbay</h3>
          </div>
          <div className="destination-card-images-grid">
            <div className="destination-card-image-item">
              <img src={visit} alt="Places to Visit in India" />
              <span>Tashrif buyurish joylari</span>
            </div>
            <div className="destination-card-image-item">
              <img src={doctor6} alt="Doctors in India" />
              <span>Shifokorlar</span>
            </div>
            <div className="destination-card-image-item">
              <img src={hospital} alt="Hospitals in India" />
              <span>Kasalxonalar</span>
            </div>
            <div className="destination-card-image-item">
              <img src={room} alt="Stay in India" />
              <span>Yashash</span>
            </div>
          </div>
          <div className="destination-card-footer">
            <span className="price">
              Paket narxi:<br />
              <span style={{ color: "black" }}>$1500 USD</span>
            </span>
            <a href="#" className="explore-button">
              Batafsil
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Destination Card 2 */}
        <div className="destination-card-full">
          <div className="destination-card-header">
            <img src="https://flagcdn.com/w160/in.png" alt="Germany flag" />
            <h3>Dehli</h3>
          </div>
          <div className="destination-card-images-grid">
            <div className="destination-card-image-item">
              <img src={dehli} alt="Places to Visit in India" />
              <span>Tashrif buyurish joylari</span>
            </div>
            <div className="destination-card-image-item">
              <img src={doctor1} alt="Doctors in India" />
              <span>Shifokorlar</span>
            </div>
            <div className="destination-card-image-item">
              <img src={hospital1} alt="Hospitals in India" />
              <span>Kasalxonalar</span>
            </div>
            <div className="destination-card-image-item">
              <img src={room} alt="Stay in India" />
              <span>Yashash</span>
            </div>
          </div>
          <div className="destination-card-footer">
            <span className="price">
              Paket narxi:<br />
              <span style={{ color: "black" }}>$1800 USD</span>
            </span>
            <a href="#" className="explore-button">
              Batafsil
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Destination Card 3 */}
        <div className="destination-card-full">
          <div className="destination-card-header">
            <img src="https://flagcdn.com/w160/in.png" alt="Germany flag" />
            <h3>Chennai</h3>
          </div>
          <div className="destination-card-images-grid">
            <div className="destination-card-image-item">
              <img src={chennai} alt="Places to Visit in India" />
              <span>Tashrif buyurish joylari</span>
            </div>
            <div className="destination-card-image-item">
              <img src={doctor3} alt="Doctors in India" />
              <span>Shifokorlar</span>
            </div>
            <div className="destination-card-image-item">
              <img src={hospital2} alt="Hospitals in India" />
              <span>Kasalxonalar</span>
            </div>
            <div className="destination-card-image-item">
              <img src={room} alt="Stay in India" />
              <span>Yashash</span>
            </div>
          </div>
          <div className="destination-card-footer">
            <span className="price">
              Paket narxi:<br />
              <span style={{ color: "black" }}>$2500 USD</span>
            </span>
            <a href="#" className="explore-button">
              Batafsil
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
