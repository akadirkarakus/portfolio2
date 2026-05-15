import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';

export default function Footer() {
  const { language } = useLanguage();
  const currentContent = CONTENT[language];
  return (
    <footer className="w-full py-12 px-8 bg-surface-container border-t border-outline-variant/15 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto pt-4">
        <div className="font-body text-sm tracking-wide uppercase text-on-surface-variant">
          © {new Date().getFullYear()} {currentContent.siteName} — Built with Digital Curation
        </div>
        <div className="flex gap-8">
          {currentContent.socials.map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="font-body text-sm tracking-wide uppercase text-on-surface-variant hover:underline decoration-primary-container underline-offset-4 opacity-80 hover:opacity-100 transition-all">
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
