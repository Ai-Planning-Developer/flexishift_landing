import { useEffect, type ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../context/LanguageContext';

const chrome = {
  en: { home: 'Back to home', back: '← Back', related: 'Related guides' },
  no: { home: 'Tilbake til hjem', back: '← Tilbake', related: 'Relaterte guider' },
  sv: { home: 'Tillbaka till startsidan', back: '← Tillbaka', related: 'Relaterade guider' },
} as const;

type RelatedLink = { to: string; label: Record<Lang, string> };

type Props = {
  styleId: string;
  styles: string;
  html: string;
  related?: RelatedLink[];
  banner?: ReactNode;
  children?: ReactNode;
};

/** Shared shell for long-form guide pages (registration / sole trader). */
export default function GuidePage({ styleId, styles, html, related, banner, children }: Props) {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const t = chrome[lang];

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const t = window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => window.clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [html, location.hash]);

  useEffect(() => {
    let el = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement('style');
      el.id = styleId;
      document.head.appendChild(el);
    }

    // Scope client styles under .guide-document; drop global html/body/:root rules
    // so site chrome (navbar) is unaffected. Remap a few client tokens to ours.
    const remapped = styles
      .replace(/--navy:\s*#[0-9a-fA-F]+/g, '--navy: var(--navy, #0F3460)')
      .replace(/--teal:\s*#[0-9a-fA-F]+/g, '--teal: var(--teal, #00A896)')
      .replace(/--bg:\s*#[0-9a-fA-F]+/g, '--bg: var(--pale, #F5F8FC)')
      .replace(/--muted:\s*#[0-9a-fA-F]+/g, '--muted: var(--muted, #6B7280)')
      .replace(/--text:\s*#[0-9a-fA-F]+/g, '--text: var(--dark, #111827)')
      .replace(/--border:\s*#[0-9a-fA-F]+/g, '--border: #E5ECF5')
      .replace(/--card:\s*#[0-9a-fA-F]+/g, '--card: #ffffff')
      .replace(/font-family:'Inter'[^;]+;/g, 'font-family: inherit;');

    const scoped = remapped
      .split('\n')
      .map((line) => {
        const trimmed = line.trim();
        if (
          trimmed.startsWith(':root') ||
          trimmed.startsWith('html') ||
          trimmed.startsWith('body') ||
          trimmed.startsWith('*') ||
          trimmed.startsWith('a{') ||
          trimmed.startsWith('.topbar') ||
          trimmed.startsWith('.site-footer') ||
          trimmed.startsWith('.langnav')
        ) {
          return '';
        }
        // Prefix simple selectors with .guide-document
        if (trimmed.includes('{') && !trimmed.startsWith('@') && !trimmed.startsWith('.guide-document')) {
          return line.replace(/^(\s*)([^{}@]+?)(\s*\{)/, (_, sp, sel, brace) => {
            const parts = sel.split(',').map((s: string) => {
              const t = s.trim();
              if (!t || t.startsWith('.guide-document')) return t;
              return `.guide-document ${t}`;
            });
            return `${sp}${parts.join(', ')}${brace}`;
          });
        }
        return line;
      })
      .join('\n');

    el.textContent = `
      .guide-document {
        background: var(--pale, #F5F8FC);
        color: var(--dark, #111827);
        padding: 8px 0 48px;
      }
      .guide-document .wrap { max-width: 1000px; margin: 0 auto; padding: 0 24px; }
      .guide-document .jump-top { display: none; }
      .guide-document .lang-divider { display: none; }
      .guide-document .lang-section + .lang-section { margin-top: 0; border-top: none; padding-top: 10px; }
      .guide-document #verification { scroll-margin-top: 88px; }
      ${scoped}
    `;

    return () => {
      el?.remove();
    };
  }, [styleId, styles]);

  return (
    <div style={{ paddingTop: 64, background: 'var(--pale)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '20px 24px 8px' }}>
        <button
          type="button"
          onClick={() => navigate('/')}
          style={{
            fontSize: 13,
            color: 'var(--mid)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: 0,
            fontFamily: 'inherit',
          }}
        >
          ← {t.home}
        </button>
      </div>

      {banner}

      <div className="guide-document" dangerouslySetInnerHTML={{ __html: html }} />
      {children}

      {related && related.length > 0 && (
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '8px 24px 40px' }}>
          <div
            style={{
              background: 'white',
              border: '1px solid #E5ECF5',
              borderRadius: 12,
              padding: '18px 22px',
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                marginBottom: 10,
              }}
            >
              {t.related}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              {related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  style={{
                    color: 'var(--navy)',
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: 'underline',
                  }}
                >
                  {r.label[lang]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer style={{ background: '#080F1C', padding: '28px 5%' }}>
        <div
          style={{
            maxWidth: 1000,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
            © 2026 AI Planning Ltd · FlexiShift
          </span>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 12,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {t.back}
          </button>
        </div>
      </footer>
    </div>
  );
}
