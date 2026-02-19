import { FounderCard } from '@/components/ui/Card';

export default function Hero() {
  const founderDatas = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      subTitle: 'Lorem Ipsum',
      color: '#EABDF2',
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      subTitle: 'Lorem Ipsum',
      color: '#03805E',
    },
    {
      id: 3,
      name: 'Lorem Ipsum',
      subTitle: 'Lorem Ipsum',
      color: '#3ACA47',
    },
  ];
  
  return (
    <div className='text-center mt-24 mx-auto min-h-screen flex flex-col gap-24 items-center w-full overflow-x-hidden'>
      <header className='flex flex-col items-center justify-center border border-white pt-8 min-[520px]:pt-12'>
        <div className="relative inline-block">
          <p
            aria-hidden='true'
            className='border border-white absolute -top-7 min-[520px]:-top-12 left-1/2 -translate-x-1/2 text-2xl min-[520px]:text-4xl tracking-tight text-white/10 select-none whitespace-nowrap'
          >
            COLLABS
          </p>
          <h2 className='relative text-2xl min-[520px]:text-4xl font-bold tracking-tight text-white mb-4'>
            COLLABS
          </h2>
        </div>
        <p className='text-white text-lg sm:text-xl mb-4 px-8 max-w-2xl'>
          Building Technology Together Through Openness And Learning
        </p>
      </header>
      
      <div className='flex flex-col items-center gap-12 sm:gap-16 w-full max-w-5xl px-4 sm:px-12 pb-24'>
        {founderDatas.map((items) => (
          <FounderCard key={items.id} props={items} />
        ))}
      </div>

    </div>
  );
}