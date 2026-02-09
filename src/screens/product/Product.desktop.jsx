import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { motion } from "motion/react";
import Products from "@/components/sections/product/desktop/Products";
import Hero from "@/components/sections/product/desktop/Hero";
import Philosophy from "@/components/sections/product/desktop/Philosophy";

export default function ProductDesktop() {
  return (
    <div className="w-full mx-auto flex flex-col gap-12 items-center justify-center px-24 overflow-hidden">
      <Hero/>
      <Philosophy/>
      <Products />
    </div>
  );
}
