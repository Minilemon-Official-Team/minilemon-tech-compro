'use client';

import { useState } from 'react';

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
    <div className='max-w-108 mx-auto px-6 my-12'>
      <header className='mb-6 overflow-hidden'>
        <h2 className='text-2xl text-white font-semibold text-center tracking-tight'>
          Selected Case Studies
        </h2>
      </header>

      <div className='bg-white flex flex-col justify-center items-center gap-4 p-4 mt-6'>
        {caseData.map((data) => (
          <div
            key={data.id}
            onMouseEnter={() => setHoveredId(data.id)}
            onMouseLeave={() => setHoveredId(1)}
            className={`relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer w-full ${
              hoveredId === data.id ? 'h-60' : hoveredId ? 'h-28' : 'h-60'
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

            <div className='relative h-full flex flex-col justify-center items-center p-6 text-white text-center transition-all duration-500 ease-in-out'>
              <p
                className={`${hoveredId === data.id ? 'text-base' : 'text-sm'} text-(--mltYellow) mb-2`}
              >
                {data.label}
              </p>
              <h1
                className={`font-semibold mb-1 transition-all duration-300 ${
                  hoveredId === data.id ? 'text-base' : 'text-sm'
                }`}
              >
                {data.title}
              </h1>
              <p
                className={`opacity-80 transition-opacity duration-300 ${
                  hoveredId === data.id
                    ? 'opacity-100 text-sm text-[#8D8D8D]'
                    : 'opacity-80 text-xs'
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
