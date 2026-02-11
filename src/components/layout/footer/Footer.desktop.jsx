'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import SocialLinks from '@/components/ui/SocialLinks';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterDesktop() {
  const isLaptop = useMediaQuery('(max-width: 1536px)');

  return (
    <footer className='bg-white w-full py-12 px-20'>
      <div className='max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto'>
        <div className='grid grid-cols-[2fr_1fr_1fr] gap-12'>
          <div className='flex flex-col gap-4'>
            <Link href='/'>
              <div className='flex flex-row gap-4'>
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
                <div>
                  <p className='text-3xl 2xl:text-4xl mt-2 2xl:mt-4'>
                    <b>Minilemon</b>
                    <br /> <span className='text-[#0044FF]'>Technology</span>
                  </p>
                </div>
              </div>
            </Link>
            <p className='text-xl 2xl:text-2xl my-6'>
              Designing systems, products, and collaborations for the future. We
              build digital ecosystems that prioritize long-term impact over
              short-term trends.
            </p>
            <SocialLinks />
          </div>
          <div className='flex flex-col mt-4'>
            <h3 className='font-semibold text-3xl 2xl:text-4xl mb-8 w-full'>
              Eksplore
            </h3>
            <ul className='space-y-8 w-full text-3xl 2xl:text-4xl'>
              <li>
                <a href=''>Products</a>
              </li>
              <li>
                <a href=''>Services</a>
              </li>
              <li>
                <a href=''>Collaborations</a>
              </li>
              <li>
                <a href=''>Company</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col mt-4'>
            <h3 className='font-semibold text-3xl 2xl:text-4xl mb-8 w-full'>
              Connect
            </h3>
            <ul className='space-y-8 w-full text-3xl 2xl:text-4xl'>
              <li>hello@minilemon.tech</li>
              <li>careers@minilemon.tech</li>
              <li>+1 (555) 123-4567</li>
              <li>Silicon Valley, CA</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center text-2xl mt-24'>
          <p>© 2025 Minilemon Technology. All rights reserved</p>
          <div className='flex justify-between items-center gap-4'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
