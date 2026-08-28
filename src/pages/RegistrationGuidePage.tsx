import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import GuidePage from '../components/GuidePage';
import {
  registrationGuideStyles,
  registrationGuideEnHTML,
  registrationGuideNoHTML,
  registrationGuideSvHTML,
} from '../content/registrationGuideContent';

const verifyCopy = {
  en: {
    kicker: 'We verify 100% of drivers',
    cta: 'Book your 5-minute video verification',
  },
  no: {
    kicker: 'Vi verifiserer 100 % av sjåførene',
    cta: 'Book 5 minutters videoverifisering',
  },
  sv: {
    kicker: 'Vi verifierar 100 % av förarna',
    cta: 'Boka 5 minuters videoverifiering',
  },
} as const;

const verifyHref = (import.meta.env.VITE_DRIVER_VERIFY_URL as string | undefined)?.trim() || '/contact';
const verifyExternal = /^https?:\/\//i.test(verifyHref);

export default function RegistrationGuidePage() {
  const { lang } = useLanguage();
  const html =
    lang === 'no'
      ? registrationGuideNoHTML
      : lang === 'sv'
        ? registrationGuideSvHTML
        : registrationGuideEnHTML;
  const copy = verifyCopy[lang];

  const ctaStyle = {
    display: 'inline-block',
    background: 'var(--teal)',
    color: 'white',
    padding: '14px 26px',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(0,168,150,0.35)',
  } as const;

  return (
    <GuidePage
      styleId="registration-guide-styles"
      styles={registrationGuideStyles}
      html={html}
      banner={
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '8px 24px 16px' }}>
          <div
            style={{
              background: 'white',
              border: '1px solid #E5ECF5',
              borderRadius: 12,
              padding: '22px 24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 16,
              justifyContent: 'space-between',
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.3px' }}>
              {copy.kicker}
            </div>
            {verifyExternal ? (
              <a href={verifyHref} target="_blank" rel="noopener noreferrer" style={ctaStyle}>
                {copy.cta}
              </a>
            ) : (
              <Link to={verifyHref} style={ctaStyle}>
                {copy.cta}
              </Link>
            )}
          </div>
        </div>
      }
      related={[
        {
          to: '/drivers',
          label: {
            en: 'Driver overview & earnings calculator →',
            no: 'Sjåføroversikt og inntektskalkulator →',
            sv: 'Föraröversikt och inkomstkalkylator →',
          },
        },
        {
          to: '/guides/sole-trader',
          label: {
            en: 'Sole trader / self-employed guide →',
            no: 'Guide for enkeltpersonforetak →',
            sv: 'Guide för egenföretagare →',
          },
        },
        {
          to: '/register',
          label: {
            en: 'Go to driver registration →',
            no: 'Gå til sjåførregistrering →',
            sv: 'Gå till förarregistrering →',
          },
        },
      ]}
    />
  );
}
