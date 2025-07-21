import './doctors.css'

import { doctors } from '../../constans'
import DoctorItem from '../DoctorItem';
const PopularDoctorsSection = () => {
  return (
    <section className="popular-doctors-section">
      <h2 className="section-title">Mashhur shifokorlar</h2>
      <div className="doctor-grid">
        {doctors.map((doc, idx) => (
          <DoctorItem key={idx} idx={idx} doc={doc}/>
        ))}
      </div>
    </section>
  );
};



export default PopularDoctorsSection;
