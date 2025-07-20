import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hospital1 from '../../assets/images/hospital1.png'
import hospital2 from '../../assets/images/hospital2.png'
import hospital from '../../assets/images/hospital.jpg'
import './hospital.css'
const hospitals = [ 
  { id: 1, name: "Apollo Hospital", image:hospital1 },
  { id: 2, name: "Medeor Hospital", image: hospital2 },
  { id: 3, name: "Max Healthcare", image: hospital },
  { id: 4, name: "Fortis Hospital", image: hospital1 },
  { id: 5, name: "Manipal Hospital", image: hospital2 },
];

const HospitalCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // nechta ko‘rsatilsin
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // mobilda
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="popular-hospitals-section">
      <div className="section-header-with-nav">
        <h2 className="section-title">Mashhur Klinikalar</h2>
        <a href="#" className="view-all-link">Hammasini ko‘rish</a>
      </div>

      <div className="hospital-carousel-container">
        <Slider {...settings}>
          {hospitals.map((h) => (
            <div key={h.id} className="hospital-card">
              <img src={h.image} alt={h.name} style={{ borderRadius: "10px", width: "100%", height: "200px", objectFit: "cover" }} />
              <h3 style={{ marginTop: "1rem" }}>{h.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// O'ngga o‘tish tugmasi
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div id="nextHospital" className="nav-button" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

// Chapga o‘tish tugmasi
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div id="prevHospital" className="nav-button" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

export default HospitalCarousel;
