import { useLanguage } from '../context/LanguageContext';
import type { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (p: Page) => void;
}

const navLabels = {
  en: {
    howItWorks: 'How it works',
    markets: 'Markets',
    terms: 'Terms',
    privacy: 'Privacy Policy',
    lang: 'NO',
    getStarted: 'Get Started',
  },
  no: {
    howItWorks: 'Slik fungerer det',
    markets: 'Markeder',
    terms: 'Vilkår',
    privacy: 'Personvern',
    lang: 'EN',
    getStarted: 'Kom i gang',
  },
};

function FlexiShiftLogo() {
  return (
    <div style={{
      width: 42, height: 42, background: 'white', borderRadius: 10,
      padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6"  width="46" height="14" rx="7" fill="#00C2A8"/>
        <rect x="4" y="27" width="46" height="14" rx="7" fill="#7B6FE8"/>
        <rect x="4" y="48" width="46" height="14" rx="7" fill="#00C2A8"/>
        <circle cx="16" cy="72" r="5" fill="#00C2A8"/>
        <path d="M56 16 L73 40 L56 64" stroke="#7B6FE8" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </div>
  );
}

function NavLink({ label, active, onClick }: { label: string; active?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontSize: 14, fontWeight: 500, padding: 0,
        color: active ? 'white' : 'rgba(255,255,255,0.65)',
        transition: 'color 0.15s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = active ? 'white' : 'rgba(255,255,255,0.65)'; }}
    >
      {label}
    </button>
  );
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const { lang, setLang } = useLanguage();
  const t = navLabels[lang];

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5%', height: 64,
      background: 'rgba(15,52,96,0.97)',
      backdropFilter: 'blur(8px)',
    }}>

      {/* Logo */}
      <button
        onClick={() => setCurrentPage('home')}
        style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <FlexiShiftLogo />
        <span style={{ fontSize: 21, fontWeight: 700, letterSpacing: '-0.3px', lineHeight: 1 }}>
          <span style={{ color: 'white' }}>flexi</span>
          <span style={{ color: '#8B7FF5' }}>shift</span>
        </span>
      </button>

      {/* Centre nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <NavLink label={t.howItWorks} onClick={() => scrollToSection('how')} />
        <NavLink label={t.markets}    onClick={() => scrollToSection('markets')} />
        <NavLink label={t.terms}      active={currentPage === 'terms'}   onClick={() => setCurrentPage('terms')} />
        <NavLink label={t.privacy}    active={currentPage === 'privacy'} onClick={() => setCurrentPage('privacy')} />
      </div>

      {/* Right: lang toggle + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          onClick={() => setLang(lang === 'en' ? 'no' : 'en')}
          style={{
            fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(255,255,255,0.22)', borderRadius: 6,
            padding: '4px 10px', background: 'none', cursor: 'pointer',
          }}
        >
          {t.lang}
        </button>
        <button
          onClick={() => scrollToSection('register')}
          style={{
            fontSize: 14, fontWeight: 600, color: 'white',
            background: 'var(--teal)', borderRadius: 8,
            padding: '8px 18px', border: 'none', cursor: 'pointer',
          }}
        >
          {t.getStarted}
        </button>
      </div>
    </nav>
  );
}
