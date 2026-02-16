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

export function ExpertiseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 76a38 38 0 1 1 60-29" />
        <path d="M30 76a30 30 0 1 1 47-23" />
        <path d="M87 52a38 38 0 0 1 3 21" />
        <path d="M60 31v7" />
        <path d="M32 60h8" />
        <path d="M80 60h8" />
        <path d="M60 83v-8" />
        <path d="M60 60 46 48" />
        <path d="M60 60 74 49" />
        <circle cx="84" cy="84" r="16" />
        <path d="m76 84 7 7 10-11" />
      </g>
      <text x="74" y="40" fill="currentColor" fontSize="26" fontWeight="700">
        10+
      </text>
    </svg>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 43c-9 0-16 7-16 16 0 12 16 28 16 28s16-16 16-28c0-9-7-16-16-16Z" />
        <circle cx="60" cy="58" r="7" />

        <path d="M60 36V25" />
        <circle cx="60" cy="20" r="3" />
        <path d="M44 52 34 45" />
        <path d="M76 52 86 45" />
        <path d="M40 60H27" />
        <circle cx="21" cy="60" r="3" />
        <path d="M80 60h13" />
        <circle cx="99" cy="60" r="3" />
        <path d="M48 77 40 85" />
        <path d="M72 77 80 85" />

        <path d="M14 31h22" />
        <path d="M17 25c1-4 4-7 8-7s7 3 8 7" />
        <path d="M17 36h16" />
        <path d="M15 42h20" />

        <path d="M83 22 106 28 88 45Z" />
        <circle cx="94" cy="31" r="1.8" />
        <circle cx="98" cy="37" r="1.8" />
        <circle cx="90" cy="36" r="1.8" />

        <path d="M14 88h28" />
        <path d="M17 88c2-8 6-12 11-12s9 4 11 12" />
        <path d="M19 77c2-2 4-2 6 0" />
        <path d="M28 76c2-2 4-2 6 0" />

        <path d="M78 88h28" />
        <path d="M81 88c2-8 6-12 11-12s9 4 11 12" />
        <path d="M86 74c4-3 7-3 10 0" />
        <path d="M94 71c3-2 5-2 7 0" />
      </g>
    </svg>
  );
}

export function SimplicityIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 86 35 56H23l21-32-6 26h16L36 86H16Z" />
        <rect x="54" y="19" width="40" height="72" rx="7" />
        <path d="M68 27h12" />
        <path d="M68 83h12" />

        <circle cx="74" cy="56" r="8" />
        <circle cx="74" cy="56" r="15" />
        <circle cx="74" cy="56" r="22" />

        <path d="M84 91c0-9-1-16-1-24 0-2-2-4-4-4s-4 2-4 4v11" />
        <path d="M75 78v-3c0-2-2-4-4-4s-4 2-4 4v10" />
        <path d="M67 85v-2c0-2-2-4-4-4s-4 2-4 4v6" />
        <path d="M83 90c3 3 5 5 7 9" />
      </g>
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
