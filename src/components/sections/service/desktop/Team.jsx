import Image from 'next/image';
import { AnimatedTriangle } from '@/components/ui/AnimatedTriangle';

export default function Team() {
  return (
    <div className='w-full px-20'>
      <div className='max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto flex justify-between items-center gap-6 py-24'>
        <AnimatedTriangle />
        <div className='bg-[#181818] border-2 border-white text-white p-10 grid grid-cols-2 xl:h-150 2xl:h-180 3xl:h-205'>
          <Image
            src='/assets/collab_playground.png'
            alt='Card Img'
            width={625}
            height={740}
            className='object-contain'
          />
          <div className='flex flex-col justify-center pl-12 2xl:pl-14 3xl:pl-24'>
            <h2 className='text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold leading-tight mb-8'>
              The Meta Team
            </h2>
            <p className='text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed'>
              The Meta Team handles client-based projects, providing software
              development and digital solutions while maintaining the same
              quality standards used in our internal products.
            </p>
            <ul className='mt-8 list-disc list-inside text-base xl:text-lg 2xl:text-xl leading-relaxed'>
              <li>Direct access to senior architects</li>
              <li>Agile transformation leadership</li>
              <li>Security-first development cycle</li>
              <li>Post-launch optimization and support</li>
            </ul>
          </div>
        </div>
        <AnimatedTriangle />
      </div>
    </div>
  );
}
