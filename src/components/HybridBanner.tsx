import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../context/LanguageContext';

interface HybridBannerProps {
  docName: string;
}

const copyByLang: Record<Exclude<Lang, 'en'>, { title: string; body: (name: string) => string }> = {
  no: {
    title: 'Kun tilgjengelig på engelsk',
    body: (name) =>
      `${name} er foreløpig kun tilgjengelig på engelsk. En oversettelse vil bli tilgjengelig snart.`,
  },
  sv: {
    title: 'Endast tillgänglig på engelska',
    body: (name) =>
      `${name} är för närvarande endast tillgänglig på engelska. En översättning kommer snart.`,
  },
};

export default function HybridBanner({ docName }: HybridBannerProps) {
  const { lang } = useLanguage();
  if (lang === 'en') return null;

  const copy = copyByLang[lang];

  return (
    <div style={{
      width: '100%', marginBottom: '2rem',
      borderRadius: 12, border: '1px solid rgba(0,168,150,0.3)',
      padding: '16px 20px',
      background: 'rgba(0,168,150,0.07)',
      display: 'flex', gap: 12, alignItems: 'flex-start',
    }}>
      {lang === 'no' ? (
        <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden>
          <rect width="24" height="24" rx="12" fill="#EF2B2D"/>
          <rect x="6" y="0" width="4" height="24" fill="white"/>
          <rect x="0" y="10" width="24" height="4" fill="white"/>
          <rect x="7" y="0" width="2" height="24" fill="#002868"/>
          <rect x="0" y="11" width="24" height="2" fill="#002868"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden>
          <rect width="24" height="24" rx="12" fill="#006AA7"/>
          <rect x="7" y="0" width="4" height="24" fill="#FECC00"/>
          <rect x="0" y="10" width="24" height="4" fill="#FECC00"/>
        </svg>
      )}
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, color: 'var(--teal)' }}>
          {copy.title}
        </p>
        <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.6 }}>
          {copy.body(docName)}
        </p>
      </div>
    </div>
  );
}
