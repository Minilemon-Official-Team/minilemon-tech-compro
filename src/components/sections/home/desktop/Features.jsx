import { FeatureCard } from '@/components/ui/Card';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function Features() {
  const cardData = [
    {
      id: 1,
      title: 'Systems Over Projects',
      desc: 'We dont build one-offs. Every solution is conceived as part of an evolving digital ecosystem.',
    },
    {
      id: 2,
      title: 'Long-term Impact',
      desc: 'Our metrics arent just quarters; theyre decades. We build infrastructure that lasts.',
    },
    {
      id: 3,
      title: 'Ethical Innovation',
      desc: 'Technology should serve humanity. We prioritize privacy, security, and sustainability in every line of code.',
    },
    {
      id: 4,
      title: 'Collective Intelligence',
      desc: 'By combining internal products with external services and open playground experiments, we create a feedback loop of innovation.',
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
      <div className='relative max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto pb-8 mb-12 mt-32'>
        <div className='h-190 xl:h-200 2xl:h-210 3xl:h-225 w-full -mt-18'>
          <Image
            src='/assets/SubtractFeatures.png'
            alt='bg Features'
            fill
            className='object-center'
          />
        </div>

        <div className='absolute p-8 top-0 w-full'>
          <h1 className='text-(--mltBlack) ml-12 text-5xl 2xl:text-7xl 3xl:text-8xl font-semibold'>
            Why We Are Different
          </h1>
          <div className='px-32 2xl:px-46 mt-18 mb-18'>
            <FeatureCard data={cardData} />
          </div>
          <div className='px-12'>
            <Marquee
              autoFill={false}
              speed={70}
              pauseOnHover={true}
              className='overflow-hidden text-(--mltBlack) tracking-wide mb-12'
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
