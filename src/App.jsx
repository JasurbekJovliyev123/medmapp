import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Departaments from './pages/Departaments'
import Clinics from './pages/Clinics'
import PricingPage from './pages/Price'
import TreatmentsSection from './pages/Tratments'
import ServicesPage from './pages/Services'
import Doctors from './pages/Doctors'
import Testimonals from './pages/Testimonals'
const App = () => {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/departments',
          element:<Departaments/>
        },
        {
          path:'/clinics',
          element:<Clinics/>
        },
        {
          path:'/pricing',
          element:<PricingPage/>
        },
        {
          path:'/treatments',
          element:<TreatmentsSection/>
        },
        {
          path:'/services',
          element:<ServicesPage/>
        }, 
        {
          path:'/doctors',
          element:<Doctors/>
        },
        {
          path:'/testimonials',
          element:<Testimonals/>
        }
      ]
    }
  ])
  return <RouterProvider router={route}/>
}

export default App













































// import './App.css'
// import Navbar from './components/navbar/Navbar'
// import HeroSection from './components/hero/Hero'
// import MultiSpecialtySection from './components/Multiplay/Multiplay'
// import Packages from './components/packages/Packages'
// import Footer from './components/footer/Footer'
// import Prices from './components/Prices/Prices'
// import Statistics from './components/statistics/Statistics'
// import HowWeWork from './components/works/Works'
// import TreatmentSection from './components/methos/Method'
// import OurServicesSection from './components/services/Services'
// import PopularDoctorsSection from './components/doctors/Doctors'
// import HospitalCarousel from './components/hospital/Hospital'
// import Test from './components/test/Test'
// const App = () => {
//   return (
//     <div>
//         <Navbar/>
//         <main>
//           <HeroSection/>
//               <section id="category">
//                    <MultiSpecialtySection/>
//               </section>

//           <section id="packages">
//              <Packages/>
//           </section>

//           <section id="prices">
//             <Prices/>
//           </section>
//             <Statistics/>
//             <HowWeWork/>
//            <TreatmentSection/>
//           <section id="services">
//             <OurServicesSection/>
//           </section>

//           <section id="doctors">
//             <PopularDoctorsSection/>
//           </section>

//           <section id="clinics">
//             <HospitalCarousel/>
//           </section>
//             <Test/>
           
           
            
//         </main>
//         <Footer/>
//     </div>
//   )
// }

// export default App
