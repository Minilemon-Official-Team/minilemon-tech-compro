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
    <div className='w-full px-20'>
      <div className='max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto grid grid-cols-[1fr_1.3fr] gap-18 py-40'>
        <div className='text-white pr-12 mt-4'>
          <div className='space-y-4 2xl:space-y-10'>
            <h1 className='text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-semibold opacity-10'>
              Services
            </h1>
            <h1 className='text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-semibold'>
              Services
            </h1>
          </div>

          <p className='mt-6 2xl:mt-8 text-lg 2xl:text-xl 3xl:text-2xl'>
            Professional technology services delivered with structure and
            accountability.
          </p>
        </div>

        <Image
          src={comments[currentIdx]}
          alt='Comment'
          width={800}
          height={900}
          className='object-contain w-96 lg:w-120 xl:w-150 2xl:w-200 3xl:w-430 h-auto ml-16 xl:ml-12 2xl:ml-4 3xl:ml-0'
        />
      </div>
    </div>
  );
}
