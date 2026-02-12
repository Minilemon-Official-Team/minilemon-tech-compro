'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AnimatedTriangle() {
  const [isHovered, setIsHovered] = useState(null);
  const rotationData = [30, -10, 20, -30];

  return (
    <div className='flex flex-col gap-14 2xl:gap-20'>
      {rotationData.map((value, idx) => (
        <Image
          key={idx}
          src={`${isHovered === idx ? '/assets/TriangleGlow.png' : '/assets/TriangleDefault.png'}`}
          alt='Rectangle'
          width={450}
          height={450}
          className='object-contain 3xl:w-190 h-auto'
          style={{ transform: `rotate(${value}deg)` }}
          onMouseEnter={() => setIsHovered(idx)}
          onMouseLeave={() => setIsHovered(null)}
        />
      ))}
    </div>
  );
}
