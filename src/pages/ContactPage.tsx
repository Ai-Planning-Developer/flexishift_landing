import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const labels = {
  en: {
    badge: 'Support',
    title: 'Contact Us',
    sub: 'Have questions about FlexiShift? Our team is here to help drivers, hauliers, and businesses.',
    infoTitle: 'Get in Touch',
    infoSub: 'For support, account assistance, data protection requests, or general enquiries, contact the FlexiShift team.',
    emailLabel: 'General Enquiries',
    supportLabel: 'Technical Support',
    topicsTitle: 'Common Support Topics',
    topics: ['Account Support', 'Driver Verification Help', 'Haulier Registration Support', 'Payment & Escrow Queries', 'Technical Issues', 'Data Protection Requests'],
    formTitle: 'Send us a Message',
    firstName: 'Full Name', firstNamePh: 'John Doe',
    email: 'Email Address', emailPh: 'john@example.com',
    userType: 'I am a...', driver: 'Driver', haulier: 'Haulier', other: 'Other / General Enquiry',
    subject: 'Subject', subjectPh: 'How can we help?',
    message: 'Message', messagePh: 'Please provide details about your enquiry...',
    send: 'Send Message',
    successTitle: 'Message sent!',
    successSub: 'We\'ll get back to you at your email address within 1–2 business days.',
    back: 'Back to home',
  },
  no: {
    badge: 'Support',
    title: 'Kontakt oss',
    sub: 'Har du spørsmål om FlexiShift? Teamet vårt er her for å hjelpe sjåfører, transportører og bedrifter.',
    infoTitle: 'Ta kontakt',
    infoSub: 'For support, kontohjelp, personvernforespørsler eller generelle henvendelser, kontakt FlexiShift-teamet.',
    emailLabel: 'Generelle henvendelser',
    supportLabel: 'Teknisk support',
    topicsTitle: 'Vanlige supportemner',
    topics: ['Kontostøtte', 'Hjelp med sjåførverifisering', 'Støtte for transportørregistrering', 'Betaling og escrow-spørsmål', 'Tekniske problemer', 'Personvernforespørsler'],
    formTitle: 'Send oss en melding',
    firstName: 'Fullt navn', firstNamePh: 'Ola Nordmann',
    email: 'E-postadresse', emailPh: 'ola@eksempel.no',
    userType: 'Jeg er...', driver: 'Sjåfør', haulier: 'Transportør', other: 'Annet / Generell henvendelse',
    subject: 'Emne', subjectPh: 'Hvordan kan vi hjelpe?',
    message: 'Melding', messagePh: 'Gi detaljer om henvendelsen din...',
    send: 'Send melding',
    successTitle: 'Melding sendt!',
    successSub: 'Vi svarer deg på e-postadressen din innen 1–2 virkedager.',
    back: 'Tilbake til hjem',
  },
};

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #D1D5DB',
  fontSize: 14, color: 'var(--dark)', background: 'white', outline: 'none',
  fontFamily: 'inherit', boxSizing: 'border-box',
  transition: 'border-color 0.15s',
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = labels[lang];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', userType: 'driver', subject: '', message: '' });

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to backend or email service
    // For now: mailto fallback
    const body = `Name: ${form.name}\nType: ${form.userType}\nSubject: ${form.subject}\n\n${form.message}`;
    window.location.href = `mailto:support@ai-planning.io?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 64, minHeight: '100vh', background: 'var(--pale)' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0B2545 0%, #0F3460 60%, #1a5494 100%)',
        padding: 'clamp(48px,7vw,80px) 5% clamp(40px,6vw,64px)',
        textAlign: 'center',
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,168,150,0.15)', border: '1px solid rgba(0,168,150,0.3)', color: '#5DDDD2', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 20, marginBottom: 20, letterSpacing: '.06em', textTransform: 'uppercase' }}>
          {t.badge}
        </div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: 16 }}>{t.title}</h1>
        <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>{t.sub}</p>
      </section>

      {/* Main content */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 5%', maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(24px,4vw,48px)', alignItems: 'start' }}>

          {/* Left — Contact info card */}
          <div style={{ background: 'white', borderRadius: 16, border: '1px solid #E5ECF5', padding: 'clamp(24px,3vw,40px)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 10 }}>{t.infoTitle}</h2>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28 }}>{t.infoSub}</p>

            {/* Email cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              {/* General */}
              <a href="mailto:info@ai-planning.io" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 12, background: 'var(--pale)', border: '1px solid #E5ECF5', textDecoration: 'none', transition: 'border-color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#E5ECF5')}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '.04em' }}>{t.emailLabel}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)' }}>info@ai-planning.io</div>
                </div>
              </a>
              {/* Support */}
              <a href="mailto:support@ai-planning.io" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 12, background: 'var(--pale)', border: '1px solid #E5ECF5', textDecoration: 'none', transition: 'border-color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#E5ECF5')}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,168,150,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '.04em' }}>{t.supportLabel}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--teal)' }}>support@ai-planning.io</div>
                </div>
              </a>
            </div>

            {/* Topics */}
            <div style={{ borderTop: '1px solid #E5ECF5', paddingTop: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--dark)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '.05em' }}>{t.topicsTitle}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {t.topics.map((topic, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(0,168,150,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, color: 'var(--muted)' }}>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact form card */}
          <div style={{ background: 'white', borderRadius: 16, border: '1px solid #E5ECF5', padding: 'clamp(24px,3vw,40px)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(0,168,150,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 10 }}>{t.successTitle}</h3>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 28 }}>{t.successSub}</p>
                <button onClick={() => setSubmitted(false)} style={{ padding: '10px 24px', borderRadius: 8, border: '1.5px solid var(--navy)', background: 'none', color: 'var(--navy)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                  Send another
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 24 }}>{t.formTitle}</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {/* Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,180px),1fr))', gap: 16 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{t.firstName}</label>
                      <input required style={inputStyle} type="text" placeholder={t.firstNamePh} value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                        onBlur={e => (e.target.style.borderColor = '#D1D5DB')} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{t.email}</label>
                      <input required style={inputStyle} type="email" placeholder={t.emailPh} value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                        onBlur={e => (e.target.style.borderColor = '#D1D5DB')} />
                    </div>
                  </div>

                  {/* User type */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{t.userType}</label>
                    <select style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 40 }}
                      value={form.userType} onChange={e => setForm(f => ({ ...f, userType: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                      onBlur={e => (e.target.style.borderColor = '#D1D5DB')}>
                      <option value="driver">{t.driver}</option>
                      <option value="haulier">{t.haulier}</option>
                      <option value="other">{t.other}</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{t.subject}</label>
                    <input required style={inputStyle} type="text" placeholder={t.subjectPh} value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                      onBlur={e => (e.target.style.borderColor = '#D1D5DB')} />
                  </div>

                  {/* Message */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{t.message}</label>
                    <textarea required rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }} placeholder={t.messagePh}
                      value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                      onBlur={e => (e.target.style.borderColor = '#D1D5DB')} />
                  </div>

                  {/* Submit */}
                  <button type="submit" style={{
                    background: 'var(--teal)', color: 'white', border: 'none', cursor: 'pointer',
                    padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15,
                    display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start',
                    transition: 'opacity 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                    {t.send}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
                    </svg>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--navy)', padding: '24px 5%' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>© 2026 AI Planning Ltd · FlexiShift</span>
          <button onClick={() => navigate('/')} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
            ← {t.back}
          </button>
        </div>
      </footer>
    </div>
  );
}
