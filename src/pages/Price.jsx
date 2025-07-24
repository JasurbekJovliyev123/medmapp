import { useEffect, useState } from "react";
import './price.css'
import { allData } from "../constans";
const PricingResults = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('kardiologiya');
  const [selectedProcedure, setSelectedProcedure] = useState('all');
  const [selectedSort, setSelectedSort] = useState('default');
  const [filteredProcedures, setFilteredProcedures] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const procs = [...new Set(allData.filter(d => d.department === selectedDepartment).map(d => d.procedure))];
    setFilteredProcedures(procs);
    setSelectedProcedure('all');
  }, [selectedDepartment]);

  useEffect(() => {
    let data = allData.filter(d => d.department === selectedDepartment);

    if (selectedProcedure !== 'all') {
      data = data.filter(d => d.procedure === selectedProcedure);
    }

    if (selectedSort === 'cheapest') {
      data.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'expensive') {
      data.sort((a, b) => b.price - a.price);
    }

    setFilteredData(data);
  }, [selectedDepartment, selectedProcedure, selectedSort]);

  return (
    <div>
      <section class="pricing-hero-creative">
            <div class="container">
                <h1>Shaffof Narxlarni Solishtiring</h1>
                <p>Eng yaxshi klinikalardagi davolash narxlarini solishtiring va o'zingiz uchun eng ma'qulini tanlang.</p>
            </div>
            <div class="wave-shape"></div>
        </section>
    <section className="pricing-main-section">
      <div className="pricing-container">
        {/* Filters */}
        <div className="pricing-filters-container">
          <div className="pricing-filters-grid">
            <div className="filter-group">
              <label htmlFor="filter-department">Yo'nalishni tanlang</label>
              <select
                id="filter-department"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="kardiologiya">Kardiologiya</option>
                <option value="ortopediya">Ortopediya</option>
                <option value="onkologiya">Onkologiya</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="filter-procedure">Muolajani tanlang</label>
              <select
                id="filter-procedure"
                value={selectedProcedure}
                onChange={(e) => setSelectedProcedure(e.target.value)}
              >
                <option value="all">Barcha muolajalar</option>
                {filteredProcedures.map((proc) => (
                  <option key={proc} value={proc}>{proc}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="filter-sort">Saralash</label>
              <select
                id="filter-sort"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="default">Standart</option>
                <option value="cheapest">Eng arzon</option>
                <option value="expensive">Eng qimmat</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="results-header">
          <h3>{selectedDepartment[0].toUpperCase() + selectedDepartment.slice(1)} narxlari</h3>
          <span>{filteredData.length} ta taklif topildi</span>
        </div>

        <div className="pricing-results-grid">
          {filteredData.length === 0 ? (
            <div id="no-results">Ushbu mezonlar bo'yicha natijalar topilmadi.</div>
          ) : (
            filteredData.map((item, index) => (
              <div
                key={item.id}
                className="price-result-card visible"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-image">
                  <img
                    src={item.clinicImage}
                    alt={item.clinicName}
                    onError={(e) =>
                      (e.currentTarget.src =
                        'https://placehold.co/600x400/cccccc/FFFFFF?text=Klinika')
                    }
                  />
                </div>
                <div className="card-content">
                  <h4 className="procedure-name">{item.procedure}</h4>
                  <p className="clinic-name">{item.clinicName}</p>
                  <div className="price-info">
                    <div className="price-tag-results">${item.price.toLocaleString()}</div>
                    <a href="#" className="btn-request">So'rov yuborish</a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
    </div>
  );
};

export default PricingResults;
