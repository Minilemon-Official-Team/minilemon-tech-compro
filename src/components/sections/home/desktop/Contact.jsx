import { MessageSquareText, Phone, phone } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className='relative h-[90vh] 2xl:mb-32'>
      <div className='absolute h-full w-6/8 top-0 -left-30 scale-100'>
        <Image
          src='/assets/Ellipse.png'
          alt='bg Glow'
          fill
          className='object-center'
        />
      </div>

      <div className='absolute inset-0 top-70 xl:top-80 2xl:top-90'>
        <div className='w-full px-20'>
          <div className='max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto grid grid-cols-2 gap-18 text-white'>
            <div className='mt-4 2xl:mt-8'>
              <h1 className='text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-semibold'>
                Get In <span className='text-(--mltYellow)'>Touch</span>{' '}
              </h1>
              <p className='text-lg 2xl:text-xl 3xl:text-2xl text-justify mt-8 2xl:mt-12 leading-relaxed'>
                We are open to conversations around products, services, and
                collaborative initiatives. Whether you are a partner,
                collaborator, or institution, we welcome meaningful discussions.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <button className='flex justify-center items-center gap-4 border border-white py-8 2xl:py-13 rounded-lg text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl'>
                Email
                <MessageSquareText className='w-18 h-12' />
              </button>
              <button className='flex justify-center items-center gap-4 border border-white py-8 2xl:py-13 rounded-lg text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl'>
                WhatsApp
                <Phone className='w-18 h-12' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
