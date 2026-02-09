import Image from 'next/image';

export default function About() {
  return (
    <div className='relative'>
      <div className='h-240 w-full'>
        <Image
          src='/assets/SubtractAbout.png'
          alt='bg About'
          fill
          className='object-fill'
        />
      </div>

      <div className='max-w-330 2xl:max-w-400 mx-auto absolute top-12 grid grid-cols-2 gap-12 w-full left-0 right-0'>
        <div>
          <h1 className='text-white ml-8 text-6xl 2xl:text-7xl font-semibold'>
            Who We Are
          </h1>
          <div className='mt-24 text-justify leading-relaxed space-y-6 text-xl pr-32'>
            <p>
              Minilemon Technology is a technology-driven organization that
              combines product development, professional services, and
              experimental collaboration into one cohesive ecosystem.
            </p>
            <p>
              We believe technology should be designed as a long-term system,
              not as a short-lived project. Our methodology blends deep
              architectural thinking with agile execution to deliver results
              that stand the test of time.
            </p>
            <p>
              Our team is composed of multidisciplinary experts who are
              passionate about pushing the boundaries of what's possible in the
              digital realm.
            </p>
          </div>
          <div className='flex justify-center gap-12 mt-12 pr-32'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-6xl text-center'>10+</h1>
              <p className='tracking-widest text-xl'>Main Products</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-6xl text-center'>45+</h1>
              <p className='tracking-widest text-xl'>Meta Partners</p>
            </div>
          </div>
        </div>
        <div className='relative mt-12 h-190'>
          <Image
            src='/assets/imgAbout.png'
            alt='About image'
            fill
            className='object-contain rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}
