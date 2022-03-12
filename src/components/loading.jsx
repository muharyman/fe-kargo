const Loading = ({ fillcolor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 128 128"
    >
      <g>
        <linearGradient id="prefix__a">
          <stop offset="0%" stopColor="#fff" fillOpacity={0} />
          <stop offset="100%" stopColor={fillcolor} />
        </linearGradient>
        <path
          d="M63.85 0A63.85 63.85 0 110 63.85 63.85 63.85 0 0163.85 0zm.65 19.5a44 44 0 11-44 44 44 44 0 0144-44z"
          fill="url(#prefix__a)"
          fillRule="evenodd"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="1320ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

export default Loading;
