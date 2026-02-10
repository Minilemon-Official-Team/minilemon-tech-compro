import { motion } from "motion/react";

function WireframeCube({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 115"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full block"
      >
        <path d="M50 2 L98 27 L50 52 L2 27 Z" />
        <path d="M98 27 V77 L50 102 V52 Z" />
        <path d="M2 27 V77 L50 102 V52 Z" />
      </svg>
    </div>
  );
}

export default function AnimatedCubeStack() {
  const DURATION = 6;
  const REPEAT_DELAY = 2;

  const SEPARATION = 160; 
  const STACK_OFFSET = 55;

  const STEP_1 = SEPARATION - 35;
  const STEP_2 = SEPARATION - 70;
  const FINAL  = STACK_OFFSET;

  // Waktu
  const KEYFRAME_TIMES = [0, 0.2, 0.3, 0.5, 0.6, 0.8, 1];

  return (
    <div className="relative flex flex-col items-center justify-center h-[400px] w-32">
      
      {/* CUBE ATAS */}
      <motion.div
        className="absolute z-30"
        animate={{ 
          y: [-SEPARATION, -SEPARATION, -STEP_1, -STEP_1, -STEP_2, -STEP_2, -FINAL] 
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          times: KEYFRAME_TIMES
        }}
      >
        <WireframeCube className="w-32 h-32 text-gray-200" />
      </motion.div>

      {/* CUBE TENGAH */}
      <motion.div
        className="absolute z-20"
        animate={{ 
          // Rotation
          rotate: [0, 180, 180, 360, 360, 360, 360], 
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          times: KEYFRAME_TIMES
        }}
      >
        <WireframeCube className="w-32 h-32 text-gray-200" />
      </motion.div>

      {/* CUBE BAWAH */}
      <motion.div
        className="absolute z-10"
        animate={{ 
          y: [SEPARATION, SEPARATION, STEP_1, STEP_1, STEP_2, STEP_2, FINAL] 
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          times: KEYFRAME_TIMES
        }}
      >
        <WireframeCube className="w-32 h-32 text-gray-200" />
      </motion.div>

    </div>
  );
}