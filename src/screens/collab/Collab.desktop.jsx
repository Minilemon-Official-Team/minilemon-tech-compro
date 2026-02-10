import FounderCard from '@/components/sections/collab/FounderCard';
import Image from 'next/image';
import WireframeCube from '@/components/sections/collab/WireframeCube';
import PlaygroundCard from '@/components/sections/collab/PlaygroundCard';
import StepCard from '@/components/sections/collab/StepCard';
import StepsSection from '@/components/sections/collab/StepsSection';
import AnimatedCubeStack from '@/components/sections/collab/AnimatedCubeStack';

export default function CollabDesktop() {
  const founderDatas = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      subTitle: 'Lorem Ipsum',
      color: "#EABDF2"
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      subTitle: 'Lorem Ipsum',
      color: "#03805E"
    },
    {
      id: 3,
      name: 'Lorem Ipsum',
      subTitle: 'Lorem Ipsum',
      color: "#3ACA47"
    },
  ];

  const playgroundDatas = [
    {
      id: 'internship-program',
      title: 'Internship Program',
      description:
        'High-intensity immersive learning by doing alongside our Core and Meta teams.',
    },
    {
      id: 'open-source-project',
      title: 'Open Source Project',
      description:
        'Core components of our stack shared for community growth and innovation.',
    },
    {
      id: 'csr-initiatives',
      title: 'CSR Initiatives',
      description:
        'Applying advanced technology to solve pressing social and environmental problems.',
    },
    {
      id: 'research-&-experiments',
      title: 'Research & Experiments',
      description:
        'Testing bleeding-edge technologies and theoretical frameworks in the lab.',
    },
  ];

  const stepDatas = [
    {
      id: 1,
      title: 'Reach Out',
      subtitle: 'Email Us Your Proposal',
    },
    {
      id: 2,
      title: 'Idea Share',
      subtitle: 'Initial Discovery Call',
    },
    {
      id: 3,
      title: 'Align Goals',
      subtitle: 'Strategy & Roadmap',
    },
    {
      id: 4,
      title: 'Co-Launch',
      subtitle: 'Start The Project',
    },
  ];

  return (
    <div className='bg-(--mltBlack) w-full px-48 mx-auto flex flex-col gap-12 items-center justify-center overflow-hidden'>
      <div className='w-full min-h-screen px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
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
      <div className='w-full min-h-screen px-6 flex items-center gap-16'>
        <div className='max-w-7xl bg-[#181818] border-2 border-white text-white p-4 grid grid-cols-[1fr_2fr] gap-12 '>
          <div className='w-[320px] 2xl:w-[420px] h-full'>
            <Image
              alt=''
              src='/assets/collab_playground.png'
              width={400}
              height={400}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='text-2xl 2xl:text-3xl font-bold leading-tight mb-8'>
              The Playground
            </h2>
            <p className='text-lg 2xl:text-xl leading-relaxed mb-2'>
              The Playground Team is dedicated to experimentation, open-source
              initiatives, learning programs, and technology-driven social
              impact. It is our sandbox for the future.
            </p>
            <p className='text-sm leading-relaxed italic'>
              &quot;Innovation thrives in environments where failure is an
              accepted part of the learning process. Playground is that
              environment for Minilemon.&quot;
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-16'>
          <AnimatedCubeStack/>
        </div>
      </div>
      <div className='w-full min-h-screen px-6'>
        <header className='relative z-20'>
          <p
            aria-hidden='true'
            className='absolute top-0 lg:-left-92 xl:-left-98 2xl:-left-80 lg:text-6xl xl:text-7xl 2xl:text-8xl text-white/10 font-bold text-center tracking-tight'
          >
            The Playground
          </p>
          <p
            aria-hidden='true'
            className='absolute top-0 lg:-right-92 xl:-right-98 2xl:-right-80 lg:text-6xl xl:text-7xl 2xl:text-8xl text-white/10 font-bold text-center tracking-tight'
          >
            The Playground
          </p>
          <h2 className='lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-bold text-center tracking-tight'>
            The Playground
          </h2>
        </header>
        <div className='grid grid-cols-2 w-fit mx-auto gap-24 py-24'>
          {playgroundDatas.map((data) => (
            <PlaygroundCard
              key={data.id}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
      <div className='w-full px-6'>
        <header className='relative z-20'>
          <p
            aria-hidden='true'
            className='absolute top-0 lg:-left-128 xl:-left-142 2xl:-left-146 lg:text-6xl xl:text-7xl 2xl:text-8xl text-white/10 font-bold text-center tracking-tight'
          >
            How To Collaborate
          </p>
          <p
            aria-hidden='true'
            className='absolute top-0 lg:-right-128 xl:-right-142 2xl:-right-146 lg:text-6xl xl:text-7xl 2xl:text-8xl text-white/10 font-bold text-center tracking-tight'
          >
            How To Collaborate
          </p>
          <h2 className='lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-bold text-center tracking-tight'>
            How To Collaborate
          </h2>
        </header>
        <div className='flex flex-row gap-24 my-32 justify-center'>
          <StepsSection/>
        </div>
      </div>
    </div>
  );
}
