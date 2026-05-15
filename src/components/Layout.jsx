import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const moduleLoadTime = Date.now();

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Sayfa ilk yüklendiğinde (ilk 1 saniye içinde) hash atlamasını tamamen engelle
    if (Date.now() - moduleLoadTime < 1000) {
      window.scrollTo(0, 0);
      return;
    }

    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
