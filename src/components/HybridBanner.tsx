import { useLanguage } from '../context/LanguageContext';

interface HybridBannerProps {
  docName: string;
}

export default function HybridBanner({ docName }: HybridBannerProps) {
  const { lang } = useLanguage();
  if (lang !== 'no') return null;

  return (
    <div style={{
      width: '100%', marginBottom: '2rem',
      borderRadius: 12, border: '1px solid rgba(0,168,150,0.3)',
      padding: '16px 20px',
      background: 'rgba(0,168,150,0.07)',
      display: 'flex', gap: 12, alignItems: 'flex-start',
    }}>
      {/* SVG Norwegian flag instead of emoji */}
      <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
        <rect width="24" height="24" rx="12" fill="#EF2B2D"/>
        <rect x="6" y="0" width="4" height="24" fill="white"/>
        <rect x="0" y="10" width="24" height="4" fill="white"/>
        <rect x="7" y="0" width="2" height="24" fill="#002868"/>
        <rect x="0" y="11" width="24" height="2" fill="#002868"/>
      </svg>
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, color: 'var(--teal)' }}>
          Norsk oversettelse ikke tilgjengelig ennå
        </p>
        <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.6 }}>
          <strong>{docName}</strong> er foreløpig kun tilgjengelig på engelsk. En autorisert norsk oversettelse er under utarbeidelse og vil bli publisert snart.
        </p>
      </div>
    </div>
  );
}
