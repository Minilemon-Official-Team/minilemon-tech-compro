'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react'; 
import Image from 'next/image';

const CARDS = [
  { id: 1, image: '/assets/product_frame.png' },
  { id: 2, image: '/assets/product_frame_2.png' },
  { id: 3, image: '/assets/product_frame_3.png' },
];

export default function AnimatedStackedCards() {
  const [cards, setCards] = useState(CARDS);

  const moveCardToEnd = () => {
    setCards((currentCards) => {
      const newCards = [...currentCards];
      const firstCard = newCards.shift();
      if (firstCard) newCards.push(firstCard);
      return newCards;
    });
  };

  return (
    <div className="flex min-h-[600px] w-full items-center justify-center overflow-visible py-20">
      <div className="relative 
      w-[260px] h-[360px] md:w-[380px] md:h-[360px] xl:w-[400px] xl:h-[380px] 2xl:w-[520px] 2xl:h-[500px]
      -translate-y-12 xl:-translate-y-12 2xl:-translate-y-24 right-12 xl:right-0"
      >
        {cards.map((card, index) => {
          return (
            <Card
              key={card.id}
              card={card}
              index={index}
              moveCardToEnd={moveCardToEnd}
            />
          );
        })}
      </div>
    </div>
  );
}

const Card = ({ card, index, moveCardToEnd }) => {
  const isFront = index === 0;

  // Setup Motion Value
  const x = useMotionValue(0);

  // Transformasi Drag 
  const y = useTransform(x, [-150, 0, 150], [-100, 0, -100]);
  
  // Rotation Drag
  const rotateDrag = useTransform(x, [-150, 0, 150], [-15, 0, 15]);

  // Variants 
  const variants = {
    front: {
      zIndex: 3,
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
    },
    middle: {
      zIndex: 2,
      scale: 0.96, 
      rotate: 6,   
      x: 20,       
      y: -15,
      opacity: 1,
    },
    back: {
      zIndex: 1,
      scale: 0.92,
      rotate: -8,  
      x: -30,      
      y: -15,
      opacity: 1, 
    },
  };

  let position = 'back';
  if (index === 0) position = 'front';
  else if (index === 1) position = 'middle';

  return (
    <motion.div
      layout
      variants={variants}
      initial={position}
      animate={position}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      
      // Style For Drag 
      style={isFront ? { x, y, rotate: rotateDrag, zIndex: 10 } : {}}

      // Config Drag
      drag={isFront ? 'x' : false} 
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} 
      dragElastic={0.6}
      
      onDragEnd={(e, info) => {
        // Max Drag
        if (Math.abs(info.offset.x) > 100) {
          moveCardToEnd();
        }
      }}
      
      className="absolute inset-0 origin-bottom cursor-grab active:cursor-grabbing"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-neutral-900">
        <Image
          src={card.image}
          alt="Product Preview"
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          draggable={false}
          className="object-cover pointer-events-none"
          priority={index === 0} 
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};