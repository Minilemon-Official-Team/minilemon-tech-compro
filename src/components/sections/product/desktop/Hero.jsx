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
      <div className='relative max-w-280 2xl:max-w-400 mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-visible'>
        
        <header className='px-12 xl:px-0'>
          <p
            aria-hidden='true'
            className='absolute -top-20 xl:-top-24 left-12 xl:left-0 text-7xl xl:text-8xl tracking-tight text-white/10 select-none'
          >
            PRODUCTS
          </p>
          <h2 className='relative text-7xl xl:text-8xl font-bold tracking-tight text-white mb-8'>
            PRODUCTS
          </h2>
          <p className='text-white text-lg xl:text-xl mb-4'>
            Designed As Systems. Built For The Long Term.
          </p>
          <div className='flex flex-row items-center gap-4'>
            <div className='relative flex items-center justify-center w-5 h-5'>
              <div className='absolute w-6 h-6 bg-green-500 rounded-full animate-[ping_3s_linear_infinite] opacity-30'></div>
              <div className='absolute w-full h-full bg-green-400 rounded-full blur-[4px] opacity-60 animate-pulse'></div>
              <div className='relative w-full h-full bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]'></div>
            </div>
            <p className='text-sm uppercase text-white'>Available For Projects</p>
          </div>
        </header>

        <div className='relative z-50 flex justify-center h-[600px]'>
          <div className='absolute top-1/5 -left-12 xl:left-1/2 xl:-translate-x-1/2 w-[100%] 2xl:w-[100%] h-[380px] border-2 border-white rounded-[100%] overflow-hidden'>
            <motion.div
              className='absolute top-0 left-0 w-240 h-[6px] z-30 bg-gradient-to-r from-transparent via-white to-transparent'
              style={{
                offsetPath: 'ellipse(50% 50% at 50% 50%)',
                offsetRotate: 'auto 0deg',
                filter:
                  'blur(16px) drop-shadow(0 0 40px white) drop-shadow(0 0 120px rgba(255,255,255,0.5))',
                mixBlendMode: 'screen',
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden',
                willChange: 'offset-distance, transform',
              }}
              animate={{
                offsetDistance: ['100%', '0%'],
              }}
              transition={{
                duration: 12,
                ease: 'linear',
                repeat: Infinity,
              }}
            />
          </div>
          <AnimatedStackedCards/>
        </div>

      </div>
    </div>
  );
}