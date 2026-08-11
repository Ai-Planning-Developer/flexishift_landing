import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ROPAPage from './pages/ROPAPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/how-it-works"   element={<HomePage scrollTo="how" />} />
          <Route path="/markets"        element={<HomePage scrollTo="markets" />} />
          <Route path="/terms"          element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/ropa"           element={<ROPAPage />} />
          <Route path="/contact"        element={<ContactPage />} />
          <Route path="/register"       element={<RegisterPage />} />
          <Route path="*"               element={<HomePage />} />
        </Routes>
      </main>
    </LanguageProvider>
  );
}
