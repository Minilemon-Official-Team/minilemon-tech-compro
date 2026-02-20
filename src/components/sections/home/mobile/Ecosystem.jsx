'use client';

import { useState } from 'react';
import { HomeEcosystemCardMobile } from '@/components/ui/Card';
import { Play } from 'lucide-react';
import { AnimatedTrianglePolygonMobile } from '@/components/ui/AnimatedTriangle';

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
    <div className='relative max-w-108 mx-auto text-white overflow-hidden mb-18'>
      <header className='relative z-20'>
        <p
          aria-hidden='true'
          className='absolute top-0 -left-20 text-2xl text-white/10 font-semibold text-center tracking-tight'
        >
          The Ecosystem
        </p>
        <p
          aria-hidden='true'
          className='absolute top-0 -right-20 text-2xl text-white/10 font-semibold text-center tracking-tight'
        >
          The Ecosystem
        </p>
        <h2 className='text-2xl text-white font-semibold text-center tracking-tight'>
          The Ecosystem
        </h2>
      </header>
      <div className='flex justify-center items-center pl-6'>
        <div className='w-3/4 '>
          <div className='transition-transform duration-500 ease-in-out mt-8'>
            <HomeEcosystemCardMobile data={cardData[currentIndex]} />
          </div>

          <div className='flex justify-center items-center gap-4 mt-4 ml-8'>
            <Play
              className={`${isClicked === 'prev' ? 'text-white fill-white' : 'text-white/10 fill-white/10'} scale-x-[-1] w-12 h-12 hover:cursor-pointer`}
              onClick={prevCard}
            />
            <Play
              className={`${isClicked === 'next' ? 'text-white fill-white' : 'text-white/10 fill-white/10'} w-12 h-12 hover:cursor-pointer`}
              onClick={nextCard}
            />
          </div>
        </div>
        <div className='bg-(--mltBlack) w-1/4 px-2 pl-8 mt-4'>
          <AnimatedTrianglePolygonMobile />
          <AnimatedTrianglePolygonMobile />
          <AnimatedTrianglePolygonMobile />
        </div>
      </div>
    </div>
  );
}
