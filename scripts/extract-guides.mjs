import fs from 'fs';
import path from 'path';

const downloads = 'c:/Users/anike/Downloads';
const outDir = path.resolve('src/content');

function extractStyle(html) {
  const m = html.match(/<style>([\s\S]*?)<\/style>/i);
  return m ? m[1] : '';
}

function extractBodyInner(html) {
  const m = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return m ? m[1] : html;
}

/**
 * Pull a <section id="..."> ... </section> by id (nested-section safe-ish:
 * find opening tag then matching close by depth for section tags).
 */
function extractSectionById(body, id) {
  const openRe = new RegExp(`<section([^>]*\\bid=["']${id}["'][^>]*)>`, 'i');
  const open = openRe.exec(body);
  if (!open) return null;
  const start = open.index;
  let i = start + open[0].length;
  let depth = 1;
  const tagRe = /<\/?section\b[^>]*>/gi;
  tagRe.lastIndex = i;
  let m;
  while ((m = tagRe.exec(body)) !== null) {
    if (m[0].startsWith('</')) depth--;
    else depth++;
    if (depth === 0) {
      return body.slice(start, m.index + m[0].length);
    }
  }
  return null;
}

function extractHero(body) {
  const m = body.match(/<div class="hero">[\s\S]*?(?=<section\b)/i);
  return m ? m[0] : '';
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function writeModule(exportPrefix, styles, parts) {
  const ts = `/** Auto-extracted guide content — prefer regenerating via scripts/extract-guides.mjs */

export const ${exportPrefix}Styles = \`${esc(styles)}\`;

export const ${exportPrefix}EnHTML = \`${esc(parts.en)}\`;

export const ${exportPrefix}NoHTML = \`${esc(parts.no)}\`;

export const ${exportPrefix}SvHTML = \`${esc(parts.sv)}\`;
`;
  const out = path.join(outDir, `${exportPrefix}Content.ts`);
  fs.writeFileSync(out, ts);
  console.log(
    'wrote',
    out,
    'en',
    parts.en.length,
    'no',
    parts.no.length,
    'sv',
    parts.sv.length,
  );
}

// ── Registration guide: english / norsk / svenska ──
{
  const html = fs.readFileSync(path.join(downloads, 'registration-guide.html'), 'utf8');
  const styles = extractStyle(html);
  const body = extractBodyInner(html)
    .replace(/<div class="topbar">[\s\S]*?<\/div>\s*(?=<div class="wrap"|<main|<div class="hero")/i, '')
    .replace(/<footer class="site-footer">[\s\S]*?<\/footer>/i, '');

  const hero = extractHero(body);
  const enSec = extractSectionById(body, 'english');
  const noSec = extractSectionById(body, 'norsk');
  const svSec = extractSectionById(body, 'svenska');
  if (!enSec || !noSec || !svSec) {
    console.error('registration sections missing', { en: !!enSec, no: !!noSec, sv: !!svSec });
    process.exit(1);
  }

  // Keep shared hero (EN) once; per-lang body. Hero has EN crumbs — strip langnav refs.
  const cleanHero = hero
    .replace(/<div class="crumbs">[\s\S]*?<\/div>/i, '')
    .replace(/href="#english"/gi, 'href="#top"')
    .replace(/href="#norsk"/gi, 'href="#top"')
    .replace(/href="#svenska"/gi, 'href="#top"');

  writeModule('registrationGuide', styles, {
    en: `<div class="guide-doc" id="top">${cleanHero}${enSec}</div>`,
    no: `<div class="guide-doc" id="top">${cleanHero}${noSec}</div>`,
    sv: `<div class="guide-doc" id="top">${cleanHero}${svSec}</div>`,
  });
}

// ── Sole trader guide: country sections (uk / norway / sweden) ──
{
  const html = fs.readFileSync(path.join(downloads, 'sole-trader-guide.html'), 'utf8');
  const styles = extractStyle(html);
  const body = extractBodyInner(html)
    .replace(/<div class="topbar">[\s\S]*?<\/div>\s*(?=<div class="wrap"|<main|<div class="hero")/i, '')
    .replace(/<footer class="site-footer">[\s\S]*?<\/footer>/i, '');

  const hero = extractHero(body);
  const uk = extractSectionById(body, 'uk');
  const norway = extractSectionById(body, 'norway');
  const sweden = extractSectionById(body, 'sweden');
  if (!uk || !norway || !sweden) {
    console.error('sole trader sections missing', { uk: !!uk, norway: !!norway, sweden: !!sweden });
    process.exit(1);
  }

  const cleanHero = hero.replace(/<div class="crumbs">[\s\S]*?<\/div>/i, '');

  writeModule('soleTraderGuide', styles, {
    en: `<div class="guide-doc" id="top">${cleanHero}${uk}</div>`,
    no: `<div class="guide-doc" id="top">${cleanHero}${norway}</div>`,
    sv: `<div class="guide-doc" id="top">${cleanHero}${sweden}</div>`,
  });
}
