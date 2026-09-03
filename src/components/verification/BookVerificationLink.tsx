import { Link } from 'react-router-dom';
import type { CSSProperties, ReactNode } from 'react';
import {
  getVerificationBookingUrl,
  rememberBookingIntent,
} from '../../lib/verificationBooking';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** Existing Book Verification CTA — opens Google Calendar Appointment Scheduling. */
export default function BookVerificationLink({ children, className, style }: Props) {
  const { href, external } = getVerificationBookingUrl();

  function onClick() {
    rememberBookingIntent();
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} style={style} onClick={onClick}>
      {children}
    </Link>
  );
}
