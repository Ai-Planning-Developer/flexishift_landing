import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ROPAPage from './pages/ROPAPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';

const RegistrationGuidePage = lazy(() => import('./pages/RegistrationGuidePage'));
const SoleTraderGuidePage = lazy(() => import('./pages/SoleTraderGuidePage'));
const DriversPage = lazy(() => import('./pages/DriversPage'));
const SupportVerificationPage = lazy(() => import('./pages/SupportVerificationPage'));

function GuideFallback() {
  return (
    <div style={{ padding: '120px 24px', textAlign: 'center', color: 'var(--muted)' }}>
      Loading guide…
    </div>
  );
}

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
          <Route
            path="/drivers"
            element={
              <Suspense fallback={<GuideFallback />}>
                <DriversPage />
              </Suspense>
            }
          />
          <Route
            path="/guides/registration"
            element={
              <Suspense fallback={<GuideFallback />}>
                <RegistrationGuidePage />
              </Suspense>
            }
          />
          <Route
            path="/guides/sole-trader"
            element={
              <Suspense fallback={<GuideFallback />}>
                <SoleTraderGuidePage />
              </Suspense>
            }
          />
          <Route
            path="/support/verification"
            element={
              <Suspense fallback={<GuideFallback />}>
                <SupportVerificationPage />
              </Suspense>
            }
          />
          <Route path="*"               element={<HomePage />} />
        </Routes>
      </main>
    </LanguageProvider>
  );
}
