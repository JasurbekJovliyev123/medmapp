import logo from '../../assets/images/MedMapp_Logo_shaffof.png'
import './footer.css'
const Footer = () => {
  return (
    <footer className="site-footer">
  <div className="container">
    <div className="footer-main-grid">
      <div className="footer-column">
        <img src={logo} alt="MedMapp Logosi" className="footer-logo" />
        <p className="footer-about-text">
          MedMapp - bu sizning Hindistondagi ishonchli tibbiy hamrohingiz. Biz eng yaxshi klinikalarda sifatli va
          hamyonbop davolanishni tashkil etamiz.
        </p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="#" aria-label="Telegram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-send">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </a>
          <a href="#" aria-label="Youtube">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-youtube">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 4.5 4 7 4h10c2.5 0 4.5 2 4.5 3.5a24.12 24.12 0 0 1 0 10c0 1.5-2 3.5-4.5 3.5H7c-2.5 0-4.5-2-4.5-3.5Z" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-column">
        <h4 className="footer-title">Tezkor Havolalar</h4>
        <ul className="footer-links">
          <li><a href="#">Bosh sahifa</a></li>
          <li><a href="#">Biz haqimizda</a></li>
          <li><a href="#doctors">Shifokorlar</a></li>
          <li><a href="#hospital">Kasalxonalar</a></li>
          <li><a href="#">Bloglar</a></li>
          <li><a href="#">Hamkor bo'ling</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4 className="footer-title">Asosiy Yo'nalishlar</h4>
        <ul className="footer-links">
          <li><a href="#">Kardiologiya</a></li>
          <li><a href="#">Onkologiya</a></li>
          <li><a href="#">Neyroxirurgiya</a></li>
          <li><a href="#">Ortopediya</a></li>
          <li><a href="#">Transplantatsiya</a></li>
          <li><a href="#">Kosmetik jarrohlik</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4 className="footer-title">Biz bilan bog'laning</h4>
        <ul className="footer-contact">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-map-pin">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Sirdaryo viloyati, O'zbekiston</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+998(93) 969-93-01</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>info@medmapp.uz</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p className="copyright">&copy; 2025 MedMapp. Barcha huquqlar himoyalangan.</p>
      <div className="footer-legal-links">
        <a href="#">Maxfiylik siyosati</a>
        <a href="#">Foydalanish shartlari</a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
