import type { Lang } from '../../context/LanguageContext';
import type { VerificationStatusValue } from '../../lib/verificationBooking';

export const verificationCopy: Record<
  Lang,
  {
    title: string;
    bookCta: string;
    lookupLabel: string;
    lookupPh: string;
    lookupCta: string;
    bookingRequired: string;
    confirmed: string;
    date: string;
    time: string;
    join: string;
    reschedule: string;
    waitingMeet: string;
    missingUrl: string;
    lookupError: string;
    notFound: string;
    statusLabel: string;
    statuses: Record<VerificationStatusValue, string>;
  }
> = {
  en: {
    title: 'Video Verification',
    bookCta: 'Book your 5-minute video verification',
    lookupLabel: 'Email used when booking',
    lookupPh: 'you@email.com',
    lookupCta: 'Check status',
    bookingRequired: 'Choose a slot on the Google booking page. Use the same email as registration, then check status here.',
    confirmed: 'Booking Confirmed',
    date: 'Date',
    time: 'Time',
    join: 'Join Verification',
    reschedule: 'Reschedule',
    waitingMeet: 'Google Meet opens when Calendar attaches the conference link. Check status again after you receive the confirmation email.',
    missingUrl: 'Set VITE_GOOGLE_VERIFICATION_BOOKING_URL to your Google Calendar appointment page.',
    lookupError: 'Could not load booking status. You can still book via Google Calendar.',
    notFound: 'No Calendar appointment found for this email yet. After you book, wait for the Google confirmation, then check again.',
    statusLabel: 'Status',
    statuses: {
      NOT_BOOKED: 'Not booked',
      BOOKING_REQUIRED: 'Booking required',
      BOOKED: 'Booking Confirmed',
      COMPLETED: 'Completed — awaiting result',
      VERIFIED: 'Verified',
      FAILED: 'Failed',
      ESCALATED: 'Escalated',
    },
  },
  no: {
    title: 'Videoverifisering',
    bookCta: 'Book 5 minutters videoverifisering',
    lookupLabel: 'E-post brukt ved booking',
    lookupPh: 'deg@epost.no',
    lookupCta: 'Sjekk status',
    bookingRequired: 'Velg et tidspunkt på Google-bookingsiden. Bruk samme e-post som ved registrering, og sjekk status heretter.',
    confirmed: 'Booking bekreftet',
    date: 'Dato',
    time: 'Tid',
    join: 'Bli med i verifisering',
    reschedule: 'Endre time',
    waitingMeet: 'Google Meet-lenken vises når Calendar legger den til. Sjekk status igjen etter bekreftelseseposten.',
    missingUrl: 'Sett VITE_GOOGLE_VERIFICATION_BOOKING_URL til Google Calendar-bookingsiden.',
    lookupError: 'Kunne ikke hente bookingstatus. Du kan fortsatt booke via Google Calendar.',
    notFound: 'Ingen Calendar-avtale funnet for denne e-posten ennå. Etter at du har booket, vent på Google-bekreftelsen og sjekk igjen.',
    statusLabel: 'Status',
    statuses: {
      NOT_BOOKED: 'Ikke booket',
      BOOKING_REQUIRED: 'Booking kreves',
      BOOKED: 'Booking bekreftet',
      COMPLETED: 'Fullført — venter på resultat',
      VERIFIED: 'Verifisert',
      FAILED: 'Ikke godkjent',
      ESCALATED: 'Eskalert',
    },
  },
  sv: {
    title: 'Videoverifiering',
    bookCta: 'Boka 5 minuters videoverifiering',
    lookupLabel: 'E-post som användes vid bokningen',
    lookupPh: 'du@epost.se',
    lookupCta: 'Kontrollera status',
    bookingRequired: 'Välj en tid på Google-bokningssidan. Använd samma e-post som vid registrering och kontrollera sedan status här.',
    confirmed: 'Bokning bekräftad',
    date: 'Datum',
    time: 'Tid',
    join: 'Gå med i verifiering',
    reschedule: 'Omboka',
    waitingMeet: 'Google Meet-länken visas när Calendar bifogar den. Kontrollera status igen efter bekräftelsemejlet.',
    missingUrl: 'Sätt VITE_GOOGLE_VERIFICATION_BOOKING_URL till din Google Calendar-bokningssida.',
    lookupError: 'Kunde inte hämta bokningsstatus. Du kan fortfarande boka via Google Calendar.',
    notFound: 'Ingen Calendar-tid hittades för den här e-posten ännu. Efter bokningen, vänta på Google-bekräftelsen och kontrollera igen.',
    statusLabel: 'Status',
    statuses: {
      NOT_BOOKED: 'Inte bokad',
      BOOKING_REQUIRED: 'Bokning krävs',
      BOOKED: 'Bokning bekräftad',
      COMPLETED: 'Slutförd — väntar på resultat',
      VERIFIED: 'Verifierad',
      FAILED: 'Underkänd',
      ESCALATED: 'Eskalerad',
    },
  },
};
