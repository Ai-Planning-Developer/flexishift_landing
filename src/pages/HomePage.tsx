import { useLanguage } from '../context/LanguageContext';
import { homeContent } from '../content/homeContent';
import type { Page } from '../types';

interface HomePageProps {
  setCurrentPage: (p: Page) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const { lang } = useLanguage();
  const t = homeContent[lang];

  return (
    <div>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0B2545 0%, #0F3460 55%, #1a5494 100%)',
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '120px 5% 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 760, position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,168,150,0.15)', border: '1px solid rgba(0,168,150,0.3)',
            color: '#5DDDD2', fontSize: 13, fontWeight: 600,
            padding: '6px 14px', borderRadius: 20, marginBottom: 28,
            letterSpacing: '.04em', textTransform: 'uppercase',
          }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
            {t.heroBadge}
          </div>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 800, lineHeight: 1.1,
            color: 'white', letterSpacing: '-1.5px', marginBottom: 24,
          }}>
            {t.heroH1_1}<em style={{ fontStyle: 'normal', color: 'var(--teal)' }}>{t.heroH1_em}</em>{t.heroH1_2}
          </h1>
          <p style={{ fontSize: 19, color: 'rgba(255,255,255,0.75)', maxWidth: 580, marginBottom: 20, lineHeight: 1.65 }}>
            {t.heroSub}
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 40 }}>
            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>{t.heroMarkets.split(':')[0]}:</strong>
            {' ' + t.heroMarkets.split(':')[1]}
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#" style={{
              background: 'var(--teal)', color: 'white',
              padding: '15px 30px', borderRadius: 10,
              fontWeight: 700, fontSize: 16, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0,168,150,0.35)',
            }}>{t.heroCtaPrimary}</a>
            <a href="#" style={{
              background: 'rgba(255,255,255,0.1)', color: 'white',
              padding: '14px 28px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.2)',
              fontWeight: 600, fontSize: 16, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, paddingLeft: 2 }}>▶</span>
              {t.heroCtaSecondary}
            </a>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 40, left: '5%', display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
          <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.2)' }} />
          {t.heroScroll}
        </div>
      </section>

      {/* WHAT FLEXISHIFT DOES */}
      <section style={{ padding: '96px 5%', background: 'var(--pale)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>{t.whatEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 20 }}>{t.whatTitle}</h2>
          <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7, marginBottom: 56 }}>{t.whatLead}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {t.whatCards.map((card, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 'var(--radius)', padding: 36, border: '1px solid #E5ECF5' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, background: i % 2 === 0 ? 'var(--light)' : 'rgba(0,168,150,0.1)', fontSize: 22 }}>{card.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--dark)', marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section style={{ padding: '96px 5%', background: 'var(--navy)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>{t.pillarsEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 800, color: 'white', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 20 }}>{t.pillarsTitle}</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 600, lineHeight: 1.7, marginBottom: 56 }}>{t.pillarsLead}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
            {t.pillars.map((p, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)', padding: '40px 36px',
                border: '1px solid rgba(255,255,255,0.06)', position: 'relative',
                borderRadius: i === 0 ? '12px 0 0 12px' : i === t.pillars.length - 1 ? '0 12px 12px 0' : 0,
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--teal)', borderRadius: '12px 12px 0 0' }} />
                <div style={{ fontSize: 56, fontWeight: 900, color: 'rgba(255,255,255,0.05)', lineHeight: 1, marginBottom: 20, letterSpacing: '-2px' }}>{p.num}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 14 }}>
                  <span style={{ color: 'var(--teal)' }}>{p.accent}</span>{p.rest}
                </h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: '96px 5%', background: 'white' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>{t.howEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 20 }}>{t.howTitle}</h2>
          <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7, marginBottom: 56 }}>{t.howLead}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
            {/* Hauliers */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, paddingBottom: 20, borderBottom: '2px solid var(--light)' }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 6, background: 'var(--light)', color: 'var(--navy)' }}>{t.haulierBadge}</span>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)' }}>{t.haulierTitle}</h3>
              </div>
              {t.haulierSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 18, marginBottom: 24, padding: 20, borderRadius: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, marginTop: 2, background: 'var(--navy)', color: 'white' }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', marginBottom: 5 }}>{step.title}</div>
                    <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Drivers */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, paddingBottom: 20, borderBottom: '2px solid var(--light)' }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 6, background: 'rgba(0,168,150,0.12)', color: '#00766A' }}>{t.driverBadge}</span>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)' }}>{t.driverTitle}</h3>
              </div>
              {t.driverSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 18, marginBottom: 24, padding: 20, borderRadius: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, marginTop: 2, background: 'var(--teal)', color: 'white' }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', marginBottom: 5 }}>{step.title}</div>
                    <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section id="markets" style={{ padding: '96px 5%', background: 'var(--pale)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>{t.marketsEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 20 }}>{t.marketsTitle}</h2>
          <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7, marginBottom: 56 }}>{t.marketsLead}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 40 }}>
            {t.markets.map((m, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 'var(--radius)', padding: 32, border: '1px solid #E5ECF5', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{m.flag}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>{m.name}</div>
                <span style={{
                  display: 'inline-block', fontSize: 12, fontWeight: 600,
                  padding: '3px 10px', borderRadius: 20, marginBottom: 12,
                  background: m.live ? 'rgba(0,168,150,0.12)' : 'var(--light)',
                  color: m.live ? '#00766A' : 'var(--mid)',
                }}>{m.status}</span>
                <div style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 10 }}>{m.detail}</div>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', background: 'var(--pale)', borderRadius: 20, color: 'var(--navy)' }}>{m.currency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* T&C NOTICE */}
      <div style={{ margin: '0 5%' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0B2545, #0F3460)',
          borderRadius: 'var(--radius)', padding: '48px',
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
        }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 12 }}>{t.noticeTitle}</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 10 }}>{t.noticeP1}</p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{t.noticeP2}</p>
          </div>
          <div>
            <button
              onClick={() => setCurrentPage('terms')}
              style={{
                display: 'inline-block', padding: '13px 26px',
                border: '2px solid rgba(255,255,255,0.3)', borderRadius: 10,
                color: 'white', fontWeight: 600, fontSize: 15, whiteSpace: 'nowrap',
                background: 'transparent', cursor: 'pointer',
              }}
            >
              {t.noticeLink}
            </button>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <section id="register" style={{ padding: '96px 5%', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>{t.ctaEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 14 }}>{t.ctaTitle}</h2>
          <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7, margin: '0 auto 48px', textAlign: 'center' }}>{t.ctaLead}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{
              padding: '16px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none',
              background: 'var(--navy)', color: 'white',
            }}>{t.ctaHaulier}</a>
            <a href="#" style={{
              padding: '16px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none',
              background: 'var(--teal)', color: 'white',
            }}>{t.ctaDriver}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--navy)', padding: '24px 5%' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{t.footerCopy}</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: t.footerPrivacy, page: 'privacy' as Page },
              { label: t.footerTerms, page: 'terms' as Page },
            ].map(({ label, page }) => (
              <button key={page} onClick={() => setCurrentPage(page)}
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
                {label}
              </button>
            ))}
            <a href="#" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none' }}>{t.footerContact}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
