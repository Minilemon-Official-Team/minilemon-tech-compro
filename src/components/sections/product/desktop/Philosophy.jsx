import AnimatedText from "../../../ui/AnimatedText";
import Image from "next/image";

export default function Philosophy() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center text-white relative mb-24 py-24 overflow-hidden ">
      <div className="relative w-full max-w-350 mx-auto px-6">
        <div className="absolute -top-16 -left-4 lg:left-0 xl:left-0 2xl:left-4">
          <AnimatedText text={"OUR COMPANY"} rotate={"-rotate-4"} />
        </div>

        <div className="absolute -bottom-12 -left-4 lg:left-0 xl:left-0 2xl:left-2">
          <AnimatedText text={"ABOUT"} rotate={"rotate-8"} />
        </div>

        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
          <AnimatedText text={"PROFILE"} rotate={"-rotate-4"} />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-20 lg:-right-20 mask-[linear-gradient(to_left,black_10%,transparent_90%)]">
          <Image
            alt="Pattern"
            src="/assets/product_pattern.png"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <div
          className="relative z-20 max-w-6xl mx-auto border border-white bg-[#181818] 
                        text-base sm:text-lg md:text-2xl 2xl:text-4xl 
                        leading-relaxed 2xl:leading-14 
                        p-6 md:p-12 2xl:p-16 mt-12 mb-12"
        >
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-white -top-1 -left-1"></div>
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-white -top-1 -right-1"></div>
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-white -bottom-1 -left-1"></div>
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-white -bottom-1 -right-1"></div>

          <p className="mb-8 md:mb-12">
            <span className="text-[#FFDD10] font-bold">
              Core Team Philosophy
            </span>{" "}
            The Core Team operates as Minilemon Technology&apos;s product
            engine. They are responsible for research, design, development, and
            long-term maintenance of original products.
          </p>
          <p>
            We don&apos;t build based on hype cycles. Our roadmap is driven by
            first-principles thinking, addressing fundamental technology gaps
            with elegant, scalable solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
