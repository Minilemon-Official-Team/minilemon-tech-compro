import Image from 'next/image';
import { useState } from 'react';

export function HomePhotoCard({ data }) {
  return (
    <div className='flex justify-center items-center gap-4 '>
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
    <div className='rounded-[40px] p-5 bg-[#181818] xl:w-5xl 2xl:w-6xl 3xl:w-7xl xl:h-145 2xl:h-150 3xl:h-165'>
      <div className='flex justify-center items-center gap-8 2xl:gap-10'>
        <Image
          alt='Card Img'
          src={data.src}
          width={569}
          height={620}
          className='rounded-[20px] w-80 lg:w-96 xl:w-123 2xl:w-[512px] 3xl:w-[569px] h-auto'
        />
        <div className='flex flex-col justify-center'>
          <h2 className='text-white font-semibold text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl mb-6 2xl:mb-10'>
            {data.title}
          </h2>
          <p className='text-[#B1B1B1] mb-10 text-lg 2xl:text-xl 3xl:text-2xl text-justify'>
            {data.desc}
          </p>
          <div className='flex flex-row gap-4 mb-6 2xl:mb-10'>
            {data.tag.map((tag) => (
              <div
                className='p-2 2xl:p-3 text-white text-lg 2xl:text-xl 3xl:text-2xl bg-[#0F2C7B]/50 rounded-xl'
                key={tag.id}
              >
                {tag}
              </div>
            ))}
          </div>
          <p className='text-(--mltPink) text-lg 2xl:text-xl 3xl:text-2xl'>
            {data.feature}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FeatureCard({ data }) {
  return (
    <div className='grid grid-cols-2 gap-8 2xl:gap-12'>
      {data.map((data) => (
        <div className='border p-8 text-center'>
          <h1 className='text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl bg-(--mltBlack) text-white py-4 mx-auto font-semibold'>
            {data.title}
          </h1>
          <p className='text-md xl:text-lg 2xl:text-xl 3xl:text-2xl mt-4'>
            {data.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function ProductCard({ title, description, features }) {
  return (
    <div className='rounded-2xl p-4 max-w-4xl bg-[#181818] hover:bg-[#2B2B2B] grid grid-cols-2 gap-8 transition-all duration-700 ease-out border-3 hover:border-white'>
      <Image
        alt={title}
        src='/assets/product_card_template.png'
        width={400}
        height={400}
        className='rounded-xl object-cover w-full h-[500px]'
      />
      <div className='flex flex-col justify-center'>
        <h2 className='text-white font-bold text-4xl mb-8'>{title}</h2>
        <p className='text-[#B1B1B1] mb-4'>{description}</p>
        <div className='flex flex-row gap-4 mb-4'>
          {features.map((feature, index) => (
            <ProductCardPill key={index} title={feature} />
          ))}
        </div>
        <p className='text-[#EABDF2]'>Technical Deep Dive</p>
      </div>
    </div>
  );
}

function ProductCardPill({ title }) {
  return (
    <div className='p-2 text-white bg-[#0F2C7B]/50 rounded transition-color duration-700 ease-out hover:bg-[#0F2C7B]'>
      {title}
    </div>
  );
}

export function PlaygroundCard({ title, description }) {
  return (
    <div className='group max-w-80 min-h-92 p-2 border-2 transition-all duration-500 hover:border-white'>
      <div className='bg-white p-8 flex flex-col justify-center gap-4 w-full h-full group-hover:bg-[#F5FEDD]'>
        <h3 className='font-bold leading-tight text-3xl'>{title}</h3>
        <p className='italic leading-relaxed text-xl'>{description}</p>
        <a href='' className='font-bold'>
          Learn More
        </a>
      </div>
    </div>
  );
}

export function FounderCard({ props }) {
  const isEven = props.id % 2 === 0;

  return (
    <div
      className={`group relative flex items-center py-4 px-8 w-full max-w-4xl transition-all duration-500 ease-out border-2 hover:border-white
  ${isEven ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
      style={{ backgroundColor: props.color }}
    >
      <div
        className={`absolute -top-4 bottom-0 text-[136px] flex justify-center items-center text-black/8 tracking-tighter uppercase leading-none select-none pointer-events-none
      ${isEven ? '-right-48' : 'left-8'}`}
      >
        Founder
      </div>

      <div
        className={`w-1 h-24 bg-black shrink-0 ${isEven ? 'ml-4' : 'mr-4'}`}
      ></div>

      <div className='flex flex-col justify-center z-10 relative'>
        <p className='font-bold text-2xl'>{props.name}</p>
        <p>{props.subTitle}</p>
      </div>

      <div
        className={`absolute -bottom-3.5 w-48 h-48 sm:w-56 sm:h-56 z-20 transition-transform duration-500 ease-out origin-bottom group-hover:scale-110
      ${isEven ? '-left-6 group-hover:translate-x-4' : '-right-6 group-hover:-translate-x-4'}`}
      >
        <Image
          alt='Foto Founder'
          src='/assets/founder_template.png'
          width={300}
          height={300}
          className='object-contain w-full h-full'
        />
      </div>
    </div>
  );
}

function StepCard({ id, title, subtitle, isActive, onSelect }) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-8 cursor-pointer group transition-all duration-500 ease-out ${isActive ? 'scale-110 text-white' : 'text-white/20'}`}
      onClick={() => onSelect(id)}
    >
      <div
        className={`rounded-2xl w-32 h-32 p-16 border-4 text-6xl font-bold flex justify-center 
          items-center ${isActive ? 'border-white' : 'border-white/20'}`}
      >
        {id}
      </div>
      <div className='flex flex-col'>
        <h3 className='font-bold text-2xl leading-tight text-center'>
          {title}
        </h3>
        <p className='leading-relaxed text-center'>{subtitle}</p>
      </div>
    </div>
  );
}

export function StepsSection() {
  const [activeStep, setActiveStep] = useState(1);

  const stepDatas = [
    { id: 1, title: 'Reach Out', subtitle: 'Email Us Your Proposal' },
    { id: 2, title: 'Idea Share', subtitle: 'Initial Discovery Call' },
    { id: 3, title: 'Align Goals', subtitle: 'Strategy & Roadmap' },
    { id: 4, title: 'Co-Launch', subtitle: 'Start The Project' },
  ];

  return (
    <div className='flex flex-row gap-24 my-32 justify-center'>
      {stepDatas.map((data) => (
        <StepCard
          key={data.id}
          id={data.id}
          title={data.title}
          subtitle={data.subtitle}
          onSelect={setActiveStep}
          isActive={activeStep === data.id}
        />
      ))}
    </div>
  );
}
