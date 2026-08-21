import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { registrationContent } from '../content/registrationContent';
import RegistrationForm from '../components/registration/RegistrationForm';

export default function RegisterPage() {
  const { lang } = useLanguage();
  const t = registrationContent[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reg-page">
      <div className="reg-intro">
        <h1>{t.pageTitle}</h1>
        <p>{t.introText}</p>
        <div
          style={{
            marginTop: 16,
            padding: '14px 16px',
            background: 'white',
            border: '1px solid var(--border, #E5ECF5)',
            borderRadius: 10,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              marginBottom: 8,
            }}
          >
            {t.guideLinksTitle}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Link
              to="/guides/registration"
              style={{ color: 'var(--navy)', fontWeight: 600, fontSize: 14 }}
            >
              {t.regGuideLink} →
            </Link>
            <Link
              to="/guides/sole-trader"
              style={{ color: 'var(--navy)', fontWeight: 600, fontSize: 14 }}
            >
              {t.soleTraderGuideLink} →
            </Link>
          </div>
        </div>
      </div>
      <RegistrationForm />
    </div>
  );
}
