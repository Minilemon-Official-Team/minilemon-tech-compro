import { FeatureCardMobile } from '@/components/ui/Card';
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
    <div className='relative px-6 max-w-108 mx-auto'>
      <div className='relative h-226 w-full'>
        <Image
          src='/assets/SubtractFeaturesMobile.png'
          alt='bg Features'
          fill
          className='object-fill'
        />
      </div>
      <div className='absolute top-0 left-0 right-0 px-12'>
        <h1 className='text-(--mltBlack) text-2xl font-semibold mt-6'>
          Why We Are <br /> Different
        </h1>
        <div className='mt-8'>
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
