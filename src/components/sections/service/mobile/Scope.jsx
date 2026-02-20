import { FeatureCardMobile } from '@/components/ui/Card';
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
    <div className='relative max-w-108 mx-auto px-6 my-12'>
      <div className='relative h-228 xs:h-210 w-full'>
        <Image
          src='/assets/SubtractScopeMobile.png'
          alt='bg Features'
          fill
          className='object-fill'
        />
      </div>
      <div className='absolute top-0 left-0 right-0 px-12'>
        <div className='flex justify-between items-center'>
          <h1 className='text-(--mltBlack) text-2xl font-semibold mt-6'>
            Service Scope <br />{' '}
            <span className='text-(--mltBlack)/10'>Scope</span>
          </h1>
          <div className='scale-35'>
            <AnimatedCubes position={'-rotate-8 -top-45 -right-25'} />
            <AnimatedCubes position={'rotate-8 -top-45 right-15'} />
          </div>
        </div>

        <div className='mt-10'>
          <FeatureCardMobile data={cardData} />
        </div>
        <Marquee
          autoFill={false}
          speed={70}
          pauseOnHover={true}
          className='overflow-hidden tracking-wide py-6'
        >
          {slideData.map((text) => (
            <p className='text-(--mltBlack) text-center text-base'>
              {text}
              <span className='mx-6'>•</span>
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
