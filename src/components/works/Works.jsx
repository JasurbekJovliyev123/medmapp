import React from "react";
import doctorImage from "../../assets/images/doctor.jpg"; 
import './work.css'
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
const HowWeWork = () => {
  return (
    <Dialog>
        <section className="how-we-work-section">
      <div className="container">
        <h2 className="section-title">Biz qanday ishlaymiz?</h2>
        <p className="section-subtitle">
          4 oddiy qadamda Hindistonda davolanishni tashkil qilamiz.
        </p>

        <div className="how-we-work-content">
          {/* Chap taraf: Timeline */}
          <div className="timeline">
            {/* 1-qadam */}
            <TimelineItem
              number="1"
              title="Biz bilan bog'laning"
              text="Kasallik tafsilotlarini biz bilan baham ko'ring va jamoamiz siz bilan bog'lanadi."
              icon={
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
                >
                  <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                  <path d="M8 16h.01" />
                </svg>
              }
            />
            {/* 2-qadam */}
            <TimelineItem
              number="2"
              title="Tibbiy xulosa oling"
              text="48 soat ichida tibbiy xulosa va davolanishning taxminiy narxini oling."
              icon={
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
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              }
            />
            {/* 3-qadam */}
            <TimelineItem
              number="3"
              title="Chiptalarni bron qiling"
              text="Parvozlarni bron qiling va aeroportda jamoamiz tomonidan kutib olinasiz."
              icon={
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
                >
                  <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
                  <path d="M19 10h-4a2 2 0 0 1-2-2V4" />
                  <path d="M3 21h18" />
                  <path d="M12 10h.01" />
                  <path d="M12 15h.01" />
                </svg>
              }
            />
            {/* 4-qadam */}
            <TimelineItem
              number="4"
              title="Davolaning va uchib keting"
              text="Davolanasiz va keyingi kuzatuvlar uchun biz siz bilan doimiy aloqada bo'lamiz."
              icon={
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
                >
                  <path d="M2 22h20" />
                  <path d="M6.36 17.4 4 17l-2-4 2.1.8c.9.3 1.9-.2 2.1-1.1l.5-1.9c.2-1 .9-1.6 1.8-1.7l1.9-.5c.9-.2 1.9.2 2.1 1.1l.5 1.9c.2 1 .9 1.6 1.8 1.7l1.9.5c.9.2 1.9-.2 2.1-1.1l1.1-4.2-2.8-1.2-4.5 1.1-.9 3.7-.8 2.9Z" />
                </svg>
              }
            />
          </div>
           <DialogContent className='bg-white md:w-[70%] h-[400px]'>
              <DialogOverlay className="fixed inset-0 bg-white/10 z-40"></DialogOverlay>
               <div className="lightbox w-full" id="video-lightbox">
                    <div className="lightbox-content w-full h-full">
                        <div className="lightbox-video-wrapper h-full">
                            <iframe
                            className="md:w-full w-[96%] mx-auto h-[90%] mt-5  md:h-full"
                              src="https://www.youtube.com/embed/GpGugHf003c?si=5eePs2tuPxidzKzE"
                              title="YouTube video player"
                              frameBorder="0"
                              
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>

                        </div>
                    </div>
                </div>
           </DialogContent>
          <div className="work-video-container" data-youtube-id="GpGugHf003c">
            <DialogTrigger>
                <img
              src={doctorImage}
              alt="Tibbiy turizm haqida video"
              className="video-thumbnail cursor-pointer"
            />
            </DialogTrigger>
            <button className="play-button" aria-label="Videoni ijro etish">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tugma */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button className="get-started-button">Ro'yxatdan o'tish</button>
        </div>
      </div>
    </section>

    
    </Dialog>
  );
};

const TimelineItem = ({ number, title, text, icon }) => (
  <div className="timeline-item">
    <div className="timeline-marker">{number}</div>
    <div className="timeline-card">
      <div className="card-icon">{icon}</div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default HowWeWork;
