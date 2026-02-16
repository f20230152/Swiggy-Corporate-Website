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

export function DiningIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3v8" />
        <path d="M8 3v8" />
        <path d="M5 7h3" />
        <path d="M6.5 11v10" />
        <path d="M14 3c2 2.5 2 6.5 0 9v9" />
      </g>
    </svg>
  );
}

export function OfficeMealIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="8" height="14" rx="1.5" />
        <path d="M6 9h2M10 9h0M6 12h2M10 12h0M6 15h2M10 15h0" />
        <path d="M15 5v14M18 5v14M15 10h3" />
      </g>
    </svg>
  );
}

export function TravelMealIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M9 6V4h6v2" />
        <path d="M4 12h16" />
        <circle cx="9" cy="12" r="0.8" fill="currentColor" />
        <circle cx="15" cy="12" r="0.8" fill="currentColor" />
      </g>
    </svg>
  );
}

export function LateNightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4.5a7 7 0 1 0 5 11.5 6 6 0 1 1-5-11.5Z" />
        <path d="m18.5 4 0.6 1.3L20.5 6l-1.4 0.7-0.6 1.3-0.6-1.3L16.5 6l1.4-0.7 0.6-1.3Z" />
      </g>
    </svg>
  );
}

export function TeamDinnerIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M4.5 18a3.5 3.5 0 0 1 7 0M12.5 18a3.5 3.5 0 0 1 7 0" />
      </g>
    </svg>
  );
}

export function MeetingsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16v10H9l-4 3V6Z" />
        <path d="M8 11h3M13 11h3" />
      </g>
    </svg>
  );
}

export function TrainingIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-4 9 4-9 4-9-4Z" />
        <path d="M7 10.5V14c0 1.7 2.2 3 5 3s5-1.3 5-3v-3.5" />
        <path d="M21 9v5" />
      </g>
    </svg>
  );
}

export function CelebrationIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18 10.5 7.5 16.5 13.5 6 18Z" />
        <path d="m10.5 7.5 3 3" />
        <path d="M17 4v2M20 7h-2M15.5 8.5 14 10" />
      </g>
    </svg>
  );
}
