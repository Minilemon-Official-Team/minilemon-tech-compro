'use client';

import { useState } from 'react';
import { HomeEcosystemCard } from '@/components/ui/Card';
import { Play } from 'lucide-react';
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

  const [isClicked, setIsClicked] = useState('next');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
    setIsClicked('next');
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
    setIsClicked('prev');
  };

  return (
    <div className='py-24 overflow-x-hidden'>
      {/* <div className='flex w-full justify-center font-semibold 2xl:gap-28 3xl:gap-6'>
        <p className='text-5xl 2xl:text-7xl 3xl:text-8xl text-white/10'>
          Ecosystem
        </p>
        <p className='text-5xl 2xl:text-7xl 3xl:text-8xl text-white'>
          The Ecosystem
        </p>
        <p className='text-5xl 2xl:text-7xl 3xl:text-8xl text-white/10'>
          The Ecosyst
        </p>
      </div> */}
      <header className='relative z-20'>
        <p
          aria-hidden='true'
          className='absolute top-0 -left-10 2xl:-left-30 3xl:-left-50 text-6xl 2xl:text-7xl 3xl:text-8xl text-white/10 font-bold text-center tracking-tight'
        >
          The Ecosystem
        </p>
        <p
          aria-hidden='true'
          className='absolute top-0 -right-10 2xl:-right-30 3xl:-right-50 text-6xl 2xl:text-7xl 3xl:text-8xl text-white/10 font-bold text-center tracking-tight'
        >
          The Ecosystem
        </p>
        <h2 className='text-6xl 2xl:text-7xl 3xl:text-8xl text-white font-bold text-center tracking-tight'>
          The Ecosystem
        </h2>
      </header>
      <div className='w-full px-20'>
        <div className='max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto mt-12'>
          <div className='flex justify-center items-center'>
            <div className='w-8/9 '>
              <div className='transition-transform duration-500 ease-in-out'>
                <HomeEcosystemCard data={cardData[currentIndex]} />
              </div>

              <div className='flex justify-center items-center gap-4 mt-8 -ml-12'>
                <Play
                  className={`${isClicked === 'prev' ? 'text-white fill-white' : 'text-white/10 fill-white/10'} scale-x-[-1] w-18 2xl:w-24 h-18 2xl:h-24 hover:cursor-pointer`}
                  onClick={prevCard}
                />
                <Play
                  className={`${isClicked === 'next' ? 'text-white fill-white' : 'text-white/10 fill-white/10'} w-18 2xl:w-24 h-18 2xl:h-24 hover:cursor-pointer`}
                  onClick={nextCard}
                />
              </div>
            </div>
            <div className='bg-(--mltBlack) w-1/4 pt-24'>
              <div className='ml-18 '>
                <Image
                  src='/assets/Polygon.png'
                  alt='Polygon'
                  width={250}
                  height={250}
                  className='object-contain'
                />
              </div>
              <div className='ml-18 mt-2'>
                <Image
                  src='/assets/Polygon.png'
                  alt='Polygon'
                  width={250}
                  height={250}
                  className='object-contain'
                />
              </div>
              <div className='ml-18 mt-2'>
                <Image
                  src='/assets/Polygon.png'
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
    </div>
  );
}
