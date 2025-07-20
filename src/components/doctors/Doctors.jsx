import './doctors.css'
import doctor1 from '../../assets/images/doctor1.png'
import doctor2 from '../../assets/images/doctor2.jpg'
import doctor3 from '../../assets/images/doctor4.jpg'

const PopularDoctorsSection = () => {
  return (
    <section className="popular-doctors-section">
      <h2 className="section-title">Mashhur shifokorlar</h2>
      <div className="doctor-grid">
        {doctors.map((doc, idx) => (
          <div className="doctor-card" key={idx}>
            <img src={doc.image} alt={doc.name} />
            <h3>{doc.name}</h3>
            <p className="specialty">{doc.specialty}</p>
            <div className="rating">
              {[...Array(doc.ratingFull)].map((_, i) => (
                <StarIcon key={i} filled />
              ))}
              {[...Array(5 - doc.ratingFull)].map((_, i) => (
                <StarIcon key={i + doc.ratingFull} filled={false} />
              ))}
              <span>{doc.rating.toFixed(1)}</span>
            </div>
            <div className="doctor-details">
              {doc.details.map((detail, i) => (
                <DetailIcon key={i} icon={detail.icon} text={detail.text} />
              ))}
            </div>
            <a href="#" className="consultancy-link">
              Bepul maslahat oling
            </a>
            <button
              className="request-appointment-button"
              data-doctor-name={doc.name}
            >
              Uchrashuv so'rash
            </button>
            <p className="data-protection">
              <LockIcon />
              Sizning sog'liq ma'lumotlaringiz himoyalangan
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};


const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-star"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const DetailIcon = ({ icon, text }) => (
  <div>
    {icon}
    {text}
  </div>
);

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-lock"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/** Ma'lumotlar massivi **/

const doctors = [
  {
    name: "Dr. Pradeep Chowbey",
    image: doctor1,
    specialty: "Rais - Laparoskopik, Endoskopik, Bariatrik jarrohlik instituti",
    rating: 4.0,
    ratingFull: 4,
    details: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-message-circle"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        ),
        text: "Maslahatlar: Max Healthcare Saket"
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-briefcase"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        ),
        text: "Tajriba: 45+ yil"
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-scalpel"
          >
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
            <path d="M18 6l-6 6" />
            <path d="M6 18l6-6" />
          </svg>
        ),
        text: "Jarrohlik amaliyotlari: 85000+"
      }
    ]
  },
  {
    name: "Prof. S. Natarajan",
    image: doctor2,
    specialty: "Vitreoretinal jarroh, Bosh klinik xizmatlar",
    rating: 5.0,
    ratingFull: 5,
    details: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
        ),
        text: "Maslahatlar: Dr Agarwal Eye Hospital, Wadala, Mumbai"
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        ),
        text: "Tajriba: 36 yil"
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scalpel"><path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M18 6l-6 6"/><path d="M6 18l6-6"/></svg>
        ),
        text: "Jarrohlik amaliyotlari: 80000+"
      }
    ]
  },
  {
    name: "Dr. Suraj Munjal",
    image:doctor3,
    specialty: "Tibbiy direktor - Oftalmologiya",
    rating: 5.0,
    ratingFull: 5,
    details: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
        ),
        text: "Maslahatlar: The Sight Avenue, New Delhi"
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        ),
        text: "Tajriba: 17 yil"
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scalpel"><path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M18 6l-6 6"/><path d="M6 18l6-6"/></svg>
        ),
        text: "Jarrohlik amaliyotlari: 5000+"
      }
    ]
  }
];

export default PopularDoctorsSection;
