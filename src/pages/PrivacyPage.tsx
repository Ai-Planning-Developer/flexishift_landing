import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { privacyEnHTML, privacyStyles } from '../content/privacyContent';
import HybridBanner from '../components/HybridBanner';

const backLabels = {
  en: { home: 'Back to home', back: '← Back' },
  no: { home: 'Tilbake til hjem', back: '← Tilbake' },
  sv: { home: 'Tillbaka till startsidan', back: '← Tillbaka' },
} as const;

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = backLabels[lang];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const styleId = 'pp-styles';
    let el = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement('style');
      el.id = styleId;
      document.head.appendChild(el);
    }
    const scoped = privacyStyles
      .split('\n')
      .map(line => {
        if (line.trim().startsWith(':root') ||
            line.trim().startsWith('html') ||
            line.trim().startsWith('body')) return '';
        return line;
      })
      .join('\n');
    el.textContent = `.pp-document { ${scoped} }`;
    return () => { el?.remove(); };
  }, []);

  return (
    <div style={{ paddingTop: 64, background: 'var(--pale)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '20px 24px 0' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            fontSize: 13, color: 'var(--mid)', background: 'none',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}
        >
          ← {t.home}
        </button>
      </div>

      {lang !== 'en' && (
        <div style={{ maxWidth: 900, margin: '12px auto 0', padding: '0 24px' }}>
          <HybridBanner docName="Privacy Policy" />
        </div>
      )}

      <div
        className="pp-document"
        dangerouslySetInnerHTML={{ __html: privacyEnHTML }}
      />

      <footer style={{ background: '#080F1C', padding: '28px 5%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>© 2026 AI Planning Ltd · FlexiShift</span>
          <button onClick={() => navigate('/')} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, background: 'none', border: 'none', cursor: 'pointer' }}>
            {t.back}
          </button>
        </div>
      </footer>
    </div>
  );
}
