import { useLanguage } from '../context/LanguageContext';
import { tcEnHTML, tcNoHTML } from '../content/tcContent';
import type { Page } from '../types';

interface TermsPageProps {
  setCurrentPage: (p: Page) => void;
}

export default function TermsPage({ setCurrentPage }: TermsPageProps) {
  const { lang } = useLanguage();
  const html = lang === 'no' ? tcNoHTML : tcEnHTML;

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Page header strip */}
      <div style={{ background: 'var(--pale)', padding: '32px 5% 0', borderBottom: '1px solid #E5ECF5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 24, flexWrap: 'wrap' }}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{ fontSize: 13, color: 'var(--mid)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            ← {lang === 'no' ? 'Tilbake til hjem' : 'Back to home'}
          </button>
          {lang === 'no' && (
            <span style={{
              fontSize: 12, fontWeight: 600, padding: '3px 10px',
              background: 'rgba(0,168,150,0.12)', borderRadius: 20, color: '#00766A',
            }}>🇳🇴 Norsk versjon tilgjengelig</span>
          )}
        </div>
      </div>

      {/* Document */}
      <div style={{ padding: '48px 5% 96px', background: 'white' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div
            className="prose-legal"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: 'var(--navy)', padding: '24px 5%' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>© 2026 AI Planning Ltd · FlexiShift</span>
          <button onClick={() => setCurrentPage('home')} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
            {lang === 'no' ? '← Tilbake' : '← Back'}
          </button>
        </div>
      </footer>
    </div>
  );
}
