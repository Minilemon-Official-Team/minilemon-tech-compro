import { MessageSquareText, Phone, phone } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className='relative px-6 max-w-108 mx-auto text-white mt-12 mb-28'>
      <div className='relative h-64 w-7/8 top-0 -left-20'>
        <Image
          src='/assets/Ellipse.png'
          alt='bg Glow'
          fill
          className='object-center'
        />
      </div>
      <div className='absolute top-15 left-0 right-0 px-6'>
        <h1 className='text-2xl font-semibold'>
          Get In <span className='text-(--mltYellow)'>Touch</span>
        </h1>
        <p className='text-base mt-4 text-justify'>
          We are open to conversations around products, services, and
          collaborative initiatives. Whether you are a partner, collaborator, or
          institution, we welcome meaningful discussions.
        </p>
        <div className='flex justify-center items-center gap-5 mt-6'>
          <button className='flex justify-center items-center gap-4 border-2 border-white px-5 py-3.5 rounded-xl'>
            Email <MessageSquareText className='w-6 h-6' />
          </button>
          <button className='flex justify-center items-center gap-4 border-2 border-white px-5 py-3.5 rounded-xl'>
            Whatsapp <Phone className='w-6 h-6' />
          </button>
        </div>
      </div>
    </div>
  );
}
