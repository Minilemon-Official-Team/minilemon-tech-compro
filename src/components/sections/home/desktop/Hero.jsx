export default function Hero() {
  return (
    <div className='text-white tracking-widest max-w-310 2xl:max-w-440 mx-auto py-32 2xl:py-48'>
      <div>
        <p className='text-3xl 2xl:text-4xl mb-12'>Minilemon Technology</p>
        <h1 className='text-6xl 2xl:text-8xl font-semibold leading-relaxed'>
          We Craft <span className='text-(--mltYellow)'>Design</span>
          <br />
          With Purpose, Vision, And Impact
        </h1>
        <div className='text-xl 2xl:text-2xl flex gap-6 justify-start items-center text-white mt-12'>
          <button className='bg-(--mltBlue) border border-(--mltBlue) px-2 py-5 rounded-[40px] hover:cursor-pointer'>
            Explore Our Vision
          </button>
          <button className='px-2 py-5 rounded-[40px] border border-white hover:cursor-pointer'>
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}
