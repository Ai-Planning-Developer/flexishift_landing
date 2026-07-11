import { useLanguage } from '../context/LanguageContext';

interface HybridBannerProps {
  docName: string;
}

export default function HybridBanner({ docName }: HybridBannerProps) {
  const { lang } = useLanguage();
  if (lang !== 'no' && lang !== 'sv') return null;

  const copy = lang === 'no'
    ? {
        title: 'Norsk oversettelse ikke tilgjengelig ennå',
        body: (
          <>
            <strong>{docName}</strong> er foreløpig kun tilgjengelig på engelsk. En autorisert norsk oversettelse er under utarbeidelse og vil bli publisert snart.
          </>
        ),
        flag: (
          <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect width="24" height="24" rx="12" fill="#EF2B2D"/>
            <rect x="6" y="0" width="4" height="24" fill="white"/>
            <rect x="0" y="10" width="24" height="4" fill="white"/>
            <rect x="7" y="0" width="2" height="24" fill="#002868"/>
            <rect x="0" y="11" width="24" height="2" fill="#002868"/>
          </svg>
        ),
      }
    : {
        title: 'Svensk översättning inte tillgänglig ännu',
        body: (
          <>
            <strong>{docName}</strong> är för närvarande endast tillgänglig på engelska. En auktoriserad svensk översättning håller på att tas fram och kommer att publiceras snart.
          </>
        ),
        flag: (
          <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect width="24" height="24" rx="12" fill="#006AA7"/>
            <rect x="7" y="0" width="4" height="24" fill="#FECC00"/>
            <rect x="0" y="10" width="24" height="4" fill="#FECC00"/>
          </svg>
        ),
      };

  return (
    <div style={{
      width: '100%', marginBottom: '2rem',
      borderRadius: 12, border: '1px solid rgba(0,168,150,0.3)',
      padding: '16px 20px',
      background: 'rgba(0,168,150,0.07)',
      display: 'flex', gap: 12, alignItems: 'flex-start',
    }}>
      {copy.flag}
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, color: 'var(--teal)' }}>
          {copy.title}
        </p>
        <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.6 }}>
          {copy.body}
        </p>
      </div>
    </div>
  );
}
