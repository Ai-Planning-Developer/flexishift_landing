import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../context/LanguageContext';

const navLabels = {
  en: {
    howItWorks: 'How it works',
    markets: 'Markets',
    terms: 'Terms',
    privacy: 'Privacy Policy',
    ropa: 'ROPA',
    contact: 'Contact',
    driverGuide: 'Driver Guide',
    getStarted: 'Get Started',
  },
  no: {
    howItWorks: 'Slik fungerer det',
    markets: 'Markeder',
    terms: 'Vilkår',
    privacy: 'Personvern',
    ropa: 'ROPA',
    contact: 'Kontakt',
    driverGuide: 'Sjåførguide',
    getStarted: 'Kom i gang',
  },
  sv: {
    howItWorks: 'Så fungerar det',
    markets: 'Marknader',
    terms: 'Villkor',
    privacy: 'Integritet',
    ropa: 'ROPA',
    contact: 'Kontakt',
    driverGuide: 'Förarguide',
    getStarted: 'Kom igång',
  },
};

const langOptions: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'no', label: 'NO' },
  { code: 'sv', label: 'SV' },
];

function FlexiShiftLogo() {
  return (
    <div style={{ width: 42, height: 42, background: 'white', borderRadius: 10, padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
        <rect x="4" y="6"  width="46" height="14" rx="7" fill="#00C2A8"/>
        <rect x="4" y="27" width="46" height="14" rx="7" fill="#7B6FE8"/>
        <rect x="4" y="48" width="46" height="14" rx="7" fill="#00C2A8"/>
        <circle cx="16" cy="72" r="5" fill="#00C2A8"/>
        <path d="M56 16 L73 40 L56 64" stroke="#7B6FE8" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const t = navLabels[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const goHome = () => {
    setMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goPage = (path: string) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (path: string, id: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(path);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120);
    } else {
      navigate(path);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkStyle = (active?: boolean): React.CSSProperties => ({
    background: 'none', border: 'none', cursor: 'pointer',
    fontSize: 13, fontWeight: active ? 700 : 500, padding: '4px 0',
    color: active ? 'var(--teal, #00A896)' : 'rgba(255,255,255,0.75)',
    transition: 'color 0.15s', whiteSpace: 'nowrap',
  });

  const langBtnStyle = (active: boolean): React.CSSProperties => ({
    fontSize: 11, fontWeight: 700, cursor: 'pointer',
    padding: '4px 8px', borderRadius: 5, border: 'none',
    background: active ? 'rgba(255,255,255,0.18)' : 'transparent',
    color: active ? 'white' : 'rgba(255,255,255,0.55)',
    transition: 'background 0.15s, color 0.15s',
  });

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 4%', height: 64,
        background: 'rgba(15,52,96,0.97)',
        backdropFilter: 'blur(8px)',
      }}>
        {/* Logo */}
        <button onClick={goHome} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
          <FlexiShiftLogo />
          <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.3px', lineHeight: 1 }}>
            <span style={{ color: 'white' }}>flexi</span>
            <span style={{ color: '#8B7FF5' }}>shift</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <button onClick={() => scrollToSection('/how-it-works', 'how')} style={linkStyle(isActive('/how-it-works'))}>{t.howItWorks}</button>
          <button onClick={() => scrollToSection('/markets', 'markets')} style={linkStyle(isActive('/markets'))}>{t.markets}</button>
          <button onClick={() => goPage('/terms')} style={linkStyle(isActive('/terms'))}>{t.terms}</button>
          <button onClick={() => goPage('/privacy-policy')} style={linkStyle(isActive('/privacy-policy'))}>{t.privacy}</button>
          <button onClick={() => goPage('/ropa')} style={linkStyle(isActive('/ropa'))}>{t.ropa}</button>
          <button onClick={() => goPage('/contact')} style={linkStyle(isActive('/contact'))}>{t.contact}</button>
          <button onClick={() => goPage('/drivers')} style={linkStyle(isActive('/drivers'))}>{t.driverGuide}</button>
        </div>

        {/* Right: lang + CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div
            role="group"
            aria-label="Language"
            style={{
              display: 'flex', alignItems: 'center', gap: 2,
              border: '1px solid rgba(255,255,255,0.22)', borderRadius: 6, padding: 2,
            }}
          >
            {langOptions.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                style={langBtnStyle(lang === code)}
              >
                {label}
              </button>
            ))}
          </div>

          <a href="https://dashboard.flexishift.io" target="_blank" rel="noopener noreferrer"
            className="hide-mobile"
            style={{ fontSize: 13, fontWeight: 600, color: 'white', background: 'var(--teal)', borderRadius: 8, padding: '7px 16px', textDecoration: 'none', display: 'inline-block' }}
          >{t.getStarted}</a>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-link" onClick={() => scrollToSection('/how-it-works', 'how')}>{t.howItWorks}</button>
          <button className="mobile-menu-link" onClick={() => scrollToSection('/markets', 'markets')}>{t.markets}</button>
          <button className="mobile-menu-link" onClick={() => goPage('/terms')}>{t.terms}</button>
          <button className="mobile-menu-link" onClick={() => goPage('/privacy-policy')}>{t.privacy}</button>
          <button className="mobile-menu-link" onClick={() => goPage('/ropa')}>{t.ropa}</button>
          <button className="mobile-menu-link" onClick={() => goPage('/contact')}>{t.contact}</button>
          <button className="mobile-menu-link" onClick={() => goPage('/drivers')}>{t.driverGuide}</button>
          <div style={{ paddingTop: 20 }}>
            <a href="https://dashboard.flexishift.io" target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', padding: '14px', background: 'var(--teal)', borderRadius: 10, color: 'white', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}
            >{t.getStarted}</a>
          </div>
        </div>
      )}
    </>
  );
}
