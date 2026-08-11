import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { homeContent } from '../content/homeContent';
import AppStoreBadges from '../components/AppStoreBadges';

interface HomePageProps { scrollTo?: string; }

// Responsive style helper — applies mobile styles via a className approach

export default function HomePage({ scrollTo }: HomePageProps) {
  useEffect(() => {
    if (scrollTo) {
      setTimeout(() => document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [scrollTo]);

  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = homeContent[lang];

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0B2545 0%, #0F3460 55%, #1a5494 100%)',
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(100px, 12vh, 140px) 5% clamp(60px, 8vh, 100px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1120, width: '100%', margin: '0 auto', position: 'relative' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 62px)', fontWeight: 800, lineHeight: 1.1, color: 'white', letterSpacing: '-1.5px', marginBottom: 20, maxWidth: 720 }}>
            {t.heroH1_1}<em style={{ fontStyle: 'normal', color: 'var(--teal)' }}>{t.heroH1_em}</em>{t.heroH1_2}
            <br />
            {t.heroH1_line2}
            <br />
            {t.heroH1_line3}
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 19px)', color: 'rgba(255,255,255,0.75)', maxWidth: 560, marginBottom: 36, lineHeight: 1.65 }}>{t.heroSub}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://dashboard.flexishift.io/login" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--teal)', color: 'white', padding: 'clamp(12px,2vw,15px) clamp(20px,3vw,30px)', borderRadius: 10, fontWeight: 700, fontSize: 'clamp(14px,1.5vw,16px)', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,168,150,0.35)' }}>{t.heroCtaPrimary}</a>
            <Link to="/register" style={{ background: 'var(--teal)', color: 'white', padding: 'clamp(12px,2vw,15px) clamp(20px,3vw,30px)', borderRadius: 10, fontWeight: 700, fontSize: 'clamp(14px,1.5vw,16px)', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,168,150,0.35)' }}>{t.heroCtaDriver}</Link>
            <a href="https://youtube.com/shorts/bLNen-wmBPw" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: 'clamp(11px,2vw,14px) clamp(18px,2.5vw,28px)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.2)', fontWeight: 600, fontSize: 'clamp(14px,1.5vw,16px)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, paddingLeft: 2 }}>▶</span>
              {t.heroCtaSecondary}
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginLeft: 'auto', alignItems: 'flex-start' }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)', margin: 0, letterSpacing: '0.01em' }}>{t.heroDriverApps}</p>
              <AppStoreBadges height={40} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT FLEXISHIFT DOES ── */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 5%', background: 'var(--pale)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{t.whatEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>{t.whatTitle}</h2>
          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7, marginBottom: 'clamp(32px,5vw,56px)' }}>{t.whatLead}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 'clamp(16px,3vw,32px)' }}>
            {t.whatCards.map((card, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 'var(--radius)', padding: 'clamp(20px,3vw,36px)', border: '1px solid #E5ECF5' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, background: i % 2 === 0 ? 'var(--light)' : 'rgba(0,168,150,0.1)', fontSize: 22 }}>{card.icon}</div>
                <h3 style={{ fontSize: 'clamp(15px,1.5vw,18px)', fontWeight: 700, color: 'var(--dark)', marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 5%', background: 'var(--navy)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{t.pillarsEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 800, color: 'white', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>{t.pillarsTitle}</h2>
          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'rgba(255,255,255,0.6)', maxWidth: 600, lineHeight: 1.7, marginBottom: 'clamp(32px,5vw,56px)' }}>{t.pillarsLead}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 2 }}>
            {t.pillars.map((p, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', padding: 'clamp(24px,3vw,40px) clamp(20px,2.5vw,36px)', border: '1px solid rgba(255,255,255,0.06)', position: 'relative', borderRadius: 12 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--teal)', borderRadius: '12px 12px 0 0' }} />
                <div style={{ fontSize: 'clamp(40px,5vw,56px)', fontWeight: 900, color: 'rgba(255,255,255,0.05)', lineHeight: 1, marginBottom: 16, letterSpacing: '-2px' }}>{p.num}</div>
                <h3 style={{ fontSize: 'clamp(16px,1.8vw,20px)', fontWeight: 700, color: 'white', marginBottom: 12 }}>
                  <span style={{ color: 'var(--teal)' }}>{p.accent}</span>{p.rest}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: 'clamp(56px,8vw,96px) 5%', background: 'white' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{t.howEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>{t.howTitle}</h2>
          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7, marginBottom: 'clamp(32px,5vw,56px)' }}>{t.howLead}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(32px,5vw,48px)' }}>
            {/* Hauliers */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, paddingBottom: 18, borderBottom: '2px solid var(--light)', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 6, background: 'var(--light)', color: 'var(--navy)', whiteSpace: 'nowrap' }}>{t.haulierBadge}</span>
                <h3 style={{ fontSize: 'clamp(18px,2vw,22px)', fontWeight: 800, color: 'var(--dark)' }}>{t.haulierTitle}</h3>
              </div>
              {t.haulierSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 20, padding: 'clamp(14px,2vw,20px)', borderRadius: 10, background: 'var(--pale)' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, marginTop: 2, background: 'var(--navy)', color: 'white' }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>{step.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Drivers */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, paddingBottom: 18, borderBottom: '2px solid var(--light)', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 6, background: 'rgba(0,168,150,0.12)', color: '#00766A', whiteSpace: 'nowrap' }}>{t.driverBadge}</span>
                <h3 style={{ fontSize: 'clamp(18px,2vw,22px)', fontWeight: 800, color: 'var(--dark)' }}>{t.driverTitle}</h3>
              </div>
              {t.driverSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 20, padding: 'clamp(14px,2vw,20px)', borderRadius: 10, background: 'var(--pale)' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, marginTop: 2, background: 'var(--teal)', color: 'white' }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>{step.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── YOUTUBE VIDEOS ── */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 5%', background: 'var(--pale)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{t.youtubeEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>{t.youtubeTitle}</h2>
          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7, marginBottom: 'clamp(32px,5vw,48px)' }}>{t.youtubeLead}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 'clamp(20px,3vw,36px)' }}>
            {t.youtubeVideos.map((video, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid #E5ECF5', boxShadow: '0 2px 12px rgba(15,52,96,0.06)' }}>
                <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#000' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
                <div style={{ padding: 'clamp(16px,2.5vw,24px)' }}>
                  <h3 style={{ fontSize: 'clamp(15px,1.5vw,17px)', fontWeight: 700, color: 'var(--dark)', marginBottom: 8 }}>{video.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── MARKETS ── */}
      <section id="markets" style={{ padding: 'clamp(56px,8vw,96px) 5%', background: 'var(--pale)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{t.marketsEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>{t.marketsTitle}</h2>
          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7, marginBottom: 'clamp(32px,5vw,56px)' }}>{t.marketsLead}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 'clamp(14px,2.5vw,24px)', marginBottom: 40 }}>
            {t.markets.map((m, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 'var(--radius)', padding: 'clamp(20px,3vw,32px)', border: '1px solid #E5ECF5', textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{m.flag}</div>
                <div style={{ fontSize: 'clamp(15px,1.5vw,18px)', fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>{m.name}</div>
                <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 20, marginBottom: 10, background: m.live ? 'rgba(0,168,150,0.12)' : 'var(--light)', color: m.live ? '#00766A' : 'var(--mid)' }}>{m.status}</span>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 10 }}>{m.detail}</div>
                <span style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', background: 'var(--pale)', borderRadius: 20, color: 'var(--navy)' }}>{m.currency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── T&C NOTICE ── */}
      <div style={{ margin: '0 5%', paddingBottom: 'clamp(40px,6vw,80px)' }}>
        <div style={{ background: 'linear-gradient(135deg, #0B2545, #0F3460)', borderRadius: 'var(--radius)', padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <h3 style={{ fontSize: 'clamp(17px,2vw,22px)', fontWeight: 800, color: 'white', marginBottom: 12 }}>{t.noticeTitle}</h3>
            <p style={{ fontSize: 'clamp(13px,1.4vw,15px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 10 }}>{t.noticeP1}</p>
            <p style={{ fontSize: 'clamp(13px,1.4vw,15px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{t.noticeP2}</p>
          </div>
          <div>
            <button onClick={() => navigate('/terms')} style={{ padding: '13px 26px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: 10, color: 'white', fontWeight: 600, fontSize: 15, background: 'transparent', cursor: 'pointer', width: '100%', maxWidth: 260 }}>
              {t.noticeLink}
            </button>
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <section id="register" style={{ padding: 'clamp(56px,8vw,96px) 5%', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{t.ctaEyebrow}</div>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 12 }}>{t.ctaTitle}</h2>
          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, margin: '0 auto clamp(32px,5vw,48px)', textAlign: 'center' }}>{t.ctaLead}</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://dashboard.flexishift.io/login" target="_blank" rel="noopener noreferrer" style={{ padding: 'clamp(13px,2vw,16px) clamp(20px,3vw,32px)', borderRadius: 10, fontWeight: 700, fontSize: 'clamp(13px,1.4vw,15px)', textDecoration: 'none', background: 'var(--navy)', color: 'white', width: '100%', maxWidth: 280, textAlign: 'center', boxSizing: 'border-box' }}>{t.ctaHaulier}</a>
          </div>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--dark)', margin: 0 }}>{t.ctaDriver}</p>
            <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>{t.ctaDriverApps}</p>
            <AppStoreBadges height={44} style={{ justifyContent: 'center' }} />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: 'var(--navy)', padding: 'clamp(20px,3vw,24px) 5%' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>{t.footerCopy}</span>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[{ label: t.footerPrivacy, path: '/privacy-policy' }, { label: t.footerTerms, path: '/terms' }].map(({ label, path }) => (
              <button key={path} onClick={() => navigate(path)} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, background: 'none', border: 'none', cursor: 'pointer' }}>{label}</button>
            ))}
            <button onClick={() => navigate('/contact')} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, background: 'none', border: 'none', cursor: 'pointer' }}>{t.footerContact}</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
