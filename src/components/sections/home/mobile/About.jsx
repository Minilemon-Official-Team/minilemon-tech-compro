import Image from 'next/image';

export default function About() {
  return (
    <div className='relative max-w-108 mx-auto mt-18'>
      <div className='relative h-218 w-full'>
        <Image
          src='/assets/SubtractAboutMobile.png'
          alt='bg About'
          fill
          className='object-fill'
        />
      </div>
      <div className='absolute px-6 text-center top-0'>
        <h1 className='text-white text-2xl font-semibold mt-2 mb-12'>
          Who We Are
        </h1>
        <p className='text-justify text-sm mb-6'>
          Minilemon Technology is a technology-driven organization that combines
          product development, professional services, and experimental
          collaboration into one cohesive ecosystem. <br />
          We believe technology should be designed as a long-term system, not as
          a short-lived project. Our methodology blends deep architectural
          thinking with agile execution to deliver results that stand the test
          of time.
        </p>
        <p className='text-justify text-sm'>
          Our team is composed of multidisciplinary experts who are passionate
          about pushing the boundaries of what's possible in the digital realm.
        </p>
        <div className='flex justify-center items-center gap-8 my-7'>
          <div>
            <h1 className='text-4xl'>10+</h1>
            <p className='text-sm mt-2'>Main Products</p>
          </div>
          <div>
            <h1 className='text-4xl'>45+</h1>
            <p className='text-sm mt-2'>Meta Partners</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <Image
            src='/assets/imgAbout.png'
            alt='About image'
            width={352}
            height={328}
            className='rounded-4xl'
          />
        </div>
      </div>
    </div>
  );
}
