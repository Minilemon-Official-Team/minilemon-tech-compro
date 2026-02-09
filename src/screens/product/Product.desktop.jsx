import Image from "next/image";
import AnimatedText from "@/components/sections/product/AnimatedText";
import CardProduct from "@/components/sections/product/CardProduct";
import WireframeCube from "@/components/sections/product/WireframeCube";

export default function ProductDesktop() {
  const datasCard = [
    {
      id: "citrus-os",
      title: "CitrusOS",
      description:
        "A distributed runtime for high-concurrency cloud environments, prioritizing low-latency and auto-healing capabilities.",
      features: ["Infastructure", "Production"],
    },
    {
      id: "lumina-grid",
      title: "Lumina Grid",
      description:
        "Real-time data visualization engine for IoT sensor networks, providing deep insights into complex physical systems.",
      features: ["Data & AI", "Beta"],
    },
    {
      id: "vertex-protocol",
      title: "Vertex Protocol",
      description:
        "An encrypted communication layer designed for secure multi-party computation and private collaboration.",
      features: ["Security", "Alpha"],
    },
  ];

  return (
    <div className="w-full mx-auto flex flex-col gap-12 items-center justify-center px-24 overflow-hidden">
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
              <div className="absolute w-6 h-6 bg-green-500 rounded-full animate-[ping_3s_linear_infinite] opacity-30"></div>

              <div className="absolute w-full h-full bg-green-400 rounded-full blur-[4px] opacity-60 animate-pulse"></div>

              <div className="relative w-full h-full bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
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
      <div className="w-full min-h-screen flex flex-col justify-center text-white relative py-24 overflow-hidden">
        <div className="relative w-full max-w-350 mx-auto px-6">

          <div className="absolute -top-16 -left-4 lg:left-0 xl:left-0 2xl:left-4">
            <AnimatedText text={"OUR COMPANY"} rotate={"-rotate-4"} />
          </div>

          <div className="absolute -bottom-10 -left-4 lg:left-0 xl:left-0 2xl:left-10">
            <AnimatedText text={"ABOUT"} rotate={"rotate-8"} />
          </div>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
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
              engine. They are responsible for research, design, development,
              and long-term maintenance of original products.
            </p>
            <p>
              We don&apos;t build based on hype cycles. Our roadmap is driven by
              first-principles thinking, addressing fundamental technology gaps
              with elegant, scalable solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen flex flex-col gap-8 items-center mb-12">
        <div className="absolute rotate-8 top-90 -right-2 w-[240px] h-[263px] pointer-events-none overflow-visible">
          {/* KUBUS ATAS */}
          <div className="absolute z-30" style={{ left: "60px", top: "10px" }}>
            <WireframeCube className="w-[120px] h-[150px] text-purple-300/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
          </div>

          {/* KUBUS KIRI BAWAH */}
          <div className="absolute z-20" style={{ left: "0px", top: "113px" }}>
            <WireframeCube className="w-[120px] h-[150px] text-purple-300/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
          </div>

          {/* KUBUS KANAN BAWAH */}
          <div
            className="absolute z-20"
            style={{ left: "120px", top: "113px" }}
          >
            <WireframeCube className="w-[120px] h-[150px] text-purple-300/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
          </div>
        </div>

        <div className="absolute -rotate-12 top-[56%] -left-[2%] w-[240px] h-[263px] pointer-events-none overflow-visible">
          {/* KUBUS ATAS */}
          <div className="absolute z-30" style={{ left: "60px", top: "10px" }}>
            <WireframeCube className="w-[120px] h-[150px] text-purple-300/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
          </div>

          {/* KUBUS KIRI BAWAH */}
          <div className="absolute z-20" style={{ left: "0px", top: "113px" }}>
            <WireframeCube className="w-[120px] h-[150px] text-purple-300/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
          </div>

          {/* KUBUS KANAN BAWAH */}
          <div
            className="absolute z-20"
            style={{ left: "120px", top: "113px" }}
          >
            <WireframeCube className="w-[120px] h-[150px] text-purple-300/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
          </div>
        </div>

        {datasCard.map((data) => (
          <CardProduct
            key={data.id}
            title={data.title}
            description={data.description}
            features={data.features}
          />
        ))}
      </div>
    </div>
  );
}
