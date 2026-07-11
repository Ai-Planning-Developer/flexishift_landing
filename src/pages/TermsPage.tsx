import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { tcEnHTML, tcNoHTML, tcSvHTML, tcStyles } from '../content/tcContent';

const backLabels = {
  en: { home: 'Back to home', back: '← Back' },
  no: { home: 'Tilbake til hjem', back: '← Tilbake' },
  sv: { home: 'Tillbaka till startsidan', back: '← Tillbaka' },
} as const;

export default function TermsPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = backLabels[lang];
  const html = lang === 'no' ? tcNoHTML : lang === 'sv' ? tcSvHTML : tcEnHTML;

  useEffect(() => {
    const styleId = 'tc-styles';
    let el = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement('style');
      el.id = styleId;
      document.head.appendChild(el);
    }
    const scoped = tcStyles
      .split('\n')
      .map(line => {
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

      <div
        className="tc-document"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <footer style={{ background: '#080F1C', padding: '28px 5%', marginTop: 0 }}>
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
