'use client';

import { useState } from 'react';
import Image from 'next/image';

export function AnimatedTriangle() {
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

export function AnimatedTrianglePolygon() {
  const centerX = 250;
  const centerY = 110;

  const radius = 90;

  const vertices = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    vertices.push({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    });
  }
  return (
    <div className='inline-flex items-center justify-center overflow-hidden'>
      <svg className='w-52 xl:w-64 h-52 xl:h-64' viewBox='80 80 240 240'>
        <g transform='rotate(40 200 200)'>
          {(() => {
            const centerX = 200;
            const centerY = 200;
            const outerRadius = 120;
            const sides = 6;

            const gapAngle = 0.03;
            const centerOffset = 8;

            const triangles = [];

            for (let i = 0; i < sides; i++) {
              const baseAngle = (Math.PI * 2 * i) / sides - Math.PI / 2;

              const angle1 = baseAngle + gapAngle;
              const angle2 = baseAngle + (Math.PI * 2) / sides - gapAngle;
              const midAngle = baseAngle + (Math.PI * 2) / sides / 2;

              const x1 = centerX + outerRadius * Math.cos(angle1);
              const y1 = centerY + outerRadius * Math.sin(angle1);

              const x2 = centerX + outerRadius * Math.cos(angle2);
              const y2 = centerY + outerRadius * Math.sin(angle2);

              const cx = centerX + centerOffset * Math.cos(midAngle);
              const cy = centerY + centerOffset * Math.sin(midAngle);

              triangles.push(
                <polygon
                  key={i}
                  points={`${cx},${cy} ${x1},${y1} ${x2},${y2}`}
                  fill='transparent'
                  style={{ pointerEvents: 'visiblePainted' }}
                  className='fill-transparent stroke-[#373737] stroke-3 transition-all duration-300 hover:stroke-(--mltPink)'
                />,
              );
            }

            return triangles;
          })()}
        </g>
      </svg>
    </div>
  );
}

export function AnimatedTrianglePolygonMobile() {
  const centerX = 250;
  const centerY = 110;

  const radius = 90;

  const vertices = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    vertices.push({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    });
  }
  return (
    <div className='inline-flex items-center justify-center overflow-hidden mb-6'>
      <svg className='w-48' viewBox='80 80 240 240'>
        <g transform='rotate(40 200 200)'>
          {(() => {
            const centerX = 200;
            const centerY = 200;
            const outerRadius = 120;
            const sides = 6;

            const gapAngle = 0.03;
            const centerOffset = 8;

            const triangles = [];

            for (let i = 0; i < sides; i++) {
              const baseAngle = (Math.PI * 2 * i) / sides - Math.PI / 2;

              const angle1 = baseAngle + gapAngle;
              const angle2 = baseAngle + (Math.PI * 2) / sides - gapAngle;
              const midAngle = baseAngle + (Math.PI * 2) / sides / 2;

              const x1 = centerX + outerRadius * Math.cos(angle1);
              const y1 = centerY + outerRadius * Math.sin(angle1);

              const x2 = centerX + outerRadius * Math.cos(angle2);
              const y2 = centerY + outerRadius * Math.sin(angle2);

              const cx = centerX + centerOffset * Math.cos(midAngle);
              const cy = centerY + centerOffset * Math.sin(midAngle);

              triangles.push(
                <polygon
                  key={i}
                  points={`${cx},${cy} ${x1},${y1} ${x2},${y2}`}
                  fill='transparent'
                  style={{ pointerEvents: 'visiblePainted' }}
                  className='fill-transparent stroke-[#373737] stroke-3 transition-all duration-300 hover:stroke-(--mltPink)'
                />,
              );
            }

            return triangles;
          })()}
        </g>
      </svg>
    </div>
  );
}
