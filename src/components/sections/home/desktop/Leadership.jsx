import { HomePhotoCard } from '@/components/ui/Card';
import Marquee from 'react-fast-marquee';

export default function Leadership() {
  const cardData = [
    {
      id: 1,
      src: '/assets/imgLeadership.png',
      alt: 'Key People',
    },
    {
      id: 2,
      src: '/assets/imgLeadership.png',
      alt: 'Key People',
    },
    {
      id: 3,
      src: '/assets/imgLeadership.png',
      alt: 'Key People',
    },
    {
      id: 4,
      src: '/assets/imgLeadership.png',
      alt: 'Key People',
    },
  ];

  const slideData = [
    'The Thinkers of Minilemon',
    'The Thinkers of Minilemon',
    'The Thinkers of Minilemon',
    'The Thinkers of Minilemon',
  ];

  return (
    <div className='overflow-hidden my-24'>
      <div className='flex w-full justify-center font-semibold gap-32 xl:gap-36 2xl:gap-24 3xl:gap-8'>
        <p className='text-5xl 2xl:text-7xl 3xl:text-8xl text-white'>
          Our Leadership
        </p>
        <p className='text-5xl 2xl:text-7xl 3xl:text-8xl text-white/10'>
          Our Team
        </p>
        <p className='text-5xl 2xl:text-7xl 3xl:text-8xl text-white/10'>
          Our Family
        </p>
      </div>
      <div className='w-full px-20'>
        <div className='max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto'>
          <div className='mt-24'>
            <HomePhotoCard data={cardData} />
          </div>
          <Marquee
            autoFill={false}
            speed={70}
            pauseOnHover={true}
            className='overflow-hidden tracking-wide py-8 mt-14'
          >
            {slideData.map((text) => (
              <p className='text-white text-center text-4xl 3xl:text-5xl'>
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
