import HeroSection from "../components/hero/Hero";
import MultiSpecialtySection from '../components/Multiplay/Multiplay'
import Packages from '../components/packages/Packages'
import Prices from '../components/Prices/Prices'
import Statistics from '../components/statistics/Statistics'
import HowWeWork from '../components/works/Works'
import TreatmentSection from '../components/methos/Method'
import OurServicesSection from '../components/services/Services'
import PopularDoctorsSection from '../components/doctors/Doctors'
import HospitalCarousel from '../components/hospital/Hospital'
import Test from '../components/test/Test'
const Home = () => {
  return (
    <div>
        <main>
          <HeroSection/>
          <MultiSpecialtySection/>
          <Packages/>
          <Prices/>
          <Statistics/>
          <HowWeWork/>
          <TreatmentSection/>
          <OurServicesSection/>
          <PopularDoctorsSection/>
          <HospitalCarousel/>
          <Test/>
        </main>
    </div>
  )
}

export default Home
