'use client';

import { useState, useEffect, use } from 'react';
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
    <div className='max-w-330 2xl:max-w-400 mx-auto grid grid-cols-2 gap-12 py-48 overflow-hidden'>
      <div className='text-white mt-18 space-y-2.5'>
        <h1 className='text-6xl 2xl:text-7xl font-semibold opacity-10'>
          Services
        </h1>
        <h1 className='text-6xl 2xl:text-7xl font-semibold'>Services</h1>
        <p className='mt-8 text-lg'>
          Professional technology services delivered with structure and
          accountability.
        </p>
      </div>
      <div className=''>
        <Image
          src={comments[currentIdx]}
          alt='Comment'
          width={800}
          height={800}
          className='object-contain'
        />
      </div>
    </div>
  );
}
