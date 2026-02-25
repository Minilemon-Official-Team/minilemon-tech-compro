import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative max-w-108 mx-auto'>
      <div className='p-6 relative bg-(--mltBlack) z-50 flex justify-between items-center'>
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

      <motion.nav
        style={{ y: '-100%', opacity: 0 }}
        animate={{
          y: isOpen ? 0 : '-100%',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.35 }}
        className='absolute bg-white top-21 w-full left-0 right-0 p-6 z-40'
      >
        <ul className='text-center space-y-8 my-2'>
          <li className='text-(--mltBlack) hover:text-[#0044FF]'>
            <Link href='/product' onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li className='text-(--mltBlack) hover:text-[#0044FF]'>
            <Link href='/service' onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className='text-(--mltBlack) hover:text-[#0044FF]'>
            <Link href='/collab' onClick={() => setIsOpen(false)}>
              Collaboration
            </Link>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}
