import Hero from '@/components/sections/home/mobile/Hero';
import About from '@/components/sections/home/mobile/About';
import Leadership from '@/components/sections/home/mobile/Leadership';
import Ecosystem from '@/components/sections/home/mobile/Ecosystem';
import Features from '@/components/sections/home/mobile/Features';
import Contact from '@/components/sections/home/mobile/Contact';

export default function HomeMobile() {
  return (
    <div className='bg-(--mltBlack)'>
      <Hero />
      <About />
      <Leadership />
      <Ecosystem />
      <Features />
      <Contact />
    </div>
  );
}
