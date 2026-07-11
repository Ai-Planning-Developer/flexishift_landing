import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'en' | 'no' | 'sv';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
});

function isLang(value: string | null): value is Lang {
  return value === 'en' || value === 'no' || value === 'sv';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('fs_lang');
    return isLang(stored) ? stored : 'en';
  });

  const setLang = (l: Lang) => {
    localStorage.setItem('fs_lang', l);
    setLangState(l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
