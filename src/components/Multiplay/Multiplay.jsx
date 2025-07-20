import './multiplay.css'
const MultiSpecialtySection = () => {
  return (
    <section className="multi-specialty-section" id="category">
      <h2 className="section-title">Ko'p tarmoqli tibbiy yordam</h2>
      <p className="section-subtitle">
        Soch ko‘chirishdan tortib, yurak transplantatsiyasigacha bo‘lgan barcha tibbiy ehtiyojlaringizni qoplaymiz.
      </p>
      <div className="specialty-grid">
        {specialties.map((item, idx) => (
          <div key={idx} className="specialty-card">
            <div className="icon-wrapper" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
            <div className="text-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const specialties = [
  {
    title: "Onkologiya",
    desc: "Saraton kasalliklarini isbotlangan natijalar bilan davolash.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dna"><path d="M4 14.5A3.5 3.5 0 0 1 7.5 11H11a3.5 3.5 0 0 1 3.5 3.5v0A3.5 3.5 0 0 1 11 18H7.5a3.5 3.5 0 0 1-3.5-3.5Z"/><path d="M20 9.5A3.5 3.5 0 0 0 16.5 6H13a3.5 3.5 0 0 0-3.5 3.5v0A3.5 3.5 0 0 0 13 13h3.5a3.5 3.5 0 0 0 3.5-3.5Z"/><path d="M11 11v7"/><path d="M13 6v7"/></svg>`,
  },
  {
    title: "Neyroxirurgiya",
    desc: "Kattalar va bolalar uchun nevrologik jarrohlik muolajalari.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.993.295M12 5a3 3 0 1 1 5.993.295M15 13a3 3 0 1 0-5.993.295M15 13a3 3 0 1 1 5.993.295M9 13a3 3 0 1 0-5.993.295M9 13a3 3 0 1 1 5.993.295M17.5 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M17.5 17.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M6.5 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M6.5 17.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M12 5V2"/><path d="M12 21v-3"/><path d="m15 13 2.5-1.5"/><path d="M9 13l-2.5-1.5"/><path d="m15 13 2.5 1.5"/><path d="m9 13-2.5 1.5"/><path d="m17.5 8.5-2.5 1.5"/><path d="m6.5 8.5 2.5 1.5"/><path d="m17.5 17.5-2.5-1.5"/><path d="m6.5 17.5 2.5-1.5"/></svg>`,
  },
  {
    title: "Umurtqa pog'onasi jarrohligi",
    desc: "Harakatni yaxshilash uchun aniq jarrohlik amaliyotlari.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bone"><path d="M15.5 20a4.5 4.5 0 0 1-7 0"/><path d="M8.5 4a4.5 4.5 0 0 1 7 0"/><path d="M12.5 12a2.5 2.5 0 0 1-1 0"/><path d="M8.5 12H4a2.5 2.5 0 0 1 0-5h4.5"/><path d="M15.5 12H20a2.5 2.5 0 0 0 0-5h-4.5"/></svg>`,
  },
  {
    title: "Kardiologiya",
    desc: "Kattalar va bolalar uchun jahon darajasidagi yurak parvarishi.",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.7-1 2.1 4.4 3.2-7.4H22"/></svg>`,
  },
  {
    title: "Ortopediya",
    desc: "Bo'g'imlarni almashtirish va suyak deformatsiyasini davolash.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    title: "EKU (IVF)",
    desc: "Bepushtlikni yuqori muvaffaqiyat bilan davolash usullari.",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-test-tube-2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
  },
  {
    title: "Ginekologiya",
    desc: "Ayollar salomatligi uchun ixtisoslashgan xizmatlar.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-test-tube-2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
  },
  {
    title: "Kosmetik jarrohlik",
    desc: "Siz uchun yangi ko'rinish beruvchi estetik muolajalar.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-test-tube-2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
  },
  {
    title: "Vazn yo'qotish",
    desc: "Samarali bariatrik jarrohlik yo'li bilan vaznni kamaytirish.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-test-tube-2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
  },
  {
    title: "Jigar transplantatsiyasi",
    desc: "Turli murakkablikdagi jigar ko'chirish amaliyotlari.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-test-tube-2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
  },
  {
    title: "Buyrak transplantatsiyasi",
    desc: "Buyrakni ko'chirib o'tkazish va parvarishlash bo'yicha ekspert.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-test-tube-2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
  },
  {
    title: "Suyak iligi",
    desc: "Mos keluvchi va mos kelmaydigan donorlar uchun variantlar.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-test-tube-2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
  },
];

export default MultiSpecialtySection;
