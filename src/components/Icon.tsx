import React from 'react';

const icons = {
  stethoscope: (
    <path d="M7 2v5a5 5 0 0 0 10 0V2m-8 0h6m-9 10a7 7 0 1 0 14 0v-1m-7 1v6" />
  ),
  shield: (
    <path d="M12 2 5 5v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V5l-7-3Z" />
  ),
  heart: (
    <path d="M12 20s-6-4.4-8.4-8.1C2 9.2 3.4 6 6.5 6c1.9 0 3.1 1 3.5 2 0.4-1 1.6-2 3.5-2 3.1 0 4.5 3.2 2.9 5.9C18 15.6 12 20 12 20Z" />
  ),
  leaf: (
    <path d="M5 21c9 0 14-5 14-14 0-3-2-5-5-5C7 2 2 7 2 14c0 3 2 7 3 7Z" />
  ),
  chat: (
    <path d="M4 4h16v10H7l-3 3V4Z" />
  ),
  lab: (
    <path d="M10 2h4m-2 0v6l5 9a3 3 0 0 1-2.6 4.5H8.6A3 3 0 0 1 6 17l5-9V2Z" />
  ),
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
