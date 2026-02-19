"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DURATION = 6;
  const REPEAT_DELAY = 2;

  const SEPARATION = 160; 
  const STACK_OFFSET_Y = 65; 
  const STACK_OFFSET_X = 85; 

  const STEP_1 = SEPARATION - 35;
  const STEP_2 = SEPARATION - 70;

  const KEYFRAME_TIMES = [0, 0.2, 0.3, 0.5, 0.6, 0.8, 1];
  const ZERO_ARRAY = [0, 0, 0, 0, 0, 0, 0];

  return (
    <div className="relative flex flex-col items-center justify-center h-[250px] md:h-[400px] w-full md:w-32">
      
      {/* CUBE ATAS / KIRI */}
      <motion.div
        key={isMobile ? "mobile-top" : "desktop-top"}
        className="absolute z-30"
        animate={
          isMobile
            ? { x: [-SEPARATION, -SEPARATION, -STEP_1, -STEP_1, -STEP_2, -STEP_2, -STACK_OFFSET_X], y: ZERO_ARRAY }
            : { y: [-SEPARATION, -SEPARATION, -STEP_1, -STEP_1, -STEP_2, -STEP_2, -STACK_OFFSET_Y], x: ZERO_ARRAY }
        }
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          times: KEYFRAME_TIMES
        }}
      >
        <WireframeCube className="w-24 h-24 md:w-32 md:h-32 text-gray-200" />
      </motion.div>

      {/* CUBE TENGAH */}
      <motion.div
        key={isMobile ? "mobile-mid" : "desktop-mid"}
        className="absolute z-20"
        animate={{ 
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
        <WireframeCube className="w-24 h-24 md:w-32 md:h-32 text-gray-200" />
      </motion.div>

      {/* CUBE BAWAH / KANAN */}
      <motion.div
        key={isMobile ? "mobile-bot" : "desktop-bot"}
        className="absolute z-10"
        animate={
          isMobile
            ? { x: [SEPARATION, SEPARATION, STEP_1, STEP_1, STEP_2, STEP_2, STACK_OFFSET_X], y: ZERO_ARRAY }
            : { y: [SEPARATION, SEPARATION, STEP_1, STEP_1, STEP_2, STEP_2, STACK_OFFSET_Y], x: ZERO_ARRAY }
        }
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          times: KEYFRAME_TIMES
        }}
      >
        <WireframeCube className="w-24 h-24 md:w-32 md:h-32 text-gray-200" />
      </motion.div>

    </div>
  );
}