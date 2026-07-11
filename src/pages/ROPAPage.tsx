import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ropaEnHTML, ropaStyles } from '../content/ropaContent';
import HybridBanner from '../components/HybridBanner';

const backLabels = {
  en: { home: 'Back to home', back: '← Back' },
  no: { home: 'Tilbake til hjem', back: '← Tilbake' },
  sv: { home: 'Tillbaka till startsidan', back: '← Tillbaka' },
} as const;

export default function ROPAPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = backLabels[lang];

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  useEffect(() => {
    const styleId = 'ropa-styles';
    let el = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!el) { el = document.createElement('style'); el.id = styleId; document.head.appendChild(el); }
    const scoped = ropaStyles.split('\n').map(line => {
      if (line.trim().startsWith(':root') || line.trim().startsWith('html') || line.trim().startsWith('body')) return '';
      return line;
    }).join('\n');
    el.textContent = `.ropa-document { ${scoped} }`;
    return () => { el?.remove(); };
  }, []);

  return (
    <div style={{ paddingTop: 64, background: 'var(--pale)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/')}
            style={{ fontSize: 13, color: 'var(--mid)', background: 'none', border: 'none', cursor: 'pointer' }}>
            ← {t.home}
          </button>
        </div>
      </div>
      {lang !== 'en' && (
        <div style={{ maxWidth: 980, margin: '12px auto 0', padding: '0 24px' }}>
          <HybridBanner docName="Record of Processing Activities (ROPA)" />
        </div>
      )}
      <div className="ropa-document" dangerouslySetInnerHTML={{ __html: ropaEnHTML }} />
      <footer style={{ background: '#080F1C', padding: '28px 5%' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>© 2026 AI Planning Ltd · FlexiShift · ROPA v1.0</span>
          <button onClick={() => navigate('/')} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, background: 'none', border: 'none', cursor: 'pointer' }}>
            {t.back}
          </button>
        </div>
      </footer>
    </div>
  );
}
