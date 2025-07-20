import './app.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/Hero'
import MultiSpecialtySection from './components/Multiplay/Multiplay'
import Packages from './components/packages/Packages'
import Footer from './components/footer/Footer'
import Prices from './components/Prices/Prices'
import Statistics from './components/statistics/Statistics'
import HowWeWork from './components/works/Works'
import TreatmentSection from './components/methos/Method'
import OurServicesSection from './components/services/Services'
import PopularDoctorsSection from './components/doctors/Doctors'
import HospitalCarousel from './components/hospital/Hospital'
const App = () => {
  return (
    <div>
        <Navbar/>
        <main>
          <HeroSection/>
              <section id="category">
                   <MultiSpecialtySection/>
              </section>

          <section id="packages">
             <Packages/>
          </section>

          <section id="prices">
            <Prices/>
          </section>
            <Statistics/>
            <HowWeWork/>
           <TreatmentSection/>
          <section id="services">
            <OurServicesSection/>
          </section>

          <section id="doctors">
            <PopularDoctorsSection/>
          </section>

          <section id="clinics">
            <HospitalCarousel/>
          </section>
            
           
           
            
        </main>
        <Footer/>
    </div>
  )
}

export default App
