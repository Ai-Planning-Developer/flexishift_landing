import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  getRememberedEmail,
  getVerificationWebhookUrl,
  getVerificationBookingUrl,
  isAllowedMeetUrl,
  isSafeHttpUrl,
  localDriverStatus,
  lookupVerification,
  rememberLookupEmail,
  VerificationStatus,
  type VerificationBooking,
} from '../../lib/verificationBooking';
import BookVerificationLink from './BookVerificationLink';
import { verificationCopy } from './verificationCopy';
import './videoVerification.css';

function formatPart(iso: string, part: 'date' | 'time'): string {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  if (part === 'date') {
    return d.toLocaleDateString(undefined, {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
  return d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

export default function VideoVerificationCard() {
  const { lang } = useLanguage();
  const t = verificationCopy[lang];
  const bookingPage = getVerificationBookingUrl();
  const backendReady = Boolean(getVerificationWebhookUrl());

  const [email, setEmail] = useState(getRememberedEmail);
  const [booking, setBooking] = useState<VerificationBooking | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const status = localDriverStatus(booking);
  const showBookedPanel =
    status === VerificationStatus.BOOKED ||
    status === VerificationStatus.COMPLETED ||
    status === VerificationStatus.VERIFIED ||
    status === VerificationStatus.FAILED ||
    status === VerificationStatus.ESCALATED;

  useEffect(() => {
    const remembered = getRememberedEmail();
    if (remembered && backendReady) {
      void refresh(remembered);
    }
  }, [backendReady]);

  async function refresh(lookupEmail: string) {
    const trimmed = lookupEmail.trim();
    if (!trimmed || !backendReady) return;
    setLoading(true);
    setMessage('');
    try {
      rememberLookupEmail(trimmed);
      const result = await lookupVerification(trimmed);
      if (result.status === 'error') {
        setBooking(null);
        setMessage(result.message || t.lookupError);
        return;
      }
      setBooking(result.booking ?? null);
      if (!result.booking) setMessage(t.notFound);
    } catch (err) {
      setBooking(null);
      setMessage(err instanceof Error ? err.message : t.lookupError);
    } finally {
      setLoading(false);
    }
  }

  const meetUrl = booking?.meetUrl && isAllowedMeetUrl(booking.meetUrl) ? booking.meetUrl : '';
  const bookingMisconfigured = !bookingPage.external && !isSafeHttpUrl(bookingPage.href);

  return (
    <div>
      {showBookedPanel ? (
        <div className="fs-verify-meta">
          <div>
            <strong>{t.title}</strong>
          </div>
          <div>
            {t.statusLabel}: {status === VerificationStatus.BOOKED ? t.confirmed : t.statuses[status]}
          </div>
          {(status === VerificationStatus.BOOKED || status === VerificationStatus.COMPLETED) && (
            <>
              <div>
                {t.date}: {formatPart(booking?.startAt || '', 'date')}
              </div>
              <div>
                {t.time}: {formatPart(booking?.startAt || '', 'time')}
              </div>
            </>
          )}
        </div>
      ) : (
        <p className="fs-verify-note">
          {status === VerificationStatus.BOOKING_REQUIRED ? t.bookingRequired : null}
        </p>
      )}

      {bookingMisconfigured && <p className="fs-verify-note">{t.missingUrl}</p>}

      <div className="fs-verify-actions">
        {!showBookedPanel ? (
          <BookVerificationLink className="fs-verify-btn">{t.bookCta}</BookVerificationLink>
        ) : null}

        {(status === VerificationStatus.BOOKED || status === VerificationStatus.COMPLETED) && (
          <>
            {meetUrl ? (
              <a
                className="fs-verify-btn"
                href={meetUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.join}
              </a>
            ) : null}
            <BookVerificationLink className="fs-verify-btn secondary">{t.reschedule}</BookVerificationLink>
          </>
        )}

        {(status === VerificationStatus.FAILED || status === VerificationStatus.ESCALATED) && (
          <BookVerificationLink className="fs-verify-btn">{t.bookCta}</BookVerificationLink>
        )}
      </div>

      {(status === VerificationStatus.BOOKED || status === VerificationStatus.COMPLETED) && !meetUrl && (
        <p className="fs-verify-note">{t.waitingMeet}</p>
      )}

      {backendReady && (
        <form
          className="fs-verify-lookup"
          onSubmit={(e) => {
            e.preventDefault();
            void refresh(email);
          }}
        >
          <label htmlFor="fs-verify-email">{t.lookupLabel}</label>
          <input
            id="fs-verify-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.lookupPh}
            autoComplete="email"
          />
          <button type="submit" className="fs-verify-btn secondary" disabled={loading}>
            {t.lookupCta}
          </button>
        </form>
      )}

      {message ? <p className="fs-verify-note">{message}</p> : null}
    </div>
  );
}
