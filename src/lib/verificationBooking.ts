export const VerificationStatus = {
  NOT_BOOKED: 'NOT_BOOKED',
  BOOKING_REQUIRED: 'BOOKING_REQUIRED',
  BOOKED: 'BOOKED',
  COMPLETED: 'COMPLETED',
  VERIFIED: 'VERIFIED',
  FAILED: 'FAILED',
  ESCALATED: 'ESCALATED',
} as const;

export type VerificationStatusValue =
  (typeof VerificationStatus)[keyof typeof VerificationStatus];

export type VerificationBooking = {
  bookingId: string;
  driverId: string;
  email: string;
  name: string;
  status: VerificationStatusValue;
  startAt: string;
  endAt: string;
  meetUrl: string;
  notes: string;
};

export type VerificationEscalation = {
  escalationId: string;
  driverId: string;
  verificationBookingId: string;
  reason: string;
  notes: string;
  priority: string;
  createdBy: string;
  createdAt: string;
  status: string;
};

export type VerificationApiResult = {
  status: 'ok' | 'error';
  message?: string;
  booking?: VerificationBooking | null;
  bookings?: VerificationBooking[];
  escalations?: VerificationEscalation[];
};

const INTENT_KEY = 'fs_verification_intent';
const EMAIL_KEY = 'fs_verification_email';

export function isSafeHttpUrl(value: string): boolean {
  return /^https?:\/\//i.test(value.trim());
}

export function isAllowedMeetUrl(value: string): boolean {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return false;
    return (
      url.hostname === 'meet.google.com' ||
      url.hostname === 'calendar.google.com'
    );
  } catch {
    return false;
  }
}

/** Google Appointment Scheduling page. Never hardcode the booking URL in UI. */
export function getVerificationBookingUrl(): { href: string; external: boolean } {
  const configured = (
    (import.meta.env.VITE_GOOGLE_VERIFICATION_BOOKING_URL as string | undefined) ||
    (import.meta.env.VITE_DRIVER_VERIFY_URL as string | undefined) ||
    ''
  ).trim();

  if (isSafeHttpUrl(configured)) {
    return { href: configured, external: true };
  }
  if (configured.startsWith('/')) {
    return { href: configured, external: false };
  }
  return { href: '/contact', external: false };
}

export function getSheetsWebhookUrl(): string {
  return ((import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL as string | undefined) || '').trim();
}

export function rememberBookingIntent(): void {
  sessionStorage.setItem(INTENT_KEY, VerificationStatus.BOOKING_REQUIRED);
}

export function getBookingIntent(): boolean {
  return sessionStorage.getItem(INTENT_KEY) === VerificationStatus.BOOKING_REQUIRED;
}

export function rememberLookupEmail(email: string): void {
  sessionStorage.setItem(EMAIL_KEY, email.trim().toLowerCase());
}

export function getRememberedEmail(): string {
  return sessionStorage.getItem(EMAIL_KEY) || '';
}

export function localDriverStatus(booking: VerificationBooking | null): VerificationStatusValue {
  if (booking?.status) return booking.status;
  if (getBookingIntent()) return VerificationStatus.BOOKING_REQUIRED;
  return VerificationStatus.NOT_BOOKED;
}

function submitToken(): string {
  return (import.meta.env.VITE_SUBMIT_TOKEN as string | undefined) ?? '';
}

function jsonp<T>(params: Record<string, string>): Promise<T> {
  const base = getSheetsWebhookUrl();
  if (!base) {
    return Promise.reject(new Error('Verification backend is not configured.'));
  }

  return new Promise((resolve, reject) => {
    const callback = `fsVerify_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const url = new URL(base);
    url.searchParams.set('kind', 'verification');
    url.searchParams.set('callback', callback);
    url.searchParams.set('token', submitToken());
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== '') url.searchParams.set(key, value);
    }

    const script = document.createElement('script');
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error('Verification lookup timed out.'));
    }, 15000);

    function cleanup() {
      window.clearTimeout(timer);
      script.remove();
      delete (window as unknown as Record<string, unknown>)[callback];
    }

    (window as unknown as Record<string, unknown>)[callback] = (data: T) => {
      cleanup();
      resolve(data);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error('Verification lookup failed.'));
    };
    script.src = url.toString();
    document.body.appendChild(script);
  });
}

export function lookupVerification(email: string): Promise<VerificationApiResult> {
  return jsonp<VerificationApiResult>({
    action: 'lookup',
    email: email.trim().toLowerCase(),
  });
}

export function listVerificationQueue(supportCode: string): Promise<VerificationApiResult> {
  return jsonp<VerificationApiResult>({
    action: 'list',
    supportCode,
  });
}

export async function postVerificationAction(payload: Record<string, unknown>): Promise<void> {
  const url = getSheetsWebhookUrl();
  if (!url) throw new Error('Verification backend is not configured.');

  await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      kind: 'verification',
      token: submitToken(),
      ...payload,
    }),
  });
}
