import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ropaHTML } from '../content/ropaContent';
import HybridBanner from '../components/HybridBanner';

export default function ROPAPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  return (
    <div style={{ paddingTop: 64 }}>
      <div style={{ background: 'var(--pale)', padding: '32px 5% 0', borderBottom: '1px solid #E5ECF5' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', paddingBottom: 24, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/')}
            style={{ fontSize: 13, color: 'var(--mid)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            ← {lang === 'no' ? 'Tilbake til hjem' : 'Back to home'}
          </button>
          <span style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', background: '#FEF3C7', borderRadius: 20, color: '#92400E' }}>
            ⚠ Confidential — Internal document
          </span>
        </div>
      </div>
      <div style={{ padding: '48px 5% 96px', background: 'white' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <HybridBanner docName="Record of Processing Activities (ROPA)" />
          <div className="prose-legal" dangerouslySetInnerHTML={{ __html: ropaHTML }} />
        </div>
      </div>
      <footer style={{ background: 'var(--navy)', padding: '24px 5%' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>© 2026 AI Planning Ltd · FlexiShift · ROPA v1.0</span>
          <button onClick={() => navigate('/')} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
            {lang === 'no' ? '← Tilbake' : '← Back'}
          </button>
        </div>
      </footer>
    </div>
  );
}
