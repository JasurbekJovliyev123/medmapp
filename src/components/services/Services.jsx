import { services } from '../../constans';
import './services.css'
const OurServicesSection = () => {
  return (
    <section className="our-services-section">
      <h2 className="section-title">
        Bizning xizmatlarimiz har bir ehtiyojni qamrab oladi
      </h2>
      <p className="section-subtitle">
        Sizga jamoamizning maxsus menejeri yordam beradi. Bizdan kutishingiz mumkin bo'lgan xizmatlar ro'yxati BEPUL.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="services-footer">
        <button className="chat-button-services">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle-more"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <path d="M8 12h.01" />
            <path d="M12 12h.01" />
            <path d="M16 12h.01" />
          </svg>
          Aloqa
        </button>
        <p className="services-note">
          Bizning xizmatlarimiz BEPUL va ulardan foydalanish sizning kasalxona hisobingizni oshirmaydi!
        </p>
      </div>
    </section>
  );
};



export default OurServicesSection;
