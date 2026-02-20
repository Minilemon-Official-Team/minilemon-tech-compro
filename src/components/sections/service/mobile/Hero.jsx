'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const comments = [
    '/assets/Comment1.png',
    '/assets/Comment2.png',
    '/assets/Comment3.png',
    '/assets/Comment4.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % comments.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [comments.length]);

  return (
    <div className='relative max-w-108 mx-auto text-white overflow-x-hidden my-12'>
      <div className='px-6'>
        <div className='space-y-1 text-center uppercase'>
          <h1 className='text-2xl font-semibold opacity-10'>Services</h1>
          <h1 className='text-2xl font-semibold'>Services</h1>
        </div>
        <p className='mt-6 text-base text-center'>
          Professional Technology Services Delivered <br /> With Structure and
          Accountability.
        </p>
      </div>
      <Image
        src={comments[currentIdx]}
        alt='Comment'
        width={1000}
        height={1100}
        className='object-contain w-130 h-auto relative -right-12 mt-12 overflow-x-hidden'
      />
    </div>
  );
}
