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
    <div className='w-full overflow-hidden py-12'>
      <div className='flex w-full justify-center gap-44 p-8 font-semibold'>
        <p className='text-6xl 2xl:text-7xl text-white'>Our Leadership</p>
        <p className='text-6xl 2xl:text-7xl text-white/10'>Our Team</p>
        <p className='text-6xl 2xl:text-7xl text-white/10'>Our Family</p>
      </div>
      <div className='max-w-330 2xl:max-w-400 mx-auto'>
        <div className='my-12'>
          <HomePhotoCard data={cardData} />
        </div>
        <Marquee
          autoFill={false}
          speed={70}
          pauseOnHover={true}
          className='overflow-hidden text-white text-center text-4xl tracking-wide py-4'
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
  );
}
