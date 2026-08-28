import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { driversContent } from '../content/driversContent';
import './drivers.css';

const verifyHref =
  (import.meta.env.VITE_DRIVER_VERIFY_URL as string | undefined)?.trim() ||
  '/guides/registration#verification';
const verifyExternal = /^https?:\/\//i.test(verifyHref);

function formatEarnings(currency: string, total: number) {
  const formatted = total.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (currency === 'kr') return `${formatted} ${currency}`;
  return `${currency}${formatted}`;
}

function DriversCalculator({ t }: { t: (typeof driversContent)[keyof typeof driversContent] }) {
  const [rate, setRate] = useState(t.calcRateDefault);
  const [hours, setHours] = useState(t.calcHoursDefault);
  const weekly = (Number(rate) || 0) * (Number(hours) || 0);

  return (
    <div className="drivers-calc">
      <div className="drivers-calc-title">{t.calcTitle}</div>
      <div className="drivers-calc-sub">{t.calcSub}</div>

      <div className="drivers-calc-row">
        <label className="drivers-calc-label" htmlFor="drivers-rate">
          {t.calcRateLabel}
        </label>
        <div className="drivers-calc-input-wrap">
          <span className="drivers-calc-prefix">{t.currencySymbol}</span>
          <input
            id="drivers-rate"
            type="number"
            min={0}
            step={0.5}
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
          />
        </div>
      </div>

      <div className="drivers-calc-row">
        <label className="drivers-calc-label" htmlFor="drivers-hours">
          {t.calcHoursLabel}
        </label>
        <div className="drivers-calc-input-wrap">
          <input
            id="drivers-hours"
            type="number"
            min={0}
            step={1}
            value={hours}
            onChange={(e) => setHours(parseFloat(e.target.value) || 0)}
          />
          <span className="drivers-calc-suffix">{t.calcHoursSuffix}</span>
        </div>
      </div>

      <div className="drivers-calc-result">
        <div className="drivers-calc-result-label">{t.calcResultLabel}</div>
        <div className="drivers-calc-result-value">
          {formatEarnings(t.currencySymbol, weekly)}
        </div>
        <div className="drivers-calc-result-note">{t.calcResultNote}</div>
      </div>

      <div className="drivers-calc-fee">
        <span aria-hidden>✓</span>
        <p>{t.calcFeeNote}</p>
      </div>
    </div>
  );
}

export default function DriversPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = driversContent[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subnavLabels = {
    en: {
      back: '← Back to home',
      calc: 'Calculator',
      shifts: 'Shift Types',
      verify: 'Verification',
      how: 'How It Works',
      trust: 'Why FlexiShift',
    },
    no: {
      back: '← Tilbake til hjem',
      calc: 'Kalkulator',
      shifts: 'Skiftkategorier',
      verify: 'Verifisering',
      how: 'Slik fungerer det',
      trust: 'Hvorfor oss',
    },
    sv: {
      back: '← Tillbaka till startsidan',
      calc: 'Kalkylator',
      shifts: 'Skiftkategorier',
      verify: 'Verifiering',
      how: 'Så fungerar det',
      trust: 'Varför oss',
    },
  }[lang];

  return (
    <div className="drivers-page">
      <nav className="drivers-subnav" aria-label="Drivers section navigation">
        <div className="drivers-subnav-inner">
          <button
            type="button"
            className="drivers-subnav-back"
            onClick={() => navigate('/')}
          >
            {subnavLabels.back}
          </button>
          <div className="drivers-subnav-links">
            <a href="#calculator" className="drivers-subnav-link">
              {subnavLabels.calc}
            </a>
            <a href="#categories" className="drivers-subnav-link">
              {subnavLabels.shifts}
            </a>
            <a href="#verify" className="drivers-subnav-link">
              {subnavLabels.verify}
            </a>
            <a href="#how-it-works" className="drivers-subnav-link">
              {subnavLabels.how}
            </a>
            <a href="#trust" className="drivers-subnav-link">
              {subnavLabels.trust}
            </a>
          </div>
        </div>
      </nav>

      <section className="drivers-hero" id="calculator">
        <div className="drivers-hero-grid">
          <div className="drivers-hero-left">
            <span className="drivers-hero-eyebrow">{t.heroEyebrow}</span>
            <h1>
              {t.heroTitleBefore}
              <span className="amber">{t.heroTitleHighlight}</span>
              {t.heroTitleAfter}
            </h1>
            <p className="drivers-hero-sub">{t.heroSub}</p>
            <div className="drivers-hero-ctas">
              <Link to="/register" className="drivers-cta">
                {t.heroCta}
              </Link>
              <a href="#categories" className="drivers-cta-ghost">
                {t.heroSecondary}
              </a>
            </div>
            <p className="drivers-hero-note">{t.heroNote}</p>
            <div className="drivers-social">
              <span className="drivers-social-caption">{t.socialCaption}</span>
              <div className="drivers-social-icons">
                <a
                  href="https://www.facebook.com/Flexishift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drivers-social-icon fb"
                  aria-label="FlexiShift on Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="#fff">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.23 22 17.08 22 12.06z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/flexishift.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drivers-social-icon ig"
                  aria-label="FlexiShift on Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.3" cy="6.7" r="1.1" fill="#fff" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <DriversCalculator key={lang} t={t} />
        </div>
      </section>

      <section>
        <div className="drivers-wrap">
          <div className="drivers-eyebrow">{t.perfectEyebrow}</div>
          <h2 className="drivers-section-title">{t.perfectTitle}</h2>
          <div className="drivers-perfect-grid">
            {t.perfectItems.map((item) => (
              <div key={item} className="drivers-perfect-item">
                <span className="drivers-perfect-check">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="drivers-why">
        <div className="drivers-wrap">
          <div className="drivers-eyebrow">{t.whyEyebrow}</div>
          <h2 className="drivers-section-title">{t.whyTitle}</h2>
          <p className="drivers-section-sub">{t.whySub}</p>
          <div className="drivers-vs">
            <div className="drivers-vs-header">
              <div className="drivers-vs-header-cell drivers-vs-old-h">{t.vsColOld}</div>
              <div className="drivers-vs-header-cell drivers-vs-new-h">{t.vsColNew}</div>
            </div>
            {t.vsRows.map((row) => (
              <div key={row.old} className="drivers-vs-row">
                <div className="drivers-vs-cell drivers-vs-old">
                  <span className="drivers-vs-x">✕</span>
                  <span>{row.old}</span>
                </div>
                <div className="drivers-vs-cell drivers-vs-new">
                  <span className="drivers-vs-check">✓</span>
                  <span>{row.neu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories">
        <div className="drivers-wrap">
          <div className="drivers-eyebrow">{t.catsEyebrow}</div>
          <h2 className="drivers-section-title">{t.catsTitle}</h2>
          <div className="drivers-cat-grid">
            <div className="drivers-cat-card">
              <div className="drivers-cat-top pro">
                <div className="drivers-cat-icon">🚛</div>
                <h3>{t.cat1title}</h3>
                <div className="drivers-cat-chips">
                  {t.cat1chips.map((c) => (
                    <span key={c} className="drivers-cat-chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="drivers-cat-body">
                <div className="drivers-cat-value-label">{t.cat1label}</div>
                <div className="drivers-cat-value">
                  {t.cat1value}
                  <span>{t.perShift}</span>
                </div>
                <Link to="/register" className="drivers-cat-btn pro">
                  {t.cat1btn}
                </Link>
              </div>
            </div>

            <div className="drivers-cat-card">
              <div className="drivers-cat-top van">
                <div className="drivers-cat-icon">🚐</div>
                <h3>{t.cat2title}</h3>
                <div className="drivers-cat-chips">
                  {t.cat2chips.map((c) => (
                    <span key={c} className="drivers-cat-chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="drivers-cat-body">
                <div className="drivers-cat-value-label">{t.cat2label}</div>
                <div className="drivers-cat-value">
                  {t.cat2value}
                  <span>{t.perShift}</span>
                </div>
                <Link to="/register" className="drivers-cat-btn van">
                  {t.cat2btn}
                </Link>
              </div>
            </div>

            <div className="drivers-cat-card disabled">
              <div className="drivers-cat-top gen">
                <div className="drivers-cat-icon">📦</div>
                <h3>{t.cat3title}</h3>
                <div className="drivers-cat-chips">
                  {t.cat3chips.map((c) => (
                    <span key={c} className="drivers-cat-chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="drivers-cat-body">
                <ul className="drivers-cat-reqs">
                  {t.cat3items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="drivers-cat-btn gen">
                  <span className="drivers-soon-dot" />
                  {t.cat3btn}
                </span>
              </div>
            </div>
          </div>
          <p className="drivers-cats-disclaimer">{t.catsDisclaimer}</p>
        </div>
      </section>

      <section id="verify" className="drivers-verify">
        <div className="drivers-wrap">
          <div className="drivers-eyebrow">{t.verifyEyebrow}</div>
          <h2 className="drivers-section-title">{t.verifyTitle}</h2>
          <p className="drivers-section-sub">{t.verifySub}</p>
          <div className="drivers-verify-grid">
            <ul className="drivers-verify-list">
              {t.verifyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div>
              <div className="drivers-verify-img">
                <img
                  src="/assets/verification-process.jpg"
                  alt="4 Simple Steps to Drive with FlexiShift: register online, submit documents, 5-minute video verification, download and start driving"
                />
              </div>
              <div className="drivers-verify-cta-wrap">
                {verifyExternal ? (
                  <a href={verifyHref} target="_blank" rel="noopener noreferrer">
                    {t.verifyCta}
                  </a>
                ) : (
                  <Link to={verifyHref}>{t.verifyCta}</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="drivers-wrap">
          <div className="drivers-eyebrow">{t.howEyebrow}</div>
          <h2 className="drivers-section-title">{t.howTitle}</h2>
          <div className="drivers-how-steps">
            {t.howSteps.map((step, i) => (
              <div key={step.title} className="drivers-hsc-item">
                <div className={`drivers-hsc-circle drivers-hsc-c${i + 1}`}>
                  {i === 0 && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1CA35A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E2761B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h13M13 6l6 6-6 6" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7B5FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M3 10h18M7 15h.01" />
                    </svg>
                  )}
                </div>
                <div className="drivers-hsc-num">{i + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="drivers-trust">
        <div className="drivers-wrap">
          <div className="drivers-eyebrow">{t.trustEyebrow}</div>
          <h2 className="drivers-section-title">{t.trustTitle}</h2>
          <div className="drivers-trust-grid">
            {t.trustItems.map((item) => (
              <div key={item.title} className="drivers-trust-item">
                <div className="drivers-trust-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="drivers-final">
        <div className="drivers-wrap">
          <h2 className="drivers-section-title">{t.finalTitle}</h2>
          <p>{t.finalSub}</p>
          <Link to="/register" className="drivers-cta">
            {t.finalCta}
          </Link>
        </div>
      </section>

      <footer className="drivers-page-footer">
        <div>© 2026 AI Planning Ltd · FlexiShift</div>
        <div style={{ marginTop: 10 }}>
          <button type="button" onClick={() => navigate('/privacy-policy')}>
            Privacy
          </button>
          <button type="button" onClick={() => navigate('/terms')}>
            Terms
          </button>
          <Link to="/">{t.footerHaulier}</Link>
        </div>
      </footer>
    </div>
  );
}
