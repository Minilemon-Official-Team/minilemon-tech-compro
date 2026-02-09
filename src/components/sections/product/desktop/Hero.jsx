import {motion} from "motion/react"
import Image from "next/image";

export default function Hero() {
  return (
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
          <p className="text-sm uppercase text-white">Available For Projects</p>
        </div>
      </header>
      <div className="relative flex justify-center h-[600px]">
        <div className="absolute top-1/5 left-1/2 -translate-x-1/2 w-[112%] h-[380px] border-2 border-white rounded-[100%] overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-240 h-[6px] z-30 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              offsetPath: "ellipse(50% 50% at 50% 50%)",
              offsetRotate: "auto 0deg",
              filter:
                "blur(16px) drop-shadow(0 0 40px white) drop-shadow(0 0 120px rgba(255,255,255,0.5))",
              mixBlendMode: "screen",
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden",
              willChange: "offset-distance, transform",
            }}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>
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
  );
}
