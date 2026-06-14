import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { privacyHTML, privacyStyles } from '../content/privacyContent';
import HybridBanner from '../components/HybridBanner';

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Inject TC-compatible styles scoped to .pp-document
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
      {/* Back button */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '20px 24px 0' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            fontSize: 13, color: 'var(--mid)', background: 'none',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}
        >
          ← {lang === 'no' ? 'Tilbake til hjem' : 'Back to home'}
        </button>
      </div>

      {/* Norwegian hybrid banner */}
      {lang === 'no' && (
        <div style={{ maxWidth: 900, margin: '12px auto 0', padding: '0 24px' }}>
          <HybridBanner docName="Privacy Policy" />
        </div>
      )}

      {/* Privacy Policy content — same TC design */}
      <div
        className="pp-document"
        dangerouslySetInnerHTML={{ __html: privacyHTML }}
      />

      {/* Footer */}
      <footer style={{ background: '#080F1C', padding: '28px 5%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>© 2026 AI Planning Ltd · FlexiShift</span>
          <button onClick={() => navigate('/')} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, background: 'none', border: 'none', cursor: 'pointer' }}>
            {lang === 'no' ? '← Tilbake' : '← Back'}
          </button>
        </div>
      </footer>
    </div>
  );
}
