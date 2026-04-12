import { CONTENT } from '../data/content';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-[85vh] flex flex-col lg:flex-row gap-16 items-start">
      {/* Left Section: Content & Context */}
      <div className="w-full lg:w-5/12 space-y-12">
        <header>
          <h1 
            className="text-6xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter leading-[0.9] mb-8"
            dangerouslySetInnerHTML={{ __html: CONTENT.contact.heroTitle }}
          />
          <p className="text-lg text-on-surface-variant max-w-md font-body leading-relaxed">
            {CONTENT.contact.heroSubtitle}
          </p>
        </header>

        <div className="space-y-8 pt-4">
          <div className="group">
            <p className="font-headline font-bold text-xs uppercase tracking-widest text-primary mb-2">Location</p>
            <p className="text-xl font-body text-on-surface">{CONTENT.contact.location}</p>
          </div>
          <div className="group">
            <p className="font-headline font-bold text-xs uppercase tracking-widest text-primary mb-2">Inquiries</p>
            <a href={`mailto:${CONTENT.contact.email}`} className="text-xl font-body text-on-surface hover:text-primary transition-colors">{CONTENT.contact.email}</a>
          </div>
          <div className="pt-4 flex gap-6">
            <a href={CONTENT.socials[0]?.url || "#"} className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-on-surface-variant">alternate_email</span>
            </a>
            <a href={CONTENT.socials[1]?.url || "#"} className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-on-surface-variant">code</span>
            </a>
          </div>
        </div>

        {/* Asymmetric Image Piece */}
        <div className="hidden lg:block pt-8">
          <div className="w-64 h-80 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 surface-container-highest">
            <img src={CONTENT.contact.image} alt="Studio space" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="w-full lg:w-7/12 bg-surface-container-low rounded-3xl p-8 md:p-12">
        <form action="#" method="POST" className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <label htmlFor="name" className="block font-headline font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-3 group-focus-within:text-primary transition-colors">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" />
            </div>
            <div className="relative group">
              <label htmlFor="email" className="block font-headline font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-3 group-focus-within:text-primary transition-colors">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" />
            </div>
          </div>

          <div className="relative group">
            <label htmlFor="subject" className="block font-headline font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-3 group-focus-within:text-primary transition-colors">Subject</label>
            <select id="subject" name="subject" className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all appearance-none">
              <option>New Project Inquiry</option>
              <option>Consulting</option>
              <option>Just saying hello</option>
              <option>Other</option>
            </select>
          </div>

          <div className="relative group">
            <label htmlFor="message" className="block font-headline font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-3 group-focus-within:text-primary transition-colors">Your Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Tell me about your project..." className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all resize-none"></textarea>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="hidden md:flex items-center gap-2 text-on-surface-variant/60 text-xs font-body">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span>Secured with SSL encryption</span>
            </div>
            <button type="button" className="group relative inline-flex items-center justify-center gap-3 bg-primary-container text-on-primary-container font-headline font-bold px-10 py-5 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary-container/20">
              <span>Send Message</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
