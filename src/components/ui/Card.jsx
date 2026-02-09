import Image from 'next/image';

export function HomePhotoCard({ data }) {
  return (
    <div className='flex justify-center items-center gap-6 '>
      {data.map((data) => (
        <div className='relative w-full h-110 2xl:h-120' key={data.id}>
          <Image
            src={data.src}
            alt={data.alt}
            fill
            className='object-cover rounded-2xl'
          />
        </div>
      ))}
    </div>
  );
}

export function HomeEcosystemCard({ data }) {
  return (
    <div className='rounded-2xl p-6 bg-[#181818]'>
      <div className='flex justify-center items-center gap-10'>
        <Image
          alt='Card Img'
          src={data.src}
          width={350}
          height={350}
          className='rounded-xl object-cover h-125'
        />
        <div className='flex flex-col justify-center'>
          <h2 className='text-white font-bold text-5xl mb-8'>{data.title}</h2>
          <p className='text-[#B1B1B1] mb-4 text-lg text-justify'>
            {data.desc}
          </p>
          <div className='flex flex-row gap-4 mb-4'>
            {data.tag.map((tag) => (
              <div
                className='p-2 text-white bg-[#0F2C7B]/50 rounded'
                key={tag.id}
              >
                {tag}
              </div>
            ))}
          </div>
          <p className='text-(--mltPink) text-lg'>{data.feature}</p>
        </div>
      </div>
    </div>
  );
}

export function HomeFeatureCard({ data }) {
  return (
    <div className='grid grid-cols-2 gap-8'>
      {data.map((data) => (
        <div className='border p-8 text-center'>
          <h1 className='text-2xl bg-(--mltBlack) text-white py-4 w-2/3 mx-auto font-semibold'>
            {data.title}
          </h1>
          <p className='text-lg mt-4'>{data.desc}</p>
        </div>
      ))}
    </div>
  );
}
