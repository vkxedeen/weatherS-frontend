import React from 'react';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    viewBox="0 0 128 128"
    space="preserve"
  >
    <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
    <g transform="rotate(348.494 64 64)">
      <linearGradient id="linear-gradient">
        <stop offset="0%" stopColor="#ffffff" fillOpacity="0" />
        <stop offset="100%" stopColor="#000000" fillOpacity="1" />
      </linearGradient>
      <path
        d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z"
        fill="url(#linear-gradient)"
        fillRule="evenodd"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="360 64 64"
        to="0 64 64"
        dur="1080ms"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

export default Logo;
