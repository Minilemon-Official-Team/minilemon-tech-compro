import Image from 'next/image';

export default function Hero() {
  return (
    <div className='max-w-108 mx-auto px-6'>
      <div className='relative text-white text-center my-12'>
        <p className='text-xl mb-8'>Minilemon Technology</p>

        <div className='flex justify-center items-center'>
          <h1 className='text-2xl font-semibold tracking-wider'>We Craft</h1>
          <div className=''>
            <Image
              src='/assets/PentoolMobile2.png'
              alt='Pentool'
              width={152}
              height={3}
            />
          </div>
        </div>
        <h1 className='text-2xl font-semibold leading-10 tracking-wider'>
          With Puspose, Vision, <br /> And Impact
        </h1>

        <div className='flex justify-center items-center text-base gap-4 mt-8'>
          <button className='bg-(--mltBlue) border border-(--mltBlue) px-4 py-4 rounded-[40px] hover:cursor-pointer'>
            Explore Our Vision
          </button>
          <button className='px-4 py-4 rounded-[40px] border border-white hover:cursor-pointer'>
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}
