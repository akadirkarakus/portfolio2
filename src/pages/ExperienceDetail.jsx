import { useParams, Navigate, Link } from 'react-router-dom';
import { getProjectBySlug, getSurroundingProjects, CONTENT } from '../data/content';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ExperienceDetail() {
  const { language } = useLanguage();
  const currentContent = CONTENT[language];
  const { id } = useParams();
  const project = getProjectBySlug(id, language);
  const { prev, next } = getSurroundingProjects(id, language);

  // Scroll to top when id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-outline-variant/30 bg-surface-container-highest/10 backdrop-blur-md rounded-lg mb-6 text-[10px] text-on-surface-variant font-mono uppercase tracking-[0.2em]">
            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
            [ {project.details.category} ]
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-on-surface mb-8 uppercase font-headline">
            {project.title.split(' ')[0]} <br />
            <span className="text-surface-tint font-light">{project.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-mono opacity-80">
            {project.shortDescription}
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="p-8 bg-surface-container-highest/10 backdrop-blur-md border border-outline-variant/30 rounded-lg relative shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            {/* Draft Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40 rounded-br-lg"></div>

            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-outline mb-6">Core Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-outline-variant/20 pb-3">
                <span className="text-on-surface-variant font-mono text-[10px] tracking-widest uppercase">Latency</span>
                <span className="font-mono font-bold text-sm tracking-widest">{project.details.metrics.latency}</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/20 pb-3">
                <span className="text-on-surface-variant font-mono text-[10px] tracking-widest uppercase">Context Window</span>
                <span className="font-mono font-bold text-sm tracking-widest">{project.details.metrics.contextWindow}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-mono text-[10px] tracking-widest uppercase">Embedding Dim</span>
                <span className="font-mono font-bold text-sm tracking-widest">{project.details.metrics.embeddingDim}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 mb-24">
        {/* Large Focus Image */}
        <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-highest/10 p-2 relative group/img shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/20 z-10 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-outline-variant/20 z-10 pointer-events-none"></div>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg transition-transform duration-1000 group-hover/img:scale-105" />
        </div>
        {/* Tech Stack Card */}
        <div className="md:col-span-2 p-10 bg-surface-container-highest/10 backdrop-blur-md border border-outline-variant/30 rounded-lg flex flex-col justify-between relative shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="absolute top-0 right-0 w-6 h-6 border-t font-mono text-[8px] text-outline flex items-center justify-center p-2 border-l border-outline-variant/30 rounded-bl-lg">ID-01</div>
          <div>
            <h3 className="text-xl font-light uppercase tracking-tight mb-6 font-headline border-b border-outline-variant/20 pb-4">Technical Foundation</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="border border-outline-variant/30 text-on-surface-variant text-[9px] px-2.5 py-1 font-mono uppercase tracking-[0.15em] rounded-lg bg-transparent">{tag}</span>
              ))}
            </div>
          </div>
          <p className="text-on-surface-variant mt-8 font-mono text-sm leading-relaxed opacity-90">
            {project.details.techFoundation}
          </p>
        </div>
        {/* Strategy Card */}
        <div className="p-8 bg-surface-container-highest/10 backdrop-blur-md rounded-lg flex flex-col justify-between border border-outline-variant/30 group hover:border-primary/50 transition-colors">
          <span className="material-symbols-outlined text-3xl text-primary opacity-70 group-hover:opacity-100 transition-opacity">dynamic_form</span>
          <h4 className="text-lg font-light tracking-widest font-mono uppercase mt-4 leading-tight">Adaptive UI</h4>
        </div>
        {/* Visual Card */}
        <div className="p-8 bg-surface-container-highest/10 backdrop-blur-md rounded-lg flex flex-col justify-between border border-outline-variant/30">
          <p className="text-xs font-mono leading-relaxed opacity-80">"The bridge between raw data and actionable intelligence lies in semantic density."</p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-8 h-[1px] bg-primary/60"></div>
            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-primary">System Log</span>
          </div>
        </div>
      </section>

      {/* Deep Dive Text Section */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-light mb-12 font-headline uppercase tracking-widest border-b border-outline-variant/30 pb-6 text-on-surface">The Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-on-surface-variant font-mono opacity-90">
              {project.details.longDescription}
            </p>
            <p className="text-base leading-relaxed text-on-surface-variant font-mono opacity-90">
              {project.details.secondaryDescription}
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-surface-container-highest/10 backdrop-blur-md border border-outline-variant/30 rounded-lg relative group">
                <div className="absolute left-0 top-0 w-1 h-full bg-primary/50 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Performance Win
              </h4>
              <p className="text-xs font-mono text-on-surface-variant leading-relaxed opacity-80">{project.details.performanceWin}</p>
            </div>
            <div className="p-6 bg-surface-container-highest/10 backdrop-blur-md border border-outline-variant/30 rounded-lg relative group">
                <div className="absolute left-0 top-0 w-1 h-full bg-primary/50 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-[16px]">speed</span>
                Low Latency
              </h4>
              <p className="text-xs font-mono text-on-surface-variant leading-relaxed opacity-80">{project.details.lowLatency}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="mb-24">
        <div className="relative h-[614px] rounded-lg overflow-hidden group border border-outline-variant/30 p-2 bg-surface-container-highest/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
             {/* Draft Marks */}
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20 z-10 pointer-events-none"></div>
             <div className="absolute top-0 left-1/2 w-[1px] h-full bg-primary/20 z-10 pointer-events-none"></div>
          <img src={project.heroImage} alt="Global networks" className="w-full h-full rounded-lg object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-2 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-12 rounded-lg">
            <div className="max-w-2xl border-l-[2px] border-primary/60 pl-6">
              <h3 className="text-on-surface text-3xl font-light uppercase tracking-widest font-headline mb-4">Architecture Deep Dive</h3>
              <p className="text-on-surface-variant font-mono text-sm opacity-80">Scaling infrastructure and providing instant context-aware information retrieval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA/Contact Zone */}
      <section className="bg-surface-container-highest/10 backdrop-blur-md border border-outline-variant/30 rounded-lg p-16 text-center mb-16 relative shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        {/* Draft Corners */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-outline-variant/50 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-outline-variant/50 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-outline-variant/50 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-outline-variant/50 rounded-br-lg"></div>

        <h2 className="text-4xl lg:text-5xl font-light uppercase tracking-tight mb-6 font-headline text-on-surface">Explore the Architecture</h2>
        <p className="text-on-surface-variant font-mono opacity-80 max-w-xl mx-auto mb-12 text-sm leading-relaxed">Detailed documentation and whitepaper available for institutional partners and research collaborators.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-primary/10 border border-primary text-primary px-8 py-4 rounded-lg font-mono text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-colors">Inspect System</button>
          <button className="bg-transparent text-on-surface border border-outline-variant/40 px-8 py-4 rounded-lg font-mono text-xs tracking-widest uppercase hover:border-primary transition-colors">Case Study PDF</button>
        </div>
      </section>

      {/* Project Navigation */}
      <div className="border-t border-outline-variant/30 pt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {prev ? (
          <Link to={`/experience/${prev.id}`} className="group flex flex-col items-start gap-4 p-8 rounded-lg bg-surface-container-highest/5 hover:bg-surface-container-highest/10 backdrop-blur-sm transition-all border border-transparent hover:border-outline-variant/30">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">[ Previous Draft ]</span>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[16px] text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">west</span>
              <span className="font-headline text-xl font-light uppercase tracking-tight text-on-surface">{prev.title}</span>
            </div>
          </Link>
        ) : <div />}

        {next && (
          <Link to={`/experience/${next.id}`} className="group flex flex-col items-end gap-4 p-8 rounded-lg bg-surface-container-highest/5 hover:bg-surface-container-highest/10 backdrop-blur-sm transition-all border border-transparent hover:border-outline-variant/30 text-right">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">[ Next Draft ]</span>
            <div className="flex items-center justify-end gap-4">
              <span className="font-headline text-xl font-light uppercase tracking-tight text-on-surface">{next.title}</span>
              <span className="material-symbols-outlined text-[16px] text-primary opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">east</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
