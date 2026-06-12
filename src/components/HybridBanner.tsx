import { useLanguage } from '../context/LanguageContext';

interface HybridBannerProps {
  docName: string;
}

export default function HybridBanner({ docName }: HybridBannerProps) {
  const { lang } = useLanguage();
  if (lang !== 'no') return null;

  return (
    <div className="w-full mb-8 rounded-xl border px-5 py-4 flex gap-3 items-start"
      style={{
        background: 'rgba(0,168,150,0.07)',
        borderColor: 'rgba(0,168,150,0.3)',
      }}>
      <span className="text-xl mt-0.5 flex-shrink-0">🇳🇴</span>
      <div>
        <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--teal)' }}>
          Norsk oversettelse ikke tilgjengelig ennå
        </p>
        <p className="text-sm" style={{ color: 'var(--body)' }}>
          <strong>{docName}</strong> er foreløpig kun tilgjengelig på engelsk. En autorisert norsk oversettelse er under utarbeidelse og vil bli publisert snart.
        </p>
      </div>
    </div>
  );
}

//trigger