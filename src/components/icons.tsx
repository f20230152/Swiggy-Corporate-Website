type IconProps = {
  className?: string;
};

export function WalletIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="6" y="12" width="36" height="24" rx="6" stroke="currentColor" strokeWidth="2" />
      <path d="M30 24h8v8h-8a4 4 0 0 1 0-8Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="28" r="2" fill="currentColor" />
    </svg>
  );
}

export function RewardsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 6 29 17l12 2-9 9 2 12-10-6-10 6 2-12-9-9 12-2 5-11Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ConciergeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <path d="M24 12v12l8 8" stroke="currentColor" strokeWidth="2" />
      <path d="M10 36h28" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function GiftIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8" y="20" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M24 20v20" stroke="currentColor" strokeWidth="2" />
      <path d="M8 20h32" stroke="currentColor" strokeWidth="2" />
      <path d="M18 12c0 3 6 3 6 0 0-4-6-4-6 0Z" stroke="currentColor" strokeWidth="2" />
      <path d="M30 12c0 3-6 3-6 0 0-4 6-4 6 0Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="m7 4 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
