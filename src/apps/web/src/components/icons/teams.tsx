import { SVGProps } from 'react';

const TeamsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#5059c9"
      d="M44 22v8a6 6 0 1 1-12 0V20h10a2 2 0 0 1 2 2zm-6-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
    />
    <path
      fill="#7b83eb"
      d="M35 22v11c0 5.743-4.841 10.356-10.666 9.978C19.019 42.634 15 37.983 15 32.657V20h18a2 2 0 0 1 2 2zm-10-5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
    />
    <circle cx={25} cy={11} r={6} fill="#7b83eb" />
    <path
      d="M26 33.319V20H15v12.657c0 1.534.343 3.008.944 4.343h6.374A3.681 3.681 0 0 0 26 33.319z"
      opacity={0.05}
    />
    <path
      d="M15 20v12.657c0 1.16.201 2.284.554 3.343h6.658a3.12 3.12 0 0 0 3.121-3.121V20H15z"
      opacity={0.07}
    />
    <path
      d="M24.667 20H15v12.657c0 .802.101 1.584.274 2.343h6.832a2.56 2.56 0 0 0 2.56-2.56V20z"
      opacity={0.09}
    />
    <linearGradient
      id="a"
      x1={4.648}
      x2={23.403}
      y1={14.648}
      y2={33.403}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#5961c3" />
      <stop offset={1} stopColor="#3a41ac" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M22 34H6a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z"
    />
    <path
      fill="#fff"
      d="M18.068 18.999H9.932v1.72h3.047v8.28h2.042v-8.28h3.047v-1.72z"
    />
  </svg>
);
export default TeamsIcon;

