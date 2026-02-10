import Hero from '@/components/sections/collab/desktop/Hero';
import AboutPlayground from '@/components/sections/collab/desktop/AboutPlayground';
import Playgrounds from '@/components/sections/collab/desktop/Playgrounds';
import Collaborate from '@/components/sections/collab/desktop/Collaborate';

export default function CollabDesktop() {
  return (
    <div className='bg-(--mltBlack)'>
      <Hero />
      <AboutPlayground />
      <Playgrounds />
      <Collaborate />
    </div>
  );
}
