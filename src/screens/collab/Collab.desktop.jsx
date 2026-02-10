import Hero from '@/components/sections/collab/desktop/Hero';
import AboutPlayground from '@/components/sections/collab/desktop/AboutPlayground';
import Playgrounds from '@/components/sections/collab/desktop/Playgrounds';
import Collaborate from '@/components/sections/collab/desktop/Collaborate';

export default function CollabDesktop() {
  
  return (
    <div className='bg-(--mltBlack) w-full px-48 mx-auto flex flex-col gap-12 items-center justify-center overflow-hidden'>
      <Hero/>
      <AboutPlayground/>
      <Playgrounds/>
      <Collaborate/>
    </div>
  );
}
