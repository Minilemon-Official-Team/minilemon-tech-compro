import { AnimatedTriangleMobile } from '@/components/ui/AnimatedTriangle';
import Image from 'next/image';

export default function Team() {
  return (
    <div className='text-white max-w-108 mx-auto px-6'>
      <AnimatedTriangleMobile />
      <div className='bg-[#181818] border-2 border-white text-white p-5 my-4'>
        <Image
          src='/assets/collab_playground.png'
          alt='Card Img'
          width={346}
          height={261}
          className='object-contain'
        />
        <div className='mt-4'>
          <h2 className='text-xl font-bold leading-tight mb-4'>
            The Meta Team
          </h2>
          <p className='text-sm leading-relaxed'>
            The Meta Team handles client-based projects, providing software
            development and digital solutions while maintaining the same quality
            standards used in our internal products.
          </p>
          <ul className='mt-4 list-disc list-inside text-xs leading-relaxed space-y-2'>
            <li>Direct access to senior architects</li>
            <li>Agile transformation leadership</li>
            <li>Security-first development cycle</li>
            <li>Post-launch optimization and support</li>
          </ul>
        </div>
      </div>
      <AnimatedTriangleMobile />
    </div>
  );
}
