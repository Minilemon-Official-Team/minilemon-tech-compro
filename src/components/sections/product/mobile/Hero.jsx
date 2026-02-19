import AnimatedStackedCards from '@/components/ui/AnimatedStackedCards';
import { motion } from 'motion/react';
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <InteractiveGridPattern
        className={cn(
          "absolute inset-0 h-full w-full z-20 opacity-20", 
        )}
        width={120}
        height={120}
        squares={[80, 80]}
        borderColor="#FFDD10" 
      />
      <div className='relative max-w-280 2xl:max-w-400 mx-auto mt-8 min-[520px]:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-visible'>
        
        <header className='text-center'>
          <div className="relative inline-block">
            <p
              aria-hidden='true'
              className='absolute -top-7 min-[520px]:-top-12 left-1/2 -translate-x-1/2 text-2xl min-[520px]:text-4xl tracking-tight text-white/10 select-none whitespace-nowrap'
            >
              PRODUCTS
            </p>
            <h2 className='relative text-2xl min-[520px]:text-4xl font-bold tracking-tight text-white mb-4'>
              PRODUCTS
            </h2>
          </div>
          
          <p className='text-white text-sm min-[520px]:text-xl px-20 mb-2'>
            Designed As Systems. Built For The Long Term.
          </p>
          <div className='flex flex-row justify-center items-center gap-4'>
            <div className='relative flex items-center justify-center w-5 h-5'>
              <div className='absolute w-6 h-6 bg-green-500 rounded-full animate-[ping_3s_linear_infinite] opacity-30'></div>
              <div className='absolute w-full h-full bg-green-400 rounded-full blur-[4px] opacity-60 animate-pulse'></div>
              <div className='relative w-full h-full bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]'></div>
            </div>
            <p className='text-sm uppercase text-white'>Available For Projects</p>
          </div>
        </header>

        <div className='relative z-50 flex justify-center h-[400px]'>
          <div className='absolute top-32 sm:top-16 md:top-24 min-[520px]:top-1/5 min-[620px]:top-8 left-1/2 -translate-x-1/2 w-[80%] min-[520px]:w-[70%] h-[180px] min-[520px]:h-[200px] min-[620px]:h-[300px] border-2 border-white rounded-[100%] overflow-hidden'>
            <motion.div
              className='absolute top-0 left-0 w-240 h-[6px] z-30 bg-gradient-to-r from-transparent via-white to-transparent'
              style={{
                offsetPath: 'ellipse(50% 50% at 50% 50%)',
                offsetRotate: 'auto 0deg',
                filter: 'blur(16px) drop-shadow(0 0 40px white) drop-shadow(0 0 120px rgba(255,255,255,0.5))',
                mixBlendMode: 'screen',
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden',
                willChange: 'offset-distance, transform',
              }}
              animate={{ offsetDistance: ['100%', '0%'] }}
              transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
            />
          </div>
          <AnimatedStackedCards/>
        </div>

      </div>
    </div>
  );
}