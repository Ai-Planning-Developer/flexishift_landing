import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ROPAPage from './pages/ROPAPage';
import type { Page } from './types';

function AppInner() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleSetPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':    return <HomePage setCurrentPage={handleSetPage} />;
      case 'terms':   return <TermsPage setCurrentPage={handleSetPage} />;
      case 'privacy': return <PrivacyPage setCurrentPage={handleSetPage} />;
      case 'ropa':    return <ROPAPage setCurrentPage={handleSetPage} />;
      default:        return <HomePage setCurrentPage={handleSetPage} />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={handleSetPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
