/** Pull a `<section id="...">` from extracted guide HTML. */
export function guideSectionById(html: string, id: string): string {
  const openRe = new RegExp(`<section([^>]*\\bid=["']${id}["'][^>]*)>`, 'i');
  const open = openRe.exec(html);
  if (!open) return html;
  const start = open.index;
  let depth = 1;
  const tagRe = /<\/?section\b[^>]*>/gi;
  tagRe.lastIndex = start + open[0].length;
  let m: RegExpExecArray | null;
  while ((m = tagRe.exec(html)) !== null) {
    if (m[0].startsWith('</')) depth--;
    else depth++;
    if (depth === 0) {
      return html.slice(start, m.index + m[0].length);
    }
  }
  return html.slice(start);
}

export function guideHero(html: string): string {
  const m = html.match(/<div class="hero">[\s\S]*?(?=<section\b)/i);
  return m ? m[0] : '';
}

export function guideDocForSection(html: string, sectionId: string): string {
  return `<div class="guide-doc" id="top">${guideHero(html)}${guideSectionById(html, sectionId)}</div>`;
}
