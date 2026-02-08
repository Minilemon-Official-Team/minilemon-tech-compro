import React from 'react';

export const WireframeCube = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 115"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full block"
      >
        {/* Sisi Atas */}
        <path d="M50 2 L98 27 L50 52 L2 27 Z" />
        
        {/* Sisi Kanan */}
        <path d="M98 27 V77 L50 102 V52 Z" />
        
        {/* Sisi Kiri */}
        <path d="M2 27 V77 L50 102 V52 Z" />
      </svg>
    </div>
  );
};
