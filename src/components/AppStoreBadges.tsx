import type { CSSProperties } from 'react';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=io.flexishift&hl=en_IN';
export const APP_STORE_URL = 'https://apps.apple.com/in/app/flexi-shift/id6776761596';

const badgeLinkStyle: CSSProperties = {
  display: 'inline-block',
  lineHeight: 0,
  borderRadius: 8,
  overflow: 'hidden',
  transition: 'opacity 0.15s, transform 0.15s',
};

type Props = {
  /** Compact height for denser layouts */
  height?: number;
  className?: string;
  style?: CSSProperties;
};

/** Official-style store badges — driver app downloads only. */
export default function AppStoreBadges({ height = 40, className, style }: Props) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
        ...style,
      }}
    >
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get FlexiShift on Google Play"
        style={badgeLinkStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        <GooglePlayBadge height={height} />
      </a>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download FlexiShift on the App Store"
        style={badgeLinkStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        <AppStoreBadge height={height} />
      </a>
    </div>
  );
}

function GooglePlayBadge({ height }: { height: number }) {
  const w = Math.round(height * (135 / 40));
  return (
    <svg width={w} height={height} viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>Get it on Google Play</title>
      <rect width="135" height="40" rx="5" fill="#000" />
      <rect x="0.5" y="0.5" width="134" height="39" rx="4.5" fill="none" stroke="#A6A6A6" strokeWidth="1" />
      <g transform="translate(8,7)">
        <path
          d="M1.2 0.4c-.3.3-.5.8-.5 1.4v23.4c0 .6.2 1.1.5 1.4l.1.1 13.1-13.1v-.3L1.3.3l-.1.1z"
          fill="#00D3FF"
        />
        <path d="M18.3 18.2l-3.9-3.9v-.3l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 1.9 0 2.7l-4.7 2.7z" fill="#FFD400" />
        <path d="M18.4 18.1l-3.9-3.9-13.3 13.3c.5.5 1.2.5 2.1 0l15.1-8.6v-.8z" fill="#F83F37" />
        <path d="M18.4 10.1L3.3 1.5C2.4 1 1.7 1 1.2 1.5l13.3 13.3 3.9-3.9v-.8z" fill="#00F076" />
      </g>
      <g fill="#fff" fontFamily="Arial, Helvetica, sans-serif">
        <text x="38" y="15" fontSize="7" letterSpacing="0.3">GET IT ON</text>
        <text x="38" y="29" fontSize="14" fontWeight="700" letterSpacing="-0.2">Google Play</text>
      </g>
    </svg>
  );
}

function AppStoreBadge({ height }: { height: number }) {
  const w = Math.round(height * (120 / 40));
  return (
    <svg width={w} height={height} viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>Download on the App Store</title>
      <rect width="120" height="40" rx="5" fill="#000" />
      <rect x="0.5" y="0.5" width="119" height="39" rx="4.5" fill="none" stroke="#A6A6A6" strokeWidth="1" />
      <g fill="#fff" transform="translate(10,6)">
        <path d="M16.4 8.1c-.1-1.5.6-2.7 1.6-3.5-.9-1.3-2.3-1.5-2.8-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.8-3.1 1.9-1.4 2.3-.3 5.8 1 7.7.6.9 1.4 2 2.4 1.9 1-.05 1.3-.6 2.5-.6s1.5.6 2.5.6c1 0 1.7-.9 2.3-1.8.7-1.1 1-2.1 1-2.2-.02 0-2-.8-2-3.5zm-1.9-5.5c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-1 1.6-.9 2.5.9.1 1.8-.4 2.4-1.1z" />
      </g>
      <g fill="#fff" fontFamily="Arial, Helvetica, sans-serif">
        <text x="32" y="15" fontSize="6.5" letterSpacing="0.2">Download on the</text>
        <text x="32" y="29" fontSize="13" fontWeight="700">App Store</text>
      </g>
    </svg>
  );
}
