import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#1e3a5f',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Shield shape */}
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path
            d="M10 1L2 4.5V10C2 14.97 5.48 19.59 10 21C14.52 19.59 18 14.97 18 10V4.5L10 1Z"
            fill="#c9a84c"
          />
          <path
            d="M10 3.5L4 6.3V10C4 13.9 6.7 17.5 10 18.8C13.3 17.5 16 13.9 16 10V6.3L10 3.5Z"
            fill="#1e3a5f"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
