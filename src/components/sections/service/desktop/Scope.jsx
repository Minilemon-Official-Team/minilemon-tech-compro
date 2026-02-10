import { FeatureCard } from '@/components/ui/Card';
import AnimatedCubes from '@/components/ui/AnimatedCubes';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function Scope() {
  const cardData = [
    {
      id: 1,
      title: 'Software Development',
      desc: 'Enterprise-grade web and system-based solutions with modular architecture.',
    },
    {
      id: 2,
      title: 'Digital Product Development',
      desc: 'End-to-end product realization from initial strategy to production scaling.',
    },
    {
      id: 3,
      title: 'Platform & System Architecture',
      desc: 'Design of high-performance, resilient, and secure cloud-native infrastructure.',
    },
    {
      id: 4,
      title: 'Custom Technology Solutions',
      desc: 'Specialized R&D for unique challenges in AI, IoT, and high-performance computing.',
    },
  ];

  const slideData = [
    'The Thinkers of Minilemon',
    'The Thinkers of Minilemon',
    'The Thinkers of Minilemon',
    'The Thinkers of Minilemon',
  ];

  return (
    <div className='relative max-w-330 2xl:max-w-400 mx-auto pb-8 mt-40 mb-20'>
      <div className='h-200 w-full -mt-18'>
        <Image
          src='/assets/SubtractScope.png'
          alt='bg Features'
          fill
          className='object-center'
        />
      </div>

      <div className='absolute p-8 top-0 w-full'>
        <div className='flex justify-between items-center'>
          <h1 className='text-(--mltBlack) ml-12 mt-6 text-6xl 2xl:text-7xl font-semibold'>
            Service Scope <span className='opacity-10 ml-8'>Scope</span>
          </h1>
          <div className='scale-60 2xl:scale-75'>
            <AnimatedCubes position={'-rotate-8 -top-45 -right-2'} />
            <AnimatedCubes position={'rotate-8 -top-45 right-90'} />
          </div>
        </div>

        <div className='px-32 pt-24 pb-18'>
          <FeatureCard data={cardData} />
        </div>
        <div className='px-12'>
          <Marquee
            autoFill={false}
            speed={70}
            pauseOnHover={true}
            className='overflow-hidden text-(--mltBlack) text-center text-4xl tracking-wide'
          >
            {slideData.map((text) => (
              <p>
                {text}
                <span className='mx-18'>•</span>
              </p>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
