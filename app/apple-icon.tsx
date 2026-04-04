import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#1e3a5f',
          borderRadius: 36,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        {/* Shield shape */}
        <svg width="80" height="88" viewBox="0 0 20 22" fill="none">
          <path
            d="M10 1L2 4.5V10C2 14.97 5.48 19.59 10 21C14.52 19.59 18 14.97 18 10V4.5L10 1Z"
            fill="#c9a84c"
          />
          <path
            d="M10 3.5L4 6.3V10C4 13.9 6.7 17.5 10 18.8C13.3 17.5 16 13.9 16 10V6.3L10 3.5Z"
            fill="#1e3a5f"
          />
        </svg>
        <div
          style={{
            color: '#c9a84c',
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontFamily: 'serif',
          }}
        >
          ACIER
        </div>
      </div>
    ),
    { ...size }
  );
}
