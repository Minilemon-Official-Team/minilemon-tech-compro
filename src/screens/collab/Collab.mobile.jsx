import AboutPlayground from "@/components/sections/collab/mobile/AboutPlayground";
import Collaborate from "@/components/sections/collab/mobile/Collaborate";
import Hero from "@/components/sections/collab/mobile/Hero";
import Playgrounds from "@/components/sections/collab/mobile/Playgrounds";

export default function CollabMobile() {
  return(
    <div className='bg-(--mltBlack)'>
      <Hero/>
      <AboutPlayground/>
      <Playgrounds/>
      <Collaborate/>
    </div>
  );
}
