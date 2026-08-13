import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { registrationContent } from '../../content/registrationContent';
import { countryByIso, defaultCountryIso } from '../../data/countryCodes';
import CountryCodeSelect from './CountryCodeSelect';
import FileDrop from './FileDrop';
import InfoModal from './InfoModal';
import RegTypeCards, { type RegType } from './RegTypeCards';
import TruckFields, { emptyTruck, type TruckState } from './TruckFields';
import {
  filesToPayload,
  submitRegistration,
  type RegistrationPayload,
} from './submitRegistration';
import './registration.css';

const PW_PATTERN = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export default function RegistrationForm() {
  const { lang } = useLanguage();
  const t = registrationContent[lang];
  const formRef = useRef<HTMLFormElement>(null);

  const [regType, setRegType] = useState<RegType | ''>('');
  const [referralCode, setReferralCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [countryIso, setCountryIso] = useState(() => defaultCountryIso(lang));
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [licenceFiles, setLicenceFiles] = useState<File[]>([]);
  const [points, setPoints] = useState(0);
  const [conviction, setConviction] = useState<'' | 'Yes' | 'No'>('');
  const [tradeNumber, setTradeNumber] = useState('');
  const [comments, setComments] = useState('');
  const [truck, setTruck] = useState<TruckState>(emptyTruck());
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  const [showError, setShowError] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [infoKey, setInfoKey] = useState<string | null>(null);

  const isTruckOnly = regType === 'truck';
  const showVehicle = regType === 'driver_truck' || regType === 'truck';
  const driverFieldsRequired = !isTruckOnly && regType !== '';
  const selectedCountry = countryByIso(countryIso);

  const passwordsMatch = password === confirmPassword;
  const showPwMismatch = Boolean(confirmPassword) && !passwordsMatch;

  function handleRegType(v: RegType) {
    setRegType(v);
    if (v !== 'driver_truck' && v !== 'truck') {
      setTruck(emptyTruck());
    }
  }

  async function buildPayload(): Promise<RegistrationPayload> {
    const token = (import.meta.env.VITE_SUBMIT_TOKEN as string | undefined) ?? '';
    const licence = await filesToPayload(licenceFiles);

    const truckPayloads = showVehicle
      ? [
          {
            index: '1',
            vehicleType: truck.vehicleType,
            vehicleTypeOther: truck.vehicleTypeOther,
            capacity: truck.capacity,
            capacityUnit: truck.capacityUnit,
            compartments: String(truck.compartments),
            compartmentCapacities: truck.compartmentCapacities,
            registrationNumber: truck.registrationNumber,
            vehicleFiles: await filesToPayload(truck.vehicleFiles),
            advisories: truck.advisories,
            advisoryDetails: truck.advisoryDetails,
            driverInsured: truck.driverInsured,
            vehicleInsured: truck.vehicleInsured,
          },
        ]
      : [];

    return {
      token,
      submittedAt: new Date().toISOString(),
      language: lang,
      registrationType: regType,
      referralCode,
      fullName,
      dateOfBirth: dob,
      email,
      password,
      country: selectedCountry?.name ?? '',
      countryCode: selectedCountry?.dial ?? '',
      phone,
      licenceFiles: licence,
      licencePoints: String(points),
      conviction,
      tradeNumber,
      comments,
      marketingOptIn,
      acceptedTerms: acceptTerms,
      acceptedPrivacy: acceptPrivacy,
      truckCount: truckPayloads.length,
      trucks: truckPayloads,
    };
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setShowSubmitError(false);

    const form = formRef.current;
    const pwOk = PW_PATTERN.test(password) && passwordsMatch;
    const consentOk = acceptTerms && acceptPrivacy;
    const typeOk = Boolean(regType);
    const convictionOk = !driverFieldsRequired || Boolean(conviction);
    const licenceOk = !driverFieldsRequired || licenceFiles.length > 0;
    const truckOk =
      !showVehicle ||
      Boolean(
        truck.vehicleType &&
          (truck.vehicleType !== 'Other' || truck.vehicleTypeOther.trim()) &&
          truck.capacity !== '' &&
          truck.registrationNumber.trim() &&
          truck.vehicleFiles.length > 0 &&
          truck.advisories &&
          truck.driverInsured &&
          truck.vehicleInsured &&
          truck.compartmentCapacities.every((c) => c !== ''),
      );

    const htmlValid = form?.checkValidity() ?? false;
    const valid =
      htmlValid && typeOk && convictionOk && licenceOk && pwOk && consentOk && truckOk;

    if (!valid) {
      setShowError(true);
      form?.querySelector('.reg-error-msg')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setShowError(false);
    setSubmitting(true);

    try {
      const payload = await buildPayload();
      await submitRegistration(payload);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setShowSubmitError(true);
      form?.querySelector('#reg-submit-error')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } finally {
      setSubmitting(false);
    }
  }

  const InfoBtn = ({ infoKey }: { infoKey: string }) => (
    <button type="button" className="reg-info-icon" onClick={() => setInfoKey(infoKey)} aria-label="Info">
      i
    </button>
  );

  if (success) {
    return (
      <div className="reg-success">
        <div className="reg-success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal,#00A896)" strokeWidth="2.5" width="28" height="28">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2>{t.successTitle}</h2>
        <p>{t.successBody1}</p>
        <p>{t.successBody2}</p>
        <Link to="/" className="reg-back-link">
          {t.backHome}
        </Link>
      </div>
    );
  }

  return (
    <>
      <form ref={formRef} className="reg-form" onSubmit={onSubmit} noValidate>
        {showError && <div className="reg-error-msg">{t.errorMsg}</div>}
        {showSubmitError && (
          <div className="reg-error-msg" id="reg-submit-error">
            {t.submitError}
          </div>
        )}

        <div className="reg-field">
          <label className="reg-label">
            {t.regTypeLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="regType" />
          </label>
          <RegTypeCards t={t} value={regType} onChange={handleRegType} />
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="referralCode">
            {t.referralLabel}
            <InfoBtn infoKey="referral" />
          </label>
          <input
            id="referralCode"
            className="reg-input"
            type="text"
            placeholder={t.referralPlaceholder}
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="fullName">
            {t.fullNameLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="fullName" />
          </label>
          <input
            id="fullName"
            className="reg-input"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="dob">
            {t.dobLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="dob" />
          </label>
          <input
            id="dob"
            className="reg-input"
            type="date"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="reg-section-title">{t.loginSectionTitle}</div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="email">
            {t.emailLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="email" />
          </label>
          <input
            id="email"
            className="reg-input"
            type="email"
            required
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="reg-hint">{t.emailHint}</div>
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="phone">
            {t.phoneLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="phone" />
          </label>
          <div className="reg-phone-row">
            <CountryCodeSelect
              value={countryIso}
              label={t.countryCodeLabel}
              searchPlaceholder={t.countryCodeSearch}
              noResults={t.countryCodeNoResults}
              onChange={(country) => setCountryIso(country.iso)}
            />
            <input
              id="phone"
              className="reg-input"
              type="tel"
              required
              inputMode="tel"
              placeholder={t.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-label={t.phoneLabel}
            />
          </div>
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="password">
            {t.passwordLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="password" />
          </label>
          <div className="reg-password-wrap">
            <input
              id="password"
              className="reg-input"
              type={showPw ? 'text' : 'password'}
              required
              pattern="(?=.*[A-Za-z])(?=.*\d).{8,}"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <button type="button" className="reg-pw-toggle" onClick={() => setShowPw((s) => !s)}>
              {showPw ? t.pwHide : t.pwShow}
            </button>
          </div>
          <div className="reg-hint">{t.passwordHint}</div>
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="confirmPassword">
            {t.confirmPasswordLabel}
            <span className="reg-required">*</span>
          </label>
          <div className="reg-password-wrap">
            <input
              id="confirmPassword"
              className="reg-input"
              type={showPw2 ? 'text' : 'password'}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
            <button type="button" className="reg-pw-toggle" onClick={() => setShowPw2((s) => !s)}>
              {showPw2 ? t.pwHide : t.pwShow}
            </button>
          </div>
          {showPwMismatch && <div className="reg-hint dup-warning">{t.pwMismatch}</div>}
        </div>

        <div className="reg-field">
          <label className="reg-label">
            {t.licenceLabel}
            {driverFieldsRequired && <span className="reg-required">*</span>}
            <InfoBtn infoKey="licence" />
          </label>
          <FileDrop
            id="licenceFiles"
            dropText={t.licenceDropText}
            files={licenceFiles}
            required={driverFieldsRequired}
            onChange={setLicenceFiles}
          />
          <div className="reg-hint">{t.licenceHint}</div>
        </div>

        <div className="reg-field">
          <label className="reg-label">
            {t.pointsLabel}
            {driverFieldsRequired && <span className="reg-required">*</span>}
            <InfoBtn infoKey="points" />
          </label>
          <div className="reg-stepper">
            <button
              type="button"
              aria-label="decrease"
              onClick={() => setPoints((p) => Math.max(0, p - 1))}
            >
              −
            </button>
            <input
              className="reg-input"
              type="number"
              min={0}
              max={99}
              required={driverFieldsRequired}
              value={points}
              onChange={(e) => setPoints(Math.max(0, Math.min(99, parseInt(e.target.value, 10) || 0)))}
            />
            <button
              type="button"
              aria-label="increase"
              onClick={() => setPoints((p) => Math.min(99, p + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="reg-field">
          <label className="reg-label">
            {t.convictionLabel}
            {driverFieldsRequired && <span className="reg-required">*</span>}
            <InfoBtn infoKey="conviction" />
          </label>
          <div className="reg-pill-group">
            {(['No', 'Yes'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`reg-pill${conviction === v ? ' selected' : ''}`}
                onClick={() => setConviction(v)}
              >
                {v === 'Yes' ? t.yes : t.no}
              </button>
            ))}
          </div>
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="tradeNumber">
            {t.tradeLabel}
            <InfoBtn infoKey="trade" />
          </label>
          <input
            id="tradeNumber"
            className="reg-input"
            type="text"
            placeholder={t.tradePlaceholder}
            value={tradeNumber}
            onChange={(e) => setTradeNumber(e.target.value)}
          />
          <div className="reg-hint">{t.tradeHint}</div>
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="comments">
            {t.commentsLabel}
            <InfoBtn infoKey="comments" />
          </label>
          <textarea
            id="comments"
            className="reg-textarea"
            placeholder={t.commentsPlaceholder}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        {showVehicle && (
          <TruckFields
            t={t}
            truck={truck}
            onChange={(patch) => setTruck((prev) => ({ ...prev, ...patch }))}
            onInfo={setInfoKey}
          />
        )}

        <div className="reg-section-title">{t.consentSectionTitle}</div>

        <div className="reg-confirm-box">
          <input
            type="checkbox"
            id="acceptTerms"
            required
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="acceptTerms">
            <div className="confirm-text">
              {t.acceptTermsPrefix}{' '}
              <Link to="/terms" target="_blank" rel="noopener noreferrer">
                {t.termsLinkText}
              </Link>
            </div>
          </label>
        </div>

        <div className="reg-confirm-box">
          <input
            type="checkbox"
            id="acceptPrivacy"
            required
            checked={acceptPrivacy}
            onChange={(e) => setAcceptPrivacy(e.target.checked)}
          />
          <label htmlFor="acceptPrivacy">
            <div className="confirm-text">
              {t.acceptPrivacyPrefix}{' '}
              <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">
                {t.privacyLinkText}
              </Link>
            </div>
          </label>
        </div>

        <div className="reg-confirm-box" style={{ marginTop: 10 }}>
          <input
            type="checkbox"
            id="marketingOptIn"
            checked={marketingOptIn}
            onChange={(e) => setMarketingOptIn(e.target.checked)}
          />
          <label htmlFor="marketingOptIn">
            <div className="confirm-text">{t.marketingText}</div>
          </label>
        </div>

        <button type="submit" className="reg-submit" disabled={submitting}>
          {submitting ? t.submitting : t.submitBtn}
        </button>
      </form>

      <p className="reg-footnote">{t.footnoteText}</p>

      {infoKey && (
        <InfoModal
          title={t.infoTitle}
          body={(t.tooltip as Record<string, string>)[infoKey] ?? ''}
          onClose={() => setInfoKey(null)}
        />
      )}
    </>
  );
}
