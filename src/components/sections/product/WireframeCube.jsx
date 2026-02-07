export const WireframeCube = ({ className, color = "currentColor" }) => {
  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 150 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ATAS */}
        <path
          d="M 75 0 L 150 43 L 75 86 L 0 43 Z"
          fill="transparent"
          stroke={color}
          strokeWidth="2"
        />
        {/* KIRI */}
        <path
          d="M 0 43 L 0 129 L 75 172 L 75 86 Z"
          fill="transparent"
          stroke={color}
          strokeWidth="2"
        />
        {/* KANAN */}
        <path
          d="M 75 86 L 75 172 L 150 129 L 150 43 Z"
          fill="transparent"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};