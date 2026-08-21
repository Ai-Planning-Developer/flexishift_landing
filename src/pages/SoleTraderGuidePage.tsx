import { useLanguage } from '../context/LanguageContext';
import GuidePage from '../components/GuidePage';
import {
  soleTraderGuideStyles,
  soleTraderGuideEnHTML,
  soleTraderGuideNoHTML,
  soleTraderGuideSvHTML,
} from '../content/soleTraderGuideContent';

export default function SoleTraderGuidePage() {
  const { lang } = useLanguage();
  const html =
    lang === 'no'
      ? soleTraderGuideNoHTML
      : lang === 'sv'
        ? soleTraderGuideSvHTML
        : soleTraderGuideEnHTML;

  return (
    <GuidePage
      styleId="sole-trader-guide-styles"
      styles={soleTraderGuideStyles}
      html={html}
      related={[
        {
          to: '/guides/registration',
          label: {
            en: 'Driver registration guide →',
            no: 'Guide for sjåførregistrering →',
            sv: 'Guide för förarregistrering →',
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
