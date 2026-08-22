import { useLanguage } from '../context/LanguageContext';
import GuidePage from '../components/GuidePage';
import { guideDocForSection } from '../components/guideHtml';
import {
  soleTraderGuideStyles,
  soleTraderGuideEnHTML,
} from '../content/soleTraderGuideContent';

export default function SoleTraderGuidePage() {
  const { lang } = useLanguage();
  const sectionId = lang === 'no' ? 'norway' : lang === 'sv' ? 'sweden' : 'uk';
  const html = guideDocForSection(soleTraderGuideEnHTML, sectionId);

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
