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
      <div className='flex w-full justify-center gap-2 2xl:gap-12 p-8 font-semibold'>
        <p className='text-6xl 2xl:text-7xl text-white/10'>Studies</p>
        <p className='text-6xl 2xl:text-7xl text-white'>
          Selected Case Studies
        </p>
        <p className='text-6xl 2xl:text-7xl text-white/10'>Selected</p>
      </div>
      <div className='max-w-330 2xl:max-w-400 mx-auto bg-white flex justify-center items-center gap-4 p-4 mt-12'>
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
              <p className='text-(--mltYellow) text-sm mb-2'>{data.label}</p>
              <h1
                className={`font-medium mb-1 transition-all duration-300 ${
                  hoveredId === data.id ? 'text-3xl' : 'text-xl'
                }`}
              >
                {data.title}
              </h1>
              <p
                className={`text-sm opacity-80 transition-opacity duration-300 ${
                  hoveredId === data.id ? 'opacity-100' : 'opacity-80'
                }`}
              >
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
