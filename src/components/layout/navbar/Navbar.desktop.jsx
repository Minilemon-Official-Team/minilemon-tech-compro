'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarDesktop() {
  const isLaptop = useMediaQuery('(max-width: 1536px)');

  return (
    <div className='bg-(--mltBlack) max-w-310 2xl:max-w-440 mx-auto py-6'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          {isLaptop ? (
            <Image
              src='/assets/MinilemonTechLogo.png'
              alt='Tech Logo'
              width={100}
              height={89}
            />
          ) : (
            <Image
              src='/assets/MinilemonTechLogo.png'
              alt='Tech Logo'
              width={120}
              height={109}
            />
          )}
        </Link>

        <nav className='bg-white rounded-4xl w-172 2xl:w-184 h-18 2xl:h-21.5'>
          <ul className='flex gap-24 justify-center items-center text-xl 2xl:text-2xl h-full'>
            <li>
              <Link
                href='/product'
                className='text-(--mltBlack) hover:text-(--mltBlue) hover:border-b-3 hover:border-(--mltBlue) pb-1 transition'
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href='/service'
                className='text-(--mltBlack) hover:text-(--mltBlue) hover:border-b-3 hover:border-(--mltBlue) pb-1 transition'
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href='/collab'
                className='text-(--mltBlack) hover:text-(--mltBlue) hover:border-b-3 hover:border-(--mltBlue) transition'
              >
                Collaboration
              </Link>
            </li>
          </ul>
        </nav>
        <button className='text-white text-xl 2xl:text-2xl border border-white px-7 py-5.5 2xl:py-6.5 rounded-4xl hover:cursor-pointer'>
          Get Started
        </button>
      </div>
    </div>
  );
}
