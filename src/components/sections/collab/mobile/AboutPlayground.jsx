import Image from "next/image";
import AnimatedCubeStack from "../../../ui/AnimatedCubeStack";

export default function AboutPlayground() {
  return (
    <div className="w-full max-w-330 mx-auto min-h-screen flex flex-col items-center gap-12 md:gap-16 px-4 md:px-8 py-12">
      <div className="w-full bg-[#181818] border-2 border-white text-white p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px] shrink-0">
          <Image
            alt=""
            src="/assets/collab_playground.png"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold leading-tight mb-4 md:mb-8 lg:text-left">
            The Playground
          </h2>
          <p className="text-base md:text-lg 2xl:text-xl leading-relaxed mb-4 lg:text-left text-[#B1B1B1]">
            The Playground Team is dedicated to experimentation, open-source
            initiatives, learning programs, and technology-driven social impact.
            It is our sandbox for the future.
          </p>
          <p className="text-xs md:text-sm leading-relaxed italic lg:text-left text-[#EABDF2]">
            &quot;Innovation thrives in environments where failure is an
            accepted part of the learning process. Playground is that
            environment for Minilemon.&quot;
          </p>
        </div>
      </div>
      <AnimatedCubeStack />
    </div>
  );
}