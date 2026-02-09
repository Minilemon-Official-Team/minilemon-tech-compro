"use client";

import { motion } from "motion/react";

const basePhysics = {
  type: "spring",
  stiffness: 20,
  damping: 10,
  mass: 0.5,
};

const topCubeTransition = {
  ...basePhysics,
  y: {
    ...basePhysics,
    delay: 0,
  },
  x: {
    ...basePhysics,
    delay: 0.1,
  },
  rotate: {
    ...basePhysics,
    delay: 0.1,
  },
};

const sideCubeTransition = {
  ...basePhysics,
  x: {
    ...basePhysics,
    delay: 0,
  },
  y: {
    ...basePhysics,
    delay: 0.1,
  },
  rotate: {
    ...basePhysics,
    delay: 0.1,
  },
};

const topCubeVariants = {
  expanded: { y: 0, x: 0, scale: 1, rotate: 0 },
  clustered: { y: -40, x: 20, scale: 1, rotate: 25 },
};

const leftCubeVariants = {
  expanded: { x: 0, y: 0, scale: 1, rotate: 0 },
  clustered: { x: -50, y: 10, scale: 1, rotate: -25 },
};

const rightCubeVariants = {
  expanded: { x: 0, y: 0, scale: 1, rotate: 0 },
  clustered: { x: 10, y: 40, scale: 1, rotate: -25 },
};

function WireframeCube({ className, color = "currentColor" }) {
  return (
    <div className={className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 150 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ATAS */}
        <path
          d="M 75 0 L 150 43 L 75 86 L 0 43 Z"
          fill="transparent"
          stroke={color}
          strokeWidth="2"
        />
        {/* KIRI */}
        <path
          d="M 0 43 L 0 129 L 75 172 L 75 86 Z"
          fill="transparent"
          stroke={color}
          strokeWidth="2"
        />
        {/* KANAN */}
        <path
          d="M 75 86 L 75 172 L 150 129 L 150 43 Z"
          fill="transparent"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default function AnimatedCubes({ position }) {
  return (
    <motion.div
      className={`absolute ${position} w-[240px] h-[263px] overflow-visible cursor-pointer`}
      initial="expanded"
      whileHover="clustered"
      animate="expanded"
    >
      {/* KUBUS ATAS */}
      <motion.div
        className="absolute z-30"
        style={{ left: "60px", top: "10px" }}
        variants={topCubeVariants}
        transition={topCubeTransition}
      >
        <WireframeCube className="w-[120px] h-[150px] text-purple-300/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
      </motion.div>

      {/* KUBUS KIRI BAWAH */}
      <motion.div
        className="absolute z-20"
        style={{ left: "0px", top: "113px" }}
        variants={leftCubeVariants}
        transition={sideCubeTransition}
      >
        <WireframeCube className="w-[120px] h-[150px] text-purple-300/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
      </motion.div>

      {/* KUBUS KANAN BAWAH */}
      <motion.div
        className="absolute z-20"
        style={{ left: "120px", top: "113px" }}
        variants={rightCubeVariants}
        transition={sideCubeTransition}
      >
        <WireframeCube className="w-[120px] h-[150px] text-purple-300/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
      </motion.div>
    </motion.div>
  );
}
