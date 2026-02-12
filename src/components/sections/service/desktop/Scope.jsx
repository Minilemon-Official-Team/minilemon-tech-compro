import { ScopeCard } from '@/components/ui/Card';
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
    <div className='w-full px-20'>
      <div className='relative max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto pb-8 mt-40 mb-20'>
        <div className='h-190 xl:h-200 2xl:h-210 3xl:h-225 w-full -mt-18'>
          <Image
            src='/assets/SubtractScope.png'
            alt='bg Features'
            fill
            className='object-center'
          />
        </div>

        <div className='absolute p-8 top-0 w-full'>
          <div className='flex justify-between items-center'>
            <h1 className='text-(--mltBlack) ml-6 mt-6 text-5xl 2xl:text-7xl 3xl:text-8xl font-semibold'>
              Service Scope <span className='opacity-10 ml-2'>Scope</span>
            </h1>
            <div className='scale-50 xl:scale-60 2xl:scale-75'>
              <AnimatedCubes position={'-rotate-8 -top-45 right-10'} />
              <AnimatedCubes
                position={'rotate-8 -top-45 right-90 3xl:right-115'}
              />
            </div>
          </div>

          <div className='px-24 mt-18 mb-18'>
            <ScopeCard data={cardData} />
          </div>
          <div className='px-12'>
            <Marquee
              autoFill={false}
              speed={70}
              pauseOnHover={true}
              className='overflow-hidden text-(--mltBlack) tracking-wide'
            >
              {slideData.map((text) => (
                <p className='text-center text-4xl 2xl:text-5xl mt-3'>
                  {text}
                  <span className='mx-18'>•</span>
                </p>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
