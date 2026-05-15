import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { useState, useEffect } from 'react';

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const currentContent = CONTENT[language];
  const [isIndicatorVisible, setIsIndicatorVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsIndicatorVisible(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial position on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Mathematics for Ease-In-Out (accelerates then decelerates smoothly)
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const startPosition = window.scrollY;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 1200; // 1.2s gives a premium, unhurried cinematic feel
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
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center max-w-7xl mx-auto px-8 text-center pb-8 pt-20">
        {/* Absolute Language Switcher Top-Center */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 font-body text-xs font-normal tracking-wider lowercase opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
          <button
            onClick={(e) => { e.preventDefault(); setLanguage('en'); }}
            className={`transition-colors ${language === 'en' ? 'text-primary font-bold opacity-100' : 'hover:text-primary opacity-50'}`}
          >en</button>
          <span className="opacity-30">|</span>
          <button
            onClick={(e) => { e.preventDefault(); setLanguage('tr'); }}
            className={`transition-colors ${language === 'tr' ? 'text-primary font-bold opacity-100' : 'hover:text-primary opacity-50'}`}
          >tr</button>
        </div>

        <div className="-mt-8 flex flex-col items-center w-full">
          <div className="font-body text-bold text-xl md:text-2xl tracking-[0.2em] uppercase text-on-background mb-4">
            {currentContent.hero.label}
          </div>
          <h1 className="font-headline font-bold text-6xl md:text-8xl tracking-tighter text-on-background mb-6 leading-[0.9]">
            {currentContent.hero.title.line1} <br />
            <span className="text-primary italic">{currentContent.hero.title.line2}</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {currentContent.hero.description}
          </p>
          <div className="mt-12 flex justify-center gap-6">
            <a href="#experience" className="editorial-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold tracking-tight hover:scale-95 transition-transform duration-200 shadow-lg shadow-primary/10">
              {currentContent.hero.ctaPrimary}
            </a>
            <button className="bg-surface-container text-on-surface-variant px-8 py-4 rounded-xl font-headline font-bold tracking-tight hover:bg-surface-container-highest transition-colors duration-200">
              {currentContent.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator - Circular Blueprint Arc */}
        <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all ease-out ${isIndicatorVisible ? 'duration-[1500ms] opacity-80 translate-y-0' : 'duration-[400ms] opacity-0 translate-y-12 pointer-events-none'}`}>
          <div className="relative w-0 h-0 flex justify-center z-10">
            {/* The descending arrows originating from exactly between the side items */}
            <div className="absolute -top-[77px] flex flex-col items-center">
              <span className="material-symbols-outlined text-[20px] text-primary/60 -mb-[12px] animate-arrow-drop opacity-0">keyboard_arrow_down</span>
              <span className="material-symbols-outlined text-[20px] text-primary/60 -mb-[12px] animate-arrow-drop animation-delay-1000 opacity-0">keyboard_arrow_down</span>
              <span className="material-symbols-outlined text-[20px] text-primary/60 animate-arrow-drop animation-delay-2000 opacity-0">keyboard_arrow_down</span>
            </div>

            {/* Blueprint orbital arc ending at experiences and certificates */}
            <svg
              className="absolute -top-[120px] -left-[120px] w-[240px] h-[240px] pointer-events-none opacity-40"
              viewBox="0 0 240 240"
            >
              <path
                d="M 28.1 42.9 A 120 120 0 0 1 211.9 42.9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-outline-variant"
              />
            </svg>

            {/* Center crosshair perfectly aligned with experiences/certificates text */}
            <div className="absolute -top-[81px] -left-1 w-2 h-2 border border-primary/80 bg-background rounded-xl z-20 shadow-[0_0_10px_rgba(130,81,89,0.5)]"></div>

            {/* Hover area wrapper (pulse) */}
            <div className="animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]">
              {/* ME (0 deg) */}
              <div className="absolute top-0 left-0 w-0 h-0 flex justify-center items-center rotate-0">
                <div className="-translate-y-[120px]">
                  <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="block px-2 py-1 hover:text-primary transition-all duration-300 hover:scale-125 font-mono text-[9px] uppercase tracking-[0.2em] text-on-surface-variant whitespace-nowrap">
                    me
                  </a>
                </div>
              </div>

              {/* EXPERIENCES (-55 deg) */}
              <div className="absolute top-0 left-0 w-0 h-0 flex justify-center items-center -rotate-[50deg]">
                <div className="-translate-y-[120px]">
                  <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')} className="block rotate-[50deg] px-2 py-1 hover:text-primary transition-all duration-300 hover:scale-125 font-mono text-[9px] uppercase tracking-[0.2em] text-on-surface-variant whitespace-nowrap">
                    experiences
                  </a>
                </div>
              </div>

              {/* CERTIFICATES (+55 deg) */}
              <div className="absolute top-0 left-0 w-0 h-0 flex justify-center items-center rotate-[50deg]">
                <div className="-translate-y-[120px]">
                  <a href="#certificates" onClick={(e) => handleSmoothScroll(e, 'certificates')} className="block -rotate-[50deg] px-2 py-1 hover:text-primary transition-all duration-300 hover:scale-125 font-mono text-[9px] uppercase tracking-[0.2em] text-on-surface-variant whitespace-nowrap">
                    certificates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center py-32 px-8 bg-surface-container border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-primary mb-8 md:mb-12">
                {currentContent.about.sectionTitle}
              </h2>
              <h3 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-[1.15]">
                {currentContent.about.heading}
              </h3>
            </div>

            <div className="lg:col-span-7 space-y-10 lg:pl-8">
              <div className="space-y-6">
                {currentContent.about.paragraphs.map((para, index) => (
                  <p key={index} className="font-body text-xl text-on-surface-variant leading-relaxed font-light">
                    {para}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 border-t border-outline-variant/15">
                {currentContent.about.details.map((detail, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {detail.label}
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Projects Integrated Section (Timeline) */}
      <section id="experience" className="bg-surface-container-low py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar Label */}
            <div className="lg:col-span-3">
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-primary sticky top-32">Journey &amp; Works</h2>
            </div>

            {/* Timeline & Projects Content */}
            <div className="lg:col-span-9">

              {/* General Experience Header */}
              <div className="mb-24 md:pl-6">
                <span className="font-headline text-sm font-bold uppercase tracking-widest text-outline-variant block mb-4">{currentContent.experience.period}</span>
                <h3 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface mb-2 leading-tight">{currentContent.experience.role}</h3>
                <p className="text-primary font-bold tracking-wide text-lg">{currentContent.experience.company}</p>
              </div>

              {/* Vertical Timeline - Architectural Draft Style */}
              <div className="relative border-l border-outline-variant/30 ml-3 md:ml-6 space-y-24 pb-12">
                {currentContent.experience.projects.map((project) => (
                  <div key={project.id} className="relative pl-6 md:pl-8">
                    {/* Timeline Node Draft Crosshair */}
                    <div className="absolute -left-[4px] top-2.5 w-2 h-2 bg-primary"></div>
                    <div className="absolute -left-[12px] top-3.5 w-6 h-[1px] bg-primary/40"></div>
                    <div className="absolute -left-[1px] top-0 w-[1px] h-6 bg-primary/40"></div>

                    <div className="flex flex-col xl:flex-row gap-4 lg:gap-6 items-start mt-2">
                      {/* Project Date Bubble */}
                      <div className="w-full xl:w-36 shrink-0 pt-0.5">
                        <span className="inline-block text-on-surface-variant text-[11px] font-headline font-bold uppercase tracking-[0.2em]">
                          {project.date}
                        </span>
                      </div>

                      {/* Architectural Project Card */}
                      <div className="flex-1 bg-surface-container-highest/10 backdrop-blur-md p-8 group/card hover:bg-surface-container-highest/20 hover:border-primary/50 transition-all duration-700 border border-outline-variant/30 w-full rounded-lg relative shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                        {/* Draft Corners */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 rounded-tl-lg transition-colors duration-500 group-hover/card:border-primary"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 rounded-tr-lg transition-colors duration-500 group-hover/card:border-primary"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40 rounded-bl-lg transition-colors duration-500 group-hover/card:border-primary"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40 rounded-br-lg transition-colors duration-500 group-hover/card:border-primary"></div>

                        <div className="aspect-video md:aspect-[21/9] overflow-hidden mb-8 border border-outline-variant/30 rounded-lg bg-surface-container-highest/10 p-2 relative">
                          {/* Inner image drafting marks */}
                          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/20 z-10 pointer-events-none transition-colors group-hover/card:bg-primary/20"></div>
                          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-outline-variant/20 z-10 pointer-events-none transition-colors group-hover/card:bg-primary/20"></div>

                          <img src={project.image} alt={project.title} className="w-full h-full rounded-lg object-cover transition-transform duration-1000 group-hover/card:scale-105" />
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map(tag => (
                            <span key={tag} className="border border-outline-variant/30 text-on-surface-variant text-[9px] px-2.5 py-1 font-headline font-bold uppercase tracking-[0.15em] rounded-lg bg-transparent transition-colors duration-500 group-hover/card:border-primary/40">{tag}</span>
                          ))}
                        </div>

                        <h4 className="font-headline text-3xl font-light tracking-tight mb-4 text-on-surface uppercase border-b border-outline-variant/20 pb-4">{project.title}</h4>
                        <p className="font-body font-light text-on-surface-variant text-sm md:text-base mb-10 leading-relaxed xl:max-w-xl opacity-90">{project.shortDescription}</p>

                        <Link to={`/experience/${project.id}`} className="inline-flex items-center gap-3 border border-outline-variant/40 text-on-surface px-6 py-3 rounded-lg font-headline font-bold text-[11px] uppercase tracking-widest group/link hover:border-primary hover:text-primary transition-colors bg-surface-container-lowest/50">
                          Inspect Blueprint
                          <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">east</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="min-h-screen flex flex-col justify-center py-32 px-8 bg-surface-container border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-primary mb-8 md:mb-12">
                {currentContent.certificates.sectionTitle}
              </h2>
              <h3 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-[1.15]">
                {currentContent.certificates.heading}
              </h3>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentContent.certificates.items.map((cert, index) => (
                  <a key={index} href={cert.url} className="group flex flex-col justify-between p-8 bg-surface-container-highest/10 backdrop-blur-md rounded-lg border border-outline-variant/30 hover:bg-surface-container-highest/20 hover:border-primary/50 transition-all relative shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
                    {/* Draft Corners */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 rounded-tl-lg transition-colors group-hover:border-primary"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 rounded-tr-lg transition-colors group-hover:border-primary"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40 rounded-bl-lg transition-colors group-hover:border-primary"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40 rounded-br-lg transition-colors group-hover:border-primary"></div>

                    <div className="mb-8 relative z-10">
                      <span className="inline-block px-0 py-0 text-on-surface-variant font-logo text-sm mb-6 bg-transparent transition-colors">
                        {cert.date}
                      </span>
                      <h4 className="font-headline text-3xl font-light text-on-surface tracking-tight mb-3">
                        {cert.title}
                      </h4>
                      <p className="font-body font-light text-sm text-primary opacity-80">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex justify-end relative z-10">
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all">north_east</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-cta" className="min-h-screen flex flex-col justify-center py-32 px-8 max-w-7xl mx-auto w-full">
        <div className="bg-primary-container/20 rounded-xl p-12 md:p-24 text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-xl bg-emerald-500 animate-pulse"></span>
            Available for projects
          </div>
          <h2
            className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-background mb-8"
            dangerouslySetInnerHTML={{ __html: currentContent.contact.heroTitle }}
          />
          <p className="font-body text-xl text-on-surface-variant max-w-xl mx-auto mb-12">
            {currentContent.contact.heroSubtitle}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/contact" className="editorial-gradient text-on-primary px-10 py-5 rounded-xl font-headline font-bold text-lg hover:scale-95 transition-transform">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
