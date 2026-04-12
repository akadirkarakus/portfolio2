import { Link, useLocation } from 'react-router-dom';
import { CONTENT } from '../data/content';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(location.pathname !== '/');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Adjust visibility when changing locations
  useEffect(() => {
    if (location.pathname === '/' && window.scrollY < 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100 && location.pathname === '/') {
        setIsVisible(false); // En üst kısımdaysak menüyü tamamen devre dışı bırak
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Aşağı kaydırırken gizle
      } else {
        setIsVisible(true); // Sadece yörünge alanının altındayken ve yukarı çıkarken göster
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 glass-nav border-b border-surface-variant/20 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between items-center md:grid md:grid-cols-3 px-8 xl:px-12 py-6 w-full max-w-[1600px] mx-auto">
        <div className="flex justify-start">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-on-surface font-headline transition-opacity hover:opacity-80 uppercase whitespace-nowrap">
            {CONTENT.siteName}
            <span className="hidden lg:inline-flex items-center gap-2 ml-4 font-body text-xs font-normal tracking-normal lowercase opacity-60">
              <button className="hover:text-primary transition-colors">en</button>
              <span className="opacity-30">|</span>
              <button className="hover:text-primary transition-colors">tr</button>
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex justify-center items-center gap-10">
          <Link 
            to="/" 
            className={`font-headline font-bold tracking-tight transition-colors duration-300 ${location.pathname === '/' && !location.hash ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/#experience" 
            className={`font-headline font-bold tracking-tight transition-colors duration-300 ${location.hash === '#experience' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Experience
          </Link>
          <Link 
            to="/contact" 
            className={`font-headline font-bold tracking-tight transition-colors duration-300 ${location.pathname === '/contact' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Contact
          </Link>
        </div>

        <div className="flex justify-end">
          <Link 
            to="/contact"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold text-sm tracking-wide hover:scale-95 duration-200 ease-in-out shadow-lg shadow-primary/10"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
