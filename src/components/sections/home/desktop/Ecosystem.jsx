'use client';

import { useState } from 'react';
import { HomeEcosystemCard } from '@/components/ui/Card';
import { CircleChevronLeft, CircleChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Ecosystem() {
  const cardData = [
    {
      id: 1,
      src: '/assets/product_card_template.png',
      title: 'Building Original Legacies',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ipsum aliquam libero sint placeat reiciendis architecto facere distinctio provident at.',
      tag: ['Products', 'Core Team'],
      feature: 'Explore Code Catalog',
    },
    {
      id: 2,
      src: '/assets/product_card_template.png',
      title: 'Expert Execution',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ipsum aliquam libero sint placeat reiciendis architecto facere distinctio provident at.',
      tag: ['services', 'Meta Team'],
      feature: 'Explore Code Catalog',
    },
    {
      id: 3,
      src: '/assets/product_card_template.png',
      title: 'The Open Lab',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ipsum aliquam libero sint placeat reiciendis architecto facere distinctio provident at.',
      tag: ['Collaborations', 'Playground Team'],
      feature: 'Explore Code Catalog',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  return (
    <div className='py-24 overflow-x-hidden'>
      <div className='flex w-full justify-center gap-12 p-8 font-semibold'>
        <p className='text-6xl 2xl:text-7xl text-white/10'>The Ecosystem</p>
        <p className='text-6xl 2xl:text-7xl text-white'>The Ecosystem</p>
        <p className='text-6xl 2xl:text-7xl text-white/10'>The Ecosystem</p>
      </div>
      <div className='max-w-330 2xl:max-w-400 mx-auto mt-12'>
        <div className='flex justify-center items-center gap-18'>
          <div className='w-8/9 '>
            <div
              className='py-6 transition-transform duration-500 ease-in-out'
              // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <HomeEcosystemCard data={cardData[currentIndex]} />
            </div>

            <div className='flex justify-center items-center gap-4 text-white'>
              <CircleChevronLeft
                className='w-12 h-12 hover:cursor-pointer'
                onClick={prevCard}
              />
              <CircleChevronRight
                className='w-12 h-12 hover:cursor-pointer'
                onClick={nextCard}
              />
            </div>
          </div>
          <div className='bg-(--mltBlack) w-1/4 pt-24'>
            <div className='ml-18 '>
              <Image
                src='/assets/polygon.png'
                alt='Polygon'
                width={250}
                height={250}
                className='object-contain'
              />
            </div>
            <div className='ml-18 mt-2'>
              <Image
                src='/assets/polygon.png'
                alt='Polygon'
                width={250}
                height={250}
                className='object-contain'
              />
            </div>
            <div className='ml-18 mt-2'>
              <Image
                src='/assets/polygon.png'
                alt='Polygon'
                width={250}
                height={250}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
