import Image from 'next/image';

export default function About() {
  return (
    <div className='relative mt-12'>
      <div className='h-200 2xl:h-270 w-full'>
        <Image
          src='/assets/SubtractAbout.png'
          alt='bg About'
          fill
          className='object-fill'
        />
      </div>

      <div className='max-w-310 2xl:max-w-440 mx-auto absolute top-12 grid grid-cols-[1fr_1.3fr] w-full left-0 right-0'>
        <div className=''>
          <h1 className='text-white text-6xl 2xl:text-8xl font-semibold'>
            Who We Are
          </h1>
          <div className='mt-18 2xl:mt-24 text-justify leading-relaxed space-y-6 text-lg 2xl:text-2xl pr-32'>
            <p>
              Minilemon Technology is a technology-driven organization that
              combines product development, professional services, and
              experimental collaboration into one cohesive ecosystem. We believe
              technology should be designed as a long-term system, not as a
              short-lived project. Our methodology blends deep architectural
              thinking with agile execution to deliver results that stand the
              test of time.
            </p>

            <p>
              Our team is composed of multidisciplinary experts who are
              passionate about pushing the boundaries of what's possible in the
              digital realm.
            </p>
          </div>
          <div className='flex justify-center gap-18 pr-32 mt-6 2xl:mt-12'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-4xl 2xl:text-6xl text-center'>10+</h1>
              <p className='tracking-widest text-lg 2xl:text-2xl'>
                Main Products
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='text-4xl 2xl:text-6xl text-center'>45+</h1>
              <p className='tracking-widest text-lg 2xl:text-2xl'>
                Meta Partners
              </p>
            </div>
          </div>
        </div>

        <Image
          src='/assets/imgAbout.png'
          alt='About image'
          width={974}
          height={954}
          className='rounded-xl mt-6 2xl:mt-2'
        />
      </div>
    </div>
  );
}
