
// import { DialogFooter, DialogHeader } from '@chakra-ui/react';
import heroVideo from '../../assets/images/Intro.mp4'
import './hero.css'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogPortal,
  DialogOverlay
} from "@/components/ui/dialog"
// import { DialogHeader } from './ui/dialog';
const HeroSection = () => {
  return (
    <section className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        {/* Sizning brauzeringiz videoni qo'llab-quvvatlamaydi. */}
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Ishonchli, xavfsiz va shaffof<br /></h1>
        <p>MedMapp platformasi orqali Hindistondagi eng mashhur shifoxonalarda davolaning!</p>

        {/* Asosiy qidiruv paneli */}
        <div className="main-search-bar">
          <div className="search-input-wrapper">
            <input
              type="text"
              id="main-search-input"
              placeholder="Shifokorlarni, davolash usullarini, kasalxonalarni qidiring..."
            />
            <svg
              className="search-icon-inside"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        {/* Forma kartasi */}
        <Dialog className='w-full'>
           <div className="form-card">
          <div className="form-group">
            <label htmlFor="resident-of">Qayerda istiqomat qilasiz?</label>
            <div className="select-wrapper">
              <select id="resident-of" name="resident_of">
                <option value="toshkent">Toshkent shahri</option>
                <option value="andijon">Andijon viloyati</option>
                <option value="buxoro">Buxoro viloyati</option>
                <option value="fargona">Farg‘ona viloyati</option>
                <option value="jizzax">Jizzax viloyati</option>
                <option value="namangan">Namangan viloyati</option>
                <option value="qashqadaryo">Qashqadaryo viloyati</option>
                <option value="navoiy">Navoiy viloyati</option>
                <option value="qoraqalpogiston">Qoraqalpog‘iston viloyati</option>
                <option value="samarqand">Samarqand viloyati</option>
                <option value="sirdaryo">Sirdaryo viloyati</option>
                <option value="surxondaryo">Surxondaryo viloyati</option>
                <option value="toshkent_vil">Toshkent viloyati</option>
                <option value="xorazm">Xorazm viloyati</option>
              </select>
              <svg
                className="chevron-down-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="treatment">Davolash usuli</label>
            <div className="select-wrapper">
              <select id="treatment" name="treatment">
                <option value="heart">Yurak jarrohligi</option>
                <option value="neuro">Nevrologik kasallik</option>
                <option value="kidney">Buyrak ko'chirish</option>
                <option value="liver">Jigar o'tlazish</option>
                <option value="ptca">Angioplastika (PTCA)</option>
                <option value="ortho">Ortopediya</option>
                <option value="onco">Onkologiya</option>
              </select>
              <svg
                className="chevron-down-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone-number">Telefon raqam</label>
            <div className="phone-input-wrapper">
              <input
                type="text"
                id="phone-number"
                name="phone_number"
                defaultValue="+998"
              />
              <svg
                className="phone-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
          </div>

          <DialogTrigger asChild>
             <button id="chat-button" className="chat-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle-more"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              <path d="M8 12h.01" />
              <path d="M12 12h.01" />
              <path d="M16 12h.01" />
            </svg>
            <span>Bepul konsultatsiya olish</span>
          </button>
          </DialogTrigger>

          <DialogPortal>
             <DialogOverlay className="fixed inset-0 bg-white/10 z-40" />
             <DialogContent className='bg-white'>
        <DialogHeader>
          <DialogDescription>
                        Chat funksiyasi
            Chat funksionalligi simulyatsiya qilingan. Haqiqiy ilovada bu chatni ochadi.
          </DialogDescription>
        </DialogHeader>


        <DialogFooter>
          <DialogClose asChild>
            <button>Yopish</button>
          </DialogClose>
          {/* <Button>Saqlash</Button> */}
        </DialogFooter>
      </DialogContent>
          </DialogPortal>
        </div>
        </Dialog>
      </div>
    </section>
  );
};

export default HeroSection;
