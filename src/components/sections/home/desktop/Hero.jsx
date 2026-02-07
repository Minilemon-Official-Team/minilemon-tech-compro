export default function Hero() {
  return (
    <div className='text-white tracking-widest'>
      <p className='text-3xl font-extralight mb-8'>Minilemon Technology</p>
      <h1 className='text-7xl font-semibold leading-normal'>
        We Craft <span className='text-(--mltYellow)'>Design</span>
        <br />
        With Purpose, Vision, And Impact
      </h1>
      <div className='flex gap-6 justify-start items-center text-white mt-6'>
        <button className='bg-(--mltBlue) border border-(--mltBlue) p-4 rounded-2xl hover:cursor-pointer'>
          Explore Our Vision
        </button>
        <button className='p-4 rounded-2xl border border-white hover:cursor-pointer'>
          View Product
        </button>
      </div>
    </div>
  );
}
