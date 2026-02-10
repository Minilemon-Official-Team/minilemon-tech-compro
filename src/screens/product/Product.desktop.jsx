import Image from 'next/image';
import AnimatedText from '@/components/ui/AnimatedText';
import { motion } from 'motion/react';
import Products from '@/components/sections/product/desktop/Products';
import Hero from '@/components/sections/product/desktop/Hero';
import Philosophy from '@/components/sections/product/desktop/Philosophy';

export default function ProductDesktop() {
  return (
    <div className='bg-(--mltBlack)'>
      <Hero />
      <Philosophy />
      <Products />
    </div>
  );
}
