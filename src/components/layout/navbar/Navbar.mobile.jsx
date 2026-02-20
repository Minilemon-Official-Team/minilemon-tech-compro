import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='max-w-108 mx-auto bg-(--mltBlack) p-6 relative'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/assets/MinilemonTechLogo.png'
            alt='Tech Logo'
            width={50}
            height={45}
          />
        </Link>
        {isOpen ? (
          <X className='text-white' onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <Menu className='text-white' onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>

      <nav
        className={`${isOpen ? 'block' : 'hidden'} absolute bg-white top-21 w-full left-0 right-0 py-6`}
      >
        <ul className='text-center space-y-6'>
          <li className='text-(--mltBlack) hover:text-[#0044FF]'>
            <Link href='/product' onClick={() => setIsOpen(!isOpen)}>
              Products
            </Link>
          </li>
          <li className='text-(--mltBlack) hover:text-[#0044FF]'>
            <Link href='/service' onClick={() => setIsOpen(!isOpen)}>
              Services
            </Link>
          </li>
          <li className='text-(--mltBlack) hover:text-[#0044FF]'>
            <Link href='/collab' onClick={() => setIsOpen(!isOpen)}>
              Collaboration
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
