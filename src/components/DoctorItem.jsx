import { DetailIcon } from '../constans';
import { StarIcon } from '../constans';
import { LockIcon } from '../constans';
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
const DoctorItem = ({ doc, idx }) => {
  // optional guard
  const ratingFull = Math.max(0, Math.floor(doc.ratingFull || 0));
  const ratingEmpty = Math.max(0, 5 - ratingFull);

  return (
    <Dialog>
      <div className="doctor-card" key={idx}>
      <img src={doc.image} alt={doc.name} />
      <h3>{doc.name}</h3>
      <p className="specialty">{doc.specialty}</p>
      <div className="rating">
        {[...Array(ratingFull)].map((_, i) => (
          <StarIcon key={i} filled />
        ))}
        {[...Array(ratingEmpty)].map((_, i) => (
          <StarIcon key={i + ratingFull} filled={false} />
        ))}
        <span>{doc.rating?.toFixed(1)}</span>
      </div>
      <div className="doctor-details">
        {doc.details?.map((detail, i) => (
          <DetailIcon key={i} icon={detail.icon} text={detail.text} />
        ))}
      </div>
      <a href="#" className="consultancy-link">
        Bepul maslahat oling
      </a>
      <DialogTrigger>
          <button
        className="request-appointment-button"
        data-doctor-name={doc.name}
      >
        Uchrashuv so'rash
      </button>
      </DialogTrigger>
      <p className="data-protection">
        <LockIcon />
        Sizning sog'liq ma'lumotlaringiz himoyalangan
      </p>
    </div>
    <DialogContent className="bg-white">
      <DialogOverlay className="fixed inset-0 bg-white/10 z-40"></DialogOverlay>
        <h4 className='text-center'>Uchrashiv so'rovi</h4>
                <DialogClose asChild>
          <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">✕</button>
        </DialogClose>
      <p>Siz {doc.name} bilan uchrashuv so'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.</p>
    </DialogContent>
    </Dialog>
  );
};
export default DoctorItem