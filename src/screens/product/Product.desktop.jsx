import Image from "next/image";
import AnimatedText from "@/components/section/product/AnimatedText";

export default function ProductDesktop() {
  const texts = "OURCOMPANY";

  return (
    <div className="w-full max-w-6xl mx-auto  flex flex-col gap-12 items-center justify-center py-20">
      <div className="w-full min-h-screen px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <header className="relative z-20">
          <p
            aria-hidden="true"
            className="absolute -top-28 left-0 text-8xl tracking-tight text-white/10 select-none"
          >
            PRODUCTS
          </p>
          <h2 className="relative text-8xl font-bold tracking-tight text-white mb-8">
            PRODUCTS
          </h2>
          <p className="text-white text-xl mb-4">
            Designed As Systems. Built For The Long Term.
          </p>
          <div className="flex flex-row items-center gap-4">
            <div className="relative flex items-center justify-center w-5 h-5">
              <div className="absolute w-full h-full bg-green-500 rounded-full"></div>
              <div className="relative w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-sm uppercase text-white">
              Available For Projects
            </p>
          </div>
        </header>
        <div className="relative flex justify-center h-[600px]">
          <div className="absolute top-1/5 left-1/2 -translate-x-1/2 w-[112%] h-[380px] border-[4px] border-white rounded-[100%]" />
          <div className="relative w-[420px] h-[360px] translate-y-16">
            {/* LAYER 1 */}
            <div className="absolute inset-0 bg-slate-800 rounded-[40px] transform -rotate-12 scale-90 -translate-x-12 -translate-y-4 shadow-2xl z-0 opacity-60 border border-white/10" />

            {/* LAYER 2 */}
            <div className="absolute inset-0 bg-slate-700 rounded-[40px] transform rotate-10 scale-95 shadow-2xl z-10 translate-x-8 -translate-y-4 opacity-80 border border-white/10" />

            {/* LAYER 3 */}
            <div className="absolute inset-0 z-20 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
              <Image
                src="/assets/product_frame.png"
                alt="Product Preview"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white relative py-24">
        <div className="absolute top-4 left-12">
          <AnimatedText text={"OUR COMPANY"} rotate={"-rotate-4"} />
        </div>
        <div className="absolute bottom-8 left-10">
          <AnimatedText text={"ABOUT"} rotate={"rotate-8"} />
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <AnimatedText text={"PROFILE"} rotate={"-rotate-4"} />
        </div>
        <div className="absolute -top-10 right-0 mask-[linear-gradient(to_left,black_10%,transparent_90%)]">
          <Image
            alt="Pattern"
            src="/assets/product_pattern.png"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto border border-white bg-[#181818] text-2xl p-8">
          <div className="absolute w-3 h-3 bg-white -top-1 -left-1"></div>
          <div className="absolute w-3 h-3 bg-white -top-1 -right-1"></div>
          <div className="absolute w-3 h-3 bg-white -bottom-1 -left-1"></div>
          <div className="absolute w-3 h-3 bg-white -bottom-1 -right-1"></div>
          <p className="mb-4">
            <span className="text-[#FFDD10] font-bold">
              Core Team Philosophy
            </span>{" "}
            The Core Team operates as Minilemon Technology’s product engine.
            They are responsible for research, design, development, and
            long-term maintenance of original products.
          </p>
          <p>
            We don&apos;t build based on hype cycles. Our roadmap is driven by
            first-principles thinking, addressing fundamental technology gaps
            with elegant, scalable solutions.
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen border border-white text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        quae quos, voluptate assumenda totam itaque aliquid architecto illum
        earum magni dicta nihil velit dolor laboriosam omnis id dignissimos,
        iure optio?
      </div>
    </div>
  );
}
