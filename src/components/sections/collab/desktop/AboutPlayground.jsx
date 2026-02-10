import Image from 'next/image';
import AnimatedCubeStack from '../../../ui/AnimatedCubeStack';

export default function AboutPlayground() {
  return (
    <div className='max-w-330 2xl:max-w-400 mx-auto min-h-screen flex items-center gap-16'>
      <div className='bg-[#181818] border-2 border-white text-white p-4 grid grid-cols-[1fr_2fr] gap-12'>
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
            initiatives, learning programs, and technology-driven social impact.
            It is our sandbox for the future.
          </p>
          <p className='text-sm leading-relaxed italic'>
            &quot;Innovation thrives in environments where failure is an
            accepted part of the learning process. Playground is that
            environment for Minilemon.&quot;
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-16'>
        <AnimatedCubeStack />
      </div>
    </div>
  );
}
