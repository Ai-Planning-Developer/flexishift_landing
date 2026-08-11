import { useEffect } from 'react';
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
      </div>
      <RegistrationForm />
    </div>
  );
}
