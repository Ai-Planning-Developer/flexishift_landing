import { useLanguage } from '../context/LanguageContext';
import GuidePage from '../components/GuidePage';
import {
  registrationGuideStyles,
  registrationGuideEnHTML,
  registrationGuideNoHTML,
  registrationGuideSvHTML,
} from '../content/registrationGuideContent';

export default function RegistrationGuidePage() {
  const { lang } = useLanguage();
  const html =
    lang === 'no'
      ? registrationGuideNoHTML
      : lang === 'sv'
        ? registrationGuideSvHTML
        : registrationGuideEnHTML;

  return (
    <GuidePage
      styleId="registration-guide-styles"
      styles={registrationGuideStyles}
      html={html}
      related={[
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
