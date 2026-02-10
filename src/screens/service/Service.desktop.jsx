import Hero from '@/components/sections/service/desktop/Hero';
import Scope from '@/components/sections/service/desktop/Scope';
import Team from '@/components/sections/service/desktop/Team';
import Case from '@/components/sections/service/desktop/Case';

export default function ServiceDesktop() {
  return (
    <div className='bg-(--mltBlack)'>
      <Hero />
      <Team />
      <Scope />
      <Case />
    </div>
  );
}
