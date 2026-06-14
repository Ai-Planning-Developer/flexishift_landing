import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { tcEnHTML, tcNoHTML, tcStyles } from '../content/tcContent';

export default function TermsPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const html = lang === 'no' ? tcNoHTML : tcEnHTML;

  // Inject TC-specific styles into a scoped style tag
  useEffect(() => {
    const styleId = 'tc-styles';
    let el = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement('style');
      el.id = styleId;
      document.head.appendChild(el);
    }
    // Scope all TC styles under .tc-document to avoid conflicts
    const scoped = tcStyles
      .split('\n')
      .map(line => {
        // Skip :root and html/body rules — we handle those globally
        if (line.trim().startsWith(':root') || line.trim().startsWith('html') || line.trim().startsWith('body')) return '';
        return line;
      })
      .join('\n');
    el.textContent = `.tc-document { ${scoped} }`;

    return () => {
      el?.remove();
    };
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

      {/* TC Content — rendered with original design */}
      <div
        className="tc-document"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Footer */}
      <footer style={{ background: '#080F1C', padding: '28px 5%', marginTop: 0 }}>
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
