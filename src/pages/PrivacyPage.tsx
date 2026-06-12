import { useLanguage } from '../context/LanguageContext';
import { privacyHTML } from '../content/privacyContent';
import HybridBanner from '../components/HybridBanner';
import type { Page } from '../types';

interface PrivacyPageProps {
  setCurrentPage: (p: Page) => void;
}

export default function PrivacyPage({ setCurrentPage }: PrivacyPageProps) {
  const { lang } = useLanguage();

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Page header strip */}
      <div style={{ background: 'var(--pale)', padding: '32px 5% 0', borderBottom: '1px solid #E5ECF5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', paddingBottom: 24 }}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{ fontSize: 13, color: 'var(--mid)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            ← {lang === 'no' ? 'Tilbake til hjem' : 'Back to home'}
          </button>
        </div>
      </div>

      {/* Document */}
      <div style={{ padding: '48px 5% 96px', background: 'white' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {/* Hybrid banner shown when language is NO */}
          <HybridBanner docName="Privacy Policy" />

          <div
            className="prose-legal"
            dangerouslySetInnerHTML={{ __html: privacyHTML }}
          />
        </div>
      </div>

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
