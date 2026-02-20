import Hero from '@/components/sections/service/mobile/Hero';
import Team from '@/components/sections/service/mobile/Team';
import Scope from '@/components/sections/service/mobile/Scope';
import Case from '@/components/sections/service/mobile/Case';

export default function ServiceMobile() {
  return (
    <div className='bg-(--mltBlack)'>
      <Hero />
      <Team />
      <Scope />
      <Case />
    </div>
  );
}
