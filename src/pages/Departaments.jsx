import React from 'react'
import MultiSpecialtySection from '../components/Multiplay/Multiplay'
const Departaments = () => {
  return (
    <div className='min-h-[50vh]'>
          <section
              className="hero-section"
              style={{
                minHeight: '28vh',
                background: 'linear-gradient(135deg, #0d324d 0%, #00509e 100%)'
              }}>
            <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
              <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>Tibbiy Yo'nalishlar</h1>
              <p style={{ maxWidth: '700px', color: '#e0f2fe' }}>
                Soch ko‘chirishdan tortib, yurak transplantatsiyasigacha bo‘lgan barcha tibbiy ehtiyojlaringizni qoplaydigan keng qamrovli yo'nalishlar.
              </p>
            </div>
           </section>
           <MultiSpecialtySection/>

    </div>
  )
}

export default Departaments
