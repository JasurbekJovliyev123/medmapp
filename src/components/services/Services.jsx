
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

const services = [
  {
    title: "Tibbiy xulosa va narxlar",
    description: "Tezkor fikrlar va xarajatlar smetasini oling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-clipboard-check">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Sayohatdan oldingi maslahatlar",
    description: "Sayohat qilishdan oldin davolanish jarayonini tushunib oling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-briefcase-medical">
        <path d="M12 11v4" />
        <path d="M14 13h-4" />
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      </svg>
    )
  },
  {
    title: "Viza yordami",
    description: "To'liq tibbiy viza yordamini oling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-stamp">
        <path d="M5 22h14" />
        <path d="M5 11h14" />
        <path d="M17 11v11" />
        <path d="M7 11v11" />
        <path d="M19 5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4h14Z" />
      </svg>
    )
  },
  {
    title: "Valyuta ayirboshlash",
    description: "Sizning shahringizdagi qulay valyuta ayirboshlash xizmatlari.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-banknote">
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    )
  },
  {
    title: "Tarjimonlar",
    description: "Har qadamda til to'siqlarini yengish uchun malakali mutaxassislar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-languages">
        <path d="m5 8 6 6" />
        <path d="m4 14 6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="m22 22-5-10-5 10" />
        <path d="M14 18h6" />
      </svg>
    )
  },
  {
    title: "Transport yordami",
    description: "Bepul aeroport transferlari.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-car-front">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H12c-.7 0-1.3.3-1.8.7C9.3 8.6 8 10 8 10s-2.7.6-4.5.8C2.7 11.1 2 11.9 2 12.8v3c0 .6.4 1 1 1h2" />
        <path d="M8 17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4H8v4Z" />
        <circle cx="7" cy="12" r="1" />
        <circle cx="17" cy="12" r="1" />
      </svg>
    )
  },
  {
    title: "Turar joy variantlari",
    description: "Kasalxona yaqinida va byudjetingizga mos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-bed-double">
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M12 4v6" />
        <path d="M2 18h20" />
      </svg>
    )
  },
  {
    title: "Qabul, Uchrashuv, Dori-darmon",
    description: "Tibbiy logistikaning to'liq muvofiqlashtirilishi.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-clipboard-plus">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M9 14h6" />
        <path d="M12 11v6" />
      </svg>
    )
  },
  {
    title: "Shaxsiy hamshiralik",
    description: "Zarur bo'lganda shaxsiy hamshiralik xizmatlarini tashkil etish.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-user-check">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    )
  }
];

export default OurServicesSection;
