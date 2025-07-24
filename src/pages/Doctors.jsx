import { useState, useEffect } from "react";
// import "./your-styles.css"
import './doctor.css'
import photo from '../assets/images/doctor.jpg'
const allDoctors = [
  {
    id: 1,
    name: "Dr. Ashish Kumar",
    specialty: "kardiologiya",
    country: "hindiston",
    city: "faridabad",
    experience: "15+ yil",
    operations: "5,000+",
    clinic: "Amrita Hospital, Faridabad",
    photo: photo
  },
  // Istasangiz bu yerga boshqa doctorlarni ham qo‘shing
];

const DoctorsPage = () => {
  const [filters, setFilters] = useState({
    specialty: "all",
    country: "all",
    city: "all",
  });

  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const { specialty, country, city } = filters;

    const result = allDoctors.filter((doc) => {
      const specialtyMatch = specialty === "all" || doc.specialty.includes(specialty);
      const countryMatch = country === "all" || doc.country === country;
      const cityMatch = city === "all" || doc.city === city;
      return specialtyMatch && countryMatch && cityMatch;
    });

    setFilteredDoctors(result);
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.id.replace("filter-", "")]: e.target.value,
    });
  };

  return (
    <div>
       <section className="page-hero-creative">
  <div className="container">
    <h1>Tajribali Shifokorlarni Toping</h1>
    <p>O'z sohasining yetakchi mutaxassislari bilan sog'lig'ingizni ishonchli qo'llarga topshiring.</p>
  </div>
  <div className="wave-shape"></div>
</section>
<section className="doctors-main-content">
      <div className="container">
        <div className="filters-section">
          <div className="filters-container">
            <div className="filter-group">
              <select id="filter-specialty" value={filters.specialty} onChange={handleFilterChange}>
                <option value="all">Barcha yo'nalishlar</option>
                <option value="kardiologiya">Kardiologiya</option>
                <option value="jarrohlik">Jarrohlik</option>
                <option value="nevrologiya">Nevrologiya</option>
              </select>
            </div>
            <div className="filter-group">
              <select id="filter-country" value={filters.country} onChange={handleFilterChange}>
                <option value="all">Barcha davlatlar</option>
                <option value="hindiston">Hindiston</option>
              </select>
            </div>
            <div className="filter-group">
              <select id="filter-city" value={filters.city} onChange={handleFilterChange}>
                <option value="all">Barcha shaharlar</option>
                <option value="faridabad">Faridabad</option>
                <option value="dehli">Dehli</option>
              </select>
            </div>
          </div>
        </div>

        <p id="doctors-count">{filteredDoctors.length} ta shifokor topildi</p>

        <div className="doctors-grid" id="doctors-grid">
          {filteredDoctors.map((doc, index) => (
            <div
              key={doc.id}
              className="doctor-card-item visible"
              style={{ animationDelay: `${index * 100}ms`, animationName: "fadeIn", animationDuration: "0.5s" }}
            >
              <div className="card-header">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="doctor-photo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/160x160/007BFF/FFFFFF?text=AK";
                  }}
                />
                <div className="header-info">
                  <h3>{doc.name}</h3>
                  <p>{doc.specialty}</p>
                  <div className="doctor-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star">☆</span>
                  </div>
                </div>
              </div>

              <ul className="doctor-stats">
                <li><strong>Tajriba:</strong> {doc.experience}</li>
                <li><strong>Amaliyotlar:</strong> {doc.operations}</li>
                <li><strong>Klinika:</strong> {doc.clinic}</li>
              </ul>

              <div className="card-footer">
                <div className="btn-group">
                  <a href="#" className="btn btn-consult">Maslahat</a>
                  <a href="#" className="btn btn-appoint">Uchrashuv</a>
                </div>
                <a href="#" className="btn btn-download" download>Rezyume</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default DoctorsPage;
