import { HomePhotoCardMobile } from '@/components/ui/Card';
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
    <div className='max-w-108 mx-auto my-18'>
      <header className='flex relative z-20 mb-6 overflow-hidden pl-6'>
        <h2 className='text-2xl text-white font-semibold text-start tracking-tight'>
          Our Leadership
        </h2>
        <p
          aria-hidden='true'
          className='absolute top-0 -right-22 text-2xl text-white/10 font-semibold text-center tracking-tight'
        >
          Our Family
        </p>
        <p
          aria-hidden='true'
          className='absolute top-0 right-12 text-2xl text-white/10 font-semibold text-center tracking-tight'
        >
          Our Team
        </p>
      </header>
      <div className='px-6'>
        <div className=''>
          <HomePhotoCardMobile data={cardData} />
          <Marquee
            autoFill={false}
            speed={70}
            pauseOnHover={true}
            className='overflow-hidden tracking-wide py-8'
          >
            {slideData.map((text) => (
              <p className='text-white text-center text-base'>
                {text}
                <span className='mx-6'>•</span>
              </p>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
