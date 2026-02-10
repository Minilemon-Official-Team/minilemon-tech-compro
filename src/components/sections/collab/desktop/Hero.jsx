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
    <div className='max-w-330 2xl:max-w-400 mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-24 items-center '>
      <header className='relative z-20'>
        <p
          aria-hidden='true'
          className='absolute -top-28 left-0 text-8xl tracking-tight text-white/10 select-none'
        >
          COLLABS
        </p>
        <h2 className='relative text-8xl font-bold tracking-tight text-white mb-8'>
          COLLABS
        </h2>
        <p className='text-white text-xl mb-4'>
          Building Technology Together Through Openness And Learning
        </p>
      </header>
      <div className='flex flex-col gap-12'>
        {founderDatas.map((items) => (
          <FounderCard key={items.id} props={items} />
        ))}
      </div>
    </div>
  );
}
