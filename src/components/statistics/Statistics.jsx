import { useEffect, useRef } from 'react';
import './statistics.css'
const Statistics = () => {
    const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const numbers = section.querySelectorAll('.stat-number');

            numbers.forEach(el => {
              const target = +el.getAttribute('data-target');
              el.innerText = '0';

              const updateCount = () => {
                const current = +el.innerText;
                const increment = target / 100;

                if (current < target) {
                  el.innerText = `${Math.ceil(current + increment)}`;
                  setTimeout(updateCount, 20);
                } else {
                  el.innerText = target.toLocaleString() + (target > 500 ? '+' : '');
                }
              };

              updateCount();
            });

            observer.unobserve(section); 
          }
        });
      },
      { threshold: 0.4 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return (
    <section className="stats-section">
  <div className="container">
    {/* <h2 className="section-title">Bizning Yutuqlarimiz Raqamlarda</h2> */}
    {/* <p className="section-subtitle">Bizning tajribamiz va bemorlarimizning ishonchi - bizning asosiy yutug'imiz.</p> */}
    <div ref={sectionRef} className="stats-grid">
      {/* Bemorlar */}
      <div className="stat-card">
        <div className="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="lucide lucide-heart-pulse">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            <path d="M3.22 12H9.5l.7-1 2.1 4.4 3.2-7.4H22"/>
          </svg>
        </div>
        <h3 className="stat-number" data-target="1000">0</h3>
        <p className="stat-label">Mamnun Bemorlar</p>
      </div>

      {/* Klinikalar */}
      <div className="stat-card">
        <div className="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="lucide lucide-building">
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
            <path d="M9 22v-4h6v4"/>
            <path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/>
            <path d="M12 10h.01"/><path d="M12 14h.01"/>
            <path d="M16 10h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/>
          </svg>
        </div>
        <h3 className="stat-number" data-target="25">0</h3>
        <p className="stat-label">Xalqaro Klinikalar</p>
      </div>

      {/* Shifokorlar */}
      <div className="stat-card">
        <div className="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="lucide lucide-stethoscope">
            <path d="M4.8 2.3A.3.3 0 1 0 5.4 2a.3.3 0 0 0-.6.3Z"/>
            <path d="M8 2a1 1 0 0 0-1 1v5.5a4.5 4.5 0 0 0 4.5 4.5h0A4.5 4.5 0 0 0 16 8.5V3a1 1 0 0 0-1-1Z"/>
            <path d="M19.2 2.3a.3.3 0 1 0-.6.3.3.3 0 0 0 .6-.3Z"/>
            <path d="M11 13v9"/>
            <path d="M11 22h2"/>
          </svg>
        </div>
        <h3 className="stat-number" data-target="100">0</h3>
        <p className="stat-label">Jahon Darajasidagi Shifokorlar</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Statistics
