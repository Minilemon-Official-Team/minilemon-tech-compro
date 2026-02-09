import Hero from '@/components/sections/home/desktop/Hero';
import About from '@/components/sections/home/desktop/About';
import Leadership from '@/components/sections/home/desktop/Leadership';
import Ecosystem from '@/components/sections/home/desktop/Ecosystem';
import Features from '@/components/sections/home/desktop/Features';
import Contact from '@/components/sections/home/desktop/Contact';

export default function HomeDesktop() {
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
