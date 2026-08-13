import { useEffect, useMemo, useRef, useState } from 'react';
import {
  COUNTRY_CODES,
  countryByIso,
  flagEmoji,
  type CountryCode,
} from '../../data/countryCodes';

type Props = {
  value: string;
  label: string;
  searchPlaceholder: string;
  noResults: string;
  onChange: (country: CountryCode) => void;
};

export default function CountryCodeSelect({
  value,
  label,
  searchPlaceholder,
  noResults,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = countryByIso(value) ?? COUNTRY_CODES[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRY_CODES;
    return COUNTRY_CODES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dial.includes(q) ||
        c.iso.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    const id = window.setTimeout(() => searchRef.current?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="reg-country-code" ref={rootRef}>
      <button
        type="button"
        className="reg-country-code-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${selected.name} ${selected.dial}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden>{flagEmoji(selected.iso)}</span>
        <span>{selected.dial}</span>
      </button>
      {open && (
        <div className="reg-country-code-panel" role="listbox">
          <input
            ref={searchRef}
            className="reg-input reg-country-code-search"
            type="search"
            placeholder={searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <div className="reg-country-code-list">
            {filtered.length === 0 && (
              <div className="reg-country-code-empty">{noResults}</div>
            )}
            {filtered.map((c) => (
              <button
                key={c.iso}
                type="button"
                role="option"
                aria-selected={c.iso === selected.iso}
                className={`reg-country-code-option${c.iso === selected.iso ? ' selected' : ''}`}
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                }}
              >
                <span aria-hidden>{flagEmoji(c.iso)}</span>
                <span className="reg-country-code-name">{c.name}</span>
                <span className="reg-country-code-dial">{c.dial}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
