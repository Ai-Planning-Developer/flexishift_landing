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

export function getVerificationWebhookUrl(): string {
  return ((import.meta.env.VITE_GOOGLE_VERIFICATION_WEBHOOK_URL as string | undefined) || '').trim();
}

/** @deprecated Use getVerificationWebhookUrl for Check status. */
export function getSheetsWebhookUrl(): string {
  return getVerificationWebhookUrl();
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

function parseVerificationPayload(text: string): VerificationApiResult {
  const trimmed = text.trim();
  if (trimmed.startsWith('{')) return JSON.parse(trimmed) as VerificationApiResult;
  if (trimmed.includes('POST only') || trimmed.includes('registration endpoint')) {
    return {
      status: 'error',
      message:
        'The verification Apps Script is still registration-only. In the booking /exec project, paste flexishift_sheets_backend.gs, set SCRIPT_ROLE to verification, run setupSheets, and deploy a new version.',
    };
  }
  return {
    status: 'error',
    message: 'Could not load booking status. You can still book via Google Calendar.',
  };
}

async function verificationGet(params: Record<string, string>): Promise<VerificationApiResult> {
  const url = new URL('/api/verification', window.location.origin);
  url.searchParams.set('kind', 'verification');
  url.searchParams.set('token', submitToken());
  for (const [key, value] of Object.entries(params)) {
    if (value) url.searchParams.set(key, value);
  }

  const response = await fetch(url.toString(), { method: 'GET' });
  const text = await response.text();
  try {
    return parseVerificationPayload(text);
  } catch {
    return {
      status: 'error',
      message: 'Could not load booking status. You can still book via Google Calendar.',
    };
  }
}

export function lookupVerification(email: string): Promise<VerificationApiResult> {
  return verificationGet({
    action: 'lookup',
    email: email.trim().toLowerCase(),
  });
}

export function listVerificationQueue(supportCode: string): Promise<VerificationApiResult> {
  return verificationGet({
    action: 'list',
    supportCode,
  });
}

export async function postVerificationAction(payload: Record<string, unknown>): Promise<void> {
  const response = await fetch('/api/verification', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      kind: 'verification',
      token: submitToken(),
      ...payload,
    }),
  });
  const text = await response.text();
  const result = parseVerificationPayload(text);
  if (result.status === 'error') {
    throw new Error(result.message || 'Verification update failed.');
  }
}
