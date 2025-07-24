import './navbar.css'
import logo from '../../assets/images/MedMapp_Logo_shaffof.png'
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const Navbar = () => {
    const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        headerRef.current.classList.add('scrolled');
      } else {
        headerRef.current.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header ref={headerRef} className={`header`}>
    <Sheet className="z-10000">
      <div className="header-logo">
        <NavLink to={'/'}><img src={logo} alt="MedMapp Logosi" /></NavLink>
      </div>

      <nav className="header-nav">
        <ul>
          <li><NavLink to={'/'}>Bosh sahifa</NavLink></li>
          <li><NavLink to={'/departments'}>Bo‘limlar</NavLink></li>
          <li><NavLink to={'/clinics'}>Shifoxonalar</NavLink></li>
          <li><NavLink to={'/pricing'}>Narxlar</NavLink></li>
          <li><NavLink to={'/treatments'}>Davolash usuli</NavLink></li>
          <li><NavLink to={'/services'}>Xizmatlarimiz</NavLink></li>
          <li><NavLink to={'/doctors'}>Shifokorlar</NavLink></li>
          <li><NavLink to={'/testimonials'}>Bemorlarimiz</NavLink></li>
        </ul>
      </nav>

      <div className="header-actions">
        <svg className="header-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>

        <svg className="header-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>

        <svg className="header-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>

        <div className="language-selector">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span>UZ</span>
          <svg className="chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      
       
      <SheetTrigger asChild>
         <button className="hamburger-menu" aria-label="Menyuni ochish">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button> 
      </SheetTrigger>
      <SheetContent className="px-8 py-12">
        <SheetHeader>
           <ul className='flex flex-col gap-y-5'>
              <SheetClose asChild className='text-start'>
                  <NavLink to={'/'} className='hover:text-blue-600 transition-colors font-medium text-lg'>Bosh sahifa</NavLink>
              </SheetClose>
              <SheetClose asChild className='text-start'>
                 <NavLink  className='hover:text-blue-600 transition-colors font-medium text-lg' to={'/departments'}>Bo‘limlar</NavLink>
              </SheetClose>
              <SheetClose asChild className='text-start'>
                 <NavLink  className='hover:text-blue-600 transition-colors font-medium text-lg' to={'/clinics'}>Shifoxonalar</NavLink>
              </SheetClose>
              <SheetClose asChild className='text-start'>
               <NavLink  className='hover:text-blue-600 transition-colors font-medium text-lg' to={'/pricing'}>Narxlar</NavLink>
              </SheetClose>
              <SheetClose asChild className='text-start'>
                      <NavLink  className='hover:text-blue-600 transition-colors font-medium text-lg' to={'/treatments'}>Davolash usuli</NavLink>
              </SheetClose>
              <SheetClose asChild className='text-start'>
                <NavLink className='hover:text-blue-600 transition-colors font-medium text-lg' to={'/services'}>Xizmatlarimiz</NavLink>
              </SheetClose>
              <SheetClose asChild className='text-start'>
                <NavLink className='hover:text-blue-600 transition-colors font-medium text-lg' to={'/doctors'}>Shifokorlar</NavLink>
              </SheetClose>
              <SheetClose asChild className='text-start'>
                <NavLink className='hover:text-blue-600 transition-colors font-medium text-lg' to={'/testimonials'}>Bemorlarimiz</NavLink>
              </SheetClose>
        </ul>
          
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </header>
  );
};

export default Navbar;
