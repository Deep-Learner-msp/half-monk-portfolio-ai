import { useId } from 'react';

/** Spinning dotted ring with text set along its path (hero and contact badges). */
export function Ring({ text }: { text: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true" className="c-ring">
      <defs>
        <path id={id} d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        <linearGradient id={id + 'g'} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B85FF" />
          <stop offset="100%" stopColor="#FF5A6E" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="47" fill="none" stroke={`url(#${id}g)`} strokeWidth="1.6" strokeDasharray="0.8 3.2" />
      <text fill="#CFD3E5" fontSize="8" letterSpacing="2.4" fontFamily="IBM Plex Mono, monospace">
        <textPath href={'#' + id}>{text}</textPath>
      </text>
    </svg>
  );
}
