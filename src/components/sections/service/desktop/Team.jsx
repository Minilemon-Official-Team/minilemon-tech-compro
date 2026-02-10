import Image from 'next/image';
import AnimatedTriangle from '@/components/ui/AnimatedTriangle';

export default function Team() {
  return (
    <div className='max-w-330 2xl:max-w-400 mx-auto flex justify-between items-center gap-4 py-24'>
      <AnimatedTriangle />
      <div className='bg-[#181818] border-2 border-white text-white px-4 grid grid-cols-[1fr_2fr] gap-12 -mt-6'>
        <div className='w-110 h-140 '>
          <Image
            src='/assets/collab_playground.png'
            alt='Card Img'
            width={400}
            height={400}
            className='w-full h-full object-contain'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-5xl font-bold leading-tight mb-8'>
            The Meta Team
          </h2>
          <p className='text-xl leading-relaxed'>
            The Meta Team handles client-based projects, providing software
            development and digital solutions while maintaining the same quality
            standards used in our internal products.
          </p>
          <ul className='mt-8 list-disc list-inside text-lg leading-relaxed'>
            <li>Direct access to senior architects</li>
            <li>Agile transformation leadership</li>
            <li>Security-first development cycle</li>
            <li>Post-launch optimization and support</li>
          </ul>
        </div>
      </div>
      <AnimatedTriangle />
    </div>
  );
}
