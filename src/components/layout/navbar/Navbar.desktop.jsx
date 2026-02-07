import Image from 'next/image';
import Link from 'next/link';

export default function NavbarDesktop() {
  return (
    <div className='bg-(--mltBlack) px-24 py-4'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/assets/MinilemonTechLogo.png'
            alt='Tech Logo'
            width={100}
            height={89}
          />
        </Link>

        <nav className='bg-white px-18 py-4 rounded-2xl'>
          <ul className='flex gap-24 items-center'>
            <li>
              <Link
                href='/product'
                className='text-(--mltBlack) hover:border-b-2 pb-1 transition'
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href='/service'
                className='text-(--mltBlack) hover:border-b-2 pb-1 transition'
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href='/collab'
                className='text-(--mltBlack) hover:border-b-2 pb-1 transition'
              >
                Collaboration
              </Link>
            </li>
          </ul>
        </nav>
        <button className='text-white border border-white p-4 rounded-2xl hover:cursor-pointer'>
          Get Started
        </button>
      </div>
    </div>
  );
}
