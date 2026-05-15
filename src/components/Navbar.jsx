import { Link, useLocation } from 'react-router-dom';
import { CONTENT } from '../data/content';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(location.pathname !== '/');
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, setLanguage } = useLanguage();

  const currentContent = CONTENT[language];

  const handleNavClick = (e, targetPath, targetId) => {
    if (location.pathname === '/') {
      if (targetId) {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          const startPosition = window.scrollY;
          const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
          const distance = targetPosition - startPosition;
          const duration = 1200;
          let startTime = null;

          const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            } else {
              window.history.pushState(null, null, `#${targetId}`);
            }
          };

          requestAnimationFrame(animation);
        }
      } else if (targetPath === '/') {
        e.preventDefault();
        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const startPosition = window.scrollY;
        const distance = -startPosition;
        const duration = 1200;
        let startTime = null;

        const animation = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          } else {
            window.history.pushState(null, null, window.location.pathname);
          }
        };

        requestAnimationFrame(animation);
      }
    }
  };

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

      if (location.pathname === '/') {
        if (currentScrollY < 100) {
          setIsVisible(false);
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
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
          <Link to="/" className="text-2xl text-on-surface font-logo tracking-wide transition-opacity hover:opacity-80 whitespace-nowrap">
            {currentContent.siteName}
            <span className="hidden lg:inline-flex items-center gap-2 ml-4 font-body text-xs font-normal tracking-normal lowercase opacity-60">
              <button
                onClick={(e) => { e.preventDefault(); setLanguage('en'); }}
                className={`transition-colors ${language === 'en' ? 'text-primary font-bold opacity-100' : 'hover:text-primary opacity-50'}`}
              >en</button>
              <span className="opacity-30">|</span>
              <button
                onClick={(e) => { e.preventDefault(); setLanguage('tr'); }}
                className={`transition-colors ${language === 'tr' ? 'text-primary font-bold opacity-100' : 'hover:text-primary opacity-50'}`}
              >tr</button>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex justify-center items-center gap-10">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '/', null)}
            className={`font-headline font-bold tracking-tight transition-colors duration-300 ${location.pathname === '/' && !location.hash ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            {currentContent.nav.home}
          </Link>
          <Link
            to="/#experience"
            onClick={(e) => handleNavClick(e, '/#experience', 'experience')}
            className={`font-headline font-bold tracking-tight transition-colors duration-300 ${location.hash === '#experience' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            {currentContent.nav.experience}
          </Link>
          <Link
            to="/#certificates"
            onClick={(e) => handleNavClick(e, '/#certificates', 'certificates')}
            className={`font-headline font-bold tracking-tight transition-colors duration-300 ${location.hash === '#certificates' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            {currentContent.nav.certificates}
          </Link>
        </div>

        <div className="flex justify-end">
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold text-sm tracking-wide hover:scale-95 duration-200 ease-in-out shadow-lg shadow-primary/10"
          >
            {currentContent.nav.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
