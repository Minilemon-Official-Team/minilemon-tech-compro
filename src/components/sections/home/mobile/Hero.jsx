export default function Hero() {
  return (
    <div className='max-w-108 mx-auto px-6'>
      <div className='text-white text-center my-12 space-y-8'>
        <p className='text-xl'>Minilemon Technology</p>
        <h1 className='text-2xl font-semibold'>
          We Craft <span className='text-(--mltYellow)'> Design</span> <br />
          With Puspose, Vision, <br /> And Impact
        </h1>
        <div className='flex justify-center items-center text-base gap-4'>
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
