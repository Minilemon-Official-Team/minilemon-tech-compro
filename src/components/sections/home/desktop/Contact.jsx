import { MessageSquareText, Phone, phone } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className='relative h-[90vh]'>
      <div className='absolute h-full w-6/8 top-0 -left-30 scale-100'>
        <Image
          src='/assets/Ellipse.png'
          alt='bg Glow'
          fill
          className='object-center'
        />
      </div>

      <div className='absolute top-100 left-0 right-0 max-w-330 2xl:max-w-400 mx-auto grid grid-cols-2 gap-12 text-white'>
        <div>
          <h1 className='text-6xl 2xl:text-7xl font-semibold'>
            Get In <span className='text-(--mltYellow)'>Touch</span>{' '}
          </h1>
          <p className='text-lg text-justify mt-8 leading-relaxed'>
            We are open to conversations around products, services, and
            collaborative initiatives. Whether you are a partner, collaborator,
            or institution, we welcome meaningful discussions.
          </p>
        </div>
        <div className='flex flex-col gap-6'>
          <button className='flex justify-center items-center gap-4 border border-white py-6 rounded-lg text-4xl'>
            Email
            <MessageSquareText className='w-12 h-10' />
          </button>
          <button className='flex justify-center items-center gap-4 border border-white py-6 rounded-lg text-4xl'>
            WhatsApp
            <Phone className='w-12 h-10' />
          </button>
        </div>
      </div>
    </div>
  );
}
