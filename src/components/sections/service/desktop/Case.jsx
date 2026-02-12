'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Case() {
  const [hoveredId, setHoveredId] = useState(1);

  const caseData = [
    {
      id: 1,
      title: 'Omni-Channel Retail Core',
      desc: 'Global Fashion Retailer',
      label: 'Meta Case Study 01',
      src: '/assets/product_card_template.png',
    },
    {
      id: 2,
      title: 'Smart City Traffic Mesh',
      desc: 'Metropolitan Auth',
      label: 'Meta Case Study 02',
      src: '/assets/product_card_template.png',
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      desc: 'Lorem Ipsum',
      label: 'Meta Case Study 03',
      src: '/assets/product_card_template.png',
    },
    {
      id: 4,
      title: 'Lorem Ipsum',
      desc: 'Lorem Ipsum',
      label: 'Meta Case Study 04',
      src: '/assets/product_card_template.png',
    },
  ];

  return (
    <div className='py-24 overflow-x-hidden'>
      <header className='relative z-20'>
        <p
          aria-hidden='true'
          className='absolute top-0 -left-100 3xl:-left-180 text-6xl 2xl:text-7xl 3xl:text-8xl text-white/10 font-semibold text-center'
        >
          Selected Case Studies
        </p>
        <p
          aria-hidden='true'
          className='absolute top-0 -right-100 3xl:-right-180 text-6xl 2xl:text-7xl 3xl:text-8xl text-white/10 font-semibold text-center'
        >
          Selected Case Studies
        </p>
        <h2 className='text-6xl 2xl:text-7xl 3xl:text-8xl text-white font-semibold text-center'>
          Selected Case Studies
        </h2>
      </header>

      <div className='w-full px-20'>
        <div className='max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto bg-white flex justify-center items-center gap-4 p-10 mt-12'>
          {caseData.map((data) => (
            <div
              key={data.id}
              onMouseEnter={() => setHoveredId(data.id)}
              onMouseLeave={() => setHoveredId(1)}
              className={`relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out cursor-pointer h-160 ${
                hoveredId === data.id
                  ? 'flex-[0.8]'
                  : hoveredId
                    ? 'flex-[0.5]'
                    : 'flex-[0.8]'
              }`}
              style={{
                backgroundImage: `url(${data.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredId === data.id ? 'bg-black/30' : 'bg-black/80'
                }`}
              />

              <div
                className={`${hoveredId === data.id ? 'mt-0' : '-mt-54'} relative h-full flex flex-col justify-end p-6 text-white text-center transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`${hoveredId === data.id ? 'text-2xl' : 'text-lg'} text-(--mltYellow) mb-2`}
                >
                  {data.label}
                </p>
                <h1
                  className={`font-semibold mb-1 transition-all duration-300 ${
                    hoveredId === data.id ? 'text-2xl' : 'text-xl'
                  }`}
                >
                  {data.title}
                </h1>
                <p
                  className={`opacity-80 transition-opacity duration-300 ${
                    hoveredId === data.id
                      ? 'opacity-100 text-lg text-[#8D8D8D]'
                      : 'opacity-80 text-sm'
                  }`}
                >
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
